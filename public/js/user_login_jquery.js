$(document).ready(function() {
    //页面脚步
    $.ajax({
            url: "footer.html",
            type: "get",
            success: function(result) {
                $(result).replaceAll("footer");
                $(`<link rel="stylesheet" type="text/css" href="css/footer.css"/>`).appendTo("head")
            }
        })
        //用户登录
    $("#userLogin").click(function() {
        if ((uname.value == "") || (upwd.value == "")) {
            alert("用户名或密码为空，不能登陆");
        } else {
            $.ajax({
                url: "http://127.0.0.1:8080/user/login",
                type: "post",
                data: `uname=${uname.value}&upwd=${upwd.value}`,
                dataType: "json"
            }).then(function(result) {
                if (result == "1") {
                    alert("登陆成功");
					document.cookie=`uname=${uname.value}`;
                    open("mbx_main.html", "_self");
                } else {
                    alert("登陆失败,密码用户名错误");
                }
            })

        }
    });
    //用户注册
    $("#userReg").click(function() {
        $.ajax({
            url: "http://127.0.0.1:8080/user/reg",
            type: "post",
            data: `uname=${regname.value}&upwd=${regpwd.value}`,
            dataType: "json"
        }).then(function(result) {
            if (result == "1") {
                alert("注册成功");
				open("user_login.html", "_self");
            } else {
                alert("注册失败");
            }
        })
    });





    $("#regS").click(function() {
        $(".regUser").css("display", "block");
        $(".loginUser").css("display", "none");
        $("#regname")[0].focus();
    });
    $("#loginS").click(function() {
        $(".loginUser").css("display", "block");
        $(".regUser").css("display", "none");
        $("#uname")[0].focus();
    });

    $("#uname").blur(function() {

        if (/^\w{2,8}$/.test(uname.value.trim()) != true) {
            login_msg.innerHTML = '用户名长度为2到8位';
            $("#userLogin").attr('disabled', 'disabled');
        } else {
            login_msg.innerHTML = '';
            $("#userLogin").removeAttr('disabled');
        }
    })
    $("#upwd").blur(function() {

        if (/^\w{6,9}$/.test(upwd.value.trim()) != true) {
            login_msg.innerHTML = '密码长度为6到9位';
            $("#userLogin").attr('disabled', 'disabled');
        } else {
            login_msg.innerHTML = '';
            $("#userLogin").removeAttr('disabled');
        }
    })

    $("#regname").blur(function() {
        $.ajax({
            url: "http://127.0.0.1:8080/user/regs",
            type: "post",
            data: `uname=${regname.value}&upwd=${regpwd.value}`,
            dataType: "json"
        }).then(function(result) {
            if (result == "3") {
                login_msg2.innerHTML = '用户名不能重复';
                $("#userReg").attr('disabled', 'disabled');
            } else if (/^\w{2,8}$/.test(regname.value.trim()) != true) {
                login_msg2.innerHTML = '用户名长度为2到8位';
                $("#userReg").attr('disabled', 'disabled');
            } else {
                $("#userReg").removeAttr('disabled');
            }
        })

    });

    $("#regpwd").blur(function() {
        var reg = /^\w{6,9}$/;
        if (reg.test(regpwd.value.trim()) != true) {
            login_msg2.innerHTML = '密码长度为6到9位';
            $("#userReg").attr('disabled', 'disabled');
        } else {
            login_msg2.innerHTML = '';
            $("#userReg").removeAttr('disabled');
        }
    });

});