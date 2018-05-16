$(function() {

	$('.sn-sidebar-tab .tab-icon').mouseenter(function() {
		$(this).parent('span:eq(0)').addClass('addBack');
		$(this).addClass('addPosi');
		$(this).parent('span:eq(0)').siblings('.tab-tip').addClass('addLeft');
	})
	$('.sn-sidebar-wider-tab .tab-icon').mouseenter(function() {
		$(this).parent('span:eq(0)').siblings('.tab-tip').addClass('addTab');
	})
	$('.sn-sidebar-tab .tab-icon').mouseleave(function() {
		$(this).parent('span:eq(0)').removeClass('addBack');
		$(this).removeClass('addPosi');
		$(this).parent('span:eq(0)').siblings('.tab-tip').removeClass('addLeft');

	})
	$('.sn-sidebar-wider-tab .tab-icon').mouseleave(function() {
		$(this).parent('span:eq(0)').siblings('.tab-tip').removeClass('addTab');
	})

	$('.tab-icon-code').mouseenter(function() {
		$('.tab-tip-code-warp').addClass('addsm');
		$('.tab-icon-tip').css('display', 'block');
	})
	$('.tab-icon-code').mouseleave(function() {
		$('.tab-tip-code-warp').removeClass('addsm')
		$('.tab-icon-tip').css('display', 'none');
	})
	$('.sn-sidebar-tab-cart').mouseenter(function() {
		$('.tab-cart-tip-warp-box').addClass('addBack');
	})
	$('.sn-sidebar-tab-cart').mouseleave(function() {
		$('.tab-cart-tip-warp-box').removeClass('addBack');
	})
	$('.return').click(function() {
		$("html,body").animate({
			scrollTop: 0
		}, 500);
	});
	$('.sn-sidebar-to-top').click(function() {
		$("html,body").animate({
			scrollTop: 0
		}, 500);
	});
	/*阻止冒泡*/
	function stopBubble(e) {
		if (e && e.stopPropagation) {
			e.stopPropagation();
		} else {
			window.event.cancelBubble = true;
		}
	}

	$('.head_nav_left_address').click(function(e) {
		stopBubble(e);
		$('.address').show();
		$('.arr').addClass('add_arr');
		$('.head_nav_left_address').css('background', '#fff');
	});
	document.onclick = function() {
		$(".address").hide();
		$(".arr").removeClass('add_arr');
		$('.head_nav_left_address').css('background', '');
	}
	$('.address').click(function(e) {
		stopBubble(e);
	});

	$('.close').click(function() {
		$('.address').hide();
		$('.arr').removeClass('add_arr');
		$('.head_nav_left_address').css('background', '');
	});

	$('.hover_show').mouseenter(function() {
		$(this).children('.hide_subpage').slideDown(150);
		$(this).find('.hoverli').addClass('add_a_back');
		$(this).children('.hoverli').children('.down').addClass('add_down');
		$(this).children('.hoverli').css('border-color', '#ddd').css('border-bottom', '0');
	});
	$('.hover_show').mouseleave(function() {
		$(this).children('.hide_subpage').slideUp(50);
		$(this).find(".hoverli").removeClass('add_a_back');
		$(this).children('.hoverli').css('border-color', 'transparent');
		$(this).children('.hoverli').children('.down').removeClass('add_down');
	});

	/*搜索*/
	$(".inp").focus(function() {
		$(this).siblings(".search-sousuo-hide").slideDown(200);
	});
	$(".inp").blur(function() {
		$(this).siblings(".search-sousuo-hide").slideUp(200);
	});
	$(".close").click(function() {
		$(".search-sousuo-hide").slideUp(200);
	});

	$(".index-list li").mouseenter(function() {
		$(this).children(".index-list_title").css("background", "#FFFFFF");
		$(this).find(".index-list_title a").css("color", "#333333");
		$(this).children(".index-sort-detail").css("display", "block");
	});
	$(".index-list li").mouseleave(function() {
		$(this).children(".index-list_title").css("background", "");
		$(this).find(".index-list_title a").css("color", "");
		$(this).children(".index-sort-detail").css("display", "none");
	});

	/*banner*/
	var timer = setInterval(move,4000);
	var n=0;
	var i=0;
	$('.banner li').eq(0).addClass("move").siblings().removeClass("move");
	$('.banner_list span').eq(0).addClass("listHover").siblings().removeClass("listHover");
	function move(){
		n++;
		if(n>7){
			n=0;
		}
		$('.banner li').eq(n).addClass('move').siblings().removeClass('move');
		$('.banner_list span').eq(n).addClass('listHover').siblings().removeClass('listHover');
	}
	$('.banner_list span').mouseenter(function(){
		i = $(this).index();
		$('.banner li').eq(i).addClass('move').siblings().removeClass('move');
		$(this).addClass('listHover').siblings().removeClass('listHover');
		n=i;
	});
	$('.banner').mouseenter(function(){
		clearInterval(timer);
	});
	$('.banner').mouseleave(function(){
		timer = setInterval(move,4000);
	});
	$('.btn_prev').click(function(){
		n--;
		if(n<0){
			n=7;
		}
		$('.banner li').eq(n).addClass('move').siblings().removeClass('move');
		$('.banner_list span').eq(n).addClass('listHover').siblings().removeClass('listHover');
	});
	$('.btn_next').click(function(){
		move();
	});



	/*新闻滚动*/

	var $swap = $('.toutiao ul');
	var movetotop;
	$swap.hover(function() {
	 	clearInterval(movetotop);
	}, function() {
		movetotop = setInterval(function() {
			var li_height = $swap.find('li').height();
			$swap.find('li:first').animate({
				marginTop: -(li_height) + 'px'
			}, 600, function() {
				$swap.find('li:first').css('marginTop', 0).appendTo($swap);
			});
		}, 4000);
	}).trigger('mouseleave');

	//======左侧导航=======

	$('#newUl').append($('#list').clone(true));

	var x = $('.end').offset().top;
	$(window).scroll(function() {
		if ($(window).scrollTop() > 1000) {
			$('.ng-fix-bar').css('display', 'block');
		} else {
			$('.ng-fix-bar').css('display', 'none');
		}
		if ($(window).scrollTop() > 2750) {
			$('.left_menu').css('display', 'block');
			if ($(window).scrollTop() < (x - 500)) {
				$('.left_menu').css('display', 'block');
			} else {
				$('.left_menu').css('display', 'none');
			}
		} else {
			$('.left_menu').css('display', 'none');
		}

	})

	$('.list').onePageNav();

	/*排行榜*/
	var comBox = $('.commodity-wrapper'), //获取可视窗口
		items = comBox.children(), //获取要滚动的元素
		pre = $('.com-btn-left'), //获取上一个按钮
		next = $('.com-btn-right'), //获取下一个按钮
		width = items.width(), //获取每个滚动元素的宽
		count = comBox.children().size(), //获取滚动元素的数量
		list = $('.banner-pager a');

	comBox.prepend(items.last().clone()),
		comBox.append(items.first().clone());
	var newWidth = comBox.children().size();
	comBox.css({
		left: 0 - width,
		width: newWidth * width
	})

	next.on('click', function() {
		playnext();
	})
	pre.on('click', function() {
		playpre();
	})
	var curidx = 0; //声明初始的坐标
	var mov = 1; //移动的次数
	function playnext() {
		comBox.animate({
			left: '-=' + mov * width
		}, function() {
			curidx++; //1 //2 3
			if (curidx > 2) {
				comBox.css({
					left: 0 - width
				});
				curidx = 0;
			}
			list.eq(curidx).addClass('active').siblings().removeClass('active');

		})
	}

	function playpre() {
		comBox.animate({
			left: '+=' + mov * width
		}, function() {
			curidx--;
			if (curidx == -1) {
				comBox.css({
					left: 0 - width * count
				});
				curidx = 2;
			}
			list.eq(curidx).addClass('active').siblings().removeClass('active');

		})
	}

	/*视频列表*/
	$('.right-pointer').click(function() { /*下一页*/
		$('.smallshow-wrapper-box').stop(true).animate({
			marginLeft: '-393px'
		}, 600, function() {
			$('.smallshow-wrapper-box ul').eq(0).appendTo($('.smallshow-wrapper-box'));
			$('.smallshow-wrapper-box').css({
				marginLeft: 0
			});
		});
	});
	$('.left-pointer').click(function() { /*上一页*/
		$(".smallshow-wrapper-box").css('marginLeft', '-393px');
		$('.smallshow-wrapper-box ul').eq(1).prependTo($('.smallshow-wrapper-box'));
		$(".smallshow-wrapper-box").stop(true).animate({
			marginLeft: "0px"
		}, 600);
	});


	$('.smallshow-wrapper-box ul li').mouseenter(function() {
		$(this).children('.wrapper-hide').addClass('showWrapper');
		$(this).siblings().children('.wrapper-hide').removeClass('showWrapper');
	});
	
	if($.cookie('cval2')==1){
		var str = $.cookie('ccooName2');
		$('.login-hide').css('display', 'none');
		if (str != '') {
			
	//		var length = str.length;/*获取字符串长度*/
	//		var front = str.substring(0, 2);/*截取前两位*/
	//		var after = str.substring(length, length - 2);/*截取后两位*/
	//		var lCenter = str.substring(2,length-2);/*截取中间*/
	//		var numStar = '*';
	//		for (var i = 0; i < lCenter.length-1; i++) {/*循环截取中间几位数 转化成字符串*/
	//			numStar = numStar + '*';
	//		}
	//		str = front + numStar + after;/*拼接*/
			$('.user-infor .infor').html('Hi,' + str);
			$('#denglu span').css('display', 'none');
			$('.login-hide').css('display', 'block');
			$('.login-hide .hoverli span').html(str);
		}
	}else{
		$('.user-infor .infor').html('Hi,你好');
		$('#denglu span').css('display', 'block');
		$('.login-hide').css('display', 'none');
		$('.login-hide .hoverli span').html('请登录');
	}
	/*$('.user-infor .infor').html('Hi,你好');
	$('#denglu span').css('display', 'block');
	$('.login-hide').css('display', 'none');
	$('.login-hide .hoverli span').html('请登录');*/
});
$(function(){
	$('.divWidth').width($('.liWidth').width()-2);
	
})