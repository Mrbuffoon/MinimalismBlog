package inits

import (
	"MinimalismBlog/models"
	"github.com/astaxie/beego/logs"
	"github.com/astaxie/beego/orm"
	_ "github.com/go-sql-driver/mysql"
	"golang.org/x/crypto/bcrypt"
	"os"
)

func initUser() {
	o := orm.NewOrm()
	pwdCrypto, err := bcrypt.GenerateFromPassword([]byte("admin"), bcrypt.DefaultCost)
	if err != nil {
		logs.Error("管理员用户初始密码生成出错，请重试！")
		os.Exit(1)
	}
	user := models.User{
		Name:     "admin",
		NickName: "admin",
		Password: string(pwdCrypto),
	}
	if _, _, err := o.ReadOrCreate(&user, "Name"); err != nil {
		logs.Error("管理员用户初始化失败，请检查数据库是否ok！")
		os.Exit(1)
	}
}

func init() {
	_ = logs.SetLogger("console")

	_ = orm.RegisterDriver("mysql", orm.DRMySQL)
	_ = orm.RegisterDataBase("default", "mysql", "root:TXYhelloworld@tcp(192.144.225.216:3306)/db_blog?charset=utf8")

	orm.RegisterModelWithPrefix("tb_", new(models.User), new(models.Blog))
	_ = orm.RunSyncdb("default", false, true)

	initUser()
}
