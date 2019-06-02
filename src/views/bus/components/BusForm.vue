<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="车牌">
        <el-col :span="8">
          <el-input v-model="form.busNo" />
        </el-col>
      </el-form-item>
      <el-form-item label="车型">
        <el-col :span="8">
          <el-select v-model="form.busModel" placeholder="请选择车型">
            <el-option v-for="item in busModels" :key="item.key" :label="item.label" :value="item.key" />
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="驾驶员">
        <el-col :span="8">
          <el-input v-model="form.driver" />
        </el-col>
      </el-form-item>
      <el-form-item label="驾驶员手机">
        <el-col :span="8">
          <el-input v-model="form.tel" />
        </el-col>
      </el-form-item>
      <el-form-item label="备注">
        <el-col :span="8">
          <el-input v-model="form.remark" type="textarea" />
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button v-show="!isEdit" type="primary" @click="onSubmitAddBus">添加</el-button>
      </el-form-item>
      <el-form-item v-show="isEdit">
        <el-button type="primary" @click="onSubmitEditBus">编辑</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { submitAddbus, submitEditbus, getBus } from '@/api/bus/bus'
export default {
  name: 'BusForm',
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {
        busId: '',
        busNo: '',
        busModel: '',
        driver: '',
        tel: '',
        remark: ''
      },
      busModels: [{ label: '33座', key: '33' }, { label: '45座', key: '45' }, { label: '55座', key: '55' }, { label: '57座', key: '57' }, { label: '65座', key: '65' }, { label: '7座', key: '7' }, { label: '18座', key: '18' }, { label: '38座', key: '38' }]
    }
  },
  created() {
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.busId
      this.initBus(id)
    }
  },
  methods: {
    onSubmitAddBus() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          submitAddbus(this.form).then(() => {
            this.$notify({
              title: '成功',
              message: '添加成功',
              type: 'success',
              duration: 2000
            })
          })
          this.loading = false
        } else {
          console.log('error add bus submit!!')
          return false
        }
      })
    },
    onSubmitEditBus() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          this.form.data = this.$route.params.busId
          submitEditbus(this.form).then(() => {
            this.$notify({
              title: '成功',
              message: '编辑成功',
              type: 'success',
              duration: 2000
            })
          })
          this.loading = false
        } else {
          console.log('error edit bus submit!!')
          return false
        }
      })
    },
    initBus(busId) {
      getBus(busId).then(response => {
        this.form = response.data
      })
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

