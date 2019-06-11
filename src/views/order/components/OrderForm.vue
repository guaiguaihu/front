<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-card class="box-card" >
        <div slot="header" class="clearfix">
          <span>用车信息</span>
        </div>
        <el-row>
          <el-col :span="12">
            <el-form-item label="用车类型">
                <el-select v-model="form.ordType">
                  <el-option v-for="item in ordTypes" :key="item.key" :label="item.label" :value="item.key" />
                </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="是否含费">
              <el-checkbox v-model="form.containCost" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="用车单位">
                <el-input v-model="form.useBusCom" placeholder="请输入用车单位" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="用车单位联系人">
                <el-input v-model="form.useBusContact" placeholder="请输入用车单位联系人" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="联系人手机号">
                <el-input v-model="form.contactTel" placeholder="请输入用车单位联系人手机号" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="用车开始时间">
                <el-date-picker v-model="form.useBusStartTime" type="date" value-format="yyyy-MM-dd" placeholder="请选择用车开始时间" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="用车结束时间">
                <el-date-picker v-model="form.useBusEndTime" type="date" value-format="yyyy-MM-dd" placeholder="请选择用车结束时间" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="上车点">
                <el-input v-model="form.addrGetOn" placeholder="请输入上车点" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="下车点">
                <el-input v-model="form.addrGetOff" placeholder="请输入下车点" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="行程">
              <el-input type="textarea" v-model="form.route" placeholder="请输入行程" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="备注">
                <el-input v-model="form.remark" placeholder="请输入备注" type="textarea" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
      

      <el-dialog
        title="选择车辆"
        :visible.sync="dialogVisible"
        width="80%"
        :before-close="handleClose">
        <bus-table @useBus='useBus' :is-select="true" :show-bus-dialog="form.busList" :use-bus-start-time="form.useBusStartTime" :use-bus-end-time="form.useBusEndTime" />
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">关 闭</el-button>
        </span>
      </el-dialog>
      
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>车辆信息</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="dialogVisible = true" >选择车辆</el-button>
        </div>
        <el-table :data="form.busList" style="width: 100%" border fit highlight-current-row>
          <el-table-column prop="busNo" label="车牌" width="100" />
          <el-table-column prop="busModel" label="车型" width="100" />
          <el-table-column prop="driver" label="驾驶员" width="100s" />
          <el-table-column prop="tel" label="驾驶员手机" width="180" />
          <el-table-column prop="remark" label="备注" width="400" />
          <el-table-column align="center" label="操作" width="150" class-name="small-padding fixed-width">
            <template slot-scope="scope">
              <el-button type="danger" size="mini" @click="handlerDeleteBusFromList(scope.$index)" >
                  移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>付款信息</span>
        </div>
        <el-row>
          <el-col :span="12">
            <el-form-item label="合同编号">
                <el-input v-model="form.contractNo" placeholder="请输入合同编号" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="付款方式">
                <el-select v-model="form.payType" placeholder="请选择付款方式">
                  <el-option v-for="item in payTypes" :key="item.key" :value="item.key" :label="item.label" />
                </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="合同金额">
                <el-input v-model="form.contractAmount" placeholder="请输入合同金额" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="预付金额">
                <el-input v-model="form.preContractAmount" placeholder="请输入预付金额" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
      
      <el-form-item>
        <el-button v-show="!isEdit" type="primary" @click="onSubmitAddOrder">添加</el-button>
      </el-form-item>
      <el-form-item v-show="isEdit">
        <el-button type="primary" @click="onSubmitEditOrder">编辑</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { submitAddOrder, submitEditOrder, getOrder } from '@/api/order/order'
import BusTable from '@/views/bus/table'
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
        useBusStartTime: '',
        useBusEndTime: '',
        contractNo: '',
        contractAmount: '',
        preContractAmount: '',
        containCost: false,
        busRequireId: '',
        addrGetOn: '',
        addrGetOff: '',
        payType: '2',
        remark: '',
        useBusCom: '',
        useBusContact: '',
        contactTel: '',
        route: '',
        busList: []
      },
      ordTypes:[{ label: '普通', key: '1' }, { label: '外调', key: '2' }],
      payTypes:[{ label: '挂账', key: '1' }, { label: '现金', key: '2' }],
      dialogVisible: false
    }
  },
  created() {
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.ordId
      this.initOrder(id)
    }
  },
  methods: {
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
          console.log('error add Order submit!!')
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
          console.log('error edit Order submit!!')
          return false
        }
      })
    },
    initOrder(ordId) {
      getOrder(ordId).then(response => {
        this.form = response.data
        console.log(this.form)
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

