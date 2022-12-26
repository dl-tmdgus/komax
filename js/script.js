$(document).ready(function(){

	$("nav li>a").on("mouseenter click" , function(){
		$("nav nav").stop().slideUp();
		$(this).next().stop().slideDown();
	});
		$("nav ul").mouseleave(function(){
		$("nav nav").stop(). slideUp();
	});


	//슬라이드
	setInterval (fading, 3000);
	let i = 2;
	function fading(){
		console.log(i);// 
		if(i == 0 ){
			$("#slide img").fadeIn();
			i=2;
								
		}
		else{
			$("#slide img").eq(i).fadeOut();
			i--;
		}
		
	}
});///end