/*
* @Author: admin
* @Date:   2018-06-28 09:50:19
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-06 00:45:17
*/
			// 轮播
			// 首先创建一个定时器
			var timer;
			var num = 0;
			gogo = function(){
				timer = setInterval(function(){
					var src = '';
					// li active改变
					$('.lec_banner_left li').eq(num).addClass('lec_li_active').siblings('li').removeClass('lec_li_active');
					num++;
					//图片路径改变
					src = "../images/lec_banner"+num+".png";
					$('.lec_banner_pic img').attr('src', src);
					if(num==3){
						num = 0;
					}
				},2000);
			}
			gogo();
			// 鼠标经过图片的时候停止定时器
			$('.lec_banner_right').hover(function() {
				clearInterval(timer);
			}, function() {
				gogo();
			});


			// 鼠标经过左边的li，右边显示对应的图片
			$('.lec_banner_left li').hover(function(event) {
				clearInterval(timer);
				$(this).addClass('lec_li_active').siblings('li').removeClass('lec_li_active');
				var li_num = $(this).index()+1;
				var this_src = "../images/lec_banner"+li_num+".png";
				$('.lec_banner_pic img').attr('src', this_src);
				num = li_num-1;
			},function(){
				gogo();
			});

			//点击上一张
			$('.lec_banner_pre').click(function(event) {
				console.log("一开始的num"+num);
				if(num == 0){
					num = 3;
				}
				// li active改变
				$('.lec_banner_left li').eq(num-1).addClass('lec_li_active').siblings('li').removeClass('lec_li_active');
				//图片路径改变
				src = "../images/lec_banner"+num+".png";
				$('.lec_banner_pic img').attr('src', src);
				num--;
			});
			// 点击下一张
			$('.lec_banner_next').click(function(event) {
				console.log("一开始的num"+num); 
				if(num == 2){
					num = -1;
				}
				num++;  
				// li active改变
				$('.lec_banner_left li').eq(num).addClass('lec_li_active').siblings('li').removeClass('lec_li_active');
				//图片路径改变
				var img_num = num+1;
				src = "../images/lec_banner"+img_num+".png";
				$('.lec_banner_pic img').attr('src', src);
			});

			// 参与
			$('.list-group-item').click(function(event) {
				console.log(1);
			    $(this).css('outline', '1px solid #ddd;');
			});

