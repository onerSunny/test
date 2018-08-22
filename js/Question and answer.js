/*
* @Author: Administrator
* @Date:   2018-07-01 11:11:39
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-01 14:28:04
*/

	var timer;
	var num = 1;//当前是第一张

	// 自动轮播
	function gogo(){
		var oleft;
		timer = setInterval(function(){
			num++;//下一张是num
			oleft = num*(-224)+'px';
			if (num == 4) {
					$('.aq_small_carousel').animate({'left':oleft},function(){
					$('.aq_small_carousel').css({'left':'-224px'});
				});
				num = 1;
			}
			else{
				$('.aq_small_carousel').animate({'left':oleft});
			}
			console.log(oleft);
		},2000)
	}
	gogo();

	// 停止定时器
	$('.aq_small_carousel').hover(function() {
		clearInterval(timer);
	}, function() {
		gogo();
	});

	$('.aq_small_next').hover(function() {
		clearInterval(timer);
	}, function() {
		gogo();
	});

	$('.aq_small_pre').hover(function() {
		clearInterval(timer);
	}, function() {
		gogo();
	});

	// 下一张
	$('.aq_small_next').click(function(event) {
		num++;
		oleft = num*(-224)+'px';
		if (num == 4) {
				$('.aq_small_carousel').animate({'left':oleft},function(){
				$('.aq_small_carousel').css({'left':'-224px'});
			});
			num = 1;
		}
		else{
			$('.aq_small_carousel').animate({'left':oleft});
		}
	});

	// 上一张
	$('.aq_small_pre').click(function(event) {
		num--;
		oleft = num*(-224)+'px';
		if (num == 0) {
				$('.aq_small_carousel').animate({'left':oleft},function(){
				$('.aq_small_carousel').css({'left':'-672px'});
			});
			num = 3;
		}
		else{
			$('.aq_small_carousel').animate({'left':oleft});
		}
	});