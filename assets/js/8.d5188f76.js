(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{288:function(t,a,s){"use strict";s.r(a);var e=s(38),r=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"惯性-inertia"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#惯性-inertia","aria-hidden":"true"}},[t._v("#")]),t._v(" 惯性 Inertia")]),t._v(" "),s("p",[t._v("物理的惯性，惯性越大，数值衰减越慢")]),t._v(" "),s("h2",{attrs:{id:"引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入","aria-hidden":"true"}},[t._v("#")]),t._v(" 引入")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" inertia "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'popmotion'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("p",[t._v("提供一个"),s("code",[t._v("velocity")]),t._v(" "),s("code",[t._v("from")]),t._v("属性，就可以计算出需要最终值和减数向目标")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("inertia")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" velocity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("v")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("可以设置"),s("code",[t._v("max")]),t._v(" 或者 "),s("code",[t._v("min")]),t._v(" 作为边界：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("inertia")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  velocity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("如果最终的数值超过了"),s("code",[t._v("max")]),t._v("，或者小于"),s("code",[t._v("min")]),t._v("，就会调用"),s("code",[t._v("spring")]),t._v("做一个回弹动画")]),t._v(" "),s("h2",{attrs:{id:"属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),s("h3",{attrs:{id:"velocity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#velocity","aria-hidden":"true"}},[t._v("#")]),t._v(" velocity")]),t._v(" "),s("p",[s("strong",[t._v("默认：0")])]),t._v(" "),s("p",[t._v("同"),s("code",[t._v("decay")])]),t._v(" "),s("h3",{attrs:{id:"from"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from","aria-hidden":"true"}},[t._v("#")]),t._v(" from")]),t._v(" "),s("p",[s("strong",[t._v("默认：0")])]),t._v(" "),s("p",[t._v("同"),s("code",[t._v("decay")])]),t._v(" "),s("h3",{attrs:{id:"modifytarget"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modifytarget","aria-hidden":"true"}},[t._v("#")]),t._v(" modifyTarget")]),t._v(" "),s("p",[s("strong",[t._v("默认：v => v")])]),t._v(" "),s("p",[t._v("同"),s("code",[t._v("decay")])]),t._v(" "),s("h3",{attrs:{id:"power"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#power","aria-hidden":"true"}},[t._v("#")]),t._v(" power")]),t._v(" "),s("p",[s("strong",[t._v("默认：0.8")])]),t._v(" "),s("p",[t._v("同"),s("code",[t._v("decay")])]),t._v(" "),s("h3",{attrs:{id:"timeconstant"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timeconstant","aria-hidden":"true"}},[t._v("#")]),t._v(" timeConstant")]),t._v(" "),s("p",[s("strong",[t._v("默认：700")])]),t._v(" "),s("p",[t._v("同"),s("code",[t._v("decay")])]),t._v(" "),s("h3",{attrs:{id:"max"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#max","aria-hidden":"true"}},[t._v("#")]),t._v(" max")]),t._v(" "),s("p",[t._v("数据最大值，超过则触发回弹效果")]),t._v(" "),s("h3",{attrs:{id:"min"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#min","aria-hidden":"true"}},[t._v("#")]),t._v(" min")]),t._v(" "),s("p",[t._v("数据最小值，超出则触发回弹效果")]),t._v(" "),s("h3",{attrs:{id:"bouncestiffness"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bouncestiffness","aria-hidden":"true"}},[t._v("#")]),t._v(" bounceStiffness")]),t._v(" "),s("p",[s("strong",[t._v("默认：500")])]),t._v(" "),s("p",[t._v("回弹刚度，设置超过"),s("code",[t._v("max")]),t._v(" "),s("code",[t._v("min")]),t._v("的变价值的时候的回弹动画系数，数值越大，越Q弹")]),t._v(" "),s("h3",{attrs:{id:"bouncedamping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bouncedamping","aria-hidden":"true"}},[t._v("#")]),t._v(" bounceDamping")]),t._v(" "),s("p",[s("strong",[t._v("默认：10")])]),t._v(" "),s("p",[t._v("回弹阻尼，数值越大，回弹越快停止，设置0，无线回弹")]),t._v(" "),s("h2",{attrs:{id:"方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),s("p",[t._v("同"),s("code",[t._v("decay")])]),t._v(" "),s("h2",{attrs:{id:"实例方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例方法")]),t._v(" "),s("p",[t._v("同"),s("code",[t._v("decay")])]),t._v(" "),s("h2",{attrs:{id:"与decay的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与decay的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" 与"),s("code",[t._v("decay")]),t._v("的区别")]),t._v(" "),s("p",[s("code",[t._v("interita")]),t._v("一般可用来做滚动效果")]),t._v(" "),s("p",[t._v("效果跟衰减"),s("code",[t._v("decay")]),t._v("非常类似，可以理解为"),s("code",[t._v("decay")]),t._v("的封装版，添加了数值的边界控制，并且设置了超出边界之后的回弹动画。\n如果只是一个简单的衰减动画，直接使用"),s("code",[t._v("decay")]),t._v("即可。如果需要做一些减速回弹动画，可以使用"),s("code",[t._v("intertia")])]),t._v(" "),s("h2",{attrs:{id:"例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子","aria-hidden":"true"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://codepen.io/popmotion/pen/BMNvqj",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://codepen.io/popmotion/pen/BMNvqj"),s("OutboundLink")],1)])])},[],!1,null,null,null);a.default=r.exports}}]);