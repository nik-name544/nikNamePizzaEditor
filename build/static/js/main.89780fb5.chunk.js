(this["webpackJsonpnik-name-pizza-editor2"]=this["webpackJsonpnik-name-pizza-editor2"]||[]).push([[0],{229:function(e,a,t){},230:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(27),c=t.n(l),m=(t(97),t(98),t(99),t(4)),i=t(5),s=t(3);function o(){var e=Object(s.c)((function(e){return e.toppings})),a=Object(s.c)((function(e){return e.total})),t=e.map((function(e,a){return r.a.createElement("li",{key:a,className:"order-list__ing"},e)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"order"},r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"order__header"},r.a.createElement("div",{className:"order__close-btn"})),r.a.createElement("div",{className:"order__ico "}),r.a.createElement("div",{className:"order__title"},"\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0437\u0430\u043a\u0430\u0437!"),r.a.createElement("div",{className:"order__text"},"\u0417\u0430\u043a\u0430\u0437 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u043f\u043b\u0430\u0447\u0435\u043d, \u0436\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u043f\u0438\u0446\u0446\u0443 \u0443\u0436\u0435 \u0447\u0435\u0440\u0435\u0437 \u0447\u0430\u0441"),r.a.createElement("div",{className:"order__btn "}),r.a.createElement("div",{className:"order-list__item"},r.a.createElement("div",{className:"order-list__item-top "},r.a.createElement("p",{className:"order-list__item-num"},"\u0417\u0430\u043a\u0430\u0437 2390"),r.a.createElement("p",{className:"order-list__item-state"},"21 \u043e\u043a\u0442\u044f\u0431\u0440\u044f 2020, 13:40")),r.a.createElement("div",{className:"order-list__item-mid"},r.a.createElement("p",{className:"order-list__item-title"},"\u041b\u0435\u043d\u0438\u0432\u0430\u044f \u041c\u0430\u0440\u0433\u0430\u0440\u0438\u0442\u0430"),r.a.createElement("div",{className:"order-list__item-text"},t)),r.a.createElement("div",{className:"order-list__item-bot"},r.a.createElement("p",{className:"order-list__item-paid"},a+180," \u0440\u0443\u0431 \u2022 \u043e\u043f\u043b\u0430\u0442\u0430 MC"),r.a.createElement("p",{className:"order-list__item-bot-state delivered"},"\u0414\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f"))))))}var u=t(20),p=t(7),d=t(30),E=p.b().shape({password:p.c().required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041f\u0430\u0440\u043e\u043b\u044c"),email:p.c().email("\u0441\u043e\u0431\u0430\u043a\u0430").required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 E-mail")});var f=function(){var e=Object(u.useForm)({resolver:Object(d.yupResolver)(E),mode:"onBlur"}),a=e.register,t=e.handleSubmit,n=(e.errors,e.watch,Object(s.c)((function(e){return e.registered})),Object(s.b)());return r.a.createElement("div",{className:"auth-form"},r.a.createElement("header",{className:"payment-form__header"},r.a.createElement(m.b,{to:"/pizza-editor-login",className:"payment-form__header-link"}),r.a.createElement("p",{className:"payment-form__title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")),r.a.createElement("section",{className:"auth-form"},r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"auth-form__form",onSubmit:t((function(e){n({type:"pizza/registered",payload:!0})}))},r.a.createElement("label",{className:"auth-form__label"},"E-mail",r.a.createElement("input",{type:"email",className:"auth-form__input",ref:a,name:"email"})),r.a.createElement("label",{className:"auth-form__label"},"\u041f\u0430\u0440\u043e\u043b\u044c",r.a.createElement("input",{type:"password",className:"auth-form__input",ref:a,name:"password"}),r.a.createElement("span",{className:"auth-form__wrong wrong"},"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c")),r.a.createElement("div",{className:"auth-form__btn-inner active"},r.a.createElement(m.b,{to:"/checkout",className:"auth-form__btn  active"},"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))))))},b=p.b().shape({password:p.c().min(7,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043c\u0438\u043d\u0438\u043c\u0443\u043c 7 \u0437\u043d\u0430\u043a\u043e\u0432").required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041f\u0430\u0440\u043e\u043b\u044c"),email:p.c().email("\u0441\u043e\u0431\u0430\u043a\u0430").required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 E-mail")});var _=function(){var e=Object(u.useForm)({resolver:Object(d.yupResolver)(b),mode:"onBlur"}),a=e.register,t=e.handleSubmit,n=e.errors,l=(e.watch,Object(s.c)((function(e){return e.registered}))),c=Object(s.b)(),i=function(e){c({type:"pizza/registered",payload:!0})};return r.a.createElement("div",{className:"auth-form"},r.a.createElement("header",{className:"payment-form__header"},r.a.createElement(m.b,{to:"/pizza-editor-login",className:"payment-form__header-link"}," "),r.a.createElement("p",{className:"payment-form__title"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f")),r.a.createElement("section",{className:"auth-form"},r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"auth-form__form",onSubmit:t(i)},r.a.createElement("label",{className:"auth-form__label"},"E-mail",r.a.createElement("input",{type:"email",className:"auth-form__input",ref:a,name:"email"}),n.email&&r.a.createElement("p",null,n.email.message)),r.a.createElement("label",{className:"auth-form__label"},"\u041f\u0430\u0440\u043e\u043b\u044c",r.a.createElement("input",{type:"password",className:"auth-form__input",ref:a,name:"password"}),n.password&&r.a.createElement("p",null,n.password.message),r.a.createElement("span",{className:"auth-form__wrong wrong"},"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c")),r.a.createElement("div",{className:"auth-form__btn-inner active"},r.a.createElement(m.b,{to:function(){return l?"/login":"/order-list"},className:"auth-form__btn  active",onClick:i},"\u0412\u043e\u0439\u0442\u0438"))))))},h=t(2),g=t(54);function v(){var e=Object(s.c)((function(e){return e.orderList})),a=Object(s.c)((function(e){return e.total})),t=Object(s.c)((function(e){return e.servAnswer})),n=function(){return Object(h.a)(e[2]).map((function(e,a){return r.a.createElement("li",{key:a,className:"order-list__ing"},e)}))};if(t.isError)return r.a.createElement(r.a.Fragment,null,"Error: ",JSON.stringify(t.error));if(t.isLoading)return r.a.createElement(r.a.Fragment,null,"Loading...");n();var l=n()||"name";return r.a.createElement("div",{className:"order-list"},r.a.createElement("header",{className:"payment-form__header"},r.a.createElement(m.b,{to:"/",className:"payment-form__header-link"}),r.a.createElement("p",{className:"payment-form__title"},"\u0417\u0430\u043a\u0430\u0437\u044b")),r.a.createElement("div",{className:"order-list__wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"order-list__item"},r.a.createElement("div",{className:"order-list__item-top delivered"},r.a.createElement("p",{className:"order-list__item-num"},"\u0417\u0430\u043a\u0430\u0437 2390"),r.a.createElement("p",{className:"order-list__item-state"},"21 \u043e\u043a\u0442\u044f\u0431\u0440\u044f 2020, 13:40 \u2022 \u0414\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d")),r.a.createElement("div",{className:"order-list__item-mid"},r.a.createElement("p",{className:"order-list__item-title"},"\u041b\u0435\u043d\u0438\u0432\u0430\u044f \u041c\u0430\u0440\u0433\u0430\u0440\u0438\u0442\u0430"),r.a.createElement("div",{className:"order-list__item-text"},l)),r.a.createElement("div",{className:"order-list__item-bot"},r.a.createElement("p",{className:"order-list__item-paid"},a," \u0440\u0443\u0431 \u2022 \u043e\u043f\u043b\u0430\u0442\u0430 MC *2345"),r.a.createElement("p",{className:"order-list__item-bot-state delivered"},"\u0414\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f"))),r.a.createElement("div",{className:"order-list__item"},r.a.createElement("div",{className:"order-list__item-top "},r.a.createElement("p",{className:"order-list__item-num"},"\u0417\u0430\u043a\u0430\u0437 2390"),r.a.createElement("p",{className:"order-list__item-state"},"21 \u043e\u043a\u0442\u044f\u0431\u0440\u044f 2020, 13:40")),r.a.createElement("div",{className:"order-list__item-mid"},r.a.createElement("p",{className:"order-list__item-title"},"\u041b\u0435\u043d\u0438\u0432\u0430\u044f \u041c\u0430\u0440\u0433\u0430\u0440\u0438\u0442\u0430"),r.a.createElement("div",{className:"order-list__item-text"},l)),r.a.createElement("div",{className:"order-list__item-bot"},r.a.createElement("p",{className:"order-list__item-paid"},a," \u0440\u0443\u0431 \u2022 \u043e\u043f\u043b\u0430\u0442\u0430 MC"),r.a.createElement("p",{className:"order-list__item-bot-state "},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"))),r.a.createElement("div",{className:"order-list__item"},r.a.createElement("div",{className:"order-list__item-top "},r.a.createElement("p",{className:"order-list__item-num"},"\u0417\u0430\u043a\u0430\u0437 2390"),r.a.createElement("p",{className:"order-list__item-state"},"21 \u043e\u043a\u0442\u044f\u0431\u0440\u044f 2020, 13:40")),r.a.createElement("div",{className:"order-list__item-mid"},r.a.createElement("p",{className:"order-list__item-title"},"\u041b\u0435\u043d\u0438\u0432\u0430\u044f \u041c\u0430\u0440\u0433\u0430\u0440\u0438\u0442\u0430"),r.a.createElement("div",{className:"order-list__item-text"},l)),r.a.createElement("div",{className:"order-list__item-bot"},r.a.createElement("p",{className:"order-list__item-paid"},a," \u0440\u0443\u0431 \u2022 \u043e\u043f\u043b\u0430\u0442\u0430 MC"),r.a.createElement("p",{className:"order-list__item-bot-state "},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"))))))}var y=p.b().shape({address:p.c().required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441"),entrance:p.a().transform((function(e,a){return""===a?void 0:e})).typeError("\u043d\u043e\u043c\u0435\u0440 \u043f\u043e\u0434\u044a\u0435\u0437\u0434\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c").required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u043f\u043e\u0434\u044a\u0435\u0437\u0434\u0430"),floor:p.a().transform((function(e,a){return""===a?void 0:e})).typeError("\u044d\u0442\u0430\u0436 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c").required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u044d\u0442\u0430\u0436"),apartment:p.a().transform((function(e,a){return""===a?void 0:e})).typeError("\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c").required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u044b"),cardNumber:p.a().transform((function(e,a){return""===a?void 0:e})).typeError("\u043d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c").required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b"),month:p.a().transform((function(e,a){return""===a?void 0:e})).typeError("\u0434\u0430\u0442\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c").required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443"),CVV:p.a().transform((function(e,a){return""===a?void 0:e})).typeError("CVV \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c").required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 CVV"),name:p.c().required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043a\u0430\u043a \u043d\u0430 \u043a\u0430\u0440\u0442\u0435")});var N=function(){var e=Object(u.useForm)({resolver:Object(d.yupResolver)(y),mode:"onBlur"}),a=e.register,t=e.handleSubmit,n=e.errors,l=(0,e.watch)(),c=Object(s.b)(),i=Object(s.c)((function(e){return e.toppings})),o=Object(s.c)((function(e){return e.orderList})),p={address:l.address,entrance:l.entrance,floor:l.floor,apartment:l.apartment},E=l.cardNumber,f=l.address,b=Object(s.c)((function(e){return e.total})),_=function(e){c({type:"pizza/cardNum",payload:l.cardNumber}),c({type:"pizza/address",payload:p}),c({type:"pizza/orderList",payload:[E,f,i,"PizzaName"]}),function(e){fetch("http://localhost:4000/orders",{method:"POST",body:JSON.stringify({name:e[3],ingredients:e[2],address:e[1],card_number:e[0]}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()}))}(o)},h=i.map((function(e,a){return r.a.createElement("li",{key:a,className:"order-list__ing"},e)}));return r.a.createElement("div",{className:"payment-form"},r.a.createElement("header",{className:"payment-form__header"},r.a.createElement(m.b,{to:"/registration",className:"payment-form__header-link"}," "),r.a.createElement("p",{className:"payment-form__title"},"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043a\u0430\u0437\u0430")),r.a.createElement("section",{className:"payment-form__pizza"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"payment-form__pizza-inner"},r.a.createElement("p",{className:"payment-form__pizza-title"},"\u041b\u0435\u043d\u0438\u0432\u0430\u044f \u041c\u0430\u0440\u0433\u0430\u0440\u0438\u0442\u0430"),r.a.createElement("div",{className:"payment-form__pizza-text"},h),r.a.createElement("p",{className:"payment-form__pizza-price"},b," \u0440\u0443\u0431")))),r.a.createElement("section",{className:"payment-form__address"},r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:t(_)},r.a.createElement("div",{className:"payment-form__address-top"},r.a.createElement("p",{className:"payment-form__address-text"},"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"),r.a.createElement("input",{className:"payment-form__address-input-big",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441",ref:a,name:"address"}),n.address&&r.a.createElement("p",null,n.address.message),r.a.createElement("div",{className:"payment-form__address-inner"},r.a.createElement("label",{className:"payment-form__address-input-label"},"\u043f\u043e\u0434\u044a\u0435\u0437\u0434",r.a.createElement("input",{className:"payment-form__address-input",type:"text",ref:a,name:"entrance"}),n.entrance&&r.a.createElement("p",null,n.entrance.message)),r.a.createElement("label",{className:"payment-form__address-input-label"},"\u044d\u0442\u0430\u0436",r.a.createElement("input",{className:"payment-form__address-input",type:"text",ref:a,name:"floor"}),n.floor&&r.a.createElement("p",null,n.floor.message)),r.a.createElement("label",{className:"payment-form__address-input-label"},"\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430",r.a.createElement("input",{className:"payment-form__address-input",type:"text",ref:a,name:"apartment"}),n.apartment&&r.a.createElement("p",null,n.apartment.message)))),r.a.createElement("div",{className:"payment-form__address-bot"},r.a.createElement("p",{className:"payment-form__address-text"},"\u0414\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u043e\u043f\u043b\u0430\u0442\u044b"),r.a.createElement("input",{placeholder:"\u041d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b",className:"payment-form__address-input-big",type:"tel",inputMode:"numeric",autoComplete:"cc-number",name:"cardNumber",id:"cardNumber",ref:a,onChange:function(e){var a=e.target.value;e.target.value=function(e){var a;return(null===(a=e.replace(/\s/g,"").match(/.{1,4}/g))||void 0===a?void 0:a.join(" ").substr(0,19))||""}(a)}}),n.cardNumber&&r.a.createElement("p",null,n.cardNumber.message),r.a.createElement("div",{className:"payment-form__address-small-inner"},r.a.createElement("input",{type:"number",placeholder:"MM/YYYY",className:"payment-form__address-input-small payment-form__address-input-date",ref:a,name:"month"}),n.month&&r.a.createElement("p",null,n.month.message),r.a.createElement("input",{placeholder:"CVV",className:"payment-form__address-input-small",ref:a,name:"CVV",onChange:function(e){var a=e.target.value;e.target.value=function(e){var a;return(null===(a=e.replace(/\s/g,"").match(/.{1,4}/g))||void 0===a?void 0:a.join(" ").substr(0,3))||""}(a)}}),n.CVV&&r.a.createElement("p",null,n.CVV.message)),r.a.createElement("input",{type:"text",placeholder:"\u0418\u043c\u044f \u043a\u0430\u043a \u043d\u0430 \u043a\u0430\u0440\u0442\u0435",className:"payment-form__address-input-big payment-form__address-input-name",ref:a,name:"name"}),n.name&&r.a.createElement("p",null,n.name.message))),r.a.createElement("p",{className:"payment-form__address-bot-text"},"\u0414\u043e\u0441\u0442\u0430\u0432\u0438\u043c \u043f\u0438\u0446\u0446\u0443 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u0447\u0430\u0441\u0430 \u0438\u043b\u0438 \u0432\u0435\u0440\u043d\u0435\u043c \u0434\u0435\u043d\u044c\u0433\u0438. \u0410\u0440\u0442\u0435\u043c \u0441\u043b\u043e\u0432 \u043d\u0430 \u0432\u0435\u0442\u0435\u0440 \u043d\u0435 \u0431\u0440\u043e\u0441\u0430\u0435\u0442."))),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"footer-top"},r.a.createElement("div",{className:"footer-top__text-inner"},r.a.createElement("p",{className:"footer-top__text"},"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0437\u0430\u043a\u0430\u0437\u0430"),r.a.createElement("p",{className:"footer-top__price"},b," \u0440\u0443\u0431")),r.a.createElement("div",{className:"footer-top__text-inner"},r.a.createElement("p",{className:"footer-top__text"},"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"),r.a.createElement("p",{className:"footer-top__price"},"180 \u0440\u0443\u0431"))),r.a.createElement("div",{className:"footer-bot"},r.a.createElement("div",{className:"footer-bot__text-inner"},r.a.createElement("p",{className:"footer-bot__text"},"\u041a \u043e\u043f\u043b\u0430\u0442\u0435"),r.a.createElement("p",{className:"footer-bot__price"},b+180," \u0440\u0443\u0431")),r.a.createElement("div",{className:"footer-bot__btn-inner active"},r.a.createElement(m.b,{to:"/registration",className:"footer-bot__btn active",onClick:_},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c ",b+180," \u0440\u0443\u0431"))))))},x=t(18),z=t(6),j=t.n(z),O=t(17),w=t(45),k=function(e){var a=[],t=Object(h.a)(e),n=[{dough:{thin:{},fluffy:{}},size:{small:{},big:{}},sauce:{tomatoSauce:{},whiteSauce:{},spicySauce:{}},cheese:{mozzarella:{},cheddar:{},dorBlue:{}},vegetables:{tomato:{},mushrooms:{},pepper:{}},meat:{bacon:{},pepperoni:{},ham:{}}}];t.map((function(e,a){!function(e){if("dough"===e.category){var a=e.slug,t=e.name,r=e.price,l=e.image,c=e.thumbnail;n[0].dough[a]={name:a,price:r,image:l,thumbnail:c,slug:t}}else if("size"===e.category){var m=e.slug,i=e.name,s=e.price,o=e.image,u=e.thumbnail;n[0].size[m]={name:m,price:s,image:o,thumbnail:u,slug:i}}else if("sauce"===e.category){var p=e.slug,d=e.name,E=e.price,f=e.image,b=e.thumbnail;n[0].sauce[p]={name:p,price:E,image:f,thumbnail:b,slug:d}}else if("cheese"===e.category){var _=e.slug,h=e.name,g=e.price,v=e.image,y=e.thumbnail;n[0].cheese[_]={name:_,price:g,image:v,thumbnail:y,slug:h}}else if("vegetables"===e.category){var N=e.slug,x=e.name,z=e.price,j=e.image,O=e.thumbnail;n[0].vegetables[N]={name:N,price:z,image:j,thumbnail:O,slug:x}}else if("meat"===e.category){var w=e.slug,k=e.name,F=e.price,S=e.image,C=e.thumbnail;n[0].meat[w]={name:w,price:F,image:S,thumbnail:C,slug:k}}}(e)}));return a.push.apply(a,n),a},F=Object(w.b)("pizza/fetchdata",Object(O.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dzs9l.sse.codesandbox.io/ingredients").then((function(e){return e.json()})).then((function(e){return k(e)}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))),S=Object(w.c)({name:"pizza",initialState:{toppings:[],address:[],cardnum:"",total:200,registered:!1,pizzaServData:[],orderList:[],servAnswer:{isLoading:!1,isError:!1,error:""}},reducers:{pizzaName:function(e,a){e.toppings=a.payload},finalTotal:function(e,a){e.total=a.payload},cardNum:function(e,a){e.cardnum=a.payload},address:function(e,a){e.address=a.payload},registered:function(e,a){e.registered=a.payload},orderList:function(e,a){e.orderList=a.payload},servAnswer:function(e,a){e.servAnswer.isLoading=a.isLoading,e.servAnswer.isError=a.isError,e.servAnswer.error=a.error}},extraReducers:Object(x.a)({},F.fulfilled,(function(e,a){e.pizzaServData=a.payload}))}),C=function(e,a){if(void 0!==a){var t=a;return Number(t.dough[e.dough].price)+Number(t.size[e.size].price)+Number(t.sauce[e.sauce].price)+e.cheese.reduce((function(e,a){return e+Number(t.cheese[a].price)}),0)+e.vegetables.reduce((function(e,a){return e+Number(t.vegetables[a].price)}),0)+e.meat.reduce((function(e,a){return e+Number(t.meat[a].price)}),0)+200}return 200},L=Object(w.a)({reducer:S.reducer});L.dispatch(F());var B=t(9),V=t(10);function q(){var e=Object(B.a)(["\n    color: #1F1F33;\n    margin-block-start: 0;\n    margin-block-end: 0;\n    padding-right: 30px;\n    font-family: Rounded Mplus 1c;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 20px;\n"]);return q=function(){return e},e}function M(){var e=Object(B.a)(["\n    display: flex;\n    padding-left: 15px;\n"]);return M=function(){return e},e}function P(){var e=Object(B.a)([" \n    font-family: Rounded Mplus 1c;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 20px;\n    color: #1F1F33;\n    border-radius: 12px;\n    position: relative; \n    display: flex;\n    flex-direction: column;\n    padding: 0 0 9px 16px;\n"]);return P=function(){return e},e}function R(){var e=Object(B.a)(["\n    background: #FFFFFF;\n    box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);\n    border-radius: 12px;\n"]);return R=function(){return e},e}function A(){var e=Object(B.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin-top: 30px;\n"]);return A=function(){return e},e}function T(){var e=Object(B.a)(["\n    width: 100%;\n    background: #F9F9FB;\n    padding: 6px 6px 12px;\n    border-radius: 12px;\n    display: flex;\n    justify-content: space-between;\n"]);return T=function(){return e},e}function D(){var e=Object(B.a)(["\n    padding: 4px 20px;  \n"]);return D=function(){return e},e}function J(){var e=Object(B.a)(["\n    vertical-align: -6.5px;\n    border-radius: 12px;\n    outline: none;\n    transition: 0.2s;\n    padding: 4px 17px; \n    font-family: Rounded Mplus 1c;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 20px;\n    color: #1F1F33;\n"]);return J=function(){return e},e}function I(){var e=Object(B.a)(['\n    input[type="radio"]:checked  {\n    background: #FFFFFF;\n    box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);\n    }\n']);return I=function(){return e},e}function Y(){var e=Object(B.a)(["\n    display: none;\n"]);return Y=function(){return e},e}function W(){var e=Object(B.a)(["\n    width: fit-content;\n    background: #F9F9FB;\n    padding: 6px 6px 12px;\n    border-radius: 12px;\n    display: flex;\n    justify-content: space-between;\n    width: auto;\n"]);return W=function(){return e},e}function U(){var e=Object(B.a)(["\n    color: #4B4B7C;\n    font-family: Rounded Mplus 1c;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 20px;\n    padding-left: 15px;\n"]);return U=function(){return e},e}function G(){var e=Object(B.a)(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    width: 47%;\n"]);return G=function(){return e},e}function H(){var e=Object(B.a)(["\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n"]);return H=function(){return e},e}function K(){var e=Object(B.a)(["\n    display: flex;\n    margin: 0 auto;\n    // margin-top: 100px;\n    align-items: center;\n    height: 100%;\n    width: 360px;\n    flex-direction: column;\n"]);return K=function(){return e},e}var Q=V.a.form(K()),X=V.a.div(H()),Z=V.a.fieldset(G()),$=V.a.legend(U()),ee=V.a.div(W()),ae=V.a.input(Y()),te=V.a.label(I()),ne=V.a.span(J()),re=Object(V.a)(ne)(D()),le=V.a.div(T()),ce=V.a.div(A()),me=V.a.label(R()),ie=V.a.div(P()),se=V.a.div(M()),oe=V.a.p(q()),ue=t(59),pe=t.n(ue),de=(t(227),t(228),function(){var e=Object(u.useForm)({defaultValues:{size:"small",sauce:"tomatoSauce",dough:"thin",cheese:[],vegetables:[],meat:[]}}),a=e.register,t=e.handleSubmit,n=e.watch,l={dots:!1,infinite:!0,slidesToShow:3,slidesToScroll:1},c=Object(s.b)(),i=Object(s.c)((function(e){return e.pizzaServData[0]})),o=Object(s.c)((function(e){return e.toppings})),p=Object(s.c)((function(e){return e.servAnswer})),d=n(),E=C(d,i),f=function(e){C(d,i),c({type:"pizza/finalTotal",payload:E}),function(e){var a=e.values,t=e.PizzaServData,n=(e.PizzaName,e.dispatch),r=[],l=t,c=l.dough[a.dough].name,m=l.size[a.size].name,i=l.sauce[a.sauce].name,s=a.cheese.map((function(e,a){return l.cheese[e].name})),o=a.vegetables.map((function(e,a){return l.vegetables[e].name})),u=a.meat.map((function(e,a){return l.meat[e].name}));r.push.apply(r,[c,m,i].concat(Object(h.a)(s),Object(h.a)(o),Object(h.a)(u))),n({type:"pizza/pizzaName",payload:[].concat(r)})}({values:d,PizzaServData:i,PizzaName:o,dispatch:c})},b=function(e,a){return r.a.createElement("img",{src:"https://dzs9l.sse.codesandbox.io/".concat(e,".png"),alt:"topping",width:a,height:"64"})},_=[d.sauce,d.size,d.dough].concat(Object(h.a)(d.cheese),Object(h.a)(d.vegetables),Object(h.a)(d.meat)),g=[d.dough].concat(Object(h.a)(d.cheese),Object(h.a)(d.meat),Object(h.a)(d.vegetables)),v=_.map((function(e,a){return r.a.createElement("p",{key:a,className:"pizza-list__ing"},e)})),y=g.map((function(e,a){var t={position:"absolute",zIndex:a,left:"50%",top:"50%",width:a<1?265:215,transform:" translate(-50%, -50%)",backgroundRepeat:"no-repeat",backgroundSize:"cover"};return r.a.createElement("img",{src:"https://dzs9l.sse.codesandbox.io/".concat(e,".png"),alt:"topping1",style:t,key:a})}));return p.isError?r.a.createElement(r.a.Fragment,null,"Error: ",JSON.stringify(p.error)):p.isLoading?r.a.createElement("div",{className:"logo"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header__logo"}),r.a.createElement("div",{className:"header__profile"})),r.a.createElement("div",{style:{display:"flex",height:380,width:360,margin:"0 auto",flexDirection:"column",justifyContent:"space-between"}},r.a.createElement("div",{style:{width:360,height:274,display:"flex",position:"relative"}},y),r.a.createElement("p",{className:"pizza__name"},"Best pizza"),r.a.createElement("div",{style:{width:360,height:"fit-content",display:"flex",flexWrap:"wrap",marginBottom:20,marginLeft:10}},v))),r.a.createElement(Q,{onSubmit:t(f)},r.a.createElement(X,null,r.a.createElement(Z,null,r.a.createElement($,null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0435\u0441\u0442\u043e:"),r.a.createElement(ee,null,r.a.createElement(te,null,r.a.createElement(ae,{ref:a,type:"radio",value:"thin",name:"dough"}),r.a.createElement(re,{id:"dough-thin__text"},i.dough.thin.slug)),r.a.createElement(te,null,r.a.createElement(ae,{ref:a,type:"radio",value:"fluffy",name:"dough"}),r.a.createElement(re,{id:"dough-fluffy__text"},i.dough.fluffy.slug)))),r.a.createElement(Z,null,r.a.createElement($,null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0430\u0437\u043c\u0435\u0440:"),r.a.createElement(ee,null,r.a.createElement(te,null,r.a.createElement(ae,{ref:a,type:"radio",value:"small",name:"size"}),r.a.createElement(re,{id:"size-small__text"},i.size.small.slug)),r.a.createElement(te,null,r.a.createElement(ae,{ref:a,type:"radio",value:"big",name:"size"}),r.a.createElement(re,{id:"size-big__text"},i.size.big.slug))))),r.a.createElement("fieldset",{className:"sauce"},r.a.createElement($,null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043e\u0443\u0441:"),r.a.createElement(le,null,r.a.createElement(te,null,r.a.createElement(ae,{ref:a,type:"radio",value:"tomatoSauce",name:"sauce"}),r.a.createElement(ne,{id:"tomato-sauce__text"},i.sauce.tomatoSauce.slug)),r.a.createElement(te,null,r.a.createElement(ae,{ref:a,type:"radio",value:"whiteSauce",name:"sauce"}),r.a.createElement(ne,{id:"white-sauce__text"},i.sauce.whiteSauce.slug)),r.a.createElement(te,null,r.a.createElement(ae,{ref:a,type:"radio",value:"spicySauce",name:"sauce"}),r.a.createElement(ne,{id:"spicy-sauce__text"},i.sauce.spicySauce.slug)))),r.a.createElement("fieldset",{className:"cheese"},r.a.createElement($,null,"\u0414\u043e\u0431\u0430\u0432\u0442\u0435 \u0441\u044b\u0440:"),r.a.createElement(ce,null,r.a.createElement(me,null,r.a.createElement(ie,null,b("mozarella-thumb",64),i.cheese.mozarella.slug),r.a.createElement(se,null,r.a.createElement(oe,null,i.cheese.mozarella.price," \u20bd"),r.a.createElement("input",{ref:a,type:"checkbox",value:"mozarella",name:"cheese"}))),r.a.createElement(me,null,r.a.createElement(ie,null,b("cheddar-thumb",64),i.cheese.cheddar.slug),r.a.createElement(se,null,r.a.createElement(oe,null,i.cheese.cheddar.price," \u20bd"),r.a.createElement("input",{ref:a,type:"checkbox",value:"cheddar",name:"cheese"}))),r.a.createElement(me,null,r.a.createElement(ie,null,b("dorBlue-thumb",64),i.cheese.dorBlue.slug),r.a.createElement(se,null,r.a.createElement(oe,null,i.cheese.dorBlue.price," \u20bd"),r.a.createElement("input",{ref:a,type:"checkbox",value:"dorBlue",name:"cheese"}))))),r.a.createElement("fieldset",{className:"vegetables"},r.a.createElement($,null,"\u0414\u043e\u0431\u0430\u0432\u0442\u0435 \u043e\u0432\u043e\u0449\u0438:"),r.a.createElement("div",{style:{maxWidth:"360px",margin:"25px auto 0"}},r.a.createElement(pe.a,l,r.a.createElement(me,null,r.a.createElement(ie,null,b("tomato-thumb",64),i.vegetables.tomato.slug),r.a.createElement(se,null,r.a.createElement(oe,null,i.vegetables.tomato.price," \u20bd"),r.a.createElement("input",{ref:a,type:"checkbox",value:"tomato",name:"vegetables"}))),r.a.createElement(me,null,r.a.createElement(ie,null,b("mushrooms-thumb",64),i.vegetables.mushrooms.slug),r.a.createElement(se,null,r.a.createElement(oe,null,i.vegetables.mushrooms.price," \u20bd"),r.a.createElement("input",{ref:a,type:"checkbox",value:"mushrooms",name:"vegetables"}))),r.a.createElement(me,null,r.a.createElement(ie,null,b("olives-thumb",64),i.vegetables.olives.slug),r.a.createElement(se,null,r.a.createElement(oe,null,i.vegetables.olives.price," \u20bd"),r.a.createElement("input",{ref:a,type:"checkbox",value:"olives",name:"vegetables"}))),r.a.createElement(me,null,r.a.createElement(ie,null,b("pineapple-thumb",64),i.vegetables.pineapple.slug),r.a.createElement(se,null,r.a.createElement(oe,null,i.vegetables.pineapple.price," \u20bd"),r.a.createElement("input",{ref:a,type:"checkbox",value:"pineapple",name:"vegetables"}))),r.a.createElement(me,null,r.a.createElement(ie,null,b("pepper-thumb",64),i.vegetables.pepper.slug),r.a.createElement(se,null,r.a.createElement(oe,null,i.vegetables.pepper.price," \u20bd"),r.a.createElement("input",{ref:a,type:"checkbox",value:"pepper",name:"vegetables"}))),r.a.createElement(me,null,r.a.createElement(ie,null,b("broccoli-thumb",64),i.vegetables.broccoli.slug),r.a.createElement(se,null,r.a.createElement(oe,null,i.vegetables.broccoli.price," \u20bd"),r.a.createElement("input",{ref:a,type:"checkbox",value:"broccoli",name:"vegetables"}))),r.a.createElement(me,null,r.a.createElement(ie,null,b("onion-thumb",64),i.vegetables.onion.slug),r.a.createElement(se,null,r.a.createElement(oe,null,i.vegetables.onion.price," \u20bd"),r.a.createElement("input",{ref:a,type:"checkbox",value:"onion",name:"vegetables"})))))),r.a.createElement("fieldset",{className:"meat"},r.a.createElement($,null,"\u0414\u043e\u0431\u0430\u0432\u0442\u0435 \u043c\u044f\u0441\u043e:"),r.a.createElement("div",{style:{maxWidth:"360px",margin:"25px auto 0"}},r.a.createElement(pe.a,l,r.a.createElement(me,null,r.a.createElement(ie,null,b("bacon-thumb",64),i.meat.bacon.slug),r.a.createElement(se,null,r.a.createElement(oe,null,i.meat.bacon.price," \u20bd"),r.a.createElement("input",{ref:a,type:"checkbox",value:"bacon",name:"meat"}))),r.a.createElement(me,null,r.a.createElement(ie,null,b("pepperoni-thumb",64),i.meat.pepperoni.slug),r.a.createElement(se,null,r.a.createElement(oe,null,i.meat.pepperoni.price," \u20bd"),r.a.createElement("input",{ref:a,type:"checkbox",value:"pepperoni",name:"meat"}))),r.a.createElement(me,null,r.a.createElement(ie,null,b("ham-thumb",64),i.meat.ham.slug),r.a.createElement(se,null,r.a.createElement(oe,null,i.meat.ham.price," \u20bd"),r.a.createElement("input",{ref:a,type:"checkbox",value:"ham",name:"meat"}))),r.a.createElement(me,null,r.a.createElement(ie,null,b("chicken-thumb",64),i.meat.chicken.slug),r.a.createElement(se,null,r.a.createElement(oe,null,i.meat.chicken.price," \u20bd"),r.a.createElement("input",{ref:a,type:"checkbox",value:"chicken",name:"meat"}))),r.a.createElement(me,null,r.a.createElement(ie,null,b("salami-thumb",64),i.meat.salami.slug),r.a.createElement(se,null,r.a.createElement(oe,null,i.meat.salami.price," \u20bd"),r.a.createElement("input",{ref:a,type:"checkbox",value:"salami",name:"meat"})))))),r.a.createElement(m.b,{to:"/payment-form",onClick:f,className:"submit__btn-wrapper"},r.a.createElement("button",{className:"submit__btn-inner active"},r.a.createElement("span",{className:"submit__btn active"},"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0437\u0430 ",E)))))});t(229);var Ee=function(){var e=Object(s.b)(),a=Object(g.a)("someId",(function(){return fetch("http://localhost:4000/ingredients").then((function(e){return e.json()}))})),t=a.isLoading,n=a.isError;a.data,e({type:"pizza/servAnswer",isLoading:t,isError:n,error:a.error});var l=Object(s.c)((function(e){return e.registered}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/"},"PizzaEditor")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/checkout"},"Checkout")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/registration"},"Registration")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/login"},"Login")),r.a.createElement("li",null,r.a.createElement(m.b,{to:function(){return l?"/order-list":"/login"}},"OrderList")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/payment-form"},"PaymentForm")))),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0},r.a.createElement(de,null)),r.a.createElement(i.a,{path:"/checkout"},r.a.createElement(o,null)),r.a.createElement(i.a,{path:"/registration"},r.a.createElement(f,null)),r.a.createElement(i.a,{path:"/login"},r.a.createElement(_,null)),r.a.createElement(i.a,{path:"/order-list"},r.a.createElement(v,null)),r.a.createElement(i.a,{path:"/payment-form"},r.a.createElement(N,null))))},fe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,231)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,l=a.getLCP,c=a.getTTFB;t(e),n(e),r(e),l(e),c(e)}))};c.a.render(r.a.createElement(m.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:L},r.a.createElement(Ee,null)))),document.getElementById("root")),fe()},97:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){}},[[230,1,2]]]);
//# sourceMappingURL=main.89780fb5.chunk.js.map