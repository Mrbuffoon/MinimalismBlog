function Login(){
    const username = $("#username").val();
    const password = $("#password").val();
    if(checkLogin(username, password)) {
        var param = {
            name : username,
            password : password
        };
        var aj = $.ajax( {
            url:'/login',
            data:JSON.stringify(param),
            type:'POST',
            dataType:'json',
            contentType: "application/json; charset=utf-8",
            success:function(message) {
                if(message.flag === 0 ){
                    window.location.href='index.html';
                }else{
                    alert("用户不存在或账号密码不正确!");
                    location.reload();
                }
            },
            error : function() {
                alert("登录异常，请检查网络！");
                location.reload();
            }
        });
    }else {
        location.reload();
    }
}

function Modify_pwd(){
    const username = $("#username").val();
    const old_pwd = $("#old_pwd").val();
    const new_pwd = $("#new_pwd").val();
    const re_new_pwd = $("#re_new_pwd").val();
    if(checkModifyPwd(username, old_pwd, new_pwd, re_new_pwd)) {
        var param = {
            name : username,
            password : old_pwd,
            newpwd : new_pwd
        };
        var aj = $.ajax( {
            url:'/modify/pwd',
            data:JSON.stringify(param),
            type:'POST',
            dataType:'json',
            contentType: "application/json; charset=utf-8",
            success:function(message) {
                if(message.flag === 0 ){
                    alert("密码修改成功！");
                    window.location.href='login.html';
                }else{
                    alert("用户不存在或账号密码不正确!");
                    location.reload();
                }
            },
            error : function() {
                alert("登录异常，请检查网络！");
                location.reload();
            }
        });
    }else {
        location.reload();
    }
}

function Modify_nick(){
    const username = $("#username").val();
    const password = $("#password").val();
    const nickname = $("#nickname").val();
    if(checkModifyNick(username, password, nickname)) {
        var param = {
            name : username,
            password : password,
            nickname : nickname
        };
        var aj = $.ajax( {
            url:'/modify/nickname',
            data:JSON.stringify(param),
            type:'POST',
            dataType:'json',
            contentType: "application/json; charset=utf-8",
            success:function(message) {
                if(message.flag === 0 ){
                    alert("昵称修改成功,新昵称：");
                    alert(message.result.nickname);
                    alert(message.result.name);
                    window.location.href='index.html';
                }else{
                    alert("用户不存在或账号密码不正确!");
                    location.reload();
                }
            },
            error : function() {
                alert("登录异常，请检查网络！");
                location.reload();
            }
        });
    }else {
        location.reload();
    }
}

//检查登录时用户输入
function checkLogin(username, password){
    if (checkUsername(username) === false){
        alert("用户名为空或用户名不合法！（5-20个以字母开头，只包括字母、数字、_、.的字串）");
        return false;
    }
    if(checkPassword(password) === false){
        alert("密码为空或密码不合法！（5-20个只包括字母、数字、下划线的字串）");
        return false;
    }

    return true;
}

//检查修改密码时用户输入
function checkModifyPwd(username, old_pwd, new_pwd, re_new_pwd){
    if (checkUsername(username) === false){
        alert("用户名为空或用户名不合法！（5-20个以字母开头，只包括字母、数字、_、.的字串）");
        return false;
    }
    if(checkPassword(old_pwd) === false){
        alert("原密码为空或原密码不合法！（5-20个只包括字母、数字、下划线的字串）");
        return false;
    }
    if(checkPassword(new_pwd) === false){
        alert("新密码为空或新密码不合法！（5-20个只包括字母、数字、下划线的字串）");
        return false;
    }
    if(checkPassword(re_new_pwd) === false){
        alert("重复新密码为空或重复新密码不合法！（5-20个只包括字母、数字、下划线的字串）");
        return false;
    }
    if(new_pwd !== re_new_pwd){
        alert("两次输入新密码不一致，请重新输入！");
        return false;
    }

    return true;
}

//检查修改密码时用户输入
function checkModifyNick(username, password, nickname){
    if (checkUsername(username) === false){
        alert("用户名为空或用户名不合法！（5-20个以字母开头，只包括字母、数字、_、.的字串）");
        return false;
    }
    if(checkPassword(password) === false){
        alert("密码为空或密码不合法！（5-20个只包括字母、数字、下划线的字串）");
        return false;
    }
    if (checkUsername(nickname) === false){
        alert("昵称为空或昵称不合法！（5-20个以字母开头，只包括字母、数字、_、.的字串）");
        return false;
    }

    return true;
}

//检查用户名
function checkUsername(username){
    if(username !== ""){
        return isRegisterUserName(username);
    }
    return false;
}

//检查密码
function checkPassword(password){
    if(password !== ""){
        return isPassword(password);
    }
    return false;
}

//校验登录名：只能输入5-20个以字母开头、可带数字、“_”、“.”的字串
function isRegisterUserName(s) {
    const pattern = /^[a-zA-Z]([a-zA-Z0-9]|[._]){4,19}$/;
    return pattern.test(s);
}

//校验密码：只能输入5-20个字母、数字、下划线
function isPassword(s) {
    const pattern = /^(\w){5,20}$/;
    return pattern.test(s);
}