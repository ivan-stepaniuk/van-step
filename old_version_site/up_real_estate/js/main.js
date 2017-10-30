jQuery(document).ready(function($) {

	var btn_menu = $(".btn_menu_wrapper");
	var btn_filter = $(".btn_filter");

	btn_menu.on("click", function(){
		$(this).toggleClass("active");
		$(".main_menu").slideToggle(400);
	});

	btn_filter.on("click", function(){
		$(this).toggleClass("active");
		$(".filter_wrapper").slideToggle(400);
	});


	 $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 1000000,
      values: [ 200000, 500000 ],
      slide: function( event, ui ) {
        $('.min_price_label').html( Number(ui.values[ 0 ]).toLocaleString('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }));
        $('.max_price_label').html( Number(ui.values[ 1 ]).toLocaleString('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }));
      }
    });

});