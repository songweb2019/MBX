$(document).ready(function(){
			//通过数据库 获取城市信息
			(function(){
				var xhr=new XMLHttpRequest();
				xhr.onreadystatechange=function(){
						if(xhr.readyState==4&&xhr.status==200){
							var result=JSON.parse(xhr.responseText);
							for(var i=0;i<result.length;i++){
									$(".lastLove")[0].innerHTML+=`
									<div class="shopListSame ${result[i].mbx_cityS}">
										<div class="shopTop">
											${result[i].mbx_city}
										</div>
										<ul class="${result[i].mbx_cityBid}">
											<li>
												<div class="imgTop">
													<img src=${result[i].mbx_img} alt="">
													<h4>${result[i].mbx_name}</h4>
												</div>
												<div class="imgBottom">
													<a href=${result[i].mbx_src}><i></i>${result[i].mbx_adress}</a>
													<p class="imgP1"><span>${result[i].mbx_time}</span></p>
													<p class="imgP2"><span>${result[i].mbx_phone}</span></p>
												</div>
											</li>	
										</ul>	
									</div>
									`;
							
							}
						}
				}
				xhr.open("post","http://127.0.0.1:8080/mbx/store",true);
				xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
				xhr.send();
				
			})();
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
					$(`<link rel="stylesheet" type="text/css" href="css/footer.css"/>`).appendTo("head")
				}
			})
			
			//热门城市查询
			$("#zzQuery").click(function(){
				$(".shopListSame").hide();
				$(".zz").show();
			});
			$("#bjQuery").click(function(){
				$(".shopListSame").hide();
				$(".bj").show();
			});
			$("#shQuery").click(function(){
				$(".shopListSame").hide();
				$(".sh").show();
			});
			$("#njQuery").click(function(){
				$(".shopListSame").hide();
				$(".nj").show();
			});
			$("#xaQuery").click(function(){
				$(".shopListSame").hide();
				$(".xa").show();
			});
			$("#allQuery").click(function(){
				$(".shopListSame").show();
			});
			//输入框查询
			$("#citySearch").click(function(){		
				if($(".cityBox").hasClass("show")){
					$(".cityBox").removeClass("show");
					$(".cityBox").hide();
				}else{
					$(".cityBox").show();
					$(".cityBox").addClass("show");
				}
			});
			//首字母查询
			$(".cityFir1").click(function(){
				$(".cityA").hide();
				$(".cityA1").show();
			});
			$(".cityFir2").click(function(){
				$(".cityA").hide();
				$(".cityA2").show();
			});
			$(".cityFir3").click(function(){
				$(".cityA").hide();
				$(".cityA3").show();
			});
			$(".cityFir4").click(function(){
				$(".cityA").hide();
				$(".cityA4").show();
			});
			
			//首字符查询出结果
			$(".cityBl").click(function(){
				$("#citySearch").attr("value","巴黎");
				$(".shopListSame").hide();
				$(".bali").show();
			});
			$(".cityBj").click(function(){
				$("#citySearch").attr("value","北京");
				$(".shopListSame").hide();
				$(".bj").show();
			});
			
});

//轮播函数
function firstImg(){
	 $(".secLoveLiSec").css("display","none");
	$(".secLoveLiFir").css("display","block");
	$(".secClickLi1").addClass("active");
	$(".secClickLi2").removeClass("active");
}
//轮播函数
function secondImg(){
	$(".secLoveLiFir").css("display","none");
	$(".secLoveLiSec").css("display","block");
	$(".secClickLi2").addClass("active");
	$(".secClickLi1").removeClass("active");	
}
//轮播图
$(function(){
		var num=0;
		var timer=null;
		$(".secLove").mouseenter(function(){
			clearInterval(timer);
		}).mouseleave(function(){
			go();
		})
		go();	
		function go(){
		  timer=setInterval(function(){//设置定时器
		        num++;//用一个全局变量来控制图的运动次数
				if(num>1) num=0;
		       if(num==0){
				  firstImg();
			   }
			   if(num==1){
			   	secondImg();	
			   }		
			   },3000);
				$(".secClickLi1").click(function(){
						firstImg();
				});
				$(".secClickLi2").click(function(){
						secondImg();			
				});
		}
	
		
});