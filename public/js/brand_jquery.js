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
	//身份证号
	$("#cart").blur(function(){
			if(!cart.value){
				alert("不能为空");
			}else if(cart1.value.length!=18){
				alert("身份证号为18位");
			}
	});
	
	
	
});
function textCarts(cart){
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





$(function(){
		var num=0;
		var timer=null;
		 $(".brandPlay").mouseenter(function(){//实现当鼠标移动到box上时，不执行自动轮播功能
		    clearInterval(timer);//移动进去时清除定时器
		}).mouseleave(function(){
		    go();//移出后执行go函数
		});
		go(); 
		//点击的时候调用函数重复
		function brandPlays(m){
			$(".brandPlay li").hide();
			$($(".brandPlay li")[m]).show();
			$("#brandLd li").removeClass("active");
			$($("#brandLd li")[m]).addClass("active");
		}
		function go(){
		  timer=setInterval(function(){//设置定时器
				if(num==0){
					brandPlays(num);
				}else if(num==1){
					brandPlays(num);
				}
				else if(num==2){
					brandPlays(num);
				}
				else if(num==3){
					brandPlays(num);
				}
				else if(num>3){
					num=0;
					brandPlays(num);
				}
				num++;
		    },3000);
		}
		$($("#brandLd li")[0]).click(function(){
			brandPlays(0);
		});
		$($("#brandLd li")[1]).click(function(){
			brandPlays(1);
		});
		$($("#brandLd li")[2]).click(function(){
			brandPlays(2);
		});
		$($("#brandLd li")[3]).click(function(){
			brandPlays(3);
		});
});
//第二个录轮播
$(function(){
		var num=0;
		var timer=null;
		 $(".BrandUl").mouseenter(function(){//实现当鼠标移动到box上时，不执行自动轮播功能
		    clearInterval(timer);//移动进去时清除定时器
		}).mouseleave(function(){
		    go();//移出后执行go函数
		});
		go(); 
		//点击的时候调用函数重复
		function brandPlay(m){
			$(".BrandUl li").hide();
			$($(".BrandUl li")[m]).show();
			$("#brandDjlb li").removeClass("active");
			$($("#brandDjlb li")[m]).addClass("active");
		}
		function go(){
		  timer=setInterval(function(){//设置定时器
				if(num==0){
					brandPlay(num);
				}else if(num==1){
					brandPlay(num);
				}
				else if(num==2){
					brandPlay(num);
				}
				else if(num==3){
					brandPlay(num);
				}
				else if(num>3){
					num=0;
					brandPlay(num);
				}
				num++;
		    },3000);
		}
		$($("#brandDjlb li")[0]).click(function(){
			brandPlay(0);
		});
		$($("#brandDjlb li")[1]).click(function(){
			brandPlay(1);
		});
		$($("#brandDjlb li")[2]).click(function(){
			brandPlay(2);
		});
		$($("#brandDjlb li")[3]).click(function(){
			brandPlay(3);
		});
});
