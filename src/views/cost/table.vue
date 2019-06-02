<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.costName" placeholder="费用" style="width: 100px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-input v-model="listQuery.costAmount" placeholder="金额" style="width: 100px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        查询
      </el-button>
      <router-link :to="'/cost/addCost/'">
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
      <el-table-column align="center" label="费用">
        <template slot-scope="scope">
          {{ scope.row.costName }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="金额">
        <template slot-scope="scope">
          {{ scope.row.costAmount }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="备注">
        <template slot-scope="scope">
          {{ scope.row.remark }}
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
          <el-button type="danger" size="mini" @click="handlerDelete(scope.row.costId)" >
              删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="fetchData" />
    
  </div>
</template>

<script>
import { getList, deleteCost } from '@/api/cost/table'
import Pagination from '@/components/Pagination'
import waves from '@/directive/waves'

export default {
  name: 'CostTable',
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
        costName: '',
        costAmount: ''
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
      console.log("22:")
    },
    handleDownload() {
      this.$message({
          message: '暂时还不提供下载功能',
          type: 'warning'
        });
    },
    handlerDelete(costId) {
      deleteCost(costId).then(() => {
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
