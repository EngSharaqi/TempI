// console.log(window.innerWidth);
// console.log(window.innerHeight);

$(document).ready(function(){

	$(".slider, .intro-sec").css("height", $(window).height());

	$(".fa-bars").click(function(){
		$(".slider").slideToggle();
	});
	
	$(".cr-pk").click(function(){ //pink
		$(".sec-III, .sec-V, .standerd").addClass("cr-pk");
		$(".sec-V h5, .sec-V p, .sec-V i").removeClass("multi-color");
		$(".sec-III, .sec-V, .standerd").removeClass("cr-be cr-rd cr-gy cr-bk");
	});
	$(".cr-bk").click(function(){
		$(".sec-III, .sec-V, .standerd").addClass("cr-bk");
		$(".sec-III, .sec-V, .standerd").removeClass("cr-be cr-rd cr-gy cr-pk");
		$(".sec-V h5, .sec-V p, .sec-V i").addClass("multi-color");
	});
	$(".cr-gy").click(function(){
		$(".sec-III, .sec-V, .standerd").addClass("cr-gy");
		$(".sec-III, .sec-V, .standerd").removeClass("cr-be cr-rd cr-bk cr-pk");
	});
	$(".cr-be").click(function(){
		$(".sec-III, .sec-V, .standerd").addClass("cr-be");
		$(".sec-III, .sec-V, .standerd").removeClass("cr-rd cr-gy cr-bk cr-pk");
		$(".sec-V h5, .sec-V p, .sec-V i").addClass("multi-color");
	});
	$(".cr-rd").click(function(){
		$(".sec-III, .sec-V, .standerd").addClass("cr-rd");
		$(".sec-III, .sec-V, .standerd").removeClass("cr-be cr-gy cr-bk cr-pk");
		$(".sec-V h5, .sec-V p, .sec-V i").addClass("multi-color");
	});
});

var animate_word = document.getElementById("AW"),
	x = 0,
	AW = "simple & powerful";
var SI = setInterval(function(){
	animate_word.textContent += AW[x];
	x++;
	if(x > AW.length - 1){
		clearInterval(SI);
	}
}, 100);
