<template>
  <div class="app-container">
    <div class="filter-container">
      <el-select v-model="listQuery.status" clearable placeholder="状态" style="width:80px;" class="filter-item" @keyup.enter.native="handleFilter">
        <el-option v-for="item in statusList" :key="item.label" :value="item.label" />
      </el-select>
      <!-- <el-input v-model="listQuery.useBusCom" placeholder="用车单位" style="width: 100px;" class="filter-item" @keyup.enter.native="handleFilter" /> -->
      <el-input v-model="listQuery.useBusContact" placeholder="用车单位联系人" style="width: 150px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-input v-model="listQuery.route" placeholder="行程" style="width: 150px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-date-picker type="datetime" v-model="listQuery.useBusStartTime" value-format="yyyy-MM-dd HH:mm:ss"  placeholder="开始时间" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-date-picker type="datetime" v-model="listQuery.useBusEndTime" value-format="yyyy-MM-dd HH:mm:ss" placeholder="结束时间" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        查询
      </el-button>
    </div>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column align="center" label="订单状态" width="70">
        <template slot-scope="scope">
          <el-tag>{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="用车单位联系人" width="100" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          {{ scope.row.useBusContact }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="用车开始时间" width="150" >
        <template slot-scope="scope">
          <span>{{ scope.row.useBusStartDate }}&nbsp;</span>
          <span v-if="scope.row.useBusStartTime != '00:00'">{{ scope.row.useBusStartTime }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="用车结束时间" width="150" >
        <template slot-scope="scope">
          <span>{{ scope.row.useBusEndDate}}&nbsp;</span>
          <span v-if="scope.row.useBusEndTime != '00:00'">{{ scope.row.useBusEndTime }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="行程" :show-overflow-tooltip="true" >
        <template slot-scope="scope">
          <span>{{ scope.row.route }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="车价" width="65">
        <template slot-scope="scope">
          <span>{{ scope.row.contractAmount }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="是否含费" width="80">
        <template slot-scope="scope">
          <span v-if="scope.row.containCost">是</span>
          <span v-if="!scope.row.containCost">否</span>
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
      <el-table-column align="center" label="操作" width="150" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <router-link :to="'/order/editOrder/'+scope.row.ordId">
            <el-button type="primary" size="mini">
              编辑
            </el-button>
          </router-link>
          <el-button type="danger" size="mini" @click="handlerDelete(scope.row.ordId)" >
              删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="fetchData" />
  
    <el-dialog
        title="添加【用车】费用"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose">
        <cost-form :bus-id="ordBusId" :model="costModel" />
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">关 闭</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
import { getList } from '@/api/order/busdetail'
import Pagination from '@/components/Pagination'
import waves from '@/directive/waves'
import CostForm from '@/views/cost/components/CostForm'

export default {
  components: { Pagination,CostForm },
  directives: { waves },
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
        useBusCom: '',
        useBusContact: '',
        route: '',
        useBusStartDate: null,
        useBusEndDate: null,
        useBusStartTime: null,
        useBusEndTime: null,
        status: ''
      },
      dialogVisible: false,
      ordBusId: '',
      costModel: 'order',
      statusList:[{ label:'预定'},{ label:'生效'}]
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
    handleCharge(ordBusId){
      this.dialogVisible = true
      this.ordBusId = ordBusId
      console.log(ordBusId)
    },
    handlerDelete(ordId) {
      deleteOrder(ordId).then(() => {
        this.$message({
          message: '删除成功',
          type: 'success'
        })
      })
      this.handleFilter()
    },
    handleClose(done) {
      done()
    }
  }
}
</script>
