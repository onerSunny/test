// 默认排序
$('.sort').click(function(event) {
	$(this).children('.sorts').toggle();
});

// 分享至新浪微博 微信 Twitter Facebook
$('.share ul li').hover(function(){
	$(this).children('.shares').toggle();
})
