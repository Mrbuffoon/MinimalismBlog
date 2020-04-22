package routers

import (
	"MinimalismBlog/controllers"
	"github.com/astaxie/beego"
)

func init() {
	// 重定向静态资源文件
	beego.SetStaticPath("/img", "static/img")
	beego.SetStaticPath("/css", "static/css")
	beego.SetStaticPath("/js", "static/js")

	//重定向静态页面
	beego.SetStaticPath("index.html", "static/index.html")
	beego.SetStaticPath("blog_detail.html", "static/blog_detail.html")
	beego.SetStaticPath("classify.html", "static/classify.html")
	beego.SetStaticPath("resume.html", "static/resume.html")
	beego.SetStaticPath("tag.html", "static/tag.html")

	beego.SetStaticPath("manager.html", "static/manager.html")
	beego.SetStaticPath("login.html", "static/login.html")
	beego.SetStaticPath("modify_pwd.html", "static/modify_pwd.html")
	beego.SetStaticPath("modify_nick.html", "static/modify_nick.html")

	//接口API路由(用户系统)
	beego.Router("/login", &controllers.UserController{}, "post:Login")
	beego.Router("/logout", &controllers.UserController{}, "post:Logout")
	beego.Router("/modify/pwd", &controllers.UserController{}, "post:ModifyPwd")
	beego.Router("/modify/nickname", &controllers.UserController{}, "post:ModifyNickname")
	beego.Router("/get/nickname", &controllers.UserController{}, "post:GetNickname")
}
