 //Header burger     
      let header__burger = document.querySelector('.burger');
        let header_menu = document.querySelector('.header__menu');
        let back = document.querySelector('body');


        header__burger.onclick = function(){
            header__burger.classList.toggle('active');
            header_menu.classList.toggle('active');
            back.classList.toggle('opens');
        }
//Header burger   
if($(window).innerWidth() <= 997) {
  $(".hide__btn").on("click", function () {
    $(".menu__item-change").removeClass("change__hover");
    $(".nav").removeClass("change__size");
    $(".hover__services").removeClass("show2");
   
  
  });
}
if($(window).innerWidth() <= 997) {
  $(".popup__special").on("click", function () {
    $(".menu__item-change").removeClass("change__hover");
    $(".nav").removeClass("change__size");
    $(".hover__services").removeClass("show2");
    $("body").removeClass("locked");
    $("body").removeClass("opens");
    $(".burger").removeClass("active");
    $(".nav").removeClass("active");
  
  });
}
if($(window).innerWidth() <= 997) {
  $(".burger").on("click", function () {
    $(".menu__item-change").removeClass("change__hover");
    $(".nav").removeClass("change__size");
    $(".hover__services").removeClass("show2");
   
  
  });
}
if($(window).innerWidth() <= 997) {
  $(".popup__services").on("click", function () {
    $(".menu__item-change").toggleClass("change__hover");
    $(".nav").toggleClass("change__size");
   
  
  });

  
}
//SCROLL
document.addEventListener("click", e => {
  let anchorlink = e.target.closest('a[href^="#"]');

  if (anchorlink) {
    e.preventDefault();
    let hashval = anchorlink.getAttribute('href')
    let target = document.querySelector(hashval)
    const yOffset = -100;
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });

    history.pushState(null, null, hashval)
    e.preventDefault();
  }
})
jQuery(function ($) {
  $(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".popup-content"); // тут указываем ID элемента
    if (!div.is(e.target)
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
      $(".popup-container").removeClass("show");
      $('body').removeClass('overlock');
    }
  });
});
jQuery(function ($) {
  $(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".popup-content"); // тут указываем ID элемента
    if (!div.is(e.target)
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
      $(".popup-container").removeClass("show");
      $('body').removeClass('locked');
    }
  });
});
// modal
$(".popup__special").on("click", function () {
  $(".hover__services").removeClass("show2");
  $('body').toggleClass('locked');

});
$(".popup1").on("click", function () {
  $(".hover1").toggleClass("show");
  $('body').toggleClass('overlock');

});
$(".close").on("click", function () {
  $(".hover1").removeClass("show");
  $('body').removeClass('overlock');

});

$(".popup__services").on("click", function () {
  $(".hover__services").toggleClass("show2");
  $('body').addClass('overlock');

});
$(".close__services").on("click", function () {
  $(".hover__services").removeClass("show2");
  $('body').removeClass('overlock');

});
$(".close").on("click", function () {
  $(".hover1").removeClass("show");
  $('body').removeClass('locked');

});
function removeCls() {
  $('.burger').removeClass('active');
  $('.nav').removeClass('active');
  $('body').removeClass('opens');
}

$('.form__first').submit(function (e) {
  let names = document.querySelector("#name");
  let phone = document.querySelector("#phone");
  let mail = document.querySelector("#mail");
  let description = document.querySelector("#description");
  let show = document.querySelector(".form1__btn");
  var empty = $(this).parent().find("input").filter(function () {
    return this.value === "";
  });
  if (!empty.length) {
    let message = `Заявка с сайта!\n`;
    message += ` Ім'я: ${names.value}\n`;
    message += `Телефон: ${phone.value}\n`;
    message += `Почта: ${mail.value}\n`;
    message += `Яке питання Вас цікавить?:${description.value}\n`;
    $.ajax({
		  type: "POST",
			url: "/forms",
      data: message, //Change
			 
		});
    show.classList.toggle("change");


    show.textContent = show.textContent.replace('Надіслати', 'Відправлено');
    setTimeout(function () {


      show.classList.remove('change');
      show.textContent = show.textContent.replace('Відправлено', 'Надіслати');
    }, 5000);
   
    $('body').addClass('overlock');
    //Если все графы заполнены, то показываем popup

    $('form input').removeClass('input_filled');
    //очищаем все данные текстовых полей, кроме кнопок
    $('form input').not(':button, :submit').val('');
    $('form textarea').not(':button, :submit').val('');
   

  }
  e.preventDefault();
});
const inputs = [...document.querySelectorAll('input')];

inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.value !== '') {
      input.classList.add('input_filled');
    } else {
      input.classList.remove('input_filled');
    }
  });
});



         
     
