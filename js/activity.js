// 全部城市
$('.activity_city').click(function(event) {
	$('.activity_city').children('.citys').toggle();
	$('.activity_city').siblings('.activity_type').children('.types').hide();
});

// 所有类型
$('.activity_type').click(function(event) {
	$('.activity_type').children('.types').toggle();
	$('.activity_type').siblings('.activity_city').children('.citys').hide();
});

// 日历 calendar_week
$('.calendar_week').hover(function() {
	$(this).css('background', '#ededed');
	$(this).parent().css('background', '#fafafa');
}, function() {
	$(this).css('background', 'none');
	$(this).parent().css('background', 'none');
});
// 日历 calendar_date
$('.dates').hover(function() {
	$(this).css('background', '#ededed');
	$(this).parent().css('background', '#fafafa');
	$('.first').css('background', '#f6f6f6');
	$('.last').css('background', '#f6f6f6');
	$('.twenty-six').css('background', '#e8fde7');
}, function() {
	$(this).css('background', 'none');
	$(this).parent().css('background', 'none');
	$('.first').css('background', '#f6f6f6');
	$('.last').css('background', '#f6f6f6');
	$('.twenty-six').css('background', '#e8fde7');
});

// 1
$('.one').hover(function(){
	$(this).children('.ones').toggle();
})
// 9
$('.nine_1').hover(function(){
	$(this).siblings('.nines_1').toggle();
})
$('.nine_2').hover(function(){
	$(this).siblings('.nines_2').toggle();
})
$('.nine_3').hover(function(){
	$(this).siblings('.nines_3').toggle();
})
$('.nine_4').hover(function(){
	$(this).siblings('.nines_4').toggle();
})
$('.nine_5').hover(function(){
	$(this).siblings('.nines_5').toggle();
})
// 10
$('.ten_1').hover(function(){
	$(this).siblings('.tens_1').toggle();
})
// 21
$('.twenty-one_1').hover(function(){
	$(this).siblings('.twenty-ones_1').toggle();
})
$('.twenty-one_2').hover(function(){
	$(this).siblings('.twenty-ones_2').toggle();
})
// 23
$('.twenty-three_1').hover(function(){
	$(this).siblings('.twenty-threes_1').toggle();
})
$('.twenty-three_2').hover(function(){
	$(this).siblings('.twenty-threes_2').toggle();
})
$('.twenty-three_3').hover(function(){
	$(this).siblings('.twenty-threes_3').toggle();
})
$('.twenty-three_4').hover(function(){
	$(this).siblings('.twenty-threes_4').toggle();
})
// 24
$('.twenty-four_1').hover(function(){
	$(this).siblings('.twenty-fours_1').toggle();
})
$('.twenty-four_2').hover(function(){
	$(this).siblings('.twenty-fours_2').toggle();
})
// 28
$('.twenty-eight_1').hover(function(){
	$(this).siblings('.twenty-eights_1').toggle();
})
$('.twenty-eight_2').hover(function(){
	$(this).siblings('.twenty-eights_2').toggle();
})
// 28
$('.thirty_1').hover(function(){
	$(this).siblings('.thirtys_1').toggle();
})
$('.thirty_2').hover(function(){
	$(this).siblings('.thirtys_2').toggle();
})
$('.thirty_3').hover(function(){
	$(this).siblings('.thirtys_3').toggle();
})
// 2
$('.two_1').hover(function(){
	$(this).siblings('.twos_1').toggle();
})
// 6
$('.six_1').hover(function(){
	$(this).siblings('.sixs_1').toggle();
})
$('.six_2').hover(function(){
	$(this).siblings('.sixs_2').toggle();
})
// 7
$('.seven_1').hover(function(){
	$(this).siblings('.sevens_1').toggle();
})



// 9
var clickTemp=0;//判断是否进行了点击，0代表没有点击
$('.dates').hover(function(){
	$(this).children('.con').show();
	// $(this).children('.con').css({'border':'1px solid #e1e1e1','background':'#ededed'});
},function(){
	//获取当前nines_con的style
	var strTemp=''+$(this).children('.cons').attr('style');
	// $(this).children('.con').css({'border':'none','background':'none'});
	//如果nines_con的style不为block（none）
	if(!strTemp.match('block'))
		$(this).children('.con').hide();
	clickTemp=0;
});
$('.dates').click(function(event) {
	$(this).children('.cons').toggle();
	//点击nine，clickTemp=1;
	clickTemp=1;
	//判断nines_con是否为block
	if($(this).children('.cons').attr('style').match('block')){
		//若nines_con为block，nine_con显示
		$(this).children('.con').show();
		$(this).children('.con').css({'border':'none','background':'none'});
	}
	else{
		//否则nine_con隐藏
		$(this).children('.con').hide();
		// $(this).children('.con').css({'border':'1px solid #e1e1e1','background':'#ededed'});
	}
});

$('.con').click(function(event) {
	$(this).css({'border':'none','background':'none'});
	$(this).siblings('.cons').css('display', 'none');
});


