(this.webpackJsonpproject2=this.webpackJsonpproject2||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('["1000","5000","15000","30000","100000","250000","500000","1000000","2500000","5000000"]')},,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,,function(e,t,a){e.exports=a(44)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),c=a.n(o);a(28),a(20),a(29);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(9),i=a(1),s=a(2),u=a(14),m=a.n(u);var d={getToken:function(){m.a.get("token")||fetch("https://opentdb.com/api_token.php?command=request").then((function(e){return e.json()})).then((function(e){m.a.set("token",e.token,{expires:.5})})).catch((function(e){console.error(e)}))},GetByCategory:function(){var e=window.location.href.split("id=").reverse()[0],t=Object(n.useState)(null),a=Object(s.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){localStorage.getItem("index")?o(JSON.parse(localStorage.getItem("questions"))):fetch("https://opentdb.com/api.php?amount=10&type=multiple&category="+e).then((function(e){return e.json()})).then((function(e){o(e.results),localStorage.setItem("questions",JSON.stringify(e.results)),localStorage.setItem("index",0)})).catch((function(e){console.error(e)}))}),[]),r},GetCategories:function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){fetch("https://opentdb.com/api_category.php").then((function(e){return e.json()})).then((function(e){r(e.trivia_categories)})).catch((function(e){console.error(e)}))}),[]),a},deleteLocalStorage:function(){localStorage.removeItem("index"),localStorage.removeItem("questions")},GetIndexCorrectAnswer:function(e){return JSON.parse(localStorage.getItem("questions"))[e].correct_answer}},f=(a(30),function(){return r.a.createElement(i.a,{to:{pathname:"/"}})}),E=function(e){if(localStorage.getItem("index")&&"false"===localStorage.getItem("boolIndex")){localStorage.setItem("boolIndex","true");var t=parseInt(localStorage.getItem("index"));localStorage.setItem("index",t+1)}return r.a.createElement(i.a,{to:{pathname:"/trivia",search:"?id="+e}})},g=function(e){return r.a.createElement(i.a,{to:{pathname:"/result",search:"?answer="+e}})},p=function(){return r.a.createElement(i.a,{to:{pathname:"win"}})},h=function(e){var t=e.categoryData,a=Object(n.useState)(!1),o=Object(s.a)(a,2),c=o[0],l=o[1];return c?E(t.id):r.a.createElement("div",{className:"categoryCard",onClick:function(){l(!0),localStorage.setItem("id",t.id)}},r.a.createElement("h2",null,t.name))},v=(a(36),a(37),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Do you want to play a game?")),r.a.createElement("div",{className:"heroContent"},r.a.createElement("p",null,"This a game similar to Who wants to be millionaire! Choose a category and let's start!"),r.a.createElement("button",null,"Game rules")))}),b=function(){var e=d.GetCategories();return d.deleteLocalStorage(),localStorage.setItem("boolIndex","false"),r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"home"},e.map((function(e){return r.a.createElement("div",{key:e.id,className:"categorieItem"},r.a.createElement(h,{categoryData:e}))}))))},w=(a(38),a(22)),y=(a(39),function(e){var t=e.question,a=Object(n.useState)([]),o=Object(s.a)(a,2),c=o[0],l=o[1],i=Object(n.useState)([]),u=Object(s.a)(i,2),m=u[0],d=u[1],f=Object(n.useState)(!1),E=Object(s.a)(f,2),h=E[0],v=E[1],b=[],y=parseInt(localStorage.getItem("index"));function S(e,t){return.5-Math.random()}Object(n.useEffect)((function(){t&&l(x())}),[]);var x=function(){return(b=Object(w.a)(t.incorrect_answers)).push(t.correct_answer),b=b.sort(S)};return h?m===t.correct_answer?9===y?p():g("correct"):g("incorrect"):c&&r.a.createElement("div",{className:"questionContainer"},r.a.createElement("h3",null,t.question),r.a.createElement("div",{className:"radioButtons",onChange:function(e){d(e.target.value)}},c.map((function(e,t){return r.a.createElement("div",{key:t,className:"radioButton"},r.a.createElement("input",{type:"radio",value:e,name:"option"})," ",e)}))),r.a.createElement("button",{onClick:function(){v(!0)}},"Final answer"))}),S=function(){var e=Object(n.useState)(300),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!1),l=Object(s.a)(c,2),u=l[0],m=l[1];return Object(n.useEffect)((function(){if(0!==a)setTimeout((function(){0!==a&&o(a-1)}),1e3);else m(!0)})),u?r.a.createElement(i.a,{to:{pathname:"/result",search:"?answer="}}):r.a.createElement("div",{className:"timerContainer"},r.a.createElement("h3",null,"Your time: ",a," seconds"))},x=(a(40),a(8)),j=function(){var e=localStorage.getItem("index");return r.a.createElement("div",{className:"prizeCard"},r.a.createElement("div",{className:"title"},r.a.createElement("h3",null,"Yor current reward")),r.a.createElement("div",{className:"0"===e?"actualPrizeText":"prizeText"},r.a.createElement("p",{className:"prizeText"},"0")),x.map((function(t,a){return r.a.createElement("div",{key:a,className:e===a+1?"actualPrizeText":"prizeText"},r.a.createElement("p",{className:!0},t))})))},I=function(){var e=window.location.href.split("id=").reverse()[0],t=Object(n.useState)(null),a=Object(s.a)(t,2),o=a[0],c=a[1],l=d.GetByCategory(e);return localStorage.setItem("boolIndex","false"),Object(n.useEffect)((function(){l&&c(l)}),[l]),o&&r.a.createElement("div",{className:"triviaContainer"},r.a.createElement("div",{className:"questionCard"},r.a.createElement(y,{question:o[localStorage.getItem("index")]})),r.a.createElement("div",{className:"extraItems"},r.a.createElement(S,null),r.a.createElement(j,null)))},O=(a(41),a(42),function(e){var t=e.resultData,a=Object(n.useState)(!1),o=Object(s.a)(a,2),c=o[0],l=o[1],i=Object(n.useState)(""),u=Object(s.a)(i,2),m=u[0],p=u[1],h="Try again!",v="Home",b=localStorage.getItem("id"),w=function(e){p(e),l(!0)};return c?"1"===m?("correct"===t.status||d.deleteLocalStorage(),E(b)):"correct"===t.status?g("retired"):(d.deleteLocalStorage(),f()):("correct"===t.status&&(h="Next question!",v="Give up!"),r.a.createElement("div",{className:"resultCard"},r.a.createElement("div",{className:"title"},r.a.createElement("h3",null,t.title)),r.a.createElement("div",{className:"textCard"},r.a.createElement("div",{className:"textCard_title"},r.a.createElement("h3",null,t.subtitle)),r.a.createElement("div",{className:"textCard_text"},r.a.createElement("p",null,t.correctAns),r.a.createElement("p",null,t.text))),r.a.createElement("div",{className:"cardButtons"}),r.a.createElement("button",{onClick:function(){w("1")}},h),r.a.createElement("button",{onClick:function(){w("2")}},v)))}),N=function(e){return x[e]},C=function(){var e=window.location.href.split("answer=").reverse()[0],t=parseInt(localStorage.getItem("index")),a=N(t),n={title:"",subTitle:"",correctAns:"Correct answer was: "+d.GetIndexCorrectAnswer(t),text:"",status:e};return"correct"===e?(n.title="You have answered correctly!",n.subtitle="Current reward",n.text="Your current reward is "+a+" dollars. Do you want to give up or keep playing?"):"incorrect"===e?(n.title="You have answered incorrectly!",n.subtitle="You lost",n.text="You have lost all your rewards. Try again!"):"retired"===e?(n.title="You have retired!",n.subtitle="You lost. But you can keep your current rewards!",n.text="You won "+a+" dollars! Try again!","0"===t&&(n.subtitle="You lost. And you didn\xb4t win any money!",n.text="Try again!")):(n.title="The time is up!",n.subtitle="You lost all your rewards!",n.text="Try again!","0"===t&&(n.subtitle="You lost. And you didn\xb4t lose any awards because you did not have any!")),n},k=function(){return r.a.createElement("div",{className:"results"},r.a.createElement(O,{resultData:C()}))},T=(a(43),function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],o=t[1],c=parseInt(localStorage.getItem("index")),l=N(c);return a?(d.deleteLocalStorage(),f()):r.a.createElement("div",{className:"winCard"},r.a.createElement("h3",{className:"wonTitle"},"You won!!!!!!"),r.a.createElement("p",null,"You have won ",l," dollars!!! You wanted to be millionaire, you are richer than the guy from monopoly"),r.a.createElement("button",{onClick:function(){o(!0)}},"Back to home"))});d.getToken(),c.a.render(r.a.createElement(l.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/"},r.a.createElement(b,null)),r.a.createElement(i.b,{path:"/trivia"},r.a.createElement(I,null)),r.a.createElement(i.b,{path:"/result"},r.a.createElement(k,null)),r.a.createElement(i.b,{path:"/win"},r.a.createElement(T,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.09aa7d5b.chunk.js.map