import{d as _,b as h,e as g}from"./index-07YbnE_a.js";const y="/vue-interactive-css/assets/iu_0--y0iHnfK.jpg",k="/vue-interactive-css/assets/iu_1-2VUqbUG7.jpg",A="/vue-interactive-css/assets/iu_2-4w95eoSQ.jpg",S=g('<article class="contentWrap"><section class="album active"><div class="disk"><div class="disk_inner"></div></div><a href="javascript:alert(1)" class="coverImg"><img src="'+y+'" alt=""></a></section><section class="album"><div class="disk"><div class="disk_inner"></div></div><a href="javascript:alert(1)" class="coverImg"><img src="'+k+'" alt=""></a></section><section class="album"><div class="disk"><div class="disk_inner"></div></div><a href="javascript:alert(1)" class="coverImg"><img src="'+A+'" alt=""></a></section></article><div class="buttonWrap"><button type="button">PREV</button><ul class="pointWrap"><li class="active"></li><li></li><li></li></ul><button type="button">NEXT</button></div>',2),W=_({__name:"recode1",setup(L){let d,v,e=0,i,a,c,o,l=new Array;return l[0]=["#0272a4","#f6a564"],l[1]=["red","black"],l[2]=["#b7c0c9","#285c5a"],h(()=>{d=document.querySelectorAll("button")[0],v=document.querySelectorAll("button")[1],c=document.querySelectorAll(".pointWrap li"),o=document.querySelector(".contentWrap"),i=document.querySelectorAll(".album"),a=i.length,d.addEventListener("click",function(){e>0?e--:e=a-1,n()}),v.addEventListener("click",function(){e<a-1?e++:e=0,n()});for(let t=0;t<c.length;t++)c[t].addEventListener("click",function(){e=t,n()});p()&&(o.addEventListener("touchstart",m,!1),o.addEventListener("touchend",m,!1));let u=0,r=0;n();function m(t){var s=null;switch(t.type){case"touchstart":s=t.changedTouches[0],u=s.clientX,r=0;break;case"touchend":s=t.changedTouches[0],r=s.clientX;var f=u-r,b=Math.abs(f);b>100&&(f<0?e>0?e--:e=a-1:e<a-1?e++:e=0,n());break}}function n(){for(let t=0;t<i.length;t++)i[t].classList.remove("active"),c[t].classList.remove("active");i[e].classList.add("active"),c[e].classList.add("active"),document.querySelectorAll(".disk_inner")[e].style.background=l[e][0]}function p(){let t=new Array("Android","iPhone","iPod","BlackBerry","Windows CE","SAMSUNG","LG","MOT","SonyEricsson");for(let s in t)if(navigator.userAgent.match(t[s])!=null)return!0;return!1}}),(u,r)=>S}});export{W as default};
