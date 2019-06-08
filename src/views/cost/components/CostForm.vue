<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="费用">
        <el-col :span="16">
          <el-select v-model="form.costName">
              <el-option v-for="item in costNames" :key="item.key" :label="item.label" :value="item.key" />
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="金额">
        <el-col :span="16">
          <el-input v-model="form.costAmount" />
        </el-col>
      </el-form-item>
      <el-form-item v-show="false" label="起始公里">
        <el-col :span="16">
          <el-input v-model="form.startKm" />
        </el-col>
      </el-form-item>
      <el-form-item v-show="false" label="终点公里">
        <el-col :span="16">
          <el-input v-model="form.endKm" />
        </el-col>
      </el-form-item>
      <el-form-item v-show="false" label="实驶公里">
        <el-col :span="16">
          <span>{{dravelKm}}</span>
        </el-col>
      </el-form-item>
      <el-form-item label="备注">
        <el-col :span="16">
          <el-input v-model="form.remark" type="textarea" />
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
        costRelatedModel: this.model,
        startKm: '',
        endKm: ''
      },
      costNames:[{ label:'过路费', key:'1' },{ label:'停车费', key:'2' },{ label:'住宿费', key:'3' },{ label:'餐费', key:'4' },{ label:'修理', key:'5' },{ label:'罚款', key:'6' }]
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

