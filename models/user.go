package models

import (
	"time"
)

type User struct {
	Id       int       `pk:"auto;column(id)";json:"id"`
	Name     string    `orm:"size(40);column(name);unique";json:"name"`
	NickName string    `orm:"size(40);column(nickname);default(admin)";json:"nickname"`
	Password string    `orm:"size(100);column(password);default(admin)";json:"password"`
	Date     time.Time `orm:"column(date);null;auto_now_add;type(date)";json:"date"`
	NewPwd   string    `orm:"_";json:"newpwd"`
}

func (u *User) TableEngine() string {
	return "INNODB"
}
