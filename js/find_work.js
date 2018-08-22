//点击texts，切换key_words
$('.test').click(function(event) {
	$('.key_words').show();
	console.log(1);
	return false;
});
$(document).click(function(event) {
	$('.key_words').hide();
	console.log(2);
});

//点击search_key，显示key_words
$('.ultop li').click(function(event) {
	$(this).children('a').css({'color':'white','background':'#009a61'});
	$(this).siblings('li').children('a').css({'color':'#666666','background':'none'});
	$(this).siblings('.current').removeClass('current');
});
// 鼠标移入ulcon的li，li的背景颜色及a的字体样式发生变化
$('.ulcon li').hover(function() {
	$(this).css('background', '#017e66');
	$(this).children('a').css('color', 'white');
}, function() {
	$(this).css('background', '#ebf5f3');
	$(this).children('a').css('color', '#017e7c');
});
// 点击语言开发
$('.ultop .li_language').click(function(event) {
	click_n=1;
	$('.ul_language').siblings().removeClass('current_ul');
	$('.ul_language').addClass('current_ul');
});
// 点击平台框架
$('.ultop .li_frame').click(function(event) {
	$('.ul_frame').siblings().removeClass('current_ul');
	$('.ul_frame').addClass('current_ul');
});
// 点击服务器
$('.ultop .li_server').click(function(event) {
	$('.ul_server').siblings().removeClass('current_ul');
	$('.ul_server').addClass('current_ul');
});
// 点击数据库和缓存
$('.ultop .li_data').click(function(event) {
	$('.ul_data').siblings().removeClass('current_ul');
	$('.ul_data').addClass('current_ul');
});
// 点击开发工具
$('.ultop .li_tool').click(function(event) {
	$('.ul_tool').siblings().removeClass('current_ul');
	$('.ul_tool').addClass('current_ul');
});
// 点击系统设备
$('.ultop .li_equipment').click(function(event) {
	$('.ul_equipment').siblings().removeClass('current_ul');
	$('.ul_equipment').addClass('current_ul');
});
// 点击其它
$('.ultop .li_others').click(function(event) {
	$('.ul_others').siblings().removeClass('current_ul');
	$('.ul_others').addClass('current_ul');
});


//更多 
$('.find_work .search_con .more').click(function(event) {
	$(this).css('display', 'none');
	$(this).siblings('.more_works').css('display', 'block');
	$(this).siblings('.more_citys').css('display', 'block');
});
