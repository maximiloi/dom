$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		loop: true, //Зацикливаем слайдер
		dotsEach: true, //Показывает точки всех элементов
		center: true,
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



// // Отправка почты
// $("form[data-form='call']").submit(function () {
// 	let th = $(this);
// 	// let id = th.attr("data-modal-metrica");
// 	let submitBtn = th.children(".modal__btn");
// 	$.ajax({
// 		type: "POST",
// 		// url: "/send-contact.php",
// 		data: th.serialize(),
// 	}).done(function () {
// 		// отправка сообщения на почту
// 		submitBtn.disabled = true;
// 		$.ajax({
// 			type: "POST",
// 			url: "../php/send.php",
// 			data: th.serialize(),
// 		}).done(function () {
// 			// fbq('track', 'Lead', {
// 			// 	content_name: 'Отправка формы'
// 			// });
// 			// yaCounter39103920.reachGoal('form');
// 			setTimeout(function () {
// 				closeModal();
// 				document.querySelector("#modal-thx").classList.remove("_hidden");
// 				setTimeout(function () {
// 					document.querySelector("#modal-thx").classList.add("_hidden");
// 				}, 2500);
// 				return true;
// 			}, 1000);
// 			return true;
// 		});
// 		th.trigger("reset");
// 		return false;
// 	});
// 	return false;
// });


//update this with your js_form selector
var form_id_js = "javascript_form";

var data_js = {
	"access_token": "viwdbtqyzajf4ey5grbduc70"
};

function js_onSuccess() {
	// remove this to avoid redirect
	window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
}

function js_onError(error) {
	// remove this to avoid redirect
	window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
}

function timeOut() {
	console.log('таймоут');
	document.querySelector("#modal-thx").classList.remove("_hidden");
	setTimeout(function () {
		document.querySelector("#modal-thx").classList.add("_hidden");
	}, 3500);
}

var sendButton = document.getElementById("js_send");

function js_send() {
	sendButton.value = 'Sending…';
	sendButton.disabled = true;
	var request = new XMLHttpRequest();
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			js_onSuccess();
			timeOut();
		} else
			if (request.readyState == 4) {
				js_onError(request.response);
			}
	};

	var subject = document.querySelector("#" + form_id_js + " [name='user_name']").value;
	var message = document.querySelector("#" + form_id_js + " [name='user_phone']").value;
	data_js['subject'] = subject;
	data_js['text'] = message;
	var params = toParams(data_js);

	request.open("POST", "https://postmail.invotes.com/send", true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	request.send(params);

	return false;
}

sendButton.onclick = js_send;

function toParams(data_js) {
	var form_data = [];
	for (var key in data_js) {
		form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
	}

	return form_data.join("&");
}

var js_form = document.getElementById(form_id_js);
js_form.addEventListener("submit", function (e) {
	e.preventDefault();
});