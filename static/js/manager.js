function ManagerInit() {
    if (getCookie("name") === null) {
        window.location.href='login.html';
    }else {
        var nickname = GetNickName();
        $("#username").text(nickname);
        BlogList();
    }
}

function GetNickName() {
    var username = getCookie("name");
    var param = {
        name : username
    };
    var nickname = username;
    var aj = $.ajax({
        async:false,
        url:'/get/nickname',
        data:JSON.stringify(param),
        type:'POST',
        dataType:'json',
        contentType: "application/json; charset=utf-8",
        success:function(data) {
            if(data.flag === 0 ){
                nickname = data.result.nickname;
            }
        },
    });
    return nickname;
}

function BlogList() {
    var username = getCookie("name");
    var param = {
        name : username
    };
    var aj = $.ajax({
        async:false,
        url:'/manager/blog/list',
        data:JSON.stringify(param),
        type:'POST',
        dataType:'json',
        contentType: "application/json; charset=utf-8",
        success:function(data) {
            if(data.flag === 0 ){
                var num = data.result.num;
                var blogs = data.result.blogs;
                for(let i = 0;i < num; i++){
                    var id = blogs[i].Id;
                    var title = blogs[i].Title;
                    var modify_date = blogs[i].ModifyDate.split("T")[0];
                    let html = `<div class="post-preview">
                                <font color="#3b818c">[${modify_date}] </font>
                                <a target="_blank" href="#"> ${title} </a>
                                <a id="delete${id}" href="#" style="float: right; padding-right: 5px; font-size: 14px ">删除</a>
                                <a id="edit${id}"href="#" style="float: right; padding-right: 5px; font-size: 14px ">编辑</a>
                                </div>
                                <hr />`;
                    console.log(html);

                    $("#blog_list").append(html);
                }

            }else{
                alert("获取文章列表失败！")
            }
        },
        error : function() {
            alert("网络异常，请检查网络！");
        }
    });
}