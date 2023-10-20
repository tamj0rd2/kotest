"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[23432],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>k});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),d=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=d(r),k=a,N=u["".concat(p,".").concat(k)]||u[k]||m[k]||o;return r?n.createElement(N,l(l({ref:e},s),{},{components:r})):n.createElement(N,l({ref:e},s))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},92147:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const o={id:"arrow",title:"Arrow Generators",slug:"property-test-generators-arrow.html",sidebar_label:"Arrow Generators"},l=void 0,i={unversionedId:"proptest/arrow",id:"version-5.6/proptest/arrow",title:"Arrow Generators",description:"Kotest provides an optional module that provides generators for Arrow.",source:"@site/versioned_docs/version-5.6/proptest/arrow.md",sourceDirName:"proptest",slug:"/proptest/property-test-generators-arrow.html",permalink:"/docs/5.6/proptest/property-test-generators-arrow.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.6/proptest/arrow.md",tags:[],version:"5.6",frontMatter:{id:"arrow",title:"Arrow Generators",slug:"property-test-generators-arrow.html",sidebar_label:"Arrow Generators"},sidebar:"proptest",previous:{title:"Global Configuration",permalink:"/docs/5.6/proptest/property-test-global-config.html"},next:{title:"Kotlinx DateTime",permalink:"/docs/5.6/proptest/kotlinx-datetime-gens.html"}},p={},d=[],s={toc:d};function m(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Kotest provides an optional module that provides generators for ",(0,a.kt)("a",{parentName:"p",href:"https://arrow-kt.io"},"Arrow"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"To use, add ",(0,a.kt)("inlineCode",{parentName:"p"},"io.kotest.extensions:kotest-property-arrow:version"),"and ",(0,a.kt)("inlineCode",{parentName:"p"},"io.arrow-kt:arrow-core:arrow-version")," to your build.\nThis holds true for the optics module ",(0,a.kt)("inlineCode",{parentName:"p"},"kotest-property-arrow-optics"),", by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"io.arrow-kt:arrow-optics:arrow-version"),", too.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=kotest-property-arrow"},(0,a.kt)("img",{src:"https://img.shields.io/maven-central/v/io.kotest.extensions/kotest-property-arrow?label=latest%20release"}))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Generator"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Either")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Arb.either(arbL, arbR)")),(0,a.kt)("td",{parentName:"tr",align:null},"Generates approx 50/50 of left and right from the underlying generators.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Arb.right(arb)")),(0,a.kt)("td",{parentName:"tr",align:null},"Generates instances of ","[Either.Right]"," using the given arb.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Arb.left(arb)")),(0,a.kt)("td",{parentName:"tr",align:null},"Generates instances of ","[Either.Left]"," using the given arb.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"NonEmptyList")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Arb.nel(arb)")),(0,a.kt)("td",{parentName:"tr",align:null},"Generates NonEmptyList instances with a size randomly choosen between 1 and 100, with elements populated from the given arb.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Arb.nel(arb, range)")),(0,a.kt)("td",{parentName:"tr",align:null},"Generates NonEmptyList instances with a size randomly chosen from the given range, with elements populated from the given arb.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Option")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Exhaustive.option(a)")),(0,a.kt)("td",{parentName:"tr",align:null},"Returns an Exhaustive that contains a None and a Some with the given value.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Exhaustive.none(a)")),(0,a.kt)("td",{parentName:"tr",align:null},"Returns an Exhaustive that contains None.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Arb.option(arb)")),(0,a.kt)("td",{parentName:"tr",align:null},"Generates both None and Some with Some's populated with values from the given arb.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Arb.some(arb)")),(0,a.kt)("td",{parentName:"tr",align:null},"Generates Some's populated with values from the given arb.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Arb.none()")),(0,a.kt)("td",{parentName:"tr",align:null},"A constant arb that returns None. Equivalent to Exhaustive.None and provided only for use when an Arb is required.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Endo")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Arb.endo(arb)")),(0,a.kt)("td",{parentName:"tr",align:null},"Wraps values from the underlying arb in ",(0,a.kt)("inlineCode",{parentName:"td"},"Endo")," instances.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Eval")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Arb<A>.evalNow()")),(0,a.kt)("td",{parentName:"tr",align:null},"Wraps values from the receiver in ",(0,a.kt)("inlineCode",{parentName:"td"},"Eval.now"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Validated")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Arb.validated(invalid, valid)")),(0,a.kt)("td",{parentName:"tr",align:null},"Generates approx 50/50 of valid and invalid ",(0,a.kt)("inlineCode",{parentName:"td"},"Validated")," instances using the supplied arbs for values")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Arb.validatedNel(invalid, valid)")),(0,a.kt)("td",{parentName:"tr",align:null},"Generates approx 50/50 of valid and invalid ",(0,a.kt)("inlineCode",{parentName:"td"},"ValidatedNel")," instances using the supplied arbs for values")))))}m.isMDXComponent=!0}}]);