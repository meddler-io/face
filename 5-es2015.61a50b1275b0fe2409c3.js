(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{EcHK:function(e,t,r){"use strict";r.d(t,"a",function(){return D});var s=r("mrSG"),n=r("fXoL"),i=r("ofXK");let o=class{constructor(){this.fileDropped=new n.y}onDragOver(e){e.preventDefault(),e.stopPropagation(),this.fileOver=!0}onDragLeave(e){e.preventDefault(),e.stopPropagation(),this.fileOver=!1}ondrop(e){e.preventDefault(),e.stopPropagation(),this.fileOver=!1;let t=e.dataTransfer.files;t.length>0&&this.fileDropped.emit(t)}};o.propDecorators={fileOver:[{type:n.A,args:["class.fileover"]}],fileDropped:[{type:n.U}],onDragOver:[{type:n.B,args:["dragover",["$event"]]}],onDragLeave:[{type:n.B,args:["dragleave",["$event"]]}],ondrop:[{type:n.B,args:["drop",["$event"]]}]},o=Object(s.a)([Object(n.u)({selector:"[appDnd]"})],o);let a=class{constructor(e,t,r){this.el=e,this.renderer=t,this.platformId=r}};a.ctorParameters=()=>[{type:n.v},{type:n.bb},{type:void 0,decorators:[{type:n.D,args:[n.W]}]}],a=Object(s.a)([Object(n.u)({selector:"[appEllipsis]"})],a);var l=r("fiuP");let u=class{constructor(e,t){this.el=e,this.renderer=t,this.color=l.a.getRandmColor,this.animate=!1,this.borderWith=4,this.borderWithDiff=2}ngOnInit(){console.log("animate",this.animate),console.log("appLeftBorder",this.color),this.renderer.setStyle(this.el.nativeElement,"border-left",`${this.borderWith}px solid ${this.color}`),this.renderer.setStyle(this.el.nativeElement,"margin-bottom","1px"),this.renderer.setStyle(this.el.nativeElement,"padding","10px"),this.renderer.setStyle(this.el.nativeElement,"color","#fff")}onMouseOver(){this.animate&&this.renderer.setStyle(this.el.nativeElement,"border-left",`${this.borderWith+this.borderWithDiff}px solid ${this.color}`)}onMouseOut(){this.renderer.setStyle(this.el.nativeElement,"border-left",`${this.borderWith}px solid ${this.color}`),this.renderer.setStyle(this.el.nativeElement,"margin-bottom","1px"),this.renderer.setStyle(this.el.nativeElement,"padding","10px")}};u.ctorParameters=()=>[{type:n.v},{type:n.bb}],u.propDecorators={color:[{type:n.I,args:["appLeftBorder"]}],animate:[{type:n.I,args:["animate"]}],borderWith:[{type:n.I,args:["width"]}],borderWithDiff:[{type:n.I,args:["widthDiff"]}],onMouseOver:[{type:n.B,args:["mouseover"]}],onMouseOut:[{type:n.B,args:["mouseleave"]}]},u=Object(s.a)([Object(n.u)({selector:"[appLeftBorder]"})],u);let c=class{constructor(e,t){this._el=e,this.renderer=t,this.el=this._el}onFocus(e){this.focussed=!0}onblur(e){this.focussed=!1}};c.ctorParameters=()=>[{type:n.v},{type:n.bb}],c.propDecorators={focussed:[{type:n.A,args:["class.focussed"]}],onFocus:[{type:n.B,args:["focus",["$event"]]}],onblur:[{type:n.B,args:["blur",["$event"]]}]},c=Object(s.a)([Object(n.u)({selector:"[onFocus]"})],c);let h=class{transform(e){return e?e.trim():""}};h=Object(s.a)([Object(n.Y)({name:"trim"})],h);let p=class{constructor(e,t){t.setStyle(e.nativeElement,"border","1px solid #3b4457"),t.setStyle(e.nativeElement,"border-radius","2px"),t.setStyle(e.nativeElement,"padding","10px"),t.setStyle(e.nativeElement,"margin","2px")}};p.ctorParameters=()=>[{type:n.v},{type:n.bb}],p=Object(s.a)([Object(n.u)({selector:"[appBorder]"})],p);let d=class{constructor(e,t){this.el=e,this.renderer=t,this.color="#3366ff"}ngOnInit(){this.renderer.setStyle(this.el.nativeElement,"background","none"),this.renderer.setStyle(this.el.nativeElement,"font-weight","100")}onMouseOver(){this.renderer.setStyle(this.el.nativeElement,"background",this.color),this.renderer.setStyle(this.el.nativeElement,"font-weight","650 !important")}onMouseOut(){this.renderer.setStyle(this.el.nativeElement,"background","none"),this.renderer.setStyle(this.el.nativeElement,"font-weight","100")}};d.ctorParameters=()=>[{type:n.v},{type:n.bb}],d.propDecorators={color:[{type:n.I,args:["hovercolor"]}],onMouseOver:[{type:n.B,args:["mouseover"]}],onMouseOut:[{type:n.B,args:["mouseleave"]}]},d=Object(s.a)([Object(n.u)({selector:"[appHoverColor]"})],d);var v=r("XNiG"),g=r("7o/Q"),b=r("D0XW"),f=r("zx2A");const m={leading:!0,trailing:!1};f.b;function y(e,t=b.a,r=m){return s=>s.lift(new O(e,t,r.leading,r.trailing))}class O{constructor(e,t,r,s){this.duration=e,this.scheduler=t,this.leading=r,this.trailing=s}call(e,t){return t.subscribe(new w(e,this.duration,this.scheduler,this.leading,this.trailing))}}class w extends g.a{constructor(e,t,r,s,n){super(e),this.duration=t,this.scheduler=r,this.leading=s,this.trailing=n,this._hasTrailingValue=!1,this._trailingValue=null}_next(e){this.throttled?this.trailing&&(this._trailingValue=e,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(E,this.duration,{subscriber:this})),this.leading?this.destination.next(e):this.trailing&&(this._trailingValue=e,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const e=this.throttled;e&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),e.unsubscribe(),this.remove(e),this.throttled=null)}}function E(e){const{subscriber:t}=e;t.clearThrottle()}let M=class{constructor(){this.debounceTime=500,this.debounceMouseOver=new n.y,this.mouseOver=new v.a,this.debounceMouseLeave=new n.y,this.mouseLeave=new v.a,this.debounceClick=new n.y,this.clicks=new v.a}ngOnInit(){this.subscription=this.clicks.pipe(y(this.debounceTime)).subscribe(e=>this.debounceClick.emit(e)),this.subscriptionMo=this.mouseOver.pipe(y(this.debounceTime)).subscribe(e=>this.debounceMouseOver.emit(e)),this.subscriptionMl=this.mouseLeave.pipe(y(this.debounceTime)).subscribe(e=>this.debounceMouseLeave.emit(e))}ngOnDestroy(){this.subscription.unsubscribe(),this.subscriptionMl.unsubscribe(),this.subscriptionMo.unsubscribe()}clickEvent(e){e.preventDefault(),e.stopPropagation(),this.clicks.next(e)}mouseleaveEvent(e){e.preventDefault(),e.stopPropagation(),this.mouseLeave.next(e)}mouseoverEvent(e){e.preventDefault(),e.stopPropagation(),this.mouseOver.next(e)}};M.ctorParameters=()=>[],M.propDecorators={debounceTime:[{type:n.I}],debounceMouseOver:[{type:n.U}],debounceMouseLeave:[{type:n.U}],debounceClick:[{type:n.U}],clickEvent:[{type:n.B,args:["click",["$event"]]}],mouseleaveEvent:[{type:n.B,args:["mouseleave",["$event"]]}],mouseoverEvent:[{type:n.B,args:["mouseover",["$event"]]}]},M=Object(s.a)([Object(n.u)({selector:"[appDebounceClick]"})],M);let S=class{constructor(e){this.host=e}ngAfterViewInit(){this.host.nativeElement.focus()}};S.ctorParameters=()=>[{type:n.v}],S=Object(s.a)([Object(n.u)({selector:"[autoFocus]"})],S);const k=[u,a,o,c,p,h,d,M];let D=class{};D=Object(s.a)([Object(n.N)({declarations:[...k,M,S],imports:[i.c],exports:[...k]})],D)},fiuP:function(e,t,r){"use strict";r.d(t,"a",function(){return v});var s=r("2Vo4"),n=null,i={};c("monochrome",null,[[0,0],[100,0]]),c("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),c("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),c("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),c("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),c("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),c("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),c("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]);var o=[];function a(e){if(void 0!==(e=e||{}).seed&&null!==e.seed&&e.seed===parseInt(e.seed,10))n=e.seed;else if("string"==typeof e.seed)n=function(e){for(var t=0,r=0;r!==e.length&&!(t>=Number.MAX_SAFE_INTEGER);r++)t+=e.charCodeAt(r);return t}(e.seed);else{if(void 0!==e.seed&&null!==e.seed)throw new TypeError("The seed value must be an integer or string");n=null}var t,r;if(null!==e.count&&void 0!==e.count){for(var s=e.count,c=[],v=0;v<e.count;v++)o.push(!1);for(e.count=null;s>c.length;){var g=a(e);null!==n&&(e.seed=n),c.push(g)}return e.count=s,c}return function(e,t){switch(t.format){case"hsvArray":return e;case"hslArray":return d(e);case"hsl":var r=d(e);return"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)";case"hsla":var s=d(e),n=t.alpha||Math.random();return"hsla("+s[0]+", "+s[1]+"%, "+s[2]+"%, "+n+")";case"rgbArray":return h(e);case"rgb":return"rgb("+h(e).join(", ")+")";case"rgba":var i=h(e);n=t.alpha||Math.random();return"rgba("+i.join(", ")+", "+n+")";default:return function(e){var t=h(e);function r(e){var t=e.toString(16);return 1==t.length?"0"+t:t}return"#"+r(t[0])+r(t[1])+r(t[2])}(e)}}([t=function(e){if(o.length>0){var t=u(n=function(e){if(isNaN(e)){if("string"==typeof e)if(i[e]){var t=i[e];if(t.hueRange)return t.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){return l(p(e)[0]).hueRange}}else{var r=parseInt(e);if(r<360&&r>0)return l(e).hueRange}}(e.hue)),r=(n[1]-n[0])/o.length,s=(t-n[0])/r;return!0===o[s]?s=(s+2)%o.length:o[s]=!0,(t=u(n=[(n[0]+s*r)%359,(n[0]+(s+1)*r)%359]))<0&&(t=360+t),t}var n;return(t=u(n=function(e){if("number"==typeof parseInt(e)){var t=parseInt(e);if(t<360&&t>0)return[t,t]}if("string"==typeof e)if(i[e]){var r=i[e];if(r.hueRange)return r.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var s=p(e)[0];return[s,s]}return[0,360]}(e.hue)))<0&&(t=360+t),t}(e),r=function(e,t){if("monochrome"===t.hue)return 0;if("random"===t.luminosity)return u([0,100]);var r=function(e){return l(e).saturationRange}(e),s=r[0],n=r[1];switch(t.luminosity){case"bright":s=55;break;case"dark":s=n-10;break;case"light":n=55}return u([s,n])}(t,e),function(e,t,r){var s=function(e,t){for(var r=l(e).lowerBounds,s=0;s<r.length-1;s++){var n=r[s][0],i=r[s][1],o=r[s+1][0],a=r[s+1][1];if(t>=n&&t<=o){var u=(a-i)/(o-n);return u*t+(i-u*n)}}return 0}(e,t),n=100;switch(r.luminosity){case"dark":n=s+20;break;case"light":s=(n+s)/2;break;case"random":s=0,n=100}return u([s,n])}(t,r,e)],e)}function l(e){for(var t in e>=334&&e<=360&&(e-=360),i){var r=i[t];if(r.hueRange&&e>=r.hueRange[0]&&e<=r.hueRange[1])return i[t]}return"Color not found"}function u(e){if(null===n){var t=Math.random();return t+=.618033988749895,t%=1,Math.floor(e[0]+t*(e[1]+1-e[0]))}var r=e[1]||1,s=e[0]||0,i=(n=(9301*n+49297)%233280)/233280;return Math.floor(s+i*(r-s))}function c(e,t,r){var s=r[0][0],n=r[r.length-1][0],o=r[r.length-1][1],a=r[0][1];i[e]={hueRange:t,lowerBounds:r,saturationRange:[s,n],brightnessRange:[o,a]}}function h(e){var t=e[0];0===t&&(t=1),360===t&&(t=359),t/=360;var r=e[1]/100,s=e[2]/100,n=Math.floor(6*t),i=6*t-n,o=s*(1-r),a=s*(1-i*r),l=s*(1-(1-i)*r),u=256,c=256,h=256;switch(n){case 0:u=s,c=l,h=o;break;case 1:u=a,c=s,h=o;break;case 2:u=o,c=s,h=l;break;case 3:u=o,c=a,h=s;break;case 4:u=l,c=o,h=s;break;case 5:u=s,c=o,h=a}return[Math.floor(255*u),Math.floor(255*c),Math.floor(255*h)]}function p(e){e=3===(e=e.replace(/^#/,"")).length?e.replace(/(.)/g,"$1$1"):e;var t=parseInt(e.substr(0,2),16)/255,r=parseInt(e.substr(2,2),16)/255,s=parseInt(e.substr(4,2),16)/255,n=Math.max(t,r,s),i=n-Math.min(t,r,s),o=n?i/n:0;switch(n){case t:return[(r-s)/i%6*60||0,o,n];case r:return[60*((s-t)/i+2)||0,o,n];case s:return[60*((t-r)/i+4)||0,o,n]}}function d(e){var t=e[0],r=e[1]/100,s=e[2]/100,n=(2-r)*s;return[t,Math.round(r*s/(n<1?n:2-n)*1e4)/100,n/2*100]}class v{static get Files(){return v.filesSubject}static get FormSchema(){return v.formSchemaSubject}static get getRandmColor(){return this.ColorSeed+=1,a({seed:this.ColorSeed})}}v.ColorSeed=1,v.filesSubject=new s.a([]),v.formSchemaSubject=new s.a(void 0)}}]);