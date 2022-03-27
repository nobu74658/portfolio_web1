'use strict'
{
  const sliderItem1 = document.getElementById('slider-item-1');
  const sliderItem2 = document.getElementById('slider-item-2');
  const sliderItem3 = document.getElementById('slider-item-3');
  const controllerbar = document.getElementById('controllerbar');
  const barNumber = document.getElementById('barNumber');  
  const button = document.getElementsByClassName('btn');
  const line = document.getElementsByClassName('line');
  const circle = document.getElementsByClassName('circle');
  
  for(let i=0; i < 7; i++){
    button[i].addEventListener('mouseover',()=>{
      button[i].classList.add('selected');
      line[i].firstElementChild.beginElement();
      circle[i].firstElementChild.beginElement();
    })
    button[i].addEventListener('mouseleave',()=>{
      button[i].classList.remove('selected');
    })
  }

  window.onload = function () {
    $('#keytext-effect').addClass('loaded');
    $('#keytext-up').addClass('loaded');
  }

  function sleep(waitSec, callbackFunc) {
    var spanedSec = 0;
    var id = setInterval(function () {
      spanedSec++;
      if (spanedSec >= waitSec) {
        clearInterval(id);
        if (callbackFunc) callbackFunc();
      }
    }, 100);
  }

  var bartimer = 1;
  for (let step = 0; step < 100; step++){
    const barstep = 5;
    const barfase = 1;
    sleep(bartimer*10, function(){
      sliderItem1.classList.add('zoomOut');
      barNumber.textContent = `01`;
      controllerbar.classList.add('barEffect');
    });
    bartimer += barstep;
    
    sleep(bartimer*10, function(){
      sliderItem1.classList.remove('zoomOut');      
      controllerbar.classList.remove('barEffect');
    })
    bartimer += barfase;
    
    sleep(bartimer*10, function(){
      sliderItem2.classList.add('zoomOut');
      barNumber.textContent = `02`;
      controllerbar.classList.add('barEffect');
    })
    bartimer += barstep;
    
    sleep(bartimer*10, function(){
      sliderItem2.classList.remove('zoomOut');
      controllerbar.classList.remove('barEffect');
    })
    bartimer += barfase;
    
    sleep(bartimer*10, function(){
      sliderItem3.classList.add('zoomOut');
      barNumber.textContent = `03`;
      controllerbar.classList.add('barEffect');
    })
    bartimer += barstep;
    
    sleep(bartimer*10, function(){
      sliderItem3.classList.remove('zoomOut');
      controllerbar.classList.remove('barEffect');
    })
    bartimer += barfase;
  }
  $(function() {
    $('.slider').slick({
      autoplay:true,
      speed:1000,
      autoplaySpeed:5000,
      fade:true,
      pauseOnFocus: false,
      pauseOnHover: false,
      arrows: false
    });
  });
  
  const keyTextEffect = document.getElementById('keytext-effect');
  const keystr = keyTextEffect.textContent;
  var strvisible1 = 1;
  var s = keystr.length;
  var a = 1;
  const strspan = 1;
  keyTextEffect.textContent = ``;
  for (let step = 0; step < s; step++){
    sleep(strvisible1, function(){
      keyTextEffect.textContent = keystr.slice(0,a);
      a += 1;
    });
    strvisible1 += strspan;
  }

  const humbergerChild = document.getElementsByClassName('humberger-child');
  
  $(window).on('scroll', function() {
    if ( 540 < jQuery(this).scrollTop() ) {
      $('#globalnav').addClass( 'changed' );
      humbergerChild[0].setAttribute('fill','#426ab8');
      humbergerChild[1].setAttribute('fill','#426ab8');
      humbergerChild[2].setAttribute('fill','#426ab8');
    } else {
      $( '#globalnav' ).removeClass( 'changed' );
      humbergerChild[0].setAttribute('fill','#fff');
      humbergerChild[1].setAttribute('fill','#fff');
      humbergerChild[2].setAttribute('fill','#fff');
    }
  });

  $(window).on('scroll', function() {
    if (400 < jQuery(this).scrollTop() ) {
      $('.who-effect').addClass('who-effect-on');
    }
  });
  
  const facTimeEffect = document.getElementById('fac-time-effect');  
  const facAtiveEffect = document.getElementById('fac-ative-effect');
  let time = 0;
  let count = 0
  
  $(window).on('scroll', function() {
    if (2000 < jQuery(this).scrollTop() ) {
      $('.fac-effect').addClass('fac-effect-on');
      if(time < 24){
        const timeUp = () => {
          facTimeEffect.textContent = `${time}`;
          time++;
        }
        const intervalIdTime = setInterval(() =>{
          timeUp();
          if(time > 24){
            clearInterval(intervalIdTime);
          }}, 200);
      } else {
        time = 24;
        facTimeEffect.textContent = `${time}`
      }
      
      if(count < 150000){
        const countUp = () => {
          facAtiveEffect.textContent = `${count}`;
          count += 150;
        }
        const intervalIdCount = setInterval(() =>{
          countUp();
          if(count > 150000){
            clearInterval(intervalIdCount);
          }}, 1);
        } else {
          count = 150000;
          facAtiveEffect.textContent = `${count}`
        }
      }
    });
    
    $(window).on('scroll', function() {
      if (2800 < jQuery(this).scrollTop() ) {
        $('.message-li').addClass('message-li-effect-on');
      }
    });
    
    $(window).on('scroll', function() {
      if (3600 < jQuery(this).scrollTop() ) {
        $('#news').addClass('news-effect-on');
      }
    });
    
    $(window).on('scroll', function() {
      if (4000 < jQuery(this).scrollTop() ) {
        $('#recruit-mask').addClass('recruit-effect-on');
        $('#recruit-text').addClass('recruit-effect-on');
      }
    });


  }