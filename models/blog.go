package models

import (
	"time"
)

type Blog struct {
	Id         int64     `pk:"auto;column(id)";json:"id"`
	Title      string    `orm:"size(100);column(title)";json:"title"`
	Abstract   string    `orm:"size(200);null;column(abstract)";json:"abstract"`
	Article    string    `orm:"column(article);type(text);null";json:"article"`
	Author     string    `orm:"size(40);column(author)";json:"author"`
	Tags       string    `orm:"size(40);column(tags);default(others)";json:"tags"`
	Classify   string    `orm:"size(40);column(classify);default(others)";json:"classify"`
	PostDate   time.Time `orm:"column(postdate);auto_now_add;type(date)";json:"postdate"`
	ModifyDate time.Time `orm:"column(modify_date);auto_now_add;type(date)";json:"modifydate"`
	RmFlag     int       `orm:"column(rmflag);default(0)";json:"rmflag"`
}

type WebBlog struct {
	Blog
	UserName string `json:"name"`
}

func (b *Blog) TableEngine() string {
	return "INNODB"
}
