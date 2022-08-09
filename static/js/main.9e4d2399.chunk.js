(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c,n=a(0),s=a(1),i=a.n(s),r=a(7),o=a.n(r),l=a(2),u=(a(14),function(e){var t=e.onQuizStart;return Object(n.jsx)("div",{className:"card",children:Object(n.jsx)("div",{className:"card-content",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("h1",{children:"Start the quiz"}),Object(n.jsx)("p",{children:"Good luck!"}),Object(n.jsx)("button",{className:"button is-info is-medium",onClick:t,children:"Start"})]})})})}),j=a(8),d=function(e){var t=e.data,a=e.onAnswerUpdate,c=e.numberOfQuestions,i=e.activeQuestion,r=e.onSetActiveQuestion,o=e.onSetStep,u=Object(s.useState)(""),d=Object(l.a)(u,2),h=d[0],b=d[1],O=Object(s.useState)(""),f=Object(l.a)(O,2),m=f[0],x=f[1],p=Object(s.useRef)();Object(s.useEffect)((function(){var e=p.current.querySelector("input:checked");e&&(e.checked=!1)}),[t]);var v=function(e){b(e.target.value),m&&x("")};return Object(n.jsx)("div",{className:"card",children:Object(n.jsx)("div",{className:"card-content",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("h2",{className:"mb-5",children:t.question}),Object(n.jsx)("div",{className:"control",ref:p,children:t.choices.map((function(e,t){return Object(n.jsxs)("label",{className:"radio has-background-light",children:[Object(n.jsx)("input",{type:"radio",name:"answer",value:e,onChange:v}),e]},t)}))}),m&&Object(n.jsx)("div",{className:"has-text-danger",children:m}),Object(n.jsx)("button",{className:"button is-link is-medium is-fullwidth mt-4",onClick:function(e){if(""===h)return x("Please select one option!");a((function(e){return[].concat(Object(j.a)(e),[{q:t.question,a:h}])})),b(""),i<c-1?r(i+1):o(3)},children:"Next"})]})})})},h=function(e){return e<60?e<10?"0".concat(e,"s"):"".concat(e,"s"):Math.floor(e/60)+"m"+e%60+"s"},b=function(e){var t=e.results,a=e.data,c=e.onReset,i=e.onAnswersCheck,r=e.time,o=Object(s.useState)(0),u=Object(l.a)(o,2),j=u[0],d=u[1];return Object(s.useEffect)((function(){var e=0;t.forEach((function(t,c){t.a===a[c].answer&&e++})),d(e)}),[]),Object(n.jsx)("div",{className:"card",children:Object(n.jsx)("div",{className:"card-content",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("h3",{children:"Your results"}),Object(n.jsxs)("p",{children:[j," of ",a.length]}),Object(n.jsx)("p",{children:Object(n.jsxs)("strong",{children:[Math.floor(j/a.length*100),"%"]})}),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"Your time:"})," ",h(r)]}),Object(n.jsx)("button",{className:"button is-info mr-2",onClick:i,children:"Check your answers"}),Object(n.jsx)("button",{className:"button is-success",onClick:c,children:"Try again"})]})})})},O=function(e){var t=e.onClose,a=e.results,c=e.data;return Object(n.jsxs)("div",{className:"modal is-active",children:[Object(n.jsx)("div",{className:"modal-background",onClick:t}),Object(n.jsxs)("div",{className:"modal-card",children:[Object(n.jsxs)("header",{className:"modal-card-head",children:[Object(n.jsx)("p",{className:"modal-card-title",children:"Your answers"}),Object(n.jsx)("button",{className:"delete",onClick:t})]}),Object(n.jsx)("section",{className:"modal-card-body content",children:Object(n.jsx)("ul",{children:a.map((function(e,t){return Object(n.jsxs)("li",{className:"mb-6",children:[Object(n.jsx)("p",{children:Object(n.jsx)("strong",{children:e.q})}),Object(n.jsxs)("p",{className:e.a===c[t].answer?"has-background-success has-text-white p-2":"has-background-danger has-text-white p-2",children:["Your answer: ",e.a]}),e.a!==c[t].answer&&Object(n.jsxs)("p",{className:"has-background-link has-text-white p-2",children:["Correct answer: ",c[t].answer]})]},t)}))})})]})]})},f=a(4),m=function(){var e=Object(s.useState)(1),t=Object(l.a)(e,2),a=t[0],i=t[1],r=Object(s.useState)(0),o=Object(l.a)(r,2),j=o[0],h=o[1],m=Object(s.useState)([]),x=Object(l.a)(m,2),p=x[0],v=x[1],g=Object(s.useState)(!1),N=Object(l.a)(g,2),S=N[0],w=N[1],k=Object(s.useState)(0),C=Object(l.a)(k,2),q=C[0],B=C[1];Object(s.useEffect)((function(){3===a&&clearInterval(c)}),[a]);return Object(n.jsxs)("div",{className:"App",children:[1===a&&Object(n.jsx)(u,{onQuizStart:function(){i(2),c=setInterval((function(){B((function(e){return e+1}))}),1e3)}}),2===a&&Object(n.jsx)(d,{data:f.data[j],onAnswerUpdate:v,numberOfQuestions:f.data.length,activeQuestion:j,onSetActiveQuestion:h,onSetStep:i}),3===a&&Object(n.jsx)(b,{results:p,data:f.data,onReset:function(){h(0),v([]),i(2),B(0),c=setInterval((function(){B((function(e){return e+1}))}),1e3)},onAnswersCheck:function(){return w(!0)},time:q}),S&&Object(n.jsx)(O,{onClose:function(){return w(!1)},results:p,data:f.data})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};a(15);o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),x()},4:function(e){e.exports=JSON.parse('{"data":[{"question":"What is the capital of Croatia ?","choices":["Split","Osijek","Zagreb","Rijeka"],"answer":"Zagreb"},{"question":"What is the capital of Slovenia ?","choices":["Celje","Ljubljana","Maribor","Koper"],"answer":"Ljubljana"},{"question":"What is the capital of Austria ?","choices":["Graz","Salzburg","Innsbruck","Vienna"],"answer":"Vienna"},{"question":"What is the capital of Serbia ?","choices":["Belgrade","Novi Sad","Ni\u0161","Subotica"],"answer":"Belgrade"},{"question":"What is the capital of Bosnia and Herzegovina ?","choices":["Mostar","Sarajevo","Banja Luka","Tuzla"],"answer":"Sarajevo"},{"question":"What is the capital of Hungary ?","choices":["Zalaegerszeg","Eger","Szeged","Budapest"],"answer":"Budapest"},{"question":"What is the capital of Slovakia ?","choices":["Ko\u0161ice","Nitra","Bratislava","Poprad"],"answer":"Bratislava"},{"question":"What is the capital of Romania ?","choices":["Bucharest","Craiova","Constanta","Braila"],"answer":"Bucharest"},{"question":"What is the capital of Germany ?","choices":["Wolfsburg","Munich","Berlin","Frankfurt"],"answer":"Berlin"}]}')}},[[16,1,2]]]);
//# sourceMappingURL=main.9e4d2399.chunk.js.map