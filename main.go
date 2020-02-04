package main

import (
	_ "MinimalismBlog/inits"
	_ "MinimalismBlog/routers"
	"github.com/astaxie/beego"
)

func main() {
	beego.Run()
}
