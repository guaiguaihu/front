<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.useBusCom" placeholder="用车单位" style="width: 100px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-input v-model="listQuery.useBusContact" placeholder="用车单位联系人" style="width: 150px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-input v-model="listQuery.route" placeholder="行程" style="width: 150px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-date-picker type="date" v-model="listQuery.useBusStartTime" value-format="yyyy-MM-dd"  placeholder="用车开始时间" style="width: 150px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-date-picker type="date" v-model="listQuery.useBusEndTime" value-format="yyyy-MM-dd" placeholder="用车结束时间" style="width: 150px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        查询
      </el-button>
      <router-link :to="'/order/addOrder/'">
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
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="center" inline class="demo-table-expand">
              <el-table
                :data="props.row.busList"
                style="width: 100%">
                  <el-table-column align="center" label="车牌" width="180">
                    <template slot-scope="scope">
                      {{ scope.row.busNo }}
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label="车型" width="180">
                    <template slot-scope="scope">
                      {{ scope.row.busModel }}
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label="驾驶员" width="180">
                    <template slot-scope="scope">
                      {{ scope.row.driver }}
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label="驾驶员手机" width="180">
                    <template slot-scope="scope">
                      {{ scope.row.tel }}
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label="备注" width="180">
                    <template slot-scope="scope">
                      {{ scope.row.remark }}
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label="操作" width="90">
                    <template slot-scope="scope">
                     <el-button type="primary" size="mini" @click="handleCharge(scope.row.ordBusId)" >
                        记费
                    </el-button>
                    </template>
                  </el-table-column>
                </el-table>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="用车单位">
        <template slot-scope="scope">
          {{ scope.row.useBusCom }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="用车单位联系人">
        <template slot-scope="scope">
          {{ scope.row.useBusContact }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="用车开始时间">
        <template slot-scope="scope">
          <span>{{ scope.row.useBusStartTime | parseDate('{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="用车结束时间">
        <template slot-scope="scope">
          <span>{{ scope.row.useBusEndTime | parseDate('{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="行程">
        <template slot-scope="scope">
          <span>{{ scope.row.route }}</span>
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
        title="添加【用车】费用111"
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
import { getList, deleteOrder } from '@/api/order/table'
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
        useBusStartTime: null,
        useBusEndTime: null
      },
      dialogVisible: false,
      ordBusId: '',
      costModel: 'order'
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
