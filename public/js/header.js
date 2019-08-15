$(document).ready(function(){
	
		//cookie 获取登陆用户
	if(document.cookie.split("=")[1]!=undefined){
			var  uname=document.cookie.split("=")[1];
			$(".mbx_member_left>div").html(`<a  href="user_login.html" >欢迎 ${uname}</a>`);
		
	}else{
		$(".mbx_member_left>div").html(`<a  href="user_login.html" class="reg">登录 / 注册</a>`);
	}
//获取滚动条的距离页面的长度
	$(document).scroll(function(){   //页面加载时，获取滚动条初始高度
	　　var distance = $(document).scrollTop();  //获取滚动条初始高度的值 ：0
	　　if(distance>=190){  //当滚动条高度为0时
			$(".nav").addClass("topFix");
			$(".makeALL").addClass("topUlFix");
			$("#fix8").css("display","block");
	　　}else{
			$(".nav").removeClass("topFix");
			$(".makeALL").removeClass("topUlFix");
			$("#fix8").css("display","none");
	　　}
	})
	
	$("#qhzjList1").on("mouseover",function(){
		$("#qhjz1").show().siblings().hide();
	});
	$("#qhzjList2").on("mouseover",function(){
		$("#qhjz2").show().siblings().hide();

	});
	$("#qhzjList3").on("mouseover",function(){
		$("#qhjz3").show().siblings().hide();

	});
	$("#qhzjList4").on("mouseover",function(){
		$("#qhjz4").show().siblings().hide();

	});
	$("#qhzjList5").on("mouseover",function(){
		$("#qhjz5").show().siblings().hide();

	});
	$("#qhzjList6").on("mouseover",function(){
		$("#qhjz6").show().siblings().hide();

	});
	$("#qhzjList7").on("mouseover",function(){
		$("#qhjz7").show().siblings().hide();

	});
	$("#qhzjList8").on("mouseover",function(){
		$("#qhjz8").show().siblings().hide();
	
	});
	$("#qhzjList9").on("mouseover",function(){
		$("#qhjz9").show().siblings().hide();
	});
	$("#qhzjList10").on("mouseover",function(){
		$("#qhjz10").show().siblings().hide();
	});
	$("#qhzjList11").on("mouseover",function(){
		$("#qhjz11").show().siblings().hide();
	});

});

