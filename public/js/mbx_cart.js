$(document).ready(function(){
	
	//页面脚步
	$.ajax({
		url:"footer.html",
		type:"get",
		success:function(result){
			$(result).replaceAll("footer"); 
			$(`<link rel="stylesheet" type="text/css" href="css/footer.css"/>`).appendTo("head")
		}
	})
	
	//购物车刻字
	$(".ringbuyBtn>i").click(function(){
		var $value=$(this).parent().prev().val()+$(this).text();
		$(this).parent().prev().val($value);		
	});
	
	//删除
	$(".tabDel").click(function(){
		var $pname=$(this).parent().prevAll(".pname").children().html();
		if(confirm(`你确定要删除${$pname}吗?`)){
			$(this).parent().parent().parent().parent().remove()
		}
		check();
	});
	//全选
	$(".checkAll").click(function(){
		var $che=$(this).prop("checked");
		$(".cbox,.checkAll").prop("checked",$che);
		check();
	});
	//单选
	$(".cbox").click(function(){
		if($(".cbox:not(:checked)").length<1){	
			$(".checkAll").prop("checked","checked");
		}else{
			$(".checkAll").prop("checked",false);
		}
		check();
	});
	function check(){
		var box=$(".cbox");
		var sum=0,m=0;
		for(var bo of box){
			if($(bo).prop("checked")){
				m++;
				sum+=parseInt($(bo).val());
			} 
		}
		$(".sumPrice").html("￥"+sum);
		$(".sumCount").html(m);
	}
			
	// 监听滚动事件 购物车的滚动实现
	$(window).scroll(function(){
		// 获得div的高度
		var h = $(".security").offset().top;
		if(($(this).scrollTop()>150)||h<=583){
			// 滚动到指定位置
			$(".shopPay").removeClass("shopFix");
		} else {
			$(".shopPay").addClass("shopFix");
		}
	});
	
	
	
	
});