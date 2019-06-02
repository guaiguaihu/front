<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.useBusCom" placeholder="用车单位" style="width: 100px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-input v-model="listQuery.useBusContact" placeholder="用车单位联系人" style="width: 150px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-input v-model="listQuery.contractNo" placeholder="合同编号" style="width: 100px;" class="filter-item" @keyup.enter.native="handleFilter" />
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
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
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
          {{ scope.row.useBusStartTime }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="合同编号">
        <template slot-scope="scope">
          {{ scope.row.contractNo }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="车牌">
        <template slot-scope="scope">
          {{ scope.row.busNo }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="添加人">
        <template slot-scope="scope">
          {{ scope.row.addName }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="添加时间">
        <template slot-scope="scope">
          {{ scope.row.addTime }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="修改人">
        <template slot-scope="scope">
          {{ scope.row.updateName }}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="修改时间">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.updateTime }}</span>
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
  </div>
</template>

<script>
import { getList, deleteOrder } from '@/api/order/table'
import Pagination from '@/components/Pagination'
import waves from '@/directive/waves'

export default {
  components: { Pagination },
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
        limit: 4,
        useBusCom: '',
        useBusContact: '',
        contractNo: ''
      }
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
    handlerDelete(ordId) {
      deleteOrder(ordId).then(() => {
        this.$message({
          message: '删除成功',
          type: 'success'
        })
      })
      this.handleFilter()
    }
  }
}
</script>
