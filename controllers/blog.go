package controllers

import "github.com/astaxie/beego"

type BlogController struct {
	beego.Controller
}

func (b *BlogController) Login()  {
	b.Ctx.WriteString("接口测试")
	return
}

func (b *BlogController) Logout()  {
	b.Ctx.WriteString("接口测试")
	return
}

func (b *BlogController) ModifyPwd()  {
	b.Ctx.WriteString("接口测试")
	return
}
