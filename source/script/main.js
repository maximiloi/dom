$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		loop: true, //Зацикливаем слайдер
		dotsEach: true, //Показывает точки всех элементов
		//center: true, // центрировать первый слайд
		margin: 25, //Отступ от элемента справа в 50px
		autoplay: false, //Автозапуск слайдера
		smartSpeed: 1000, //Время движения слайда
		autoplayTimeout: 5000, //Время смены слайда
		responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
			0: {
				nav: false, //Отключение навигации
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				nav: true, //Отключение навигации
				items: 3
			}
		}
	});

	$(".phone_mask").mask("+7(999)999-99-99"); // Маска телефона на инпуте

});

lightbox.option({
	'resizeDuration': 100,
	'wrapAround': true,
	'showImageNumberLabel': false,
})