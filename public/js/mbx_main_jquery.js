$(document).ready(function(){

	
	//页面顶部
	$.ajax({
		url:"header.html",
		type:"get",
		success:function(result){
			$(result).replaceAll("header"); 
			$(`<link rel="stylesheet" type="text/css" href="css/header.css"/>`).appendTo("head");
			$(`<script src="js/header.js" type="text/javascript" charset="utf-8"></script>`).appendTo("head");
		}
	})
	//页面脚步
	$.ajax({
		url:"footer.html",
		type:"get",
		success:function(result){
			$(result).replaceAll("footer"); 
			$(`<link rel="stylesheet" type="text/css" href="css/footer.css"/>`).appendTo("head");
		}
	})
	
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
	

	//身份证号
	$("#cart1").blur(function(){
			if(!cart1.value){
				cart1_msg.innerHTML="不能为空";
			}else if(cart1.value.length!=18){
				cart1_msg.innerHTML="身份证号为18位";
			}else{
				cart1_msg.innerHTML="";
			}
	});
	//播放video
	$("#loveSearchPlay").click(function(){
		//jquery转dom对象 然后使用其方法
		$("#videoMBX")[0].play();
		$("#videoPlay").show();	
	});
	//关闭video
	$("#closePlay").click(function(){
		$("#videoMBX")[0].pause();
		$("#videoPlay").hide();
	});
	//点击视频播放暂停
	$("#videoMBX").click(function(){
		//$().hasClass("");判断当前对象是否包含class名
		if($(this).hasClass('pause')){
			$("#videoMBX").addClass('play');
			$("#videoMBX").removeClass('pause');
			$("#videoMBX")[0].play();
		}else{
			$("#videoMBX").addClass('pause');
			$("#videoMBX").removeClass('play');
			$("#videoMBX")[0].pause();
		}
		
	});
	
	// //导航栏ul
	// $(".navUld").on("mouseover",function(){
	// 	$($(this).children(1)[1]).show();
	// }).on("mouseout",function(){	
	// 	$($(this).children(1)[1]).hide();		
	// });
	// 
	//导航栏的二级标签
// 	$("#qhzjList1").on("mouseover",function(){
// 		$("#qhjz1").show().siblings().hide();
// 	});
// 	$("#qhzjList2").on("mouseover",function(){
// 		$("#qhjz2").show().siblings().hide();
// 
// 	});
// 	$("#qhzjList3").on("mouseover",function(){
// 		$("#qhjz3").show().siblings().hide();
// 
// 	});
// 	$("#qhzjList4").on("mouseover",function(){
// 		$("#qhjz4").show().siblings().hide();
// 
// 	});
// 	$("#qhzjList5").on("mouseover",function(){
// 		$("#qhjz5").show().siblings().hide();
// 
// 	});
// 	$("#qhzjList6").on("mouseover",function(){
// 		$("#qhjz6").show().siblings().hide();
// 
// 	});
// 	$("#qhzjList7").on("mouseover",function(){
// 		$("#qhjz7").show().siblings().hide();
// 
// 	});
// 	$("#qhzjList8").on("mouseover",function(){
// 		$("#qhjz8").show().siblings().hide();
// 	
// 	});
// 	$("#qhzjList9").on("mouseover",function(){
// 		$("#qhjz9").show().siblings().hide();
// 	});
// 	$("#qhzjList10").on("mouseover",function(){
// 		$("#qhjz10").show().siblings().hide();
// 	});
// 	$("#qhzjList11").on("mouseover",function(){
// 		$("#qhjz11").show().siblings().hide();
// 	});
// 	
	//banner中的左右切换 图片的hover
	$("#mbx_banner").on("mouseover",function(){
		$(".bannerImg").show();
	});
	$("#mbx_banner").on("mouseout",function(){
		$(".bannerImg").hide();
	});
	$(".bannerImg").on("mouseover",function(){
		$(".bannerImg").css("background-color","#AA979C");
	});
	$(".bannerImg").on("mouseout",function(){
		$(".bannerImg").css("background-color","");
	});	
});

$(function(){
		var num=0;
		var timer=null;
		 $(".bannerPlay").mouseenter(function(){//实现当鼠标移动到box上时，不执行自动轮播功能
		    clearInterval(timer);//移动进去时清除定时器
		}).mouseleave(function(){
		    go();//移出后执行go函数
		});
		go();
		$("#bannerLeft").mouseenter(function(){//实现当鼠标移动到box上时，不执行自动轮播功能
		      clearInterval(timer);//移动进去时清除定时器
		  }).mouseleave(function(){
		      go();//移出后执行go函数
		  }); 
		$("#bannerRight").mouseenter(function(){//实现当鼠标移动到box上时，不执行自动轮播功能
		      clearInterval(timer);//移动进去时清除定时器
		  }).mouseleave(function(){
		      go();//移出后执行go函数
		  });	 
		function go(){
		  timer=setInterval(function(){//设置定时器
		        num++;//用一个全局变量来控制图的运动次数
				
		        if(num>3){//如果移动到了最后一张图，则num赋值1，调整ul边距（相当于初始化）
		            num=1;
		            $(".ul_list").css("margin-left","0px");
		        }
				if(num==3){
					$(".ulLine>li").removeClass("active");
					$($(".ulLine>li")[0]).addClass("active");
				}
				else{
					$(".ulLine>li").removeClass("active");
					$($(".ulLine>li")[num]).addClass("active");
				}
		        $(".ul_list").animate({"marginLeft":-1360*num+"px"},580);//使用animate实行运动功能
		    },4000);
		}
		 $("#bannerLeft").click(function(){
			if(num>=0){num--;}
			if(num<0){
			    num=2;
			    $(".ul_list").css("margin-left","-4080px");
				$(".ulLine>li").removeClass("active");
				$($(".ulLine>li")[num]).addClass("active");
			}else{
				$(".ulLine>li").removeClass("active");
				$($(".ulLine>li")[num]).addClass("active");
			}
			$(".ul_list").animate({"marginLeft":-1360*num+"px"},580);			 
		 });
		$("#bannerRight").click(function(){
					if(num<=3){num++;}
					if(num>3){
					    num=1;
					    $(".ul_list").css("margin-left","0px");
					}
					if(num==3){
						$(".ulLine>li").removeClass("active");
						$($(".ulLine>li")[0]).addClass("active");
					}else{
						$(".ulLine>li").removeClass("active");
						$($(".ulLine>li")[num]).addClass("active");
					}
					$(".ul_list").animate({"marginLeft":-1360*num+"px"},580);		 
		});
		$("ul.ulLine>li").each(function(i,elem){
			$(elem).click(function(){
				$(".ulLine>li").removeClass("active");
				$(this).addClass("active");
				$(".ul_list").stop().animate({"marginLeft":-1360*i+"px"},580);
			})
		})
		
		
});

function textCart(cart){
	cart1_msg.innerHTML="";
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var result=xhr.responseText;
			if(result=="1"){
				alert("亲爱的,你已经购买了我们的戒指");
			}else{
				alert("亲爱的.你还没购买我们的戒指呢，快选购吧");
			}
		}
	}
	xhr.open('post',"http://127.0.0.1:8080/text/cart?cart="+cart.value,true);
	var formdata=`cart=${cart.value}`;
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xhr.send(formdata);
}
//输入enter执行ajax
$("#cart1").keyup(function(e){
	if(e.keyCode==13){
		textCart(cart1);
	}
});

