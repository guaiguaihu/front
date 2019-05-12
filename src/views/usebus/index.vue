<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用车时间">
        <el-col :span="5">
          <el-date-picker v-model="form.startDate" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="5">
          <el-time-picker v-model="form.startTime" placeholder="选择时间" style="width: 100%;" />
        </el-col>
        <el-col><div>到</div></el-col>
        <el-col :span="5">
          <el-date-picker v-model="form.endDate" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="5">
          <el-time-picker v-model="form.endTime" placeholder="选择时间" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="租用天数">
        <el-col :span="2">
          <el-input v-model="form.days" />
        </el-col>
      </el-form-item>
      <el-form-item label="用车单位">
        <el-select v-model="form.usebusCompany" placeholder="用车单位">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="用车单位联系人">
        <el-col :span="2">
          <el-input v-model="form.contacts" />
        </el-col>
      </el-form-item>
      <el-form-item label="合同编号">
        <el-col :span="2">
          <el-input v-model="form.contarctNo" />
        </el-col>
      </el-form-item>
      <el-form-item label="上车地点">
        <el-col :span="2">
          <el-input v-model="form.getOn" />
        </el-col>
      </el-form-item>
      <el-form-item label="下车地点">
        <el-col :span="2">
          <el-input v-model="form.getOff" />
        </el-col>
      </el-form-item>
      <el-form-item label="适用车型">
        <el-select v-model="form.usebusType" placeholder="适用车型">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="付款方式">
        <el-select v-model="form.payType" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="导游姓名">
        <el-switch v-model="form.touristGuide" />
      </el-form-item>
      <el-form-item label="订单所属公司">
        <el-col :span="2">
          <el-input v-model="form.orderCompany" />
        </el-col>
      </el-form-item>
      <el-form-item label="订单所属部门">
        <el-col :span="2">
          <el-input v-model="form.orderCompanyDepartment" />
        </el-col>
      </el-form-item>
      <el-form-item label="担保人">
        <el-col :span="2">
          <el-input v-model="form.guarantor" />
        </el-col>
      </el-form-item>
      <el-form-item label="团队行程">
        <el-col :span="2">
          <el-input v-model="form.guarantor" type="textarea" />
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { submitUsebus } from '@/api/usebus'
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        days:''
      },
      rules: {
        days: [{ required: true, message: 'days is required', trigger: 'blur' }]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          submitUsebus(this.form).then(() => {
            this.$notify({
              title: '成功',
              message: '创建成功',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    }
  }
}
</script>
