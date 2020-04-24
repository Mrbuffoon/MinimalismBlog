package controllers

import (
	"MinimalismBlog/models"
	"MinimalismBlog/util"
	"encoding/json"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/logs"
	"github.com/astaxie/beego/orm"
)

type BlogController struct {
	beego.Controller
}

func (b *BlogController) ManagerBlogList() {
	response := util.Response{}

	blogParam := models.WebBlog{}
	if err := json.Unmarshal(b.Ctx.Input.RequestBody, &blogParam); err == nil {
		if login := b.GetSession(blogParam.UserName); login != true {
			response.Flag = 1
			response.Message = "用户未登录"
		} else {
			var blogs []models.Blog
			o := orm.NewOrm()
			num, err := o.QueryTable("tb_blog").
				Limit(-1).Filter("author", blogParam.UserName).
				All(&blogs, "Id", "Title", "ModifyDate")
			if err != nil {
				response.Flag = 1
				response.Message = "查询错误"
			} else {
				response.Flag = 0
				response.Message = "查询成功"
				response.Result = struct {
					Num   int64          `json:"num"`
					Blogs []models.Blog `json:"blogs"`
				}{num, blogs}
			}
		}
	} else {
		response.Flag = 1
		response.Message = err.Error()
	}

	logs.Debug(response)
	b.Data["json"] = response
	b.ServeJSON()
}
