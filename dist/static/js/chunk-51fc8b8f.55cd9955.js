(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51fc8b8f"],{"0e44":function(e,t,n){var a=n("88dd"),r=n("a013"),l=function(e,t){if(r(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{a=n("01f5")(Function.call,n("acb9").f(Object.prototype,"__proto__").set,2),a(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,n){return l(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:l}},"1cc6":function(e,t,n){"use strict";var a=n("265f"),r=n.n(a);r.a},"265f":function(e,t,n){},"333d":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[n("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},r=[];n("d4d5");Math.easeInOutQuad=function(e,t,n,a){return e/=a/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var l=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function o(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function i(e,t,n){var a=s(),r=e-a,i=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=i;var s=Math.easeInOutQuad(u,a,r,t);o(s),u<t?l(e):n&&"function"===typeof n&&n()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&i(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&i(0,800)}}},c=u,d=(n("1cc6"),n("17cc")),f=Object(d["a"])(c,a,r,!1,null,"f3b72548",null);t["a"]=f.exports},"44de":function(e,t,n){var a=n("88dd"),r=n("0e44").set;e.exports=function(e,t,n){var l,o=t.constructor;return o!==n&&"function"==typeof o&&(l=o.prototype)!==n.prototype&&a(l)&&r&&r(e,l),e}},"539d":function(e,t,n){var a=n("b2f5"),r=n("f01a"),l=n("b6f1"),o=n("c9ea"),s="["+o+"]",i="​",u=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),d=function(e,t,n){var r={},s=l(function(){return!!o[e]()||i[e]()!=i}),u=r[e]=s?t(f):o[e];n&&(r[n]=u),a(a.P+a.F*s,"String",r)},f=d.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(c,"")),e};e.exports=d},5628:function(e,t,n){},6724:function(e,t,n){"use strict";n("8d41");var a="@@wavesContext";function r(e,t){function n(n){var a=Object.assign({},t.value),r=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),l=r.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var o=l.getBoundingClientRect(),s=l.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":(s=document.createElement("span"),s.className="waves-ripple",s.style.height=s.style.width=Math.max(o.width,o.height)+"px",l.appendChild(s)),r.type){case"center":s.style.top=o.height/2-s.offsetHeight/2+"px",s.style.left=o.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(n.pageY-o.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(n.pageX-o.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=r.color,s.className="waves-ripple z-active",!1}}return e[a]?e[a].removeHandle=n:e[a]={removeHandle:n},n}var l={bind:function(e,t){e.addEventListener("click",r(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[a].removeHandle,!1),e.addEventListener("click",r(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[a].removeHandle,!1),e[a]=null,delete e[a]}},o=function(e){e.directive("waves",l)};window.Vue&&(window.waves=l,Vue.use(o)),l.install=o;t["a"]=l},"80c6":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-select",{staticClass:"filter-item",staticStyle:{width:"80px"},attrs:{clearable:"",placeholder:"状态"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.status,callback:function(t){e.$set(e.listQuery,"status",t)},expression:"listQuery.status"}},e._l(e.statusList,function(e){return n("el-option",{key:e.label,attrs:{value:e.label}})}),1),e._v(" "),n("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:"用车单位联系人"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.useBusContact,callback:function(t){e.$set(e.listQuery,"useBusContact",t)},expression:"listQuery.useBusContact"}}),e._v(" "),n("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:"行程"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.route,callback:function(t){e.$set(e.listQuery,"route",t)},expression:"listQuery.route"}}),e._v(" "),n("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"开始时间"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.useBusStartTime,callback:function(t){e.$set(e.listQuery,"useBusStartTime",t)},expression:"listQuery.useBusStartTime"}}),e._v(" "),n("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"结束时间"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.useBusEndTime,callback:function(t){e.$set(e.listQuery,"useBusEndTime",t)},expression:"listQuery.useBusEndTime"}}),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("\n      查询\n    ")]),e._v(" "),n("router-link",{attrs:{to:"/order/addOrder/"}},[n("el-button",{attrs:{type:"primary"}},[e._v("\n            预定\n          ")])],1),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"},{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v("\n      导出\n    ")])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-form",{directives:[{name:"show",rawName:"v-show",value:"生效"===t.row.status,expression:"props.row.status==='生效'"}],staticClass:"demo-table-expand",attrs:{"label-position":"center",inline:""}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.row.busList}},[n("el-table-column",{attrs:{align:"center",label:"车牌"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(t.row.busNo)+"\n                  ")]}}],null,!0)}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"车型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(t.row.busModel)+"\n                  ")]}}],null,!0)}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"驾驶员"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(t.row.driver)+"\n                  ")]}}],null,!0)}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"驾驶员手机"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(t.row.tel)+"\n                  ")]}}],null,!0)}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"车费"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(t.row.busCost)+"\n                  ")]}}],null,!0)}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"备注"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(t.row.remark)+"\n                  ")]}}],null,!0)}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){return e.handleCharge(t.row.ordBusId)}}},[e._v("\n                      记费\n                  ")])]}}],null,!0)})],1)],1)]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"状态",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",[e._v(e._s(t.row.status))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"用车单位联系人",width:"100","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.useBusContact)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"用车开始时间",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.useBusStartDate)+" ")]),e._v(" "),"00:00"!=t.row.useBusStartTime?n("span",[e._v(e._s(t.row.useBusStartTime))]):e._e()]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"用车结束时间",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.useBusEndDate)+" ")]),e._v(" "),"00:00"!=t.row.useBusEndTime?n("span",[e._v(e._s(t.row.useBusEndTime))]):e._e()]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"行程","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.route))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"车价",width:"65"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.contractAmount))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"是否含费",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.containCost?n("span",[e._v("是")]):e._e(),e._v(" "),t.row.containCost?e._e():n("span",[e._v("否")])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作",width:"150","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("router-link",{attrs:{to:"/order/editOrder/"+t.row.ordId}},[n("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("\n            编辑\n          ")])],1),e._v(" "),n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){return e.handlerDelete(t.row.ordId)}}},[e._v("\n            删除\n        ")])]}}])})],1),e._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.fetchData}}),e._v(" "),n("el-dialog",{attrs:{title:"添加【用车】费用",visible:e.dialogVisible,width:"50%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("cost-form",{attrs:{"bus-id":e.ordBusId,model:e.costModel}}),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("关 闭")])],1)],1)],1)},r=[],l=n("b775");function o(e){return Object(l["a"])({url:"/order/table/list",method:"get",params:e})}function s(e){return Object(l["a"])({url:"/order/"+e,method:"delete"})}var i=n("333d"),u=n("6724"),c=n("c487"),d={components:{Pagination:i["a"],CostForm:c["a"]},directives:{waves:u["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},data:function(){return{list:null,listLoading:!0,total:0,listQuery:{page:1,limit:50,useBusCom:"",useBusContact:"",route:"",useBusStartDate:null,useBusEndDate:null,useBusStartTime:null,useBusEndTime:null,status:""},dialogVisible:!1,ordBusId:"",costModel:"order",statusList:[{label:"预定"},{label:"生效"}]}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,o(this.listQuery).then(function(t){e.list=t.data.items,e.listLoading=!1,e.total=t.data.total})},handleFilter:function(){this.listQuery.page=1,this.fetchData()},handleDownload:function(){this.$message({message:"暂时还不提供下载功能",type:"warning"})},handleCharge:function(e){this.dialogVisible=!0,this.ordBusId=e,console.log(e)},handlerDelete:function(e){var t=this;s(e).then(function(){t.$message({message:"删除成功",type:"success"})}),this.handleFilter()},handleClose:function(e){e()}}},f=d,p=n("17cc"),m=Object(p["a"])(f,a,r,!1,null,null,null);t["default"]=m.exports},"8a6e":function(e,t,n){"use strict";var a=n("5628"),r=n.n(a);r.a},"8d41":function(e,t,n){},a891:function(e,t,n){var a=n("fb6d"),r=n("b4e0").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return a(e,r)}},acb9:function(e,t,n){var a=n("d217"),r=n("7dea"),l=n("3a68"),o=n("5325"),s=n("03b3"),i=n("568a"),u=Object.getOwnPropertyDescriptor;t.f=n("dad2")?u:function(e,t){if(e=l(e),t=o(t,!0),i)try{return u(e,t)}catch(n){}if(s(e,t))return r(!a.f.call(e,t),e[t])}},c487:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"费用"}},[n("el-col",{attrs:{span:16}},[n("el-select",{model:{value:e.form.costName,callback:function(t){e.$set(e.form,"costName",t)},expression:"form.costName"}},e._l(e.costNames,function(e){return n("el-option",{key:e.key,attrs:{label:e.label,value:e.key}})}),1)],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"金额"}},[n("el-col",{attrs:{span:16}},[n("el-input",{model:{value:e.form.costAmount,callback:function(t){e.$set(e.form,"costAmount",t)},expression:"form.costAmount"}})],1)],1),e._v(" "),n("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"起始公里"}},[n("el-col",{attrs:{span:16}},[n("el-input",{model:{value:e.form.startKm,callback:function(t){e.$set(e.form,"startKm",t)},expression:"form.startKm"}})],1)],1),e._v(" "),n("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"终点公里"}},[n("el-col",{attrs:{span:16}},[n("el-input",{model:{value:e.form.endKm,callback:function(t){e.$set(e.form,"endKm",t)},expression:"form.endKm"}})],1)],1),e._v(" "),n("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"实驶公里"}},[n("el-col",{attrs:{span:16}},[n("span")])],1),e._v(" "),n("el-form-item",{attrs:{label:"备注"}},[n("el-col",{attrs:{span:16}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmitAddCost}},[e._v("添加")])],1)],1)],1)},r=[],l=(n("d4d5"),n("b775"));function o(e){return Object(l["a"])({url:"/cost",method:"post",data:e})}var s={name:"CostForm",props:{busId:{type:Number,default:""},model:{type:String,default:"bus"}},data:function(){return{form:{costName:"",costAmount:"",remark:"",costRelatedId:this.busId,costRelatedModel:this.model,startKm:"",endKm:""},costNames:[{label:"过路费",key:"1"},{label:"停车费",key:"2"},{label:"住宿费",key:"3"},{label:"餐费",key:"4"},{label:"修理",key:"5"},{label:"罚款",key:"6"}]}},methods:{onSubmitAddCost:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return console.log("error add cost submit!!"),!1;e.loading=!0,o(e.form).then(function(){e.$notify({title:"成功",message:"添加成功",type:"success",duration:2e3})}),e.loading=!1})}}},i=s,u=(n("8a6e"),n("17cc")),c=Object(u["a"])(i,a,r,!1,null,"c6ef05e6",null);t["a"]=c.exports},c9ea:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},d4d5:function(e,t,n){"use strict";var a=n("3754"),r=n("03b3"),l=n("94ac"),o=n("44de"),s=n("5325"),i=n("b6f1"),u=n("a891").f,c=n("acb9").f,d=n("ddf7").f,f=n("539d").trim,p="Number",m=a[p],v=m,y=m.prototype,h=l(n("a7b8")(y))==p,b="trim"in String.prototype,g=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){t=b?t.trim():f(t,3);var n,a,r,l=t.charCodeAt(0);if(43===l||45===l){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+t}for(var o,i=t.slice(2),u=0,c=i.length;u<c;u++)if(o=i.charCodeAt(u),o<48||o>r)return NaN;return parseInt(i,a)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof m&&(h?i(function(){y.valueOf.call(n)}):l(n)!=p)?o(new v(g(t)),n,m):g(t)};for(var _,w=n("dad2")?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;w.length>k;k++)r(v,_=w[k])&&!r(m,_)&&d(m,_,c(v,_));m.prototype=y,y.constructor=m,n("e5ef")(a,p,m)}}}]);