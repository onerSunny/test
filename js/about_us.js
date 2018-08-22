//点击act_pic，视频播放
$('.act_pic').click(function(event) {
	$('body').css('overflow', 'hidden');
	$('.videos').addClass('videos-after');
	$('.videos').css('display', 'block');
	$('video')[0].play();
});
// 点击quit，视频暂停
$('.quit').click(function(event) {
	$('body').css('overflow', 'scroll');
	$('.videos').removeClass('videos-after');
	$('.videos').css('display', 'none');
	$('video')[0].pause();
});
