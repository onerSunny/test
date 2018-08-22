/*
* @Author: admin
* @Date:   2018-07-03 15:30:43
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-09 02:07:21
*/
	var t1,t2;
// 顶部导航条左边下拉框效果
	$('.find').hover(function(){
		clearTimeout(t1);
		$('.find .dropdown-menu').show();
		$('.ul-active').show();
	}, function() {
		clearTimeout(t1);
		t1 = setTimeout(function(){
			$('.find .dropdown-menu').hide();
			$('.ul-active').hide();
		},700);
	});

// 顶部导航条右边下拉框聚焦效果
	var bgColor = $('.found>a').css('backgroundColor');
	$('.found>a').click(function(event) {
		$('.found>.dropdown-menu').toggle();
		if($('.found>.dropdown-menu').css('display') == 'block'){
			$('.found>a').css({
				'backgroundColor': '#e6e6e6',
				'box-shadow': 'inset 0 3px 5px rgba(0,0,0,0.125)'
			});
		}
		else{
			$('.found>a').css({
				'backgroundColor': bgColor,
				'box-shadow':'none',
			});
		}
		return false;
	});
	$(document).click(function(event) {
		$('.found>.dropdown-menu').hide();
		$('.index-msg').hide();
		$('.index-private').hide();
		$('.phone-nav-dropdown .dropdown-menu').hide();
		$('.found>a').css({
			'backgroundColor': bgColor,
			'box-shadow':'none'
		});
	});

// 搜索框特效
	var formWidth;
	$('.navbar-form .form-group>input').focus(function(event) {
		$('#bs-example-navbar-collapse-1 .change>ul').hide();
		formWidth = $('.navbar-form').css('width');
		$('.navbar-form').css('width', '100%' );
	});
	$('.navbar-form .form-group>input').blur(function(event) {
		$('.navbar-form').css('width', formWidth);
		$('#bs-example-navbar-collapse-1 .change>ul').show();
	});

// 点击消息显示消息框
	$('.index-msg-li>a').click(function(event) {
		$('.index-msg').toggle();
		return false;
	});
// 点击私信显示私信框
	$('.index-private-li>a').click(function(event) {
		$('.index-private').toggle();
		return false;
	});
// 鼠标经过头像
	$('.me').hover(function() {
		clearTimeout(t2);
		$('.user-info').show();
	}, function() {
		clearTimeout(t2);
		t2 = setTimeout(function(){
			$('.user-info').hide();
		},700);
	});

// iPad phone版 底部导航条右边“更多”下拉框
	$('.phone-nav-dropdown>a').click(function(event) {
		$('.phone-nav-dropdown .dropdown-menu').toggle();
		return false;
	});
	

// 右边轮播图
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
