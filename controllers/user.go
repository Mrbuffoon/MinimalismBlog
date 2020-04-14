package controllers

import (
	"MinimalismBlog/models"
	"MinimalismBlog/util"
	"encoding/json"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/logs"
	"github.com/astaxie/beego/orm"
	"golang.org/x/crypto/bcrypt"
)

type UserController struct {
	beego.Controller
}

func (u *UserController) Login() {
	response := util.Response{}

	if login := u.GetSession("login"); login == true {
		response.Flag = 0
		response.Message = "登录成功"
	} else {
		usrParam := models.User{}
		if err := json.Unmarshal(u.Ctx.Input.RequestBody, &usrParam); err == nil {
			user := models.User{
				Name: usrParam.Name,
			}
			o := orm.NewOrm()
			err = o.Read(&user, "Name")
			if err != nil {
				response.Flag = 1
				response.Message = "用户不存在"
			} else {
				err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(usrParam.Password))
				if err != nil {
					response.Flag = 1
					response.Message = "账号与密码不匹配"
				} else {
					response.Flag = 0
					response.Message = "登录成功"
					response.Result = struct {
						Id       int    `json:"id"`
						NickName string `json:"nick_name"`
					}{user.Id, user.NickName}
				}
			}
		} else {
			response.Flag = 1
			response.Message = err.Error()
		}

		u.SetSession("login", true)
	}

	logs.Debug(response)
	u.Data["json"] = response
	u.ServeJSON()
}

func (u *UserController) Logout() {
	response := util.Response{}

	usrParam := models.User{}
	if err := json.Unmarshal(u.Ctx.Input.RequestBody, &usrParam); err == nil {
		u.DelSession("login")

		response.Flag = 0
		response.Message = "登出成功"
	} else {
		response.Flag = 1
		response.Message = err.Error()
	}

	u.Data["json"] = response
	u.ServeJSON()
}

func (u *UserController) ModifyPwd() {
	response := util.Response{}

	usrParam := models.User{}
	if err := json.Unmarshal(u.Ctx.Input.RequestBody, &usrParam); err == nil {
		user := models.User{
			Id: usrParam.Id,
		}
		o := orm.NewOrm()
		err = o.Read(&user, "Id")
		if err != nil {
			response.Flag = 1
			response.Message = "用户不存在"
		} else {
			err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(usrParam.Password))
			if err != nil {
				response.Flag = 1
				response.Message = "账号与密码不匹配"
			} else {
				if usrParam.NewPwd == "" {
					response.Flag = 1
					response.Message = "密码为空，修改失败"
				} else {
					response.Flag = 0
					response.Message = "密码修改成功"

					pwdCrypto, err := bcrypt.GenerateFromPassword([]byte(usrParam.NewPwd), bcrypt.DefaultCost)
					if err != nil {
						response.Flag = 1
						response.Message = err.Error()
					}
					user := models.User{
						Id:       usrParam.Id,
						Password: string(pwdCrypto),
					}
					if _, err := o.Update(&user, "Id"); err != nil {
						response.Flag = 1
						response.Message = err.Error()
					}
				}
			}
		}
	} else {
		response.Flag = 1
		response.Message = err.Error()
	}

	u.Data["json"] = response
	u.ServeJSON()
}

func (u *UserController) ModifyNickname() {
	response := util.Response{}

	usrParam := models.User{}
	if err := json.Unmarshal(u.Ctx.Input.RequestBody, &usrParam); err == nil {
		user := models.User{
			Id: usrParam.Id,
		}
		o := orm.NewOrm()
		err = o.Read(&user, "Id")
		if err != nil {
			response.Flag = 1
			response.Message = "用户不存在"
		} else {
			err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(usrParam.Password))
			if err != nil {
				response.Flag = 1
				response.Message = "账号与密码不匹配"
			} else {
				if usrParam.NickName == "" {
					response.Flag = 1
					response.Message = "昵称为空，修改失败"
				} else {
					response.Flag = 0
					response.Message = "昵称修改成功"

					user := models.User{
						Id:       usrParam.Id,
						NickName: usrParam.NickName,
					}
					if _, err := o.Update(&user, "Id"); err != nil {
						response.Flag = 1
						response.Message = err.Error()
					}
					response.Result = struct {
						Id       int    `json:"id"`
						NickName string `json:"nick_name"`
					}{user.Id, user.NickName}
				}
			}
		}
	} else {
		response.Flag = 1
		response.Message = err.Error()
	}

	u.Data["json"] = response
	u.ServeJSON()
}
