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
    });



    (function() {
        function qhLoad(qh_family) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var res = JSON.parse(xhr.responseText);
                    var cont = "";
                    for (var i = 0; i < res.length; i++) {
                        cont += `<li>
									<a href="javascript:;"></a>
									<div class="liImg">
										<img src="${res[i].qh_img}" alt="">
									</div>
									<div class="liWord">
										<h3>${res[i].qh_title}</h3>
										<div></div>
										<p>${res[i].qh_detail}</p>
									</div>
									<div class="listBotoom">
										<span>
											<i>赞${res[i].qh_zan}</i>
										</span>
										<span>
											<i>${res[i].qh_share}</i>
										</span>
									</div>
								</li>`;
                    }
                    $(".exploreUl")[0].innerHTML = cont;
                }
            }
            var url = "http://127.0.0.1:8080/mbx/qh?qh_family=" + qh_family;
            xhr.open("get", url, true);
            xhr.send();
        }
        qhLoad("");
        var arrs = [];
        var arrs = $(".exploreSecTop>a");
        for (var arr of arrs) {
            arr.onclick = function() {
                for (var arr of arrs) {
                    arr.className = "";
                }
                this.className = "active";
                qhLoad(this.getAttribute("data-tab"));
            }
        }

    })();
});