(self.webpackChunkphpreel_org=self.webpackChunkphpreel_org||[]).push([[555],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||a;return n?i.createElement(d,o(o({ref:t},u),{},{components:n})):i.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5372:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),o=["components"],l={},p="Utilities",c={unversionedId:"components/utilities",id:"components/utilities",isDocsHomePage:!1,title:"Utilities",description:"Utilities::excerpt($text, $length, $trimMarker)",source:"@site/docs/components/utilities.md",sourceDirName:"components",slug:"/components/utilities",permalink:"/components/utilities",editUrl:"https://github.com/phpreel/developer.phpreel.org/docs/components/utilities.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Asset",permalink:"/components/asset"},next:{title:"Getting started with translation",permalink:"/translation/getting-started-with-translation"}},u=[{value:"Utilities::excerpt($text, $length, $trimMarker)",id:"utilitiesexcerpttext-length-trimmarker",children:[]},{value:"Utilities::pagination($content, $paginationFileName)",id:"utilitiespaginationcontent-paginationfilename",children:[]}],s={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"utilities"},"Utilities"),(0,a.kt)("h2",{id:"utilitiesexcerpttext-length-trimmarker"},"Utilities::excerpt($text, $length, $trimMarker)"),(0,a.kt)("p",null,"Returns an excerpt from a given input text."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$text")," Required, text to be excerpted "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$length")," Required, length of the returned string"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$trimMarker")," Required, string to be added after the chunk of text (e.g. if the trimMarker is ... then the returned string will end with ...)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'{{ Utilities::excerpt($longStringOfText, 200, "...") }}\n')),(0,a.kt)("h2",{id:"utilitiespaginationcontent-paginationfilename"},"Utilities::pagination($content, $paginationFileName)"),(0,a.kt)("p",null,"Renders the specified pagination file."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$content")," Required, content to be paginated"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$paginationFileName")," Required, name of the view file, situated in the pagination folder of the theme that holds the design and functionality information for the paginator")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'{{ Utilities::pagination($content, "basicPagination") }}\n')))}m.isMDXComponent=!0}}]);