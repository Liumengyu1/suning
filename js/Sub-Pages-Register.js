$(function() {

	var nickName = /^[\u4e00-\u9fa5a-zA-Z0-9_]+$/;
	var phone = /^1[34578]\d{9}$/;
	var pwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z.]{8,16}$/;

	$('body').css('height', '' + $(window).height() + '');

	$('.input-wrapper').click(function() { //点击文本框 获取焦点 去掉默认文字
		$(this).children('input').focus();
		$(this).children('.placeholder').addClass('hide');
		$(this).parent('.clearfix').siblings('.error-msg').removeClass('hide');
	});

	$('.input-wrapper input').blur(function() { //文本框失去焦点
		if ($(this).val() == '') {
			$(this).siblings('.placeholder').removeClass('hide');
		}
	});
	var nickVal = '';
	var phoneVal = '';
	var pwdVal = '';
	$('.name-field input').blur(function() {
		nickVal = $(this).val();
		if(nickVal.length < 4&&nickVal.length>1){
			$('.name-field .error-msg').addClass('show').addClass('color').removeClass('hide').html('昵称格式不正确，请重新输入！');
			$(this).siblings('.ok').addClass('hide').removeClass('show');
		}else{
			if (nickName.test(nickVal)) {
				$(this).parent('.input-wrapper').parent('.clearfix').siblings('.error-msg').addClass('hide').removeClass('show').html('请输入昵称，长度4~8位');
				$(this).siblings('.ok').addClass('show').removeClass('hide');
				$('.name-field .error-msg').removeClass('color');
			} else if (nickVal == '') {
				$('.name-field .error-msg').addClass('show').addClass('color').removeClass('hide').html('昵称不能为空！');
				$(this).siblings('.ok').addClass('hide').removeClass('show');
			} else {
				$('.name-field .error-msg').addClass('show').addClass('color').removeClass('hide').html('昵称格式不正确，请重新输入！');
				$(this).siblings('.ok').addClass('hide').removeClass('show');
			}
		}
	});
	
	$('.phone-field input').blur(function() {
		phoneVal = $(this).val();
		if (phone.test(phoneVal)) {
			$(this).parent('.input-wrapper').parent('.clearfix').siblings('.error-msg').addClass('hide').removeClass('show').html('请输入11位手机号');
			$(this).siblings('.ok').addClass('show').removeClass('hide');
			$('.phone-field .error-msg').removeClass('color');
		} else {
			if (phoneVal == '') {
				$('.phone-field .error-msg').addClass('show').addClass('color').removeClass('hide').html('手机号不能为空！');
				$(this).siblings('.ok').addClass('hide').removeClass('show');
			} else {
				$('.phone-field .error-msg').addClass('show').addClass('color').removeClass('hide').html('手机号格式不正确，请重新输入！');
				$(this).siblings('.ok').addClass('hide').removeClass('show');
			}
		}
	});
	$('.password-field input').focus(function() {
		$('.eye-plain').addClass('show').removeClass('hide');
		$('.eye-encrypt').addClass('hide').removeClass('show');
	});
	$('.password-field input').blur(function() {
		pwdVal = $(this).val();
		if (pwd.test(pwdVal)) {
			$(this).parent('.input-wrapper').parent('.clearfix').siblings('.error-msg').addClass('hide').removeClass('show').html('6-20个字符，由字母，数字和符号的两种以上组合。');
			$(this).siblings('.ok').addClass('show').removeClass('hide');
			$('.password-field .error-msg').removeClass('color');
		} else {
			if (pwdVal == '') {
				$('.password-field .error-msg').addClass('show').addClass('color').removeClass('hide').html('密码不能为空！');
				$(this).siblings('.ok').addClass('hide').removeClass('show');
			} else {
				$('.password-field .error-msg').addClass('show').addClass('color').removeClass('hide').html('密码格式不正确，请重新输入！');
				$(this).siblings('.ok').addClass('hide').removeClass('show');
			}
		}
	});

	$('.password-field input').keydown(function() { //密码框按下时
		$('.eye-plain').addClass('show').removeClass('hide');
		$(this).siblings('.ok').addClass('hide').removeClass('show');
		if ($(this).val() == '') {
			$('.eye-plain').addClass('hide').removeClass('show');
		}
	});
	$('.eye-plain').click(function(e) { //点击显示密码   、 阻止冒泡
		stopBubble(e);
		$('.eye-plain').addClass('hide').removeClass('show');
		$('.eye-encrypt').addClass('show').removeClass('hide');
		$('.password-field .input-wrapper input').attr('type', 'text');
	});
	$('.eye-encrypt').click(function(e) { //点击隐藏密码   、 阻止冒泡
		stopBubble(e);
		$('.eye-encrypt').addClass('hide').removeClass('show');
		$('.eye-plain').addClass('show').removeClass('hide');
		$('.password-field .input-wrapper input').attr('type', 'password');
	});

	$('.accept-items').click(function() { //判断复选框是否选中
		if ($('.accept-items').is(':checked')) {
			$('.pls-accept-items').addClass('hide').removeClass('show');
		} else {
			$('.pls-accept-items').addClass('show').removeClass('hide');
		}

	});
	
	$('.submit-btn').click(function() {
		if (nickName.test(nickVal) && phone.test(phoneVal) && pwd.test(pwdVal)) {
			$('.reg-form').addClass('hide');
			$('.hide-yes').addClass('show');
			$.cookie('cname',nickVal,{expires:0.5,path:'/'});
			$.cookie('cpwd',pwdVal,{expires:0.5,path:'/'});
			
		} else {
			if (nickVal == '') {
				$('.name-field .error-msg').addClass('show').addClass('color').removeClass('hide').html('昵称不能为空！');
			}
			if (phoneVal == '') {
				$('.phone-field .error-msg').addClass('show').addClass('color').removeClass('hide').html('手机号不能为空！');
			}
			if (pwdVal == '') {
				$('.password-field .error-msg').addClass('show').addClass('color').removeClass('hide').html('密码不能为空！');
			}
		}
	});
})

function stopBubble(e) {
	if (e && e.stopPropagation)
		e.stopPropagation();
	else {
		window.event.cancelBubble = true;
	}
}