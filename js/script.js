$(document).ready(function() {
	$.getJSON("../lazyloading/json/clients.json", function(getdetails){
		$.each(getdetails,function(key,value){
			$.each(value,function(k,v){
				// console.log(v.imgurl);
			});
		});
	});
	$.ajax({
		type: 'GET',
		dataType: "json",
		url: 'json/clients.json',
		data: '',
		success: function(response){
			$.each(response,function(key,value){
				$.each(value,function(k,v){
					$(window).scroll(function(){
						var windowTop = $(window).scrollTop() + $(window).height();
						var liPosition = $(".clientWrapper ul li:last").offset().top + $(".clientWrapper ul li:last").height();
						if(windowTop >= liPosition){
							console.log(1);
						}
					});
					console.log(v.imgurl);
					$(".clientWrapper ul").append('<li><img></li>');
					$(".clientWrapper ul li img:last").attr('src',v.imgurl);
					console.log(v.category);
				});
			});
		}

	});
});