 window.onload = function(){
	if(isbinded && isgiven) { 
		$('.success').css('display','block');
		setTimeout(function() {
			$('.success').css('margin-top','2.96rem');
		},0)
	} else {
		console.log(1)
		$('.coupon').css('display','block');
		setTimeout(function() {
			$('.coupon').css('margin-top','0.66666667rem');
		},0)
	}
		
	



	$('.obtain').on('click', function () {
	    $.post("http://nbvcv.com/app/index.php?i=2&c=entry&do=GetVerifyCode&m=apus_coupon",
	        {
	            phone_num: $('.name').val()
	            // phone_num: 15310260491
	        },
	        function(data) {
	            data = JSON.parse(data);
	            console.log(data);
	            $('.message').fadeIn(500);
            	message($('.tips'), data.status_code);
				setTimeout(function () {
					$('.message').fadeOut(500);
				}, 1500);
	        }
	    );
	});
	$('.next').on('click',function () {
	    $.post('http://nbvcv.com/app/index.php?i=2&c=entry&do=BindPhone&m=apus_coupon',
	        {
	            verify_code: $('.phone').val(),
				phone_num: $('.name').val(),
				openid: open_id
	        },
	        function(res) {
	            res = JSON.parse(res);
	            console.log(res);
	            if (res.status_code === 200) {
	            	$('.container').css('display','none');
					$('.coupon').css('display','block');
					setTimeout(function() {
						$('.coupon').css('margin-top','0.66666667rem');
					},0)
	            }else{
					$('.message').fadeIn(500);
					bindmsg($('.tips'), res.status_code);
					setTimeout(function () {
						$('.message').fadeOut(500);
					}, 1500);
				}
	        }
	    );
	});
	$('.get').on('click', function() {
		if (!isbinded && !isgiven) {
			
			$('.coupon').css('margin-top','10.66666667rem');
			
			// setTimeout(function() {
				$('.coupon').css('display','none');
			// },0)
			
			$('.container').css('display','block');
			setTimeout(function() {
				$('.envelope-top').css('top','0');
			},0)
			setTimeout(function() {
				$('.envelope-bottom').css('top','0.21333333rem');
			},0)
			setTimeout(function() {
				$('.sign-in').css('margin-top','0.82666667rem');
			},0);
			setTimeout(function() {
				$('.paper').css('top','0');
			},300);
		} else {
			$.post("http://nbvcv.com/app/index.php?i=2&c=entry&do=TakeTicket&m=apus_coupon",
				{
					openid: open_id
					// phone_num: 15310260491
				},
				function(data) {
					if(!staffid) {

					}
					$('.coupon').css('display','none');
					// setTimeout(function() {
					// 	$('.coupon').css('margin-top','-10.66666667rem');
					// },0)
					$('.success').css('display','block');
					setTimeout(function() {
						$('.success').css('margin-top','2.96rem');
					},0)
				}
			);
		}
	})
	function message(elem, code) {
	    switch (code) {
	        case 1:
	            elem.html('手机号有误');
	            break;
	        case 400:
	            elem.html('当天请求次数过多');
	            break;
			case 401:
				elem.html('请一分钟后再尝试');
				break;
	        case 200:
	            elem.html('验证码已发送');
	            break;
	        default:
	            elem.html('发送失败');
	            break;
	    }
	}
	function bindmsg(elem, code) {
	    switch (code) {
	        case 400:
	            elem.html('验证码输入错误');
	            break;
	        default:
	            elem.html('绑定失败');
	            break;
	    }
	}

};