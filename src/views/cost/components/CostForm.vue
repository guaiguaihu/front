<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="费用">
        <el-col :span="16">
          <el-input v-model="form.costName" />
        </el-col>
      </el-form-item>
      <el-form-item label="金额">
        <el-col :span="16">
          <el-input v-model="form.costAmount" />
        </el-col>
      </el-form-item>
      <el-form-item label="备注">
        <el-col :span="16">
          <el-input v-model="form.remark" />
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmitAddCost">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { submitAddCost } from '@/api/cost/cost'
export default {
  name: 'CostForm',
  props:{
    busId: {
      type: Number,
      default: ''
    },
    model: {
      type: String,
      default: 'bus'
    }
  },
  data() {
    return {
      form: {
        costName: '',
        costAmount: '',
        remark: '',
        costRelatedId: this.busId,
        costRelatedModel: this.model
      }
    }
  },
  methods: {
    onSubmitAddCost() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          submitAddCost(this.form).then(() => {
            this.$notify({
              title: '成功',
              message: '添加成功',
              type: 'success',
              duration: 2000
            })
          })
          this.loading = false
        } else {
          console.log('error add cost submit!!')
          return false
        }
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

