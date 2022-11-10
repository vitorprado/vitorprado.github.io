"use strict";(self.webpackChunkvitor_prado=self.webpackChunkvitor_prado||[]).push([[691],{72:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,n=!1,r=0;r<e.length;r++){var i=e[r];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,n=a,a=!0,r++):a&&n&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,r-1)+"-"+e.slice(r-1),n=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,n=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},3723:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return w},P:function(){return E},S:function(){return _},_:function(){return s},a:function(){return o},b:function(){return c},g:function(){return A},h:function(){return l}});var n=a(7294),r=(a(72),a(5697)),i=a.n(r);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,a,n,r){return void 0===r&&(r={}),o({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},r,{opacity:t?1:0})})}function A(e,t,a,n,r,i,s,l){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var A=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return A}var d,u=["children"],m=function(e){var t=e.layout,a=e.width,r=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){var t=e.children,a=s(e,u);return n.createElement(n.Fragment,null,n.createElement(m,o({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],h=function(e){var t=e.src,a=e.srcSet,r=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,A=s(e,g);return n.createElement("img",o({},A,{decoding:"async",loading:r,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},y=function(e){var t=e.fallback,a=e.sources,r=void 0===a?[]:a,i=e.shouldLoad,l=void 0===i||i,c=s(e,f),A=c.sizes||(null==t?void 0:t.sizes),d=n.createElement(h,o({},c,t,{sizes:A,shouldLoad:l}));return r.length?n.createElement("picture",null,r.map((function(e){var t=e.media,a=e.srcSet,r=e.type;return n.createElement("source",{key:t+"-"+r+"-"+a,type:r,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:A})})),d):d};h.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},y.displayName="Picture",y.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};var v=["fallback"],E=function(e){var t=e.fallback,a=s(e,v);return t?n.createElement(y,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},a))};E.displayName="Placeholder",E.propTypes={fallback:r.string,sources:null==(d=y.propTypes)?void 0:d.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var w=function(e){return n.createElement(n.Fragment,null,n.createElement(y,o({},e)),n.createElement("noscript",null,n.createElement(y,o({},e,{shouldLoad:!0}))))};w.displayName="MainImage",w.propTypes=y.propTypes;var b,x,C=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),o=3;o<n;o++)r[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:i().object.isRequired,alt:C},B=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],S=new Set,I=function(e){var t=e.as,r=void 0===t?"div":t,i=e.image,c=e.style,A=e.backgroundColor,d=e.className,u=e.class,m=e.onStartLoad,p=e.onLoad,g=e.onError,f=s(e,B),h=i.width,y=i.height,v=i.layout,E=function(e,t,a){var n={},r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}(h,y,v),w=E.style,C=E.className,k=s(E,j),I=(0,n.useRef)(),N=(0,n.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);u&&(d=u);var O=function(e,t,a){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(v,h,y);return(0,n.useEffect)((function(){b||(b=Promise.all([a.e(774),a.e(217)]).then(a.bind(a,9217)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return x=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,n=I.current.querySelector("[data-gatsby-image-ssr]");return n&&l()?(n.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),n.addEventListener("load",(function e(){n.removeEventListener("load",e),null==p||p({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)}))),void S.add(N)):x&&S.has(N)?void 0:(b.then((function(a){var n=a.renderImageToString,r=a.swapPlaceholderImage;I.current&&(I.current.innerHTML=n(o({isLoading:!0,isLoaded:S.has(N),image:i},f)),S.has(N)||(e=requestAnimationFrame((function(){I.current&&(t=r(I.current,N,S,c,m,p,g))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,n.useLayoutEffect)((function(){S.has(N)&&x&&(I.current.innerHTML=x(o({isLoading:S.has(N),isLoaded:S.has(N),image:i},f)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[i]),(0,n.createElement)(r,o({},k,{style:o({},w,c,{backgroundColor:A}),className:C+(d?" "+d:""),ref:I,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},N=(0,n.memo)((function(e){return e.image?(0,n.createElement)(I,e):null}));N.propTypes=k,N.displayName="GatsbyImage";var O,L=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],T=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},R=new Set(["fixed","fullWidth","constrained"]),Q={src:i().string.isRequired,alt:C,width:T,height:T,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!R.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},_=(O=N,function(e){var t=e.src,a=e.__imageData,r=e.__error,i=s(e,L);return r&&console.warn(r),a?n.createElement(O,o({image:a},i)):(console.warn("Image not loaded",t),null)});_.displayName="StaticImage",_.propTypes=Q},4910:function(e,t,a){a.r(t),a.d(t,{Head:function(){return f},default:function(){return g}});var n=a(7294),r=a(3494),i=a(3163),o=a(3723),s=r.default.nav.withConfig({displayName:"NavBar__Bar",componentId:"sc-12hnu61-0"})(["flex:1;display:flex;background:",";align-items:center;justify-content:flex-start;padding:15px 15px;"],i.O.background),l=r.default.a.withConfig({displayName:"NavBar__Item",componentId:"sc-12hnu61-1"})(["display:inline-flex;text-decoration:none;color:",';font-family:"Exo",Helvetica,Arial,sans-serif;padding:10px 20px;border-color:',";border-radius:5px;border:"," 2px solid;font-weight:normal;background-color:transparent;opacity:0;animation:enter-animation ease 300ms 300ms;animation-iteration-count:1;animation-fill-mode:forwards;:hover{background-color:","44;transition:all 200ms ease-in;}:not(:hover){background-color:transparent;transition:all 300ms ease-in;}"],i.O.primaryFont,i.O.color3,i.O.color3,i.O.color3),c=r.default.a.withConfig({displayName:"NavBar__HomeContainer",componentId:"sc-12hnu61-2"})(["display:inline-flex;margin-right:auto;align-items:center;text-decoration:none;color:",";opacity:0;animation:enter-animation ease 300ms 0;animation-iteration-count:1;animation-fill-mode:forwards;:hover{color:",";transition:all 300ms ease-in;img{filter:brightness(1.3);transition:all 300ms ease-in;}}:not(:hover){color:",";transition:all 300ms ease-in;img{filter:brightness(1);transition:all 300ms ease-in;}}img{width:","px;height:","px;border-radius:",'px;:hover{opacity:0.5;}}h6{margin:0 15px;font-family:"Exo",Helvetica,Arial,sans-serif;font-size:22px;padding:0;}'],i.O.color3,i.O.primaryFont,i.O.color3,40,40,20);function A(){return n.createElement(c,{href:"#"},n.createElement(o.S,{src:"../images/profile.jpeg",alt:"Home",placeholder:"blurred",layout:"fixed",width:40,height:40,__imageData:a(5867)}),n.createElement("h6",null,"Vitor Prado"))}function d(){return n.createElement(s,null,n.createElement(A,null),n.createElement(l,{href:"resume.pdf"},"Resume"))}function u(e){var t=e.children;return n.createElement("main",null,n.createElement(d,null),t)}var m=r.default.section.withConfig({displayName:"Presentation__Container",componentId:"sc-1qef3p7-0"})(["flex:1;display:flex;align-items:flex-start;margin:0 auto;flex-direction:column;padding:80px;max-width:1000px;height:100%;h4{color:",';font-family:"Open Sans",Helvetica,Arial,sans-serif;font-weight:normal;padding:0;margin:0;opacity:0;animation:enter-animation ease 300ms 600ms;animation-iteration-count:1;animation-fill-mode:forwards;}h1{color:',';font-family:"Exo",Helvetica,Arial,sans-serif;font-size:60px;padding:0;margin:0;opacity:0;animation:enter-animation ease 300ms 750ms;animation-iteration-count:1;animation-fill-mode:forwards;}h2{color:',';font-family:"Exo",Helvetica,Arial,sans-serif;font-size:55px;padding:0;margin:-20px 0 0 0;opacity:0;animation:enter-animation ease 300ms 900ms;animation-iteration-count:1;animation-fill-mode:forwards;}p{color:',';font-family:"Open Sans",Helvetica,Arial,sans-serif;padding:0;margin:0;opacity:0;animation:enter-animation ease 300ms 1050ms;animation-iteration-count:1;animation-fill-mode:forwards;}'],i.O.color3,i.O.color6,i.O.primaryFont,i.O.primaryFont);function p(){return n.createElement(m,null,n.createElement("h4",null,"Hello, my name is"),n.createElement("h1",null,"Vitor Prado."),n.createElement("h2",null,"I solve problems through tecnology."),n.createElement("p",null,"I'm a Mobile and Backend developer based in Brazil with solid experience building entire systems from scratch. I've been working with code since 2012, helping businesses to solve their problems through technology.",n.createElement("br",null),"I have already worked with Android, iOS, Ruby, JavaScript/TypeScript, React Native, and KMM (Kotlin Multiplatform)."))}var g=function(){return n.createElement(u,null,n.createElement(p,null))},f=function(){return n.createElement("title",null,"Vitor Prado.")}},5867:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAIEAQMF/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAIDAQT/2gAMAwEAAhADEAAAAYYjWOi+1KbzBJogX//EABsQAAICAwEAAAAAAAAAAAAAAAECAxIAECEx/9oACAEBAAEFAvAD0qMkeqFmqkgK7//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABcRAAMBAAAAAAAAAAAAAAAAAAAQEkH/2gAIAQIBAT8B0l//xAAaEAACAgMAAAAAAAAAAAAAAAAAESExARAg/9oACAEBAAY/Aia1FjSwTx//xAAbEAEAAwEAAwAAAAAAAAAAAAABABEhMRBRcf/aAAgBAQABPyF6xCul7ljhKCxrkpwLM3sJqB+w8//aAAwDAQACAAMAAAAQb9e+/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAEQESExQf/aAAgBAwEBPxDmShaUf//EABgRAAIDAAAAAAAAAAAAAAAAAAExABAR/9oACAECAQE/EEE2Vf8A/8QAGxABAQEAAwEBAAAAAAAAAAAAAREAITFBYaH/2gAIAQEAAT8QswNUKFTG0onp+ZFfkYgRy08piBRVVW6D5TErXlfdWpWHme9//9k="},"images":{"fallback":{"src":"/static/852f07c60b079493c39d49c2e92cccbe/2f28c/profile.jpg","srcSet":"/static/852f07c60b079493c39d49c2e92cccbe/2f28c/profile.jpg 40w,\\n/static/852f07c60b079493c39d49c2e92cccbe/499f6/profile.jpg 80w","sizes":"40px"},"sources":[{"srcSet":"/static/852f07c60b079493c39d49c2e92cccbe/e73fe/profile.webp 40w,\\n/static/852f07c60b079493c39d49c2e92cccbe/61ca6/profile.webp 80w","type":"image/webp","sizes":"40px"}]},"width":40,"height":40}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-8ea3c8070f8a5e11b70f.js.map