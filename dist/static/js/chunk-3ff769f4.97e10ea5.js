(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ff769f4"],{"30a2":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("bus-form",{attrs:{"is-edit":!1}})},a=[],s=r("44f3"),l={name:"AddBusForm",components:{BusForm:s["a"]}},n=l,i=r("17cc"),u=Object(i["a"])(n,o,a,!1,null,null,null);t["default"]=u.exports},"44f3":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"车牌"}},[r("el-col",{attrs:{span:8}},[r("el-input",{model:{value:e.form.busNo,callback:function(t){e.$set(e.form,"busNo",t)},expression:"form.busNo"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"车型"}},[r("el-col",{attrs:{span:3}},[r("el-input",{model:{value:e.form.busModel,callback:function(t){e.$set(e.form,"busModel",t)},expression:"form.busModel"}},[r("template",{slot:"append"},[e._v("座")])],2)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"驾驶员"}},[r("el-col",{attrs:{span:8}},[r("el-input",{model:{value:e.form.driver,callback:function(t){e.$set(e.form,"driver",t)},expression:"form.driver"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"驾驶员手机"}},[r("el-col",{attrs:{span:8}},[r("el-input",{model:{value:e.form.tel,callback:function(t){e.$set(e.form,"tel",t)},expression:"form.tel"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"备注"}},[r("el-col",{attrs:{span:8}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),e._v(" "),r("el-form-item",[r("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.isEdit,expression:"!isEdit"}],attrs:{type:"primary"},on:{click:e.onSubmitAddBus}},[e._v("添加")])],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.isEdit,expression:"isEdit"}]},[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmitEditBus}},[e._v("编辑")])],1)],1)],1)},a=[],s=r("b775");function l(e){return Object(s["a"])({url:"/bus",method:"post",data:e})}function n(e){return Object(s["a"])({url:"/bus",method:"put",data:e})}function i(e){return Object(s["a"])({url:"/bus/"+e,method:"get"})}var u={name:"BusForm",props:{isEdit:{type:Boolean,default:!1}},data:function(){return{form:{busId:"",busNo:"",busModel:"",driver:"",tel:"",remark:""},busModels:[{label:"33座",key:"33"},{label:"45座",key:"45"},{label:"55座",key:"55"},{label:"57座",key:"57"},{label:"65座",key:"65"},{label:"7座",key:"7"},{label:"18座",key:"18"},{label:"38座",key:"38"}]}},created:function(){if(this.isEdit){var e=this.$route.params&&this.$route.params.busId;this.initBus(e)}},methods:{onSubmitAddBus:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return console.log("error add bus submit!!"),!1;e.loading=!0,l(e.form).then(function(){e.$notify({title:"成功",message:"添加成功",type:"success",duration:2e3})}),e.loading=!1})},onSubmitEditBus:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return console.log("error edit bus submit!!"),!1;e.loading=!0,e.form.data=e.$route.params.busId,n(e.form).then(function(){e.$notify({title:"成功",message:"编辑成功",type:"success",duration:2e3})}),e.loading=!1})},initBus:function(e){var t=this;i(e).then(function(e){t.form=e.data})}}},m=u,c=(r("ba75"),r("17cc")),f=Object(c["a"])(m,o,a,!1,null,"03aa5979",null);t["a"]=f.exports},ba75:function(e,t,r){"use strict";var o=r("dc72"),a=r.n(o);a.a},dc72:function(e,t,r){}}]);