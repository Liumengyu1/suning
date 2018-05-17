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
		$('.scan-box').stop(true).animate({
			marginLeft: '-130px'
		}, 400, function() {
			$('.phone-scan').css('display', 'block');
		});

	});
	$('.scan-login').mouseleave(function() {
		$('.phone-scan').css('display', 'none');
		$('.scan-box').stop(true).animate({
			marginLeft: 0
		}, 400);

	});
	
	/*判断账号密码是否正确*/
	$('.login-submit').click(function() {
		if($.cookie('cyes')!=1){
			var name = $('.username-box input').val();
			var pwd = $('.password-box input').val();
			var cooName = $.cookie('cname');
			var cooPwd = $.cookie('cpwd');
			if (name == cooName && pwd == cooPwd) {
				$.cookie('ccooName2',$.cookie('cname'),{expires:0.5,path:'/'});
				open('index.html', '_self');
				$.cookie('cval', 1,{expires:0.5,path:'/'});
				$.cookie('cval2',1,{expires:0.5,path:'/'});
				$.cookie('cyes',1,{expires:0.5,path:'/'});
				if ($('.check input').is(':checked')) {
					$.cookie('ccheck', 1,{expires:0.5,path:'/'});
				} else {
					$.cookie('ccheck', 2,{expires:0.5,path:'/'});
				}
	
			} else {
				$('.login-blank').html('账号或密码错误，请重新输入');
			}
		}else{
			$('.login-blank').html('此账号已登录！');
		}
	});
	
	/*记住密码*/
	if ($.cookie('cval') == 1) {
		$('.username-box input').val($.cookie('cname'));
		$('.username-box label').css('display', 'none');
		if ($.cookie('ccheck') == 1) {
			$('.check input').attr('checked', true);
			$('.password-box input').val($.cookie('cpwd'));
			$('.password-box label').css('display', 'none');
		}
		if ($.cookie('ccheck') == 2) {
			$('.check input').attr('checked', false);
			$('.password-box input').val('');
			$('.password-box label').css('display', 'block');
		}
	}
	
	
	if($.cookie('cval2')==1){
		$('.username-box input').val($.cookie('cname'));
		$('.username-box label').css('display', 'none');
	}else{
		$('.username-box input').val('');
		$('.username-box label').css('display', 'block');
	}
	/*deleteCookieFunc();*///清空cookie
	/*显示/隐藏密码*/
	$('.ocu-showPwd').click(function(){
		$('.ocu-showPwd').hide().siblings('input').attr('type','text').siblings('.ocu-hidePwd').show();
	});
	$('.ocu-hidePwd').click(function(){
		$('.ocu-hidePwd').hide().siblings('input').attr('type','password').siblings('.ocu-showPwd').show();
	});
});
function deleteCookieFunc(){
	$.cookie('cname',null,{expires:-1,pathS:'/'});
	$.cookie('cpwd',null,{expires:-1,path:'/'});
	$.cookie('cval',null,{expires:-1,path:'/'});
	$.cookie('cval2',null,{expires:-1,path:'/'});
	$.cookie('ccheck',null,{expires:-1,path:'/'});
	$.cookie('ccooName2',null,{expires:-1,path:'/'});
	$.cookie('cyes',null,{expires:-1,path:'/'});
	alert('删除成功');
}
