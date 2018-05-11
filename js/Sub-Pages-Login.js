$(function() {
	/*登录页面*/
	$('.login-tab a').click(function() {
		$(this).children('i').addClass('tab-hide');
		$(this).addClass('tab-color');
		$(this).siblings('.tab-item').children('i').removeClass('tab-hide');
		$(this).siblings('.tab-item').removeClass('tab-color');
	});
	$('.login-tab a:eq(0)').click(function() {
		$('.pc-login').addClass('tab-show').removeClass('tab-hide');
		$('.scan-login').addClass('tab-hide').removeClass('tab-show');
	});
	$('.login-tab a:eq(1)').click(function() {
		$('.pc-login').addClass('tab-hide').removeClass('tab-show');
		$('.scan-login').addClass('tab-show').removeClass('tab-hide');
	});

	$('.input-focus').click(function() {
		$(this).children('label').addClass('tab-show').removeClass('tab-hide');
		$(this).children('input').focus();
		$('.login-blank').html('');
	});
	$('.input-focus input').blur(function() {
		if ($(this).val() == '') {
			$(this).siblings('label').addClass('tab-hide').removeClass('tab-show');
			$(this).siblings('.clear').addClass('tab-show').removeClass('tab-hide');
		}
	});
	$('.input-focus input').keydown(function() {
		$(this).siblings('.clear').addClass('tab-hide').removeClass('tab-show');
		if ($(this).val() == '') {
			$(this).siblings('.clear').addClass('tab-show').removeClass('tab-hide');
		}
	});
	$('.input-focus .clear').click(function() {
		$(this).siblings('input').val('');
	});

	/*二维码*/
	$('.scan-box').mouseenter(function() {
		$('.scan-box').animate({
			marginLeft: '-130px'
		}, 400, function() {
			$('.phone-scan').css('display', 'block');
		});

	});
	$('.scan-box').mouseleave(function() {
		$('.phone-scan').css('display', 'none');
		$('.scan-box').animate({
			marginLeft: 0
		}, 400);

	});
	/*判断账号密码是否正确*/
	$('.login-submit').click(function() {
		var name = $('.username-box input').val();
		var pwd = $('.password-box input').val();
		var cooName = $.cookie('name');
		var cooPwd = $.cookie('pwd');
		if (name == cooName && pwd == cooPwd) {
			$.cookie('cooName2', cooName);
			open('index.html', '_self');
			$.cookie('val', 0);
			if ($('.check input').is(':checked')) {
				$.cookie('check', 1);
			} else {
				$.cookie('check', 2);
			}

		} else {
			$('.login-blank').html('账号或密码错误，请重新输入');
		}

	});
	/*记住密码*/
	if ($.cookie('val') == 0) {
		$('.username-box input').val($.cookie('name'));
		$('.username-box label').css('display', 'none');
		if ($.cookie('check') == 1) {
			$('.check input').attr('checked', true);
			$('.password-box input').val($.cookie('pwd'));
			$('.password-box label').css('display', 'none');
		}
		if ($.cookie('check') == 2) {
			$('.check input').attr('checked', false);
			$('.password-box input').val('');
			$('.password-box label').css('display', 'block');
		}
	}

});