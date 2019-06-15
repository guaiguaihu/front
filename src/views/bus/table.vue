<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.busNo" placeholder="车牌" style="width: 100px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-input v-model="listQuery.busModel" placeholder="车型" style="width: 80px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-input v-model="listQuery.driver" placeholder="驾驶员" style="width: 100px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-input v-model="listQuery.tel" placeholder="驾驶员手机" style="width: 140px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        查询
      </el-button>
      <router-link :to="'/bus/addBus/'">
            <el-button type="primary">
              添加
            </el-button>
          </router-link>
      <el-button v-waves v-show="false" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">
        导出
      </el-button>
    </div>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="状态">
        <template slot-scope="scope">
          <el-tag>{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="车牌">
        <template slot-scope="scope">
          {{ scope.row.busNo }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="车型">
        <template slot-scope="scope">
          {{ scope.row.busModel }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="驾驶员">
        <template slot-scope="scope">
          {{ scope.row.driver }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="驾驶员手机">
        <template slot-scope="scope">
          {{ scope.row.tel }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="备注">
        <template slot-scope="scope">
          {{ scope.row.remark }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="210" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <router-link v-show="!isSelect" :to="'/bus/editBus/'+scope.row.busId">
            <el-button type="primary" size="mini">
              编辑
            </el-button>
          </router-link>
          <el-button v-show="!isSelect" type="primary" size="mini" @click="handleCharge(scope.row.busId)" >
              记费
          </el-button>
          <el-button v-show="!isSelect" type="danger" size="mini" @click="handlerDelete(scope.row.busId)" >
              删除
          </el-button>
          <el-button v-show="isSelect" type="danger" size="mini" @click="handlerSelect(scope.row, scope.$index)" >
              选择
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="fetchData" />
    
    <el-dialog
      title="添加【车辆】费用"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose">
      <cost-form :bus-id="busId" :model="costModel" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getList, deleteBus } from '@/api/bus/table'
import Pagination from '@/components/Pagination'
import waves from '@/directive/waves'
import CostForm from '@/views/cost/components/CostForm'

export default {
  name: 'BusTable',
  components: { Pagination,CostForm },
  directives: { waves },
  props: {
      isSelect: {
        type: Boolean,
        default: false
      },
      useBusStartTime:{
        type: String,
        default: ''
      },
      useBusEndTime:{
        type: String,
        default: ''
      },
      showBusDialog: {
        type: Array,
        default: null
      }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      total: 0,
      listQuery: {
        page: 1,
        limit: 50,
        busNo: '',
        busModel: '',
        useBusStartTime: this.useBusStartTime,
        useBusEndTime: this.useBusEndTime 
      },
      driver: '',
      tel: '',
      dialogVisible: false,
      busId: '',
      costModel: 'bus'
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        this.list = response.data.items
        this.listLoading = false
        this.total = response.data.total
      console.log(this.list)
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.fetchData()
    },
    handleDownload() {
      this.$message({
          message: '暂时还不提供下载功能',
          type: 'warning'
        });
    },
    handlerDelete(busId) {
      deleteBus(busId).then(() => {
        this.$message({
          message: '删除成功',
          type: 'success'
        })
      })
      this.handleFilter()
    },
    handlerSelect(row, index) {
      this.$delete(this.list, index)
      this.$emit('useBus', row)
    },
    handleCharge(busId){
      this.dialogVisible = true
      this.busId = busId
    },
    handleClose(done) {
      done()
    }
  },
  watch: {
    useBusStartTime: function (newStartTime, oldQuestion) {
      this.listQuery.useBusStartTime = newStartTime
      this.listQuery.useBusEndTime = this.useBusEndTime
      this.fetchData()
    },
    useBusEndTime: function (newEndTime, oldQuestion) {
      this.listQuery.useBusStartTime = this.useBusStartTime
      this.listQuery.useBusEndTime = newEndTime
      this.fetchData()
    }
  }
}
</script>
