(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34fb3992"],{"1bae":function(e,t,r){},"35e2":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("用车信息")])]),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"用车类型"}},[r("el-select",{model:{value:e.form.ordType,callback:function(t){e.$set(e.form,"ordType",t)},expression:"form.ordType"}},e._l(e.ordTypes,function(e){return r("el-option",{key:e.key,attrs:{label:e.label,value:e.key}})}),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"是否含费"}},[r("el-checkbox",{model:{value:e.form.containCost,callback:function(t){e.$set(e.form,"containCost",t)},expression:"form.containCost"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"用车单位"}},[r("el-input",{attrs:{placeholder:"请输入用车单位"},model:{value:e.form.useBusCom,callback:function(t){e.$set(e.form,"useBusCom",t)},expression:"form.useBusCom"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"用车单位联系人"}},[r("el-input",{attrs:{placeholder:"请输入用车单位联系人"},model:{value:e.form.useBusContact,callback:function(t){e.$set(e.form,"useBusContact",t)},expression:"form.useBusContact"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"联系人手机号"}},[r("el-input",{attrs:{placeholder:"请输入用车单位联系人手机号"},model:{value:e.form.contactTel,callback:function(t){e.$set(e.form,"contactTel",t)},expression:"form.contactTel"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"用车开始时间"}},[r("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"请选择用车开始时间"},model:{value:e.form.useBusStartTime,callback:function(t){e.$set(e.form,"useBusStartTime",t)},expression:"form.useBusStartTime"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"用车结束时间"}},[r("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"请选择用车结束时间"},model:{value:e.form.useBusEndTime,callback:function(t){e.$set(e.form,"useBusEndTime",t)},expression:"form.useBusEndTime"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"上车点"}},[r("el-input",{attrs:{placeholder:"请输入上车点"},model:{value:e.form.addrGetOn,callback:function(t){e.$set(e.form,"addrGetOn",t)},expression:"form.addrGetOn"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"下车点"}},[r("el-input",{attrs:{placeholder:"请输入下车点"},model:{value:e.form.addrGetOff,callback:function(t){e.$set(e.form,"addrGetOff",t)},expression:"form.addrGetOff"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"行程"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入行程"},model:{value:e.form.route,callback:function(t){e.$set(e.form,"route",t)},expression:"form.route"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"备注"}},[r("el-input",{attrs:{placeholder:"请输入备注",type:"textarea"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1)],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"选择车辆",visible:e.dialogVisible,width:"80%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("bus-table",{attrs:{"is-select":!0,"show-bus-dialog":e.form.busList,"use-bus-start-time":e.form.useBusStartTime,"use-bus-end-time":e.form.useBusEndTime},on:{useBus:e.useBus}}),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("关 闭")])],1)],1),e._v(" "),r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("车辆信息")]),e._v(" "),r("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("选择车辆")])],1),e._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.form.busList,border:"",fit:"","highlight-current-row":""}},[r("el-table-column",{attrs:{prop:"busNo",label:"车牌",width:"100"}}),e._v(" "),r("el-table-column",{attrs:{prop:"busModel",label:"车型",width:"100"}}),e._v(" "),r("el-table-column",{attrs:{prop:"driver",label:"驾驶员",width:"100s"}}),e._v(" "),r("el-table-column",{attrs:{prop:"tel",label:"驾驶员手机",width:"180"}}),e._v(" "),r("el-table-column",{attrs:{prop:"remark",label:"备注",width:"400"}}),e._v(" "),r("el-table-column",{attrs:{align:"center",label:"操作",width:"150","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(r){return e.handlerDeleteBusFromList(t.$index)}}},[e._v("\n                移除\n            ")])]}}])})],1)],1),e._v(" "),r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("付款信息")])]),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"合同编号"}},[r("el-input",{attrs:{placeholder:"请输入合同编号"},model:{value:e.form.contractNo,callback:function(t){e.$set(e.form,"contractNo",t)},expression:"form.contractNo"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"付款方式"}},[r("el-select",{attrs:{placeholder:"请选择付款方式"},model:{value:e.form.payType,callback:function(t){e.$set(e.form,"payType",t)},expression:"form.payType"}},e._l(e.payTypes,function(e){return r("el-option",{key:e.key,attrs:{value:e.key,label:e.label}})}),1)],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"合同金额"}},[r("el-input",{attrs:{placeholder:"请输入合同金额"},model:{value:e.form.contractAmount,callback:function(t){e.$set(e.form,"contractAmount",t)},expression:"form.contractAmount"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"预付金额"}},[r("el-input",{attrs:{placeholder:"请输入预付金额"},model:{value:e.form.preContractAmount,callback:function(t){e.$set(e.form,"preContractAmount",t)},expression:"form.preContractAmount"}})],1)],1)],1)],1),e._v(" "),r("el-form-item",[r("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.isEdit,expression:"!isEdit"}],attrs:{type:"primary"},on:{click:e.onSubmitAddOrder}},[e._v("添加")])],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.isEdit,expression:"isEdit"}]},[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmitEditOrder}},[e._v("编辑")])],1)],1)],1)},a=[],l=(r("fb37"),r("f763"),r("b775"));function s(e){return Object(l["a"])({url:"/order",method:"post",data:e})}function n(e){return Object(l["a"])({url:"/order",method:"put",data:e})}function i(e){return Object(l["a"])({url:"/order/"+e,method:"get"})}var c=r("5570"),u={name:"OrderForm",components:{BusTable:c["default"]},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{form:{ordType:"1",payStatus:"",useBusStartTime:"",useBusEndTime:"",contractNo:"",contractAmount:"",preContractAmount:"",containCost:!1,busRequireId:"",addrGetOn:"",addrGetOff:"",payType:"2",remark:"",useBusCom:"",useBusContact:"",contactTel:"",route:"",busList:[]},ordTypes:[{label:"普通",key:"1"},{label:"外调",key:"2"}],payTypes:[{label:"挂账",key:"1"},{label:"现金",key:"2"}],dialogVisible:!1}},created:function(){if(this.isEdit){var e=this.$route.params&&this.$route.params.ordId;this.initOrder(e)}},methods:{onSubmitAddOrder:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return console.log("error add Order submit!!"),!1;e.loading=!0,s(e.form).then(function(){e.$notify({title:"成功",message:"添加成功",type:"success",duration:2e3}),e.form.busList=[]}),e.loading=!1})},onSubmitEditOrder:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return console.log("error edit Order submit!!"),!1;e.loading=!0,n(e.form).then(function(){e.$notify({title:"成功",message:"编辑成功",type:"success",duration:2e3})}),e.loading=!1})},initOrder:function(e){var t=this;i(e).then(function(e){t.form=e.data,console.log(t.form)})},handleClose:function(e){e()},useBus:function(e){var t=!1;if(this.form.busList.forEach(function(r,o){if(e.busNo==r.busNo)return t=!0,!0}),!t){var r=Object.keys(this.form.busList).length;this.dialogVisible=!1;var o=this.$route.params&&this.$route.params.ordId;e.ordId=o,this.$set(this.form.busList,r,e)}},handlerDeleteBusFromList:function(e){this.$delete(this.form.busList,e)}}},m=u,d=(r("74ec"),r("17cc")),f=Object(d["a"])(m,o,a,!1,null,"f2ce56ec",null);t["a"]=f.exports},"74ec":function(e,t,r){"use strict";var o=r("1bae"),a=r.n(o);a.a},e282:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("order-form",{attrs:{"is-edit":!0}})},a=[],l=r("35e2"),s={name:"EditOrderForm",components:{OrderForm:l["a"]}},n=s,i=r("17cc"),c=Object(i["a"])(n,o,a,!1,null,null,null);t["default"]=c.exports},f9f2:function(e,t,r){var o=r("b2f5"),a=r("a4cc"),l=r("b6f1");e.exports=function(e,t){var r=(a.Object||{})[e]||Object[e],s={};s[e]=t(r),o(o.S+o.F*l(function(){r(1)}),"Object",s)}},fb37:function(e,t,r){var o=r("db4b"),a=r("cfc7");r("f9f2")("keys",function(){return function(e){return a(o(e))}})}}]);