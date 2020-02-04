package util

type Response struct {
	Flag    int         `json:"flag"`    //响应是否成功标志
	Message string      `json:"message"` //正确或错误信息
	Result  interface{} `json:"result"`  //业务额外数据
}
