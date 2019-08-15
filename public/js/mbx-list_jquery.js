$(document).ready(function() {
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
        url: "footer.html",
        type: "get",
        success: function(result) {
            $(result).replaceAll("footer");
            $(`<link rel="stylesheet" type="text/css" href="css/footer.css"/>`).appendTo("head")
        }
    })


    $("li").on("mouseover", function() {
        $(this).addClass("active");

    }).on("mouseout", function() {
        $(this).removeClass("active");

    });

    $.ajax({
        url: "http://127.0.0.1:8080/mbx/list",
        type: "post",
        dataType: "json"
    }).then(function(result) {
        $(".cortUl")[0].innerHTML = "";
        for (var i = 0; i < result.length; i++) {
            $(".cortUl")[0].innerHTML += `
			<li>
				<a href="mbx_detail.html"><img src="${result[i].jz_img}" alt=""></a>
				<div>
					<p>¥${result[i].jz_price}</p>
					<p>${result[i].jz_name}</p>
					<a href="mbx_detail.html" class="nowSc">收藏</a><a href="#" class="nowBuy">立即购买</a>
				</div>
			</li>
		`;

        }
    })


});