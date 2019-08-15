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
				$(`<link rel="stylesheet" type="text/css" href="css/footer.css"/>`).appendTo("head")
			}
		})
	
		// 手指切换
		$(".boxA1").click(function(){
			//给当前点击的添加active
			$(this).addClass("active");
			//给未点击的移除active
			$(".boxA2").removeClass("active");
			//对应的div显示
			$(".boxLeftImg1").css("display","block");
			//对应的div隐藏
			$(".boxLeftImg2").css("display","none");
		});
		$(".boxA2").click(function(){
			//给当前点击的添加active
			$(this).addClass("active");
			//给未点击的移除active
			$(".boxA1").removeClass("active");
			//对应的div显示
			$(".boxLeftImg2").css("display","block");;
			//对应的div隐藏
			$(".boxLeftImg1").css("display","none");
		});
		// 图片切换下的点
		$("#sp1").click(function(){
			//给当前页面的li移除active
			$(".thefirst").removeClass("active");
			//切换页面的时候，默认给当前第一个li添加active，
			//并改变当前对应的手上的小图片
			$(".thefirstLi").addClass("active");
			$(".sdImg1,.sdImg2").attr("src", "img/zjdz/believe.png");
			//给当前点击的添加active
			$(this).addClass("active");
			//给未点击的移除active
			$("#sp2,#sp3").removeClass("active");
			//前四个li（含class=thefirst）显示
			$(".thefirst").show();
			$(".thesec,.thethird").hide();
		});
		
		$("#sp2").click(function(){
			//给当前页面的li移除active
			$(".thesec").removeClass("active");
			//切换页面的时候，默认给当前第一个li添加active，
			//并改变当前对应的手上的小图片
			$(".thesecLi").addClass("active");
			$(".sdImg1,.sdImg2").attr("src", "img/zjdz/forever-sh.png");
			//给当前点击的添加active
			$(this).addClass("active");
			//给未点击的移除active
			$("#sp1,#sp3").removeClass("active");
			//中间四个li（含class=thesec）显示
			$(".thesec").show();
			$(".thefirst,.thethird").hide();
		});
		
		$("#sp3").click(function(){
			//给当前页面的li移除active
			$(".thethird").removeClass("active");
			//切换页面的时候，默认给当前第一个li添加active，
			//并改变当前对应的手上的小图片
			$(".thethirdLi").addClass("active");
			$(".sdImg1,.sdImg2").attr("src", "img/zjdz/sweety.png");
			//给当前点击的添加active
			$(this).addClass("active");
			//给未点击的移除active
			$("#sp1,#sp2").removeClass("active");
			//最后四个li（含class=thethird）显示
			$(".thethird").show();
			$(".thefirst,.thesec").hide();
		});
		// 佩戴图片点击
		$(".thefirst,.thesec,.thethird").click(function(){
				//点击此li 全部li移除active
				$(".thefirst,.thesec,.thethird").removeClass("active");
				//给当前这个li添加active
				$(this).addClass("active");
				//更改尺寸图片下面的h4标签
				//$(this).attr("lst") 获取属性lst的值
				$(".boxLeftBottomP").html($(this).attr("lst"));	
				//通过$().attr("属性","属性值")改变手上的小戒指图片;
				switch($(this).attr("lst")){
					case "BELIEVE 系列 典雅款" :
						$(".sdImg1,.sdImg2").attr("src", "img/zjdz/believe.png");
						break;
					case "JUST YOU 系列 经典款" :
						$(".sdImg1,.sdImg2").attr("src", "img/zjdz/justyou-jd.png");
						break;
					case "FOREVER 系列 经典款" :
						$(".sdImg1,.sdImg2").attr("src", "img/zjdz/forever-jd.png");
						break;
					case "TRUE LOVE 系列 简奢款" :
						$(".sdImg1,.sdImg2").attr("src", "img/zjdz/truelove-js.png");
						break;
					case "FOREVER 系列 奢华款" :
						$(".sdImg1,.sdImg2").attr("src", "img/zjdz/forever-sh.png");
						break;
					case "FOREVER 系列 纯爱款" :
						$(".sdImg1,.sdImg2").attr("src", "img/zjdz/iswear-sh.png");
						break;
					case "LoveLine 系列 奢华款" :
						$(".sdImg1,.sdImg2").attr("src", "img/zjdz/loveline-sh.png");
						break;
					case "LOCK FOREVER 系列 心·锁唯一" :
						$(".sdImg1,.sdImg2").attr("src", "img/zjdz/lockforever.png");
						break;
					case "SWEETIE 系列 心蓝" :
						$(".sdImg1,.sdImg2").attr("src", "img/zjdz/sweety.png");
						break;
					case "JUST YOU 系列 浪漫款" :
						$(".sdImg1,.sdImg2").attr("src", "img/zjdz/justyou-lm.png");
						break;
					case "FOREVER 系列 简爱款" :
						$(".sdImg1,.sdImg2").attr("src", "img/zjdz/iswear-jd.png");
						break;
					case "FOREVER 系列 简奢款" :
						$(".sdImg1,.sdImg2").attr("src", "img/zjdz/forever-js.png");
						break;
				}
		});
	
		
});


