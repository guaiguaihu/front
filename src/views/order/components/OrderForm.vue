<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <!-- <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>用车信息</span>
        </div> -->
        <el-row type="flex" justify="start" :gutter="10">
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <el-form-item label="用车开始时间">
                <el-date-picker style="width:180px"  v-model="form.useBusStartDate" type="date" value-format="yyyy-MM-dd" />
                <el-time-select style="width:150px" v-model="form.useBusStartTime" :picker-options="{start: '00:00',step: '00:15',end: '24:00'}" />
            </el-form-item>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <el-form-item label="用车结束时间">
                <el-date-picker style="width:180px" v-model="form.useBusEndDate" type="date" value-format="yyyy-MM-dd" />
                <el-time-select style="width:150px" v-model="form.useBusEndTime" :picker-options="{start: '00:00',step: '00:15',end: '24:00'}" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="start" :gutter="10">
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <el-form-item label="用车单位">
                <el-input   style="width:150px" v-model="form.useBusCom" placeholder="请输入用车单位" />
            </el-form-item>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <el-form-item label="用车单位联系人">
                <el-input   style="width:150px" v-model="form.useBusContact" placeholder="请输入用车单位联系人" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="start" :gutter="10">
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <el-form-item label="联系人手机号">
                <el-input   style="width:150px" v-model="form.contactTel" placeholder="请输入用车单位联系人手机号" />
            </el-form-item>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <el-form-item label="行程">
              <el-input   style="width:150px" type="textarea" v-model="form.route" placeholder="请输入行程" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="start">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="备注">
                <el-input   style="width:150px" v-model="form.remark" placeholder="请输入备注" type="textarea" />
            </el-form-item>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <el-form-item label="是否含费">
              <el-checkbox v-model="form.containCost" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-form-item>
            <el-button v-show="true" type="primary" @click="onSubmit">预定</el-button>
          </el-form-item>
        </el-row>
        
      <!-- </el-card> -->
      <!-- <el-card class="box-card" >
        <div slot="header" class="clearfix">
          <span>用车信息</span>
        </div> -->
        <el-row type="flex" justify="start" :gutter="10">
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <el-form-item label="上车点">
                <el-input   style="width:150px" v-model="form.addrGetOn" placeholder="请输入上车点" />
            </el-form-item>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <el-form-item label="下车点">
                <el-input   style="width:150px" v-model="form.addrGetOff" placeholder="请输入下车点" />
            </el-form-item>
          </el-col>
        </el-row>
      <!-- </el-card> -->
      

      <el-dialog
        title="选择车辆"
        :visible.sync="dialogVisible"
        width="80%"
        :before-close="handleClose">
        <bus-table @useBus='useBus' :is-select="true" :show-bus-dialog="form.busList" :use-bus-start-time="selectStartTime" :use-bus-end-time="selectEndTime" />
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">关 闭</el-button>
        </span>
      </el-dialog>
      
      <!-- <el-card class="box-card"> -->
        <el-button type="text" @click="dialogVisible = true" >选择车辆</el-button>
        <el-table :data="form.busList" style="width: 100%" border fit highlight-current-row>
          <el-table-column prop="busNo" label="车牌" width="100" />
          <el-table-column prop="busModel" label="车型" width="100" />
          <el-table-column prop="driver" label="驾驶员" width="100" />
          <el-table-column prop="tel" label="驾驶员手机" width="180" />
          <el-table-column prop="busCost" label="车费" width="110">
            <template slot-scope="scope">
              <el-input v-model="scope.row.busCost" size="small" />
            </template>
          </el-table-column>
          <el-table-column prop="remark" label="备注" width="200" />
          <el-table-column align="center" label="操作" width="150" class-name="small-padding fixed-width">
            <template slot-scope="scope">
              <el-button type="danger" size="mini" @click="handlerDeleteBusFromList(scope.$index)" >
                  移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      <!-- </el-card> -->
      <!-- <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>付款信息</span>
        </div> -->
        <el-row type="flex" justify="start" :gutter="10">
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <el-form-item label="合同编号">
                <el-input   style="width:150px" v-model="form.contractNo" placeholder="请输入合同编号" />
            </el-form-item>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <el-form-item label="付款方式">
                <el-select v-model="form.payType" placeholder="请选择付款方式">
                  <el-option v-for="item in payTypes" :key="item.key" :value="item.key" :label="item.label" />
                </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="start" :gutter="10">
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <el-form-item label="车价">
                <el-input   style="width:150px" v-model="form.contractAmount" disabled />
            </el-form-item>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <el-form-item label="预付金额">
                <el-input   style="width:150px" v-model="form.preContractAmount" placeholder="请输入预付金额" />
            </el-form-item>
          </el-col>
        </el-row>
      <!-- </el-card> -->
        <el-row type="flex" justify="center">    
          <el-form-item>
            <el-button v-show="true" type="primary" @click="onSubmit">提交</el-button>
          </el-form-item>
        </el-row>  
    </el-form>
  </div>
