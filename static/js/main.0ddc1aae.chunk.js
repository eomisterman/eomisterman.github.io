(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(t,e,a){t.exports=a.p+"static/media/pills.019ca2cc.svg"},function(t,e,a){t.exports=a.p+"static/media/background2.27967b2c.svg"},function(t,e,a){t.exports=a.p+"static/media/bong.7e1c04e2.svg"},function(t,e,a){t.exports=a.p+"static/media/cigs.c1693814.svg"},function(t,e,a){t.exports=a.p+"static/media/cocaine.c0305dda.svg"},function(t,e,a){t.exports=a.p+"static/media/heroin.31d05b91.svg"},function(t,e,a){t.exports=a.p+"static/media/rehab.f300fe68.svg"},function(t,e,a){t.exports=a.p+"static/media/snorter.d20aa364.svg"},function(t,e,a){t.exports=a.p+"static/media/water.dc068088.svg"},function(t,e,a){t.exports=a.p+"static/media/weights.41abc6c0.svg"},function(t,e,a){t.exports=a.p+"static/media/yoga.46a2e26b.svg"},function(t,e,a){t.exports=a.p+"static/media/coffee.b3e8e943.svg"},function(t,e,a){t.exports=a(34)},,,,,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var s=a(0),h=a.n(s),n=a(8),i=a.n(n),l=(a(26),a(2)),c=a(3),o=a(5),r=a(4),d=a(6),u=a(1),y=(a(28),a(30),function(t){function e(){return Object(l.a)(this,e),Object(o.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return h.a.createElement("div",{className:"Stats"},h.a.createElement("h3",{className:"title"},"Emilio"),h.a.createElement("div",{className:"healthBar"},h.a.createElement("div",{className:"bar",style:{width:"".concat(this.props.health,"%")}}),h.a.createElement("div",{className:"empty"})),h.a.createElement("div",{className:"wellnessBar"},h.a.createElement("div",{className:"bar",style:{width:"".concat(this.props.wellness,"%")}}),h.a.createElement("div",{className:"empty"})),h.a.createElement("div",{className:"anxietyBar"},h.a.createElement("div",{className:"bar",style:{width:"".concat(this.props.anxiety,"%")}}),h.a.createElement("div",{className:"empty"})))}}]),e}(s.Component)),m=(a(32),a(9)),E=a.n(m),b=a(10),S=a.n(b),f=a(11),A=a.n(f),O=a(12),v=a.n(O),p=a(13),w=a.n(p),H=a(14),g=a.n(H),N=a(15),k=a.n(N),j=a(16),x=a.n(j),L=a(17),T=a.n(L),C=a(18),_=a.n(C),W=a(19),I=a.n(W),B=a(20),R=a.n(B),U=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(o.a)(this,Object(r.a)(e).call(this))).state={healthy:28,unhealthy:0,health:100,wellness:100,anxiety:0,coffee:null},a.MAX_HEALTH_WELLNESS=100,a.MAX_HABIT=28,a.handleHealthy=a.handleHealthy.bind(Object(u.a)(Object(u.a)(a))),a.handleUnhealthy=a.handleUnhealthy.bind(Object(u.a)(Object(u.a)(a))),a.handleHydro=a.handleHydro.bind(Object(u.a)(Object(u.a)(a))),a.handleCocaine=a.handleCocaine.bind(Object(u.a)(Object(u.a)(a))),a.handleOpiod=a.handleOpiod.bind(Object(u.a)(Object(u.a)(a))),a.handleWeed=a.handleWeed.bind(Object(u.a)(Object(u.a)(a))),a.handleCigarettes=a.handleCigarettes.bind(Object(u.a)(Object(u.a)(a))),a.handleYoga=a.handleYoga.bind(Object(u.a)(Object(u.a)(a))),a.handleExercise=a.handleExercise.bind(Object(u.a)(Object(u.a)(a))),a.handleRehab=a.handleRehab.bind(Object(u.a)(Object(u.a)(a))),a.handleWater=a.handleWater.bind(Object(u.a)(Object(u.a)(a))),a.handleAnxietyAttack=a.handleAnxietyAttack.bind(Object(u.a)(Object(u.a)(a))),a.handleCoffee=a.handleCoffee.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidUpdate",value:function(){console.log(this.state)}},{key:"handleCoffee",value:function(){var t=this;this.interval&&0!==this.state.anxiety||(this.interval=setInterval(function(){t.setState({anxiety:t.state.anxiety+1})},100))}},{key:"handleHealthy",value:function(){var t=this.state.healthy,e=this.state.unhealthy;t<this.MAX_HABIT&&this.setState(function(t,e){return{healthy:t.healthy+1}}),e>0&&this.setState(function(t,e){return{unhealthy:t.unhealthy-1}}),this.state.health<this.MAX_HEALTH_WELLNESS&&this.setState(function(t,e){return{health:t.health+1}}),this.state.wellness<this.MAX_HEALTH_WELLNESS&&this.setState(function(t,e){return{wellness:t.wellness+2}})}},{key:"handleUnhealthy",value:function(){var t=this.state.healthy;this.state.unhealthy<28&&this.setState(function(t,e){return{unhealthy:t.unhealthy+1}}),t>0&&this.setState(function(t,e){return{healthy:t.healthy-1}}),this.state.health>0&&this.setState(function(t,e){return{health:t.health-1}}),this.state.wellness>0&&this.setState(function(t,e){return{wellness:t.wellness-2}})}},{key:"handleHydro",value:function(){this.state.health>0&&this.setState({health:this.state.health-5}),this.state.wellness>0&&this.setState({wellness:this.state.wellness-8}),this.state.unhealthy<this.MAX_HABIT&&this.setState({unhealthy:this.state.unhealthy+5}),this.state.healthy>0&&this.setState({healthy:this.state.healthy-5})}},{key:"handleCocaine",value:function(){this.state.health>0&&this.setState({health:this.state.health-3}),this.state.wellness>0&&this.setState({wellness:this.state.wellness-2}),this.state.unhealthy<this.MAX_HABIT&&this.setState({unhealthy:this.state.unhealthy+4}),this.state.healthy>0&&this.setState({healthy:this.state.healthy-4})}},{key:"handleOpiod",value:function(){this.state.health>0&&this.setState({health:this.state.health-7}),this.state.wellness>0&&this.setState({wellness:this.state.wellness-15}),this.state.unhealthy<this.MAX_HABIT&&this.setState({unhealthy:this.state.unhealthy+7}),this.state.healthy>0&&this.setState({healthy:this.state.healthy-7})}},{key:"handleWeed",value:function(){this.state.unhealthy<this.MAX_HABIT&&this.setState({unhealthy:this.state.unhealthy+.5})}},{key:"handleCigarettes",value:function(){this.state.health>0&&this.setState({health:this.state.health-1}),this.state.wellness>0&&this.setState({wellness:this.state.wellness-.5}),this.state.healthy>0&&this.setState({healthy:this.state.healthy-1})}},{key:"handleYoga",value:function(){this.state.health<this.MAX_HEALTH_WELLNESS&&this.setState({health:this.state.health+2}),this.state.wellness<this.MAX_HEALTH_WELLNESS&&this.setState({wellness:this.state.wellness+3}),this.state.unhealthy>0&&this.setState({unhealthy:this.state.unhealthy-1}),this.state.healthy<this.MAX_HABIT&&this.setState({healthy:this.state.healthy+1})}},{key:"handleExercise",value:function(){this.state.health<this.MAX_HEALTH_WELLNESS&&this.setState({health:this.state.health+3}),this.state.wellness<this.MAX_HEALTH_WELLNESS&&this.setState({wellness:this.state.wellness+2}),this.state.unhealthy>0&&this.setState({unhealthy:this.state.unhealthy-1}),this.state.healthy<this.MAX_HABIT&&this.setState({healthy:this.state.healthy+1})}},{key:"handleRehab",value:function(){this.state.wellness<this.MAX_HEALTH_WELLNESS&&this.setState({wellness:this.state.wellness+20}),this.state.unhealthy>0&&this.setState({unhealthy:this.state.unhealthy-14}),this.state.healthy<this.MAX_HABIT&&this.setState({healthy:this.state.healthy+14})}},{key:"handleWater",value:function(){this.state.health<this.MAX_HEALTH_WELLNESS&&this.setState({health:this.state.health+1}),this.state.wellness<this.MAX_HEALTH_WELLNESS&&this.setState({wellness:this.state.wellness+.5}),this.state.anxiety>=25?this.setState({anxiety:this.state.anxiety-25}):(clearInterval(this.interval),this.setState({anxiety:0}))}},{key:"handleAnxietyAttack",value:function(){alert("YOUR HEART IS BEATING OUT OF YOUR CHEST\nYOURE STRESSED ABOUT EVERYTHING\nYOU KNEW THIS WOULD HAPPEN AND YOU STILL NEVER LEARN!"),clearInterval(this.interval),this.setState({anxiety:0})}},{key:"render",value:function(){return this.state.anxiety>=100&&this.handleAnxietyAttack(),h.a.createElement("div",{className:"Habits"},h.a.createElement(y,{health:this.state.health,wellness:this.state.wellness,anxiety:this.state.anxiety}),h.a.createElement("img",{className:"Background",src:S.a,alt:"background"}),h.a.createElement("img",{className:"Pills",src:E.a,alt:"pills",onClick:this.handleHydro}),h.a.createElement("img",{className:"Cocaine",src:w.a,alt:"cocaine",onClick:this.handleCocaine}),h.a.createElement("img",{className:"Snorter",src:x.a,alt:"snorter",onClick:this.handleCocaine}),h.a.createElement("img",{className:"Heroin",src:g.a,alt:"heroin",onClick:this.handleOpiod}),h.a.createElement("img",{className:"Bong",src:A.a,alt:"bong",onClick:this.handleWeed}),h.a.createElement("img",{className:"Cigs",src:v.a,alt:"cigs",onClick:this.handleCigarettes}),h.a.createElement("img",{className:"Coffee",src:R.a,alt:"coffee",onClick:this.handleCoffee}),h.a.createElement("img",{className:"Water",src:T.a,alt:"water",onClick:this.handleWater}),h.a.createElement("img",{className:"Yoga",src:I.a,alt:"yoga",onClick:this.handleYoga,style:{opacity:this.state.healthy/28}}),h.a.createElement("img",{className:"Weights",src:_.a,alt:"weights",onClick:this.handleExercise,style:{opacity:this.state.healthy/28}}),h.a.createElement("img",{className:"Rehab",src:k.a,alt:"rehab",onClick:this.handleRehab,style:{opacity:this.state.healthy/28}}),h.a.createElement("div",null,h.a.createElement("h3",null,"Good Habit: ",this.state.healthy),h.a.createElement("button",{onClick:this.handleHealthy},"Good Habit")),h.a.createElement("div",null,h.a.createElement("h3",null,"Bad Habit: ",this.state.unhealthy),h.a.createElement("button",{onClick:this.handleUnhealthy},"Bad Habit")))}}]),e}(s.Component),M=function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(o.a)(this,Object(r.a)(e).call(this))).state={anxietyAttack:null},t.handleAnxietyAttack=t.handleAnxietyAttack.bind(Object(u.a)(Object(u.a)(t))),t}return Object(d.a)(e,t),Object(c.a)(e,[{key:"handleAnxietyAttack",value:function(){alert("YOUR HEART IS BEATING OUT OF YOUR CHEST\nYOURE STRESSED ABOUT EVERYTHING\nYOU KNEW THIS WOULD HAPPEN AND YOU STILL NEVER LEARN!")}},{key:"render",value:function(){return h.a.createElement("div",{className:"App"},h.a.createElement(U,null))}}]),e}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(h.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[21,2,1]]]);
//# sourceMappingURL=main.0ddc1aae.chunk.js.map