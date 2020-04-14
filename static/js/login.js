function Login(){
    const username = $("#username").val();
    const password = $("#password").val();
    if(checkLogin(username, password)) {
        var aj = $.ajax( {
            url:'/login',
            data:{
                name : username,
                password : password
            },
            type:'post',
            cache:false,
            dataType:'json',
            success:function(data) {
                if(data.flag === 0 ){
                    alert("登录成功!");
                    window.location.href='index.html';
                }else{
                    alert("用户不存在或账号密码不正确!");
                }
            },
            error : function() {
                alert("登录异常，请检查网络！");
            }
        });
    }else{
        alert("用户不存在或账号密码不正确!");
    }
}

//检查用户输入
function checkLogin(username, password){
    return (checkUsername(username) && checkPassword(password));
}

//检查登录用户名
function checkUsername(username){
    if(username !== ""){
        return isRegisterUserName(username);
    }

    //alert("请输入用户名");
    return false;
}

//检查登录密码
function checkPassword(password){
    if(password !== ""){
        return isPassword(password);
    }

    //alert("请输入密码");
    return false;
}

//校验登录名：只能输入5-20个以字母开头、可带数字、“_”、“.”的字串
function isRegisterUserName(s) {
    const pattern = /^[a-zA-Z]([a-zA-Z0-9]|[._]){4,19}$/;
    return pattern.exec(s);
}

//校验密码：只能输入5-20个字母、数字、下划线
function isPassword(s) {
    const pattern = /^(\w){5,20}$/;
    return pattern.exec(s);
}