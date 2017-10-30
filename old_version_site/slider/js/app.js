jQuery(document).ready(function ($) {

	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
	$('#slider ul li:last-child').prependTo('#slider ul');

	function moveRight() {

		$('#slider ul li:nth-child(5)').animate({
			left: + slideWidth,
			opacity: '0',
		}, 800, function () {
			$('#slider ul li').css('left', '');
			$('#slider ul li:nth-child(2)').css('opacity', '1');
		});

		$('#slider ul li:nth-child(5) img').animate({
			width: + slideWidth * 1.1,
		}, 800, function () {
			$('#slider ul li img').css('width', 'auto');
		});

		$('#slider ul li:nth-child(2)').css('left', - slideWidth);
		$('#slider ul li:nth-child(2) img').css('width', slideWidth * 1.1);

		$('#slider ul li:nth-child(2)').animate({
			left: 0,
			opacity: '1',
		}, 800, function () {
			$('#slider ul li').css('left', '');
			$('#slider ul li:nth-child(2)').css('opacity', '1');
		});

		$('#slider ul li:nth-child(2) img').animate({
			width: '133px',
		}, 800, function () {
		});

		$('#slider ul').delay(800).animate({
			left: + slideWidth
		}, 1000, function () {
			$('#slider ul li:last-child').prependTo('#slider ul');
			$('#slider ul').css('left', '');
		});
	};

	function moveLeft() {

		$('#slider ul li:nth-child(3)').animate({
			left: - slideWidth * 2,
			opacity: '0',
		}, 800, function () {
			$('#slider ul li').css('left', '');
			$('#slider ul li:nth-child(6)').css('opacity', '1');
		});

		$('#slider ul li:nth-child(3) img').animate({
			width: + slideWidth * 1.1,
		}, 800, function () {
			$('#slider ul li img').css('width', 'auto');
		});

		$('#slider ul li:nth-child(6)').css('left', slideWidth * 2);
		$('#slider ul li:nth-child(6) img').css('width', slideWidth * 1.1);

		$('#slider ul li:nth-child(6)').animate({
			left: 0,
			opacity: '1',
		}, 800, function () {
			$('#slider ul li').css('left', '');
			$('#slider ul li:nth-child(3)').css('opacity', '0');
		});

		$('#slider ul li:nth-child(6) img').animate({
			width: '133px',
		}, 800, function () {
		});

		$('#slider ul').delay(800).animate({
			left: - slideWidth
		}, 1000, function () {
			$('#slider ul li:first-child').appendTo('#slider ul');
			$('#slider ul').css('left', '');
		});

	};

	$('a.control_prev').click(function () {
		moveLeft();
	});

	$('a.control_next').click(function () {
		moveRight();
	});

});    
