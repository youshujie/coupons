window.onload = function(){
	var isbinded = false;
	
	if(isbinded) {
		
	} else {
		$('.container').css('display','block');
		$('.envelope-top').css('top','0');
		setTimeout(function() {
			$('.paper').css('top','0');
		},1000);
		$('.sign-in').css('margin-top','0.82666667rem');
		$('.paper').css('margin-top','0');
	}

};