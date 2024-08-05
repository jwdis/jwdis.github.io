/**
 * WEBSITE: https://jwdis.com
 * FACEBOOK: https://www.facebook.com/jwdis
 * GITHUB: https://github.com/jwdis/
 */

!function(t){t.confetti=new function(){var n,o,i,r,s,t,l,a,h=150,c=[],d=0,u=!0,f=!0,m={colorOptions:["DodgerBlue","OliveDrab","Gold","pink","SlateBlue","lightblue","Violet","PaleGreen","SteelBlue","SandyBrown","Chocolate","Crimson"],colorIndex:0,colorIncrementer:0,colorThreshold:10,getColor:function(){return 10<=this.colorIncrementer&&(this.colorIncrementer=0,this.colorIndex++,this.colorIndex>=this.colorOptions.length)&&(this.colorIndex=0),this.colorIncrementer++,this.colorOptions[this.colorIndex]}};function w(t){var e,n;this.x=Math.random()*r,this.y=Math.random()*s-s,this.r=(e=10,n=30,Math.floor(Math.random()*(n-e+1)+e)),this.d=Math.random()*h+10,this.color=t,this.tilt=Math.floor(10*Math.random())-10,this.tiltAngleIncremental=.07*Math.random()+.05,this.tiltAngle=0,this.draw=function(){return i.beginPath(),i.lineWidth=this.r/2,i.strokeStyle=this.color,i.moveTo(this.x+this.tilt+this.r/4,this.y),i.lineTo(this.x+this.tilt,this.y+this.tilt+this.r/4),i.stroke()}}function v(){r=n.offsetWidth,s=n.offsetHeight,o.width=r,o.height=s}function y(t){a=setTimeout(function(){x()},t)}function M(){0==o.width&&0==o.height&&v(),o.style.display="block",f=!(c=[]);for(var t=0;t<h;t++){var e=m.getColor();c.push(new w(e))}r=n.offsetWidth,s=n.offsetHeight,o.width=r,o.height=s,function t(){if(f)return null;l=requestAnimFrame(t),i.clearRect(0,0,r,s);for(var e=[],n=0;n<h;n++){var o=n;e.push(c[o].draw())}return function(){var t,e=0;d+=.01,0;for(var n=0;n<h;n++){if(t=c[n],f)return;!u&&t.y<-15?t.y=s+100:(function(t,e){t.tiltAngle+=t.tiltAngleIncremental,t.y+=(Math.cos(d+t.d)+3+t.r/2)/2,t.x+=Math.sin(d),t.tilt=15*Math.sin(t.tiltAngle-e/3)}(t,n),t.y<=s&&e++,function(t,e){(t.x>r+20||t.x<-20||s<t.y)&&u&&(0<e%5||e%2==0?g(t,Math.random()*r,-10,Math.floor(10*Math.random())-10):0<Math.sin(d)?g(t,-5,Math.random()*s,Math.floor(10*Math.random())-10):g(t,r+5,Math.random()*s,Math.floor(10*Math.random())-10))}(t,n))}0===e&&p()}(),e}()}function g(t,e,n,o){t.x=e,t.y=n,t.tilt=o}function e(){clearTimeout(t),clearTimeout(l)}function x(){u=!1,e()}function p(){f=!0,null!=i&&(i.clearRect(0,0,r,s),o.style.display="none")}function q(){e(),p(),t=setTimeout(function(){f=!(u=!0),M()},100)}window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},this.init=function({selector:t,element:e}){if(!e&&!t)throw new Error("element or selector are required");!e&&t&&(e=document.querySelector(t)),(n=e)&&(n.innerHTML='<div style="position:relative;"><canvas id="confettiCanvas" style="position:absolute;top:0;left:0;display:none;z-index:99;"></canvas></div>'+n.innerHTML,null!==(o=document.getElementById("confettiCanvas"))&&""!==o&&(i=o.getContext("2d"),r=n.offsetWidth,s=n.offsetHeight,o.width=r,o.height=s,console.log("canvas criado")),null!==o&&""!==o&&(t={addEventListener(){}},(document.querySelector("#startConfetti")||t).addEventListener("click",M),(document.querySelector("#stopConfetti")||t).addEventListener("click",x),(document.querySelector("#restartConfetti")||t).addEventListener("click",q),y(6e3),n.addEventListener("mousemove",function(){clearTimeout(a),y(3e3),u||q()}),M(),window.addEventListener("resize",v)),setTimeout(()=>{v()},1e3))},this.start=M,this.stop=x,this.restart=q},t.confetti.init({selector:".box-confetti"})}(window);
function init(t){var i=document.createElement("div");i.innerHTML='<link rel="stylesheet" id="wdi-whatsapp-css" href="https://wdison.github.io/wdi/src/whatsapp/wdi.whatsapp.css" media="all">',i.setAttribute("id","wdi-whatsapp-container"),document.body.append(i),(e=document.createElement("script")).type="text/javascript",e.onload=function(){setTimeout(function(){_OnLoadWhatsApp(t)},1e3)},e.setAttribute("src","https://wdison.github.io/wdi/src/whatsapp/wdi.whatsapp.js"),document.body.append(e)}var nomeAtendente="JWdis",conf={phone:"5511983150718",textToSend:`Olá ${nomeAtendente}, tudo bem? Quero saber mais detalhes sobre seus serviços.`,textInit:"Enviar msg",tooltip:"Dúvidas? Fala comigo aqui!",title:"Equipe de Suporte",textChat:`Olá!<br>Sou ${nomeAtendente}<br>Como posso te ajudar?`};init(conf);
!function(i){AOS.init({once:!0}),i(window).on("scroll",function(){var o=i(".scroll-top-to");200<=i(window).scrollTop()?o.fadeIn(200):o.fadeOut(100)}),i(".scroll-top-to").on("click",function(){return i("body,html").animate({scrollTop:0},500),!1}),i(document).ready(function(){i(window).width()<992&&i(".main-nav .dropdown-toggle").on("click",function(){i(this).siblings(".dropdown-menu").animate({height:"toggle"},300)}),i(".testimonial-slider").slick({slidesToShow:2,infinite:!0,arrows:!1,autoplay:!0,autoplaySpeed:2e3,dots:!0,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}}]}),i(".video-box i").click(function(){var o='<iframe class="border-0" allowfullscreen src="'+i(this).attr("data-video")+'"></iframe>';i(this).replaceWith(o)}),i("#simple-timer")&&i("#simple-timer").syotimer({year:2023,month:9,day:1,hour:0,minute:0}),i(".about-slider").slick({slidesToShow:1,infinite:!0,arrows:!1,autoplay:!0,autoplaySpeed:2e3,dots:!0}),i(".quote-slider").slick({slidesToShow:1,infinite:!0,arrows:!1,autoplay:!0,autoplaySpeed:2e3,dots:!0}),i(".client-slider").slick({slidesToShow:4,infinite:!0,arrows:!1,autoplaySpeed:2e3,dots:!0,responsive:[{breakpoint:0,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:575,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:2}}]})})}(jQuery);
document.addEventListener("DOMContentLoaded",function(){new Swiper(".swiper",{modules:[materialEffect],effect:"material",materialEffect:{slideSplitRatio:.65},centeredSlides:!0,grabCursor:!0,slidesPerView:4,spaceBetween:16,speed:600,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{200:{slidesPerView:1},640:{slidesPerView:2},800:{slidesPerView:3},1100:{slidesPerView:4}}})});