</template>

<script>
import { submitAddOrder, submitEditOrder, getOrder } from '@/api/order/order'
import BusTable from '@/views/bus/table'
import { constants } from 'crypto';
export default {
  name: 'OrderForm',
  components: { BusTable },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {
        ordType: '1',
        payStatus: '',
        useBusStartDate: '',
        useBusEndDate: '',
        useBusStartTime: '',
        useBusEndTime: '',
        contractNo: '',
        contractAmount: 5,
        preContractAmount: '',
        containCost: false,
        busRequireId: '',
        addrGetOn: '',
        addrGetOff: '',
        payType: '1',
        remark: '',
        useBusCom: '',
        useBusContact: '',
        contactTel: '',
        route: '',
        busList: []
      },
      ordTypes:[{ label: '普通', key: '1' }, { label: '外调', key: '2' }],
      payTypes:[{ label: '挂账', key: '1' }, { label: '现金', key: '2' }],
      dialogVisible: false,
      selectStartTime: '',
      selectEndTime: ''
    }
  },
  created() {
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.ordId
      this.initOrder(id)
    }
  },
  watch: {
    form: {
      handler(val, oldValue){
        var total = 0
        val.busList.forEach((v,i)=>{
          var busCost = parseFloat(v.busCost)
          if(!isNaN(busCost)){
            total += busCost
          }
        })
        this.$set(this.form, 'contractAmount', total)

        // changeSelectTime(form)
        this.selectStartTime = ''
        if(val.useBusStartDate){
          this.selectStartTime = val.useBusStartDate
        }
        if(val.useBusStartTime){
          this.selectStartTime += ' ' + val.useBusStartTime
        }
        this.selectEndTime = ''
        if(val.useBusEndDate){
          this.selectEndTime = val.useBusEndDate
        }
        if(val.useBusEndTime){
          this.selectEndTime += ' ' + val.useBusEndTime
        }
        console.log('this.selectStartTime:' + this.selectStartTime)
        console.log('this.selectEndTime:' + this.selectEndTime)
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    changeSelectTime(form){
      this.selectStartTime = useBusStartDate + ' ' +  useBusStartTime
      this.selectEndTime = useBusEndDate + ' ' + useBusEndTime
    },
    onSubmit(){
      if (this.isEdit) {
        this.onSubmitEditOrder()
      } else {
        this.onSubmitAddOrder()
      }
    },
    onSubmitAddOrder() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          submitAddOrder(this.form).then(() => {
            this.$notify({
              title: '成功',
              message: '添加成功',
              type: 'success',
              duration: 2000
            })
            this.form.busList = []
          })
          this.loading = false
        } else {
          return false
        }
      })
    },
    onSubmitEditOrder() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          submitEditOrder(this.form).then(() => {
            this.$notify({
              title: '成功',
              message: '编辑成功',
              type: 'success',
              duration: 2000
            })
          })
          this.loading = false
        } else {
          return false
        }
      })
    },
    initOrder(ordId) {
      getOrder(ordId).then(response => {
        this.form = response.data
        if(!response.data.busList){
          this.form.busList = []
        }
      })
    },
    handleClose(done) {
      done()
    },
    useBus(bus) {
      var existsInBusList = false
      this.form.busList.forEach((v, i) => {
        if(bus.busNo == v.busNo){
          existsInBusList = true
          return true
        }
      })

      if(existsInBusList){
        return
      }
      const busSize = Object.keys(this.form.busList).length
      this.dialogVisible = false
      const id = this.$route.params && this.$route.params.ordId
      bus.ordId = id
      this.$set(bus, "busCost", "")
      this.$set(this.form.busList, busSize, bus)
    },
    handlerDeleteBusFromList(index) {
      this.$delete(this.form.busList, index)
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
.text {
  font-size: 14px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 1100px;
}
</style>

