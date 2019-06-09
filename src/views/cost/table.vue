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
          <el-tag>{{ scope.row.costName | costNameTypeFilter }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="金额">
        <template slot-scope="scope">
          {{ scope.row.costAmount }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="车牌">
        <template slot-scope="scope">
          {{ scope.row.busDomain.busNo }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="用车开始时间">
        <template slot-scope="scope">
          {{ scope.row.useBusStartTime }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="用车结束时间">
        <template slot-scope="scope">
          {{ scope.row.useBusStartTime }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="备注">
        <template slot-scope="scope">
          {{ scope.row.remark }}
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
const costNames = [{ label:'过路费', key:'1' },
                    { label:'停车费', key:'2' },
                    { label:'住宿费', key:'3' },
                    { label:'餐费', key:'4' },
                    { label:'修理', key:'5' },
                    { label:'罚款', key:'6' }]

const coatNameTypeKeyValue = costNames.reduce((acc, cur) => {
  acc[cur.key] = cur.label
  return acc
}, {})

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
    },
    costNameTypeFilter(key){
      return coatNameTypeKeyValue[key]
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
      },
      costNames
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
