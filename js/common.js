/*
* @Author: admin
* @Date:   2018-06-29 16:26:24
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-06 00:40:05
*/

//点击关闭广告
$('.aq_close').click(function(event) {
	$(this).hide();
	$('.aq_banner').children('.container').css('display', 'none');
});

// 回到顶部
$(window).scroll(function(event) {
	if($(window).scrollTop()>=$(window).height()*1.5){
		$('.col_return_top').css('display', 'block');
	}
	else{
		$('.col_return_top').css('display', 'none');
	}
});

$('.col_return_top').click(function(event) {
	console.log(1);
	$('html,body').animate({'scrollTop':'0px'});
});