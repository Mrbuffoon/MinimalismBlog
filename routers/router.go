package routers

import (
	"github.com/astaxie/beego"
)

func init() {
	// 重定向静态资源文件
	beego.SetStaticPath("/img","static/img")
	beego.SetStaticPath("/css","static/css")
	beego.SetStaticPath("/js","static/js")

	//重定向静态页面
	beego.SetStaticPath("index.html", "views/index.html")
	beego.SetStaticPath("blog_detail.html", "views/blog_detail.html")
	beego.SetStaticPath("classify.html", "views/classify.html")
	beego.SetStaticPath("install.html", "views/install.html")
	beego.SetStaticPath("login.html", "views/login.html")
	beego.SetStaticPath("modify_pwd.html", "views/modify_pwd.html")
	beego.SetStaticPath("resume.html", "views/resume.html")
	beego.SetStaticPath("tag.html", "views/tag.html")

	//接口API路由
}
