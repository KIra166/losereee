"use strict";const timeouts=[],mobileAndTabletCheck=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);$(document).ready((()=>{const e=[{name:"@kir",link:"kir"},{name:"@mugen",link:"mugen"},{name:"@salmon",link:"salmon"},{name:"@yudai",link:"yudai"}];for(let a in e){let i=e[a];$("#marquee").append(`<a href="https://oguser.xyz/${i.link}" target="_BLANK">${i.name}</a>`),i=$("#marquee").children("a").last(),a!=e.length-1&&$("#marquee").append('  ♱  ')}/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&($("#background").replaceWith('<div id="background" style="background-image:(" ♱ ");"></div>'),app.shouldIgnoreVideo=!0)})),$.cookie("videoTime")&&(app.videoElement.currentTime=$.cookie("videoTime"),app.audioElement.currentTime=$.cookie("videoTime")),document.addEventListener("contextmenu",(e=>{e.preventDefault()})),document.body.onkeyup=e=>{if(32==e.keyCode&&app.skippedIntro)return app.backgroundToggler?(app.videoElement.play(),app.audioElement.play()):(app.videoElement.pause(),app.audioElement.pause()),app.backgroundToggler=!app.backgroundToggler},$(".skip").click((()=>{skipIntro()})),$.fn.extend({animateCss:function(e){return this.addClass(`animated ${e}`).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",(()=>{$(this).removeClass(`animated ${e}`)})),this}});const writeLine=(e,a,i,n)=>{i="number"==typeof i?i:[0,n=i];const t=2!==app.id?++app.id:app.id+=2;setTimeout((()=>{new Typed(`#line${t}`,{strings:e,typeSpeed:a,onComplete:n})}),i)},skipIntro=()=>{app.skippedIntro||(app.skippedIntro=!0,timeouts.forEach((e=>{clearTimeout(e)})),$(".top-right").remove(),$("#main").fadeOut(100,(()=>{$("#main").remove(),$("#marquee").marquee({duration:15e3,gap:420,delayBeforeStart:1e3,direction:"left",duplicated:!0}),setTimeout((()=>{$(".brand-header").animateCss(app.effects[Math.floor(Math.random()*app.effects.length)])}),200),setTimeout((()=>{new Typed("#brand",{strings:app.brandDescription,typeSpeed:60,onComplete:()=>{clearCursor()}})}),1350),setTimeout((()=>{app.shouldIgnoreVideo||(app.videoElement.play(),app.audioElement.play()),app.videoElement.addEventListener("timeupdate",(()=>{$.cookie("videoTime",app.videoElement.currentTime,{expires:1})}),!1),$(".marquee-container").css("visibility","visible").hide().fadeIn(100),$(".marquee-container").animateCss("zoomIn"),$(".container").fadeIn(),$(".background").fadeIn(200,(()=>{app.shouldIgnoreVideo||$("#audio").animate({volume:app.musicVolume},app.musicFadeIn)}))}),300)})))},clearCursor=()=>$("span").siblings(".typed-cursor").css("opacity","0");