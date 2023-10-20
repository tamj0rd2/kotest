"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[72312],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),u=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(r.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(r,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const o={id:"eventually",title:"Eventually",slug:"eventually.html"},l=void 0,s={unversionedId:"assertions/eventually",id:"version-5.7/assertions/eventually",title:"Eventually",description:"Starting with Kotest 5.7, the non-deterministic testing functions have moved to the kotest-assertions-core module, and",source:"@site/versioned_docs/version-5.7/assertions/eventually.md",sourceDirName:"assertions",slug:"/assertions/eventually.html",permalink:"/docs/assertions/eventually.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.7/assertions/eventually.md",tags:[],version:"5.7",frontMatter:{id:"eventually",title:"Eventually",slug:"eventually.html"},sidebar:"framework",previous:{title:"Nested Data Tests",permalink:"/docs/framework/datatesting/nested-tests.html"},next:{title:"Continually",permalink:"/docs/assertions/continually.html"}},r={},u=[{value:"API",id:"api",level:2},{value:"Configuration Options",id:"configuration-options",level:2},{value:"Durations and Intervals",id:"durations-and-intervals",level:3},{value:"Initial Delay",id:"initial-delay",level:3},{value:"Retries",id:"retries",level:3},{value:"Specifying the exceptions to trap",id:"specifying-the-exceptions-to-trap",level:3},{value:"Listeners",id:"listeners",level:3},{value:"Sharing configuration",id:"sharing-configuration",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"New improved module",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Starting with Kotest 5.7, the non-deterministic testing functions have moved to the ",(0,i.kt)("inlineCode",{parentName:"p"},"kotest-assertions-core")," module, and\nare available under the new package ",(0,i.kt)("inlineCode",{parentName:"p"},"io.kotest.assertions.nondeterministic"),". The previous iterations of these\nfunctions are still available, but deprecated.")),(0,i.kt)("p",null,"Testing non-deterministic code can be hard. You might need to juggle threads, timeouts, race conditions, and the\nunpredictability of when events are happening."),(0,i.kt)("p",null,"For example, if you were testing that an asynchronous file write was completed successfully, you need to wait until the\nwrite operation has completed and flushed to disk."),(0,i.kt)("p",null,"Some common approaches to these problems are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using callbacks which are invoked once the operation has completed. The callback can be then used to assert that the\nstate of the system is as we expect. But not all operations provide callback functionality.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Block the thread using ",(0,i.kt)("inlineCode",{parentName:"p"},"Thread.sleep")," or suspend a function using ",(0,i.kt)("inlineCode",{parentName:"p"},"delay"),", waiting for the operation to complete.\nThe sleep threshold needs to be set high enough to be sure the operations will have completed on a fast or slow\nmachine. Plus it means that your test will sit around waiting on the timeout even if\nthe code completes quickly on a fast machine.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use a loop with a sleep and retry and a sleep and retry, but then you need to write boilerplate to track number of\niterations, handle certain exceptions and fail on others, ensure the total time taken has not exceeded the max and so\non.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use countdown latches and block threads until the latches are released by the non-determistic operation. This can\nwork well if you are able to inject the latches in the appropriate places, but just like callbacks, it isn't always\npossible to have the code to be tested integrate with a latch."))),(0,i.kt)("p",null,"As an alternative to the above solutions, kotest provides the ",(0,i.kt)("inlineCode",{parentName:"p"},"eventually")," function which solves the common use case of\n",(0,i.kt)("em",{parentName:"p"},'"',(0,i.kt)("strong",{parentName:"em"},"I expect this code to pass after a short period of time"),'"'),"."),(0,i.kt)("p",null,"Eventually works by periodically invoking a given lambda, ignoring specified exceptions, until the lambda passes, or a\ntimeout is reached, or too many\niterations have passed. This is flexible and is perfect for testing nondeterministic code. Eventually can be customized\nwith regards to the types of exceptions to handle, how the lambda is considered a success or failure, with a listener,\nand so on."),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("p",null,"There are two ways to use eventually. The first is simply providing a duration, using the Kotlin ",(0,i.kt)("inlineCode",{parentName:"p"},"Duration")," type,\nfollowed by the code that should eventually pass without an exception being raised."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'eventually(5.seconds) {\n  userRepository.getById(1).name shouldBe "bob"\n}\n')),(0,i.kt)("p",null,"The second is by providing a config block. This method should be used when you need to\nset more options than just the duration. It also allows the config to be shared between multiple invocations of\neventually."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val config = eventuallyConfig {\n  duration = 1.seconds\n  interval = 100.milliseconds\n}\n\neventually(config) {\n  userRepository.getById(1).name shouldBe "bob"\n}\n')),(0,i.kt)("h2",{id:"configuration-options"},"Configuration Options"),(0,i.kt)("h3",{id:"durations-and-intervals"},"Durations and Intervals"),(0,i.kt)("p",null,"The duration is the total amount of time to keep trying to pass the test. The ",(0,i.kt)("inlineCode",{parentName:"p"},"interval")," allows us to\nspecify how often the test should be attempted. So if we set duration to 5 seconds, and interval to 250 millis,\nthen the test would be attempted at most ",(0,i.kt)("inlineCode",{parentName:"p"},"5000 / 250 = 20")," times."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val config = eventuallyConfig {\n  duration = 5.seconds\n  interval = 250.milliseconds\n}\n")),(0,i.kt)("p",null,"Alternatively, rather than specifying the interval as a fixed number, we can pass in a function. This allows us to\nperform some kind of backoff, or anything else we need."),(0,i.kt)("p",null,"For example, to use a fibonacci increasing interval, starting with 100ms:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val config = eventuallyConfig {\n  duration = 5.seconds\n  intervalFn = 100.milliseconds.fibonacci()\n}\n")),(0,i.kt)("h3",{id:"initial-delay"},"Initial Delay"),(0,i.kt)("p",null,"Usually ",(0,i.kt)("inlineCode",{parentName:"p"},"eventually")," starts executing the test block immediately, but we can add an initial delay before the first\niteration using ",(0,i.kt)("inlineCode",{parentName:"p"},"initialDelay"),", such as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val config = eventuallyConfig {\n  initialDelay = 1.seconds\n}\n")),(0,i.kt)("h3",{id:"retries"},"Retries"),(0,i.kt)("p",null,"In addition to bounding the number of invocations by time, we can do so by iteration count. In the following example\nwe retry the operation 10 times, or until 8 seconds has expired."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val config = eventuallyConfig {\n  initialDelay = 8.seconds\n  retries = 10\n}\n\neventually(config) {\n  userRepository.getById(1).name shouldBe "bob"\n}\n')),(0,i.kt)("h3",{id:"specifying-the-exceptions-to-trap"},"Specifying the exceptions to trap"),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"eventually")," will ignore any ",(0,i.kt)("inlineCode",{parentName:"p"},"AssertionError")," that is thrown inside the function (note, that means it won't\ncatch ",(0,i.kt)("inlineCode",{parentName:"p"},"Error"),"). If you want to be more specific, you can tell ",(0,i.kt)("inlineCode",{parentName:"p"},"eventually")," to ignore specific exceptions and any others\nwill immediately fail the test. We call these exceptions, the ",(0,i.kt)("em",{parentName:"p"},"expected exceptions"),"."),(0,i.kt)("p",null,"For example, when testing that a user should exist in the database, a ",(0,i.kt)("inlineCode",{parentName:"p"},"UserNotFoundException")," might be thrown\nif the user does not exist. We know that eventually that user will exist. But if an ",(0,i.kt)("inlineCode",{parentName:"p"},"IOException")," is thrown, we don't\nwant to keep retrying as this indicates a larger issue than simply timing."),(0,i.kt)("p",null,"We can do this by specifying that ",(0,i.kt)("inlineCode",{parentName:"p"},"UserNotFoundException")," is an exception to suppress."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val config = eventuallyConfig {\n  duration = 5.seconds\n  expectedExceptions = setOf(UserNotFoundException::class)\n}\n\neventually(config) {\n  userRepository.getById(1).name shouldBe "bob"\n}\n')),(0,i.kt)("p",null,"As an alternative to passing in a set of exceptions, we can provide a function which is invoked, passing in the throw\nexception. This function should return true if the exception should be ignored, or false if the exception should bubble\nout."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val config = eventuallyConfig {\n  duration = 5.seconds\n  expectedExceptions = { it is UserNotFoundException }\n}\n\neventually(config) {\n  userRepository.getById(1).name shouldBe "bob"\n}\n')),(0,i.kt)("h3",{id:"listeners"},"Listeners"),(0,i.kt)("p",null,"We can attach a listener, which will be invoked on each iteration, with the current iteration count and the\nexception that caused the iteration to fail. Note: The listener will not be fired on a successful invocation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val config = eventuallyConfig {\n  duration = 5.seconds\n  listener = { k, throwable -> println("Iteration $k, with cause $throwable") }\n}\n\neventually(config) {\n  userRepository.getById(1).name shouldBe "bob"\n}\n')),(0,i.kt)("h3",{id:"sharing-configuration"},"Sharing configuration"),(0,i.kt)("p",null,"Sharing the configuration for eventually is a breeze with the ",(0,i.kt)("inlineCode",{parentName:"p"},"eventuallyConfig"),' builder.\nSuppose you have classified the operations in your system to "slow" and "fast" operations. Instead of remembering\nwhich timing values were for slow and\nfast we can set up some objects to share between tests and customize them per suite. This is also a perfect time to show\noff the listener capabilities of ',(0,i.kt)("inlineCode",{parentName:"p"},"eventually")," which give you insight into the current value of the result of your\nproducer and the state of iterations!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val slow = eventuallyConfig {\n  duration = 5.minutes\n  interval = 25.milliseconds.fibonacci()\n  listener = { i, t -> logger.info("Current $i after {${t.times} attempts") }\n}\n\nval fast = slow.copy(duration = 5.seconds)\n\nclass FooTests : FunSpec({\n  test("server eventually provides a result for /foo") {\n    eventually(slow) {\n      fooApi()\n    }\n  }\n})\n\nclass BarTests : FunSpec({\n  test("server eventually provides a result for /bar") {\n    eventually(fast) {\n      barApi()\n    }\n  }\n})\n')))}c.isMDXComponent=!0}}]);