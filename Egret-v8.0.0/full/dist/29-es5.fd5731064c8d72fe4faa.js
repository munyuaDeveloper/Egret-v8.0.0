(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{aH1m:function(t,e,n){t.exports=function(){"use strict";var t,e,n,l,o,r,i,s,u,a,c,d,f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p="bubble_default",h=window.Sizzle||null,m="undefined",v=!1,g=("undefined"==typeof jQuery?"undefined":f(jQuery))!==m,b=!1,w=!1,y=/^[a-zA-Z]+[a-zA-Z0-9_-]*$/,x={left:"right",right:"left"};try{f(window.sessionStorage)!==m&&(b=!0,sessionStorage.setItem("hopscotch.test.storage","ok"),sessionStorage.removeItem("hopscotch.test.storage"),w=!0)}catch(S){}return c={smoothScroll:!0,scrollDuration:1e3,scrollTopMargin:200,showCloseButton:!0,showPrevButton:!1,showNextButton:!0,bubbleWidth:280,bubblePadding:15,arrowWidth:20,skipIfNoElement:!0,isRtl:!1,cookieName:"hopscotch.tour.state"},Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),(s={addClass:function(t,e){var n,l,o,r;if(t.className){for(l=e.split(/\s+/),n=" "+t.className+" ",o=0,r=l.length;r>o;++o)n.indexOf(" "+l[o]+" ")<0&&(n+=l[o]+" ");t.className=n.replace(/^\s+|\s+$/g,"")}else t.className=e},removeClass:function(t,e){var n,l,o,r;for(l=e.split(/\s+/),n=" "+t.className+" ",o=0,r=l.length;r>o;++o)n=n.replace(" "+l[o]+" "," ");t.className=n.replace(/^\s+|\s+$/g,"")},hasClass:function(t,e){return!!t.className&&-1!==(" "+t.className+" ").indexOf(" "+e+" ")},getPixelValue:function(t){var e=void 0===t?"undefined":f(t);return"number"===e?t:"string"===e?parseInt(t,10):0},valOrDefault:function(t,e){return(void 0===t?"undefined":f(t))!==m?t:e},invokeCallbackArrayHelper:function(t){var e;return Array.isArray(t)&&"function"==typeof(e=a[t[0]])?e.apply(this,t.slice(1)):void 0},invokeCallbackArray:function(t){var e,n;if(Array.isArray(t)){if("string"==typeof t[0])return s.invokeCallbackArrayHelper(t);for(e=0,n=t.length;n>e;++e)s.invokeCallback(t[e])}},invokeCallback:function(t){return"function"==typeof t?t():"string"==typeof t&&a[t]?a[t]():s.invokeCallbackArray(t)},invokeEventCallbacks:function(t,e){var n,l,o=u[t];if(e)return this.invokeCallback(e);for(n=0,l=o.length;l>n;++n)this.invokeCallback(o[n].cb)},getScrollTop:function(){return f(window.pageYOffset)!==m?window.pageYOffset:document.documentElement.scrollTop},getScrollLeft:function(){return f(window.pageXOffset)!==m?window.pageXOffset:document.documentElement.scrollLeft},getWindowHeight:function(){return window.innerHeight||document.documentElement.clientHeight},addEvtListener:function(t,e,n){return t?t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n):void 0},removeEvtListener:function(t,e,n){return t?t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n):void 0},documentIsReady:function(){return"complete"===document.readyState},evtPreventDefault:function(t){t.preventDefault?t.preventDefault():event&&(event.returnValue=!1)},extend:function(t,e){var n;for(n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},getStepTargetHelper:function(t){var e=document.getElementById(t);if(e)return e;if(g)return(e=jQuery(t)).length?e[0]:null;if(h)return(e=new h(t)).length?e[0]:null;if(document.querySelector)try{return document.querySelector(t)}catch(n){}return/^#[a-zA-Z][\w-_:.]*$/.test(t)?document.getElementById(t.substring(1)):null},getStepTarget:function(t){var e;if(!t||!t.target)return null;if("string"==typeof t.target)return s.getStepTargetHelper(t.target);if(Array.isArray(t.target)){var n,l;for(n=0,l=t.target.length;l>n;n++)if("string"==typeof t.target[n]&&(e=s.getStepTargetHelper(t.target[n])))return e;return null}return t.target},getI18NString:function(t){return o[t]||l[t]},setState:function(t,e,n){var l,o="";if(b&&w)try{sessionStorage.setItem(t,e)}catch(r){w=!1,this.setState(t,e,n)}else b&&sessionStorage.removeItem(t),n&&((l=new Date).setTime(l.getTime()+24*n*60*60*1e3),o="; expires="+l.toGMTString()),document.cookie=t+"="+e+o+"; path=/"},getState:function(t){var e,n,l,o=t+"=",r=document.cookie.split(";");if(b&&(l=sessionStorage.getItem(t)))return l;for(e=0;e<r.length;e++){for(n=r[e];" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(o)){l=n.substring(o.length,n.length);break}}return l},clearState:function(t){b?sessionStorage.removeItem(t):this.setState(t,"",-1)},normalizePlacement:function(t){!t.placement&&t.orientation&&(t.placement=t.orientation)},flipPlacement:function(t){if(t.isRtl&&!t._isFlipped){var e,n,l=["orientation","placement"];for(n in t.xOffset&&(t.xOffset=-1*this.getPixelValue(t.xOffset)),l)t.hasOwnProperty(e=l[n])&&x.hasOwnProperty(t[e])&&(t[e]=x[t[e]]);t._isFlipped=!0}}}).addEvtListener(window,"load",function(){v&&d.startTour()}),u={next:[],prev:[],start:[],end:[],show:[],error:[],close:[]},a={},l={stepNums:null,nextBtn:"Next",prevBtn:"Back",doneBtn:"Done",skipBtn:"Skip",closeTooltip:"Close"},o={},(e=function(t){this.init(t)}).prototype={isShowing:!1,currStep:void 0,setPosition:function(t){var e,n,l,o,r,i,u,a=s.getStepTarget(t),c=this.element,d=this.arrowEl,f=t.isRtl?"right":"left";if(s.flipPlacement(t),s.normalizePlacement(t),n=c.offsetWidth,e=c.offsetHeight,s.removeClass(c,"fade-in-down fade-in-up fade-in-left fade-in-right"),l=a.getBoundingClientRect(),u=t.isRtl?l.right-n:l.left,"top"===t.placement)o=l.top-e-this.opt.arrowWidth,r=u;else if("bottom"===t.placement)o=l.bottom+this.opt.arrowWidth,r=u;else if("left"===t.placement)o=l.top,r=l.left-n-this.opt.arrowWidth;else{if("right"!==t.placement)throw new Error("Bubble placement failed because step.placement is invalid or undefined!");o=l.top,r=l.right+this.opt.arrowWidth}(i="center"!==t.arrowOffset?s.getPixelValue(t.arrowOffset):t.arrowOffset)?"top"===t.placement||"bottom"===t.placement?(d.style.top="",d.style[f]="center"===i?Math.floor(n/2-d.offsetWidth/2)+"px":i+"px"):("left"===t.placement||"right"===t.placement)&&(d.style[f]="",d.style.top="center"===i?Math.floor(e/2-d.offsetHeight/2)+"px":i+"px"):(d.style.top="",d.style[f]=""),"center"===t.xOffset?r=l.left+a.offsetWidth/2-n/2:r+=s.getPixelValue(t.xOffset),"center"===t.yOffset?o=l.top+a.offsetHeight/2-e/2:o+=s.getPixelValue(t.yOffset),t.fixedElement||(o+=s.getScrollTop(),r+=s.getScrollLeft()),c.style.position=t.fixedElement?"fixed":"absolute",c.style.top=o+"px",c.style.left=r+"px"},render:function(t,e,n){var l,o,i,u,a,c,f,h,m,v,g=this.element;if(t?this.currStep=t:this.currStep&&(t=this.currStep),this.opt.isTourBubble?(u=d.getCurrTour())&&(o=u.customData,l=u.customRenderer,t.isRtl=t.hasOwnProperty("isRtl")?t.isRtl:u.hasOwnProperty("isRtl")?u.isRtl:this.opt.isRtl,i=u.unsafe,Array.isArray(u.steps)&&(c=this._getStepI18nNum(this._getStepNum((a=u.steps.length)-1)),h=this._getStepNum(e)===this._getStepNum(a-1))):(o=t.customData,l=t.customRenderer,i=t.unsafe,t.isRtl=t.hasOwnProperty("isRtl")?t.isRtl:this.opt.isRtl),f=s.getI18NString(h?"doneBtn":t.showSkip?"skipBtn":"nextBtn"),s.flipPlacement(t),s.normalizePlacement(t),this.placement=t.placement,v={i18n:{prevBtn:s.getI18NString("prevBtn"),nextBtn:f,closeTooltip:s.getI18NString("closeTooltip"),stepNum:this._getStepI18nNum(this._getStepNum(e)),numSteps:c},buttons:{showPrev:s.valOrDefault(t.showPrevButton,this.opt.showPrevButton)&&this._getStepNum(e)>0,showNext:s.valOrDefault(t.showNextButton,this.opt.showNextButton),showCTA:s.valOrDefault(t.showCTAButton&&t.ctaLabel,!1),ctaLabel:t.ctaLabel,showClose:s.valOrDefault(this.opt.showCloseButton,!0)},step:{num:e,isLast:s.valOrDefault(h,!1),title:t.title||"",content:t.content||"",isRtl:t.isRtl,placement:t.placement,padding:s.valOrDefault(t.padding,this.opt.bubblePadding),width:s.getPixelValue(t.width)||this.opt.bubbleWidth,customData:t.customData||{}},tour:{isTour:this.opt.isTourBubble,numSteps:a,unsafe:s.valOrDefault(i,!1),customData:o||{}}},"function"==typeof l)g.innerHTML=l(v);else if("string"==typeof l){if(!d.templates||"function"!=typeof d.templates[l])throw new Error('Bubble rendering failed - template "'+l+'" is not a function.');g.innerHTML=d.templates[l](v)}else if(r)g.innerHTML=r(v);else{if(!d.templates||"function"!=typeof d.templates[p])throw new Error('Bubble rendering failed - template "'+p+'" is not a function.');g.innerHTML=d.templates[p](v)}var b,w=g.children,y=w.length;for(m=0;y>m;m++)s.hasClass(b=w[m],"hopscotch-arrow")&&(this.arrowEl=b);return g.style.zIndex="number"==typeof t.zindex?t.zindex:"",this._setArrow(t.placement),this.hide(!1),this.setPosition(t),n&&n(!t.fixedElement),this},_getStepNum:function(t){var e,n=0,l=d.getSkippedStepsIndexes(),o=l.length;for(e=0;o>e;e++)t>l[e]&&n++;return t-n},_getStepI18nNum:function(t){var e=s.getI18NString("stepNums");return e&&t<e.length?t=e[t]:t+=1,t},_setArrow:function(t){s.removeClass(this.arrowEl,"down up right left"),"top"===t?s.addClass(this.arrowEl,"down"):"bottom"===t?s.addClass(this.arrowEl,"up"):"left"===t?s.addClass(this.arrowEl,"right"):"right"===t&&s.addClass(this.arrowEl,"left")},_getArrowDirection:function(){return"top"===this.placement?"down":"bottom"===this.placement?"up":"left"===this.placement?"right":"right"===this.placement?"left":void 0},show:function(){var t=this,e="fade-in-"+this._getArrowDirection();return s.removeClass(this.element,"hide"),s.addClass(this.element,e),setTimeout(function(){s.removeClass(t.element,"invisible")},50),setTimeout(function(){s.removeClass(t.element,e)},1e3),this.isShowing=!0,this},hide:function(t){var e=this.element;return t=s.valOrDefault(t,!0),e.style.top="",e.style.left="",t?(s.addClass(e,"hide"),s.removeClass(e,"invisible")):(s.removeClass(e,"hide"),s.addClass(e,"invisible")),s.removeClass(e,"animate fade-in-up fade-in-down fade-in-right fade-in-left"),this.isShowing=!1,this},destroy:function(){var t=this.element;t&&t.parentNode.removeChild(t),s.removeEvtListener(t,"click",this.clickCb)},_handleBubbleClick:function(t){var e;if("cta"===(e=function e(n){return n===t.currentTarget?null:s.hasClass(n,"hopscotch-cta")?"cta":s.hasClass(n,"hopscotch-next")?"next":s.hasClass(n,"hopscotch-prev")?"prev":s.hasClass(n,"hopscotch-close")?"close":e(n.parentElement)}((t=t||window.event).target||t.srcElement)))this.opt.isTourBubble||d.getCalloutManager().removeCallout(this.currStep.id),this.currStep.onCTA&&s.invokeCallback(this.currStep.onCTA);else if("next"===e)d.nextStep(!0);else if("prev"===e)d.prevStep(!0);else if("close"===e){if(this.opt.isTourBubble){var n=d.getCurrStepNum()===d.getCurrTour().steps.length-1;s.invokeEventCallbacks("close"),d.endTour(!0,n)}else this.opt.onClose&&s.invokeCallback(this.opt.onClose),this.opt.id&&!this.opt.isTourBubble?d.getCalloutManager().removeCallout(this.opt.id):this.destroy();s.evtPreventDefault(t)}},init:function(t){var e,n,l,o=document.createElement("div"),r=this,i=!1;this.element=o,l={showPrevButton:c.showPrevButton,showNextButton:c.showNextButton,bubbleWidth:c.bubbleWidth,bubblePadding:c.bubblePadding,arrowWidth:c.arrowWidth,isRtl:c.isRtl,showNumber:!0,isTourBubble:!0},t=(void 0===t?"undefined":f(t))===m?{}:t,s.extend(l,t),this.opt=l,o.className="hopscotch-bubble animated",l.isTourBubble?(n=d.getCurrTour())&&s.addClass(o,"tour-"+n.id):s.addClass(o,"hopscotch-callout no-number"),s.addEvtListener(window,"resize",function(){!i&&r.isShowing&&(i=!0,setTimeout(function(){r.setPosition(r.currStep),i=!1},100))}),this.clickCb=function(t){r._handleBubbleClick(t)},s.addEvtListener(o,"click",this.clickCb),this.hide(),s.documentIsReady()?document.body.appendChild(o):(document.addEventListener?(e=function(){document.removeEventListener("DOMContentLoaded",e),window.removeEventListener("load",e),document.body.appendChild(o)},document.addEventListener("DOMContentLoaded",e,!1)):(e=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",e),window.detachEvent("onload",e),document.body.appendChild(o))},document.attachEvent("onreadystatechange",e)),s.addEvtListener(window,"load",e))}},n=function(){var t={},n={};this.createCallout=function(l){var o;if(!l.id)throw new Error("Must specify a callout id.");if(!y.test(l.id))throw new Error("Callout ID is using an invalid format. Use alphanumeric, underscores, and/or hyphens only. First character must be a letter.");if(t[l.id])throw new Error("Callout by that id already exists. Please choose a unique id.");if(!s.getStepTarget(l))throw new Error("Must specify existing target element via 'target' option.");return l.showNextButton=l.showPrevButton=!1,l.isTourBubble=!1,o=new e(l),t[l.id]=o,n[l.id]=l,o.render(l,null,function(){o.show(),l.onShow&&s.invokeCallback(l.onShow)}),o},this.getCallout=function(e){return t[e]},this.removeAllCallouts=function(){var e;for(e in t)t.hasOwnProperty(e)&&this.removeCallout(e)},this.removeCallout=function(e){var l=t[e];t[e]=null,n[e]=null,l&&l.destroy()},this.refreshCalloutPositions=function(){var e,l,o;for(e in t)t.hasOwnProperty(e)&&n.hasOwnProperty(e)&&(o=n[e],(l=t[e])&&o&&l.setPosition(o))}},t=function(t){var l,h,b,w,x,S,C,T,k=this,O={},E=[],N=function(t){return l&&l.element&&l.element.parentNode||(l=new e(b)),t&&s.extend(l.opt,{bubblePadding:B("bubblePadding"),bubbleWidth:B("bubbleWidth"),showNextButton:B("showNextButton"),showPrevButton:B("showPrevButton"),showCloseButton:B("showCloseButton"),arrowWidth:B("arrowWidth"),isRtl:B("isRtl")}),l},P=function(){l&&(l.destroy(),l=null)},B=function(t){return void 0===b?c[t]:s.valOrDefault(b[t],c[t])},A=function(){return!w||0>x||x>=w.steps.length?null:w.steps[x]},D=function(){k.nextStep()},L=function t(e,n){var l,o;x+e>=0&&x+e<w.steps.length?(x+=e,o=function(){s.getStepTarget(l)?(O[x]&&delete O[x],n(x)):(O[x]=!0,s.invokeEventCallbacks("error"),t(e,n))},(l=A()).delay?setTimeout(o,l.delay):o()):n(-1)},R=function(t,e){var n,l,o,r,i=N(),u=this;if(i.hide(),t=s.valOrDefault(t,!0),(n=A()).nextOnTargetClick&&s.removeEvtListener(s.getStepTarget(n),"click",D),l=n,r=function(n){var r;if(-1===n)return this.endTour(!0);if(t&&(r=e>0?s.invokeEventCallbacks("next",l.onNext):s.invokeEventCallbacks("prev",l.onPrev)),n===x){if(o)return void I();(r=s.valOrDefault(r,!0))?this.showStep(n):this.endTour(!1)}},!(o=e>0?l.multipage:x>0&&w.steps[x-1].multipage)&&B("skipIfNoElement"))L(e,function(t){r.call(u,t)});else if(x+e>=0&&x+e<w.steps.length){if(x+=e,n=A(),!s.getStepTarget(n)&&!o)return s.invokeEventCallbacks("error"),this.endTour(!0,!1);r.call(this,x)}else if(x+e===w.steps.length)return this.endTour();return this},F=function(t){function e(){l.show(),s.invokeEventCallbacks("show",n.onShow)}var n=w.steps[t],l=N(),o=s.getStepTarget(n);x!==t&&A().nextOnTargetClick&&s.removeEvtListener(s.getStepTarget(A()),"click",D),x=t,l.hide(!1),l.render(n,t,function(t){t?function(t){var e,n,l,o,r,i,u=N().element,a=s.getPixelValue(u.style.top),c=a+s.getPixelValue(u.offsetHeight),d=s.getStepTarget(A()).getBoundingClientRect(),p=d.top+s.getScrollTop(),h=d.bottom+s.getScrollTop(),v=p>a?a:p,b=c>h?c:h,w=s.getScrollTop(),y=w+s.getWindowHeight(),x=v-B("scrollTopMargin");v>=w&&(v<=w+B("scrollTopMargin")||y>=b)?t&&t():B("smoothScroll")?("undefined"==typeof YAHOO?"undefined":f(YAHOO))!==m&&f(YAHOO.env)!==m&&f(YAHOO.env.ua)!==m&&f(YAHOO.util)!==m&&f(YAHOO.util.Scroll)!==m?(e=YAHOO.env.ua.webkit?document.body:document.documentElement,l=YAHOO.util.Easing?YAHOO.util.Easing.easeOut:void 0,(n=new YAHOO.util.Scroll(e,{scroll:{to:[0,x]}},B("scrollDuration")/1e3,l)).onComplete.subscribe(t),n.animate()):g?jQuery("body, html").animate({scrollTop:x},B("scrollDuration"),t):(0>x&&(x=0),o=w>v?-1:1,r=Math.abs(w-x)/(B("scrollDuration")/10),(i=function(){var e=s.getScrollTop(),n=e+o*r;return o>0&&n>=x||0>o&&x>=n?(n=x,t&&t(),void window.scrollTo(0,n)):(window.scrollTo(0,n),s.getScrollTop()===e?void(t&&t()):void setTimeout(i,10))})()):(window.scrollTo(0,x),t&&t())}(e):e(),n.nextOnTargetClick&&s.addEvtListener(o,"click",D)}),I()},I=function(){var t=w.id+":"+x,e=d.getSkippedStepsIndexes();e&&e.length>0&&(t+=":"+e.join(",")),s.setState(B("cookieName"),t,1)};this.getCalloutManager=function(){return(void 0===h?"undefined":f(h))===m&&(h=new n),h},this.startTour=function(t,e){var n,l={},o=this;if(!w){if(!t)throw new Error("Tour data is required for startTour.");if(!t.id||!y.test(t.id))throw new Error("Tour ID is using an invalid format. Use alphanumeric, underscores, and/or hyphens only. First character must be a letter.");w=t,(function(t){var e,n,l,o={};for(e in t)t.hasOwnProperty(e)&&"id"!==e&&"steps"!==e&&(o[e]=t[e]);return T.call(this,o,!0),(n=s.getState(B("cookieName")))&&(l=n.split(":"),S=l[0],C=l[1],l.length>2&&(E=l[2].split(",")),C=parseInt(C,10)),this}).call(this,t)}if((void 0===e?"undefined":f(e))!==m){if(e>=w.steps.length)throw new Error("Specified step number out of bounds.");n=e}if(!s.documentIsReady())return v=!0,this;if(void 0===n&&w.id===S&&(void 0===C?"undefined":f(C))!==m){if(n=C,E.length>0)for(var r=0,i=E.length;i>r;r++)l[E[r]]=!0}else n||(n=0);return function(t,e,n){var l,o;if(x=t||0,O=e||{},l=A(),o=s.getStepTarget(l))n(x);else if(!o){if(s.invokeEventCallbacks("error"),O[x]=!0,B("skipIfNoElement"))return void L(1,n);n(x=-1)}}(n,l,function(t){return-1!==t&&s.getStepTarget(w.steps[t])?(s.invokeEventCallbacks("start"),N().hide(!1),o.isActive=!0,void(s.getStepTarget(A())?o.showStep(t):(s.invokeEventCallbacks("error"),B("skipIfNoElement")&&o.nextStep(!1)))):void o.endTour(!1,!1)}),this},this.showStep=function(t){var e=w.steps[t],n=x;return s.getStepTarget(e)?(e.delay?setTimeout(function(){F(t)},e.delay):F(t),this):(x=t,s.invokeEventCallbacks("error"),void(x=n))},this.prevStep=function(t){return R.call(this,t,-1),this},this.nextStep=function(t){return R.call(this,t,1),this},this.endTour=function(t,e){var n,l=N();return t=s.valOrDefault(t,!0),e=s.valOrDefault(e,!0),w&&(n=A())&&n.nextOnTargetClick&&s.removeEvtListener(s.getStepTarget(n),"click",D),x=0,C=void 0,l.hide(),t&&s.clearState(B("cookieName")),this.isActive&&(this.isActive=!1,w&&e&&s.invokeEventCallbacks("end")),this.removeCallbacks(null,!0),this.resetDefaultOptions(),P(),w=null,this},this.getCurrTour=function(){return w},this.getCurrTarget=function(){return s.getStepTarget(A())},this.getCurrStepNum=function(){return x},this.getSkippedStepsIndexes=function(){var t,e=[];for(t in O)e.push(t);return e},this.refreshBubblePosition=function(){var t=A();return t&&N().setPosition(t),this.getCalloutManager().refreshCalloutPositions(),this},this.listen=function(t,e,n){return t&&u[t].push({cb:e,fromTour:n}),this},this.unlisten=function(t,e){var n,l,o=u[t];for(n=0,l=o.length;l>n;++n)o[n].cb===e&&o.splice(n,1);return this},this.removeCallbacks=function(t,e){var n,l,o,r;for(r in u)if(!t||t===r)if(e)for(l=0,o=(n=u[r]).length;o>l;++l)n[l].fromTour&&(n.splice(l--,1),--o);else u[r]=[];return this},this.registerHelper=function(t,e){"string"==typeof t&&"function"==typeof e&&(a[t]=e)},this.unregisterHelper=function(t){a[t]=null},this.invokeHelper=function(t){var e,n,l=[];for(e=1,n=arguments.length;n>e;++e)l.push(arguments[e]);a[t]&&a[t].call(null,l)},this.setCookieName=function(t){return b.cookieName=t,this},this.resetDefaultOptions=function(){return b={},this},this.resetDefaultI18N=function(){return o={},this},this.getState=function(){return s.getState(B("cookieName"))},T=function(t,e){var n,l,r,i=["next","prev","start","end","show","error","close"];for(b||this.resetDefaultOptions(),s.extend(b,t),t&&s.extend(o,t.i18n),l=0,r=i.length;r>l;++l)t[n="on"+i[l].charAt(0).toUpperCase()+i[l].substring(1)]&&this.listen(i[l],t[n],e);return N(!0),this},this.configure=function(t){return T.call(this,t,!1)},this.setRenderer=function(t){var e=void 0===t?"undefined":f(t);return"string"===e?(p=t,r=void 0):"function"===e&&(r=t),this},this.setEscaper=function(t){return"function"==typeof t&&(i=t),this},(function(t){t&&this.configure(t)}).call(this,t)},d=new t,(function(){var t={escape:function(t){return i?i(t):null==t?"":(""+t).replace(new RegExp("[&<>\"']","g"),function(t){return"&"==t?"&amp;":"<"==t?"&lt;":">"==t?"&gt;":'"'==t?"&quot;":"'"==t?"&#x27;":void 0})}};this.templates=this.templates||{},this.templates.bubble_default=function(e){function n(e,n){return n?t.escape(e):e}var l,o="";Array,o+="\n";var r=e.i18n,i=e.buttons,s=e.step,u=e.tour;return o+='\n<div class="hopscotch-bubble-container" style="width: '+(null==(l=s.width)?"":l)+"px; padding: "+(null==(l=s.padding)?"":l)+'px;">\n  ',u.isTour&&(o+='<span class="hopscotch-bubble-number">'+(null==(l=r.stepNum)?"":l)+"</span>"),o+='\n  <div class="hopscotch-bubble-content">\n    ',""!==s.title&&(o+='<h3 class="hopscotch-title">'+(null==(l=n(s.title,u.unsafe))?"":l)+"</h3>"),o+="\n    ",""!==s.content&&(o+='<div class="hopscotch-content">'+(null==(l=n(s.content,u.unsafe))?"":l)+"</div>"),o+='\n  </div>\n  <div class="hopscotch-actions">\n    ',i.showPrev&&(o+='<button class="hopscotch-nav-button prev hopscotch-prev">'+(null==(l=r.prevBtn)?"":l)+"</button>"),o+="\n    ",i.showCTA&&(o+='<button class="hopscotch-nav-button next hopscotch-cta">'+(null==(l=i.ctaLabel)?"":l)+"</button>"),o+="\n    ",i.showNext&&(o+='<button class="hopscotch-nav-button next hopscotch-next">'+(null==(l=r.nextBtn)?"":l)+"</button>"),o+="\n  </div>\n  ",i.showClose&&(o+='<button class="hopscotch-bubble-close hopscotch-close">'+(null==(l=r.closeTooltip)?"":l)+"</button>"),o+'\n</div>\n<div class="hopscotch-bubble-arrow-container hopscotch-arrow">\n  <div class="hopscotch-bubble-arrow-border"></div>\n  <div class="hopscotch-bubble-arrow"></div>\n</div>\n'}}).call(d),d}()},gqjU:function(t,e,n){"use strict";n.r(e);var l=n("CcnG"),o=function(){return function(){}}(),r=n("pMnS"),i=n("21Lb"),s=n("OzfB"),u=n("lzlj"),a=n("FVSy"),c=n("bujt"),d=n("UodH"),f=n("lLAP"),p=n("wFw1"),h=n("Ip0R"),m=n("aH1m"),v=function(){function t(t){this.snackBar=t}return t.prototype.ngOnInit=function(){},t.prototype.ngOnDestroy=function(){m.endTour(!0)},t.prototype.tourSteps=function(){var t=this;return{id:"demo-tour",showPrevButton:!0,onEnd:function(){t.snackBar.open("User tour ended!","close",{duration:3e3})},onClose:function(){t.snackBar.open("You just closed User Tour!","close",{duration:3e3})},steps:[{title:"Step one",content:"This is step description.",target:"areaOne",placement:"left",xOffset:10},{title:"Define your steps",content:"This is step description.",target:document.querySelector("#areaOne code"),placement:"left",xOffset:0,yOffset:-10},{title:"Invoke startTour function",content:"This is step description.",target:document.querySelector("#areaTwo code"),placement:"left",xOffset:15,yOffset:-10}]}},t.prototype.startTour=function(){m.endTour(!0),m.startTour(this.tourSteps())},t}(),g=n("vARd"),b=l["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function w(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,46,"div",[["fxLayout","row wrap"]],null,null,null,null,null)),l["\u0275did"](1,671744,null,0,i.d,[l.ElementRef,s.j,[2,i.m],s.f],{fxLayout:[0,"fxLayout"]},null),(t()(),l["\u0275eld"](2,0,null,null,14,"div",[["fxFlex","100"],["fxFlex.gt-sm","33"],["fxFlex.sm","50"]],null,null,null,null,null)),l["\u0275did"](3,671744,null,0,i.b,[l.ElementRef,s.j,s.e,i.j,s.f],{fxFlex:[0,"fxFlex"],"fxFlex.sm":[1,"fxFlex.sm"],"fxFlex.gt-sm":[2,"fxFlex.gt-sm"]},null),(t()(),l["\u0275eld"](4,0,null,null,12,"mat-card",[["class","default mat-card"]],null,null,null,u.d,u.a)),l["\u0275did"](5,49152,null,0,a.a,[],null,null),(t()(),l["\u0275eld"](6,0,null,0,2,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),l["\u0275did"](7,16384,null,0,a.i,[],null,null),(t()(),l["\u0275ted"](-1,null,["Example User Tour"])),(t()(),l["\u0275eld"](9,0,null,0,2,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),l["\u0275did"](10,16384,null,0,a.h,[],null,null),(t()(),l["\u0275ted"](-1,null,["Click this button to start a demo Tour."])),(t()(),l["\u0275eld"](12,0,null,0,4,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),l["\u0275did"](13,16384,null,0,a.d,[],null,null),(t()(),l["\u0275eld"](14,0,null,null,2,"button",[["color","primary"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(t,e,n){var l=!0;return"click"===e&&(l=!1!==t.component.startTour()&&l),l},c.d,c.b)),l["\u0275did"](15,180224,null,0,d.b,[l.ElementRef,f.h,[2,p.a]],{color:[0,"color"]},null),(t()(),l["\u0275ted"](-1,0,["Start Tour"])),(t()(),l["\u0275eld"](17,0,null,null,18,"div",[["fxFlex","100"],["fxFlex.gt-sm","33"],["fxFlex.sm","50"]],null,null,null,null,null)),l["\u0275did"](18,671744,null,0,i.b,[l.ElementRef,s.j,s.e,i.j,s.f],{fxFlex:[0,"fxFlex"],"fxFlex.sm":[1,"fxFlex.sm"],"fxFlex.gt-sm":[2,"fxFlex.gt-sm"]},null),(t()(),l["\u0275eld"](19,0,null,null,16,"mat-card",[["class","default mat-card"],["id","areaOne"]],null,null,null,u.d,u.a)),l["\u0275did"](20,49152,null,0,a.a,[],null,null),(t()(),l["\u0275eld"](21,0,null,0,2,"mat-card-title",[["class","m-0 mat-card-title"]],null,null,null,null,null)),l["\u0275did"](22,16384,null,0,a.i,[],null,null),(t()(),l["\u0275ted"](-1,null,["Define your steps"])),(t()(),l["\u0275eld"](24,0,null,0,11,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),l["\u0275did"](25,16384,null,0,a.d,[],null,null),(t()(),l["\u0275eld"](26,0,null,null,9,"pre",[],null,null,null,null,null)),(t()(),l["\u0275ted"](-1,null,["        "])),(t()(),l["\u0275eld"](28,0,null,null,6,"code",[],[[4,"display",null]],null,null,null,null)),(t()(),l["\u0275ted"](29,null,["steps = ","\n        "])),l["\u0275pod"](30,{title:0,content:1,target:2,placement:3,xOffset:4}),l["\u0275pod"](31,{title:0,content:1,target:2,placement:3,xOffset:4}),l["\u0275pad"](32,2),l["\u0275pod"](33,{id:0,showPrevButton:1,steps:2}),l["\u0275pid"](0,h.JsonPipe,[]),(t()(),l["\u0275ted"](-1,null,["\n        "])),(t()(),l["\u0275eld"](36,0,null,null,10,"div",[["fxFlex","100"],["fxFlex.gt-sm","33"],["fxFlex.sm","50"]],null,null,null,null,null)),l["\u0275did"](37,671744,null,0,i.b,[l.ElementRef,s.j,s.e,i.j,s.f],{fxFlex:[0,"fxFlex"],"fxFlex.sm":[1,"fxFlex.sm"],"fxFlex.gt-sm":[2,"fxFlex.gt-sm"]},null),(t()(),l["\u0275eld"](38,0,null,null,8,"mat-card",[["class","default mat-card"],["id","areaTwo"]],null,null,null,u.d,u.a)),l["\u0275did"](39,49152,null,0,a.a,[],null,null),(t()(),l["\u0275eld"](40,0,null,0,2,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),l["\u0275did"](41,16384,null,0,a.i,[],null,null),(t()(),l["\u0275ted"](-1,null,["Initialize tour"])),(t()(),l["\u0275eld"](43,0,null,0,3,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),l["\u0275did"](44,16384,null,0,a.d,[],null,null),(t()(),l["\u0275eld"](45,0,null,null,1,"code",[],[[4,"display",null]],null,null,null,null)),(t()(),l["\u0275ted"](-1,null,[" hopscotch.startTour(this.steps) "]))],function(t,e){t(e,1,0,"row wrap"),t(e,3,0,"100","50","33"),t(e,15,0,"primary"),t(e,18,0,"100","50","33"),t(e,37,0,"100","50","33")},function(t,e){t(e,14,0,l["\u0275nov"](e,15).disabled||null,"NoopAnimations"===l["\u0275nov"](e,15)._animationMode),t(e,28,0,"block");var n=l["\u0275unv"](e,29,0,l["\u0275nov"](e,34).transform(t(e,33,0,"demo-tour",!0,t(e,32,0,t(e,30,0,"Step one","This is step description.","areaOne","left",10),t(e,31,0,"Step Two","This is step description.","areaTwo","left",15)))));t(e,29,0,n),t(e,45,0,"block")})}function y(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,1,"app-app-tour",[],null,null,null,w,b)),l["\u0275did"](1,245760,null,0,v,[g.b],null,null)],function(t,e){t(e,1,0)},null)}var x=l["\u0275ccf"]("app-app-tour",v,y,{},{},[]),S=n("Fzqc"),C=n("Wf4p"),T=n("ZYjt"),k=n("dWZg"),O=n("hUWP"),E=n("3pJQ"),N=n("V9q+"),P=n("ZYCi"),B={title:"User Tour"};n.d(e,"AppTourModuleNgFactory",function(){return A});var A=l["\u0275cmf"](o,[],function(t){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,x]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,h.NgLocalization,h.NgLocaleLocalization,[l.LOCALE_ID,[2,h["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](5120,l.APP_BOOTSTRAP_LISTENER,function(t,e){return[s.k(t,e)]},[h.DOCUMENT,l.PLATFORM_ID]),l["\u0275mpd"](1073742336,h.CommonModule,h.CommonModule,[]),l["\u0275mpd"](1073742336,S.a,S.a,[]),l["\u0275mpd"](1073742336,C.n,C.n,[[2,C.f],[2,T.f]]),l["\u0275mpd"](1073742336,a.g,a.g,[]),l["\u0275mpd"](1073742336,k.b,k.b,[]),l["\u0275mpd"](1073742336,C.y,C.y,[]),l["\u0275mpd"](1073742336,d.c,d.c,[]),l["\u0275mpd"](1073742336,s.c,s.c,[]),l["\u0275mpd"](1073742336,i.i,i.i,[]),l["\u0275mpd"](1073742336,O.d,O.d,[]),l["\u0275mpd"](1073742336,E.a,E.a,[]),l["\u0275mpd"](1073742336,N.a,N.a,[[2,s.h],l.PLATFORM_ID]),l["\u0275mpd"](1073742336,P.t,P.t,[[2,P.y],[2,P.p]]),l["\u0275mpd"](1073742336,o,o,[]),l["\u0275mpd"](1024,P.j,function(){return[[{path:"",component:v,data:B}]]},[])])})}}]);