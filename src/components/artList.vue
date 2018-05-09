<template>
    <div>
            <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              sortable
              width="180"
              :filters="[{text: '近一周', value: 'week'}, {text: '近一个月', value: 'month'}, {text: '近一年', value: 'year'}, {text: '所有', value: 'all'}]"
              :filter-method="filterDate"
            >
            </el-table-column>
            <el-table-column
              prop="visit"
              label="浏览数"
              sortable
              width="100"
              :filters="[{text: '大于10000', value: '10000'}, {text: '大于5000', value: '5000'}, {text: '大于1000', value: '1000'}, {text: '大于100', value: '100'}]"
              :filter-method="filterVisit"
            >
            </el-table-column>
            <el-table-column
              prop="title"
              label="标题"
              width="350"
              sortable
            >
            </el-table-column>
            <el-table-column
              prop="kind"
              label="类型"
              sortable
              width="100"
              :filters="[{text: '技术', value: '技术'}, {text: '心灵鸡汤', value: '心灵鸡汤'}, {text: '散文', value: '散文'}, {text: '其他', value: '其他'}]"
              :filter-method="filterKind"
            >
            </el-table-column>
            <el-table-column
              prop="recomm"
              label="评论数"
              sortable
              width="100"
            >
            </el-table-column>
            <el-table-column
              prop="like"
              label="是否推荐"
              sortable
              width="80"
            >
            </el-table-column>
            <el-table-column
              prop="original"
              label="来源"
              sortable
              width="100"
              :filters="[{text: '原创', value: '原创'}, {text: '转载', value: '转载'}]"
              :filter-method="filterOriginal"
            >
            </el-table-column>
            <el-table-column
              prop="author"
              label="作者"
              sortable
              width="100"
            >
            </el-table-column>
            <el-table-column
              prop="tag"
              label="标签"
              width="180">
              <template slot-scope="scope">
                <el-tag
                  disable-transitions v-for='(it,ind) in scope.row.tag' v-bind:key='ind'>{{it.value}}</el-tag>
              </template>
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="140">
                <template slot-scope="scope">
                    <el-button @click="lookArt(scope.row)" type="text" size="small">查看/编辑</el-button>
                    <el-button @click="deleArt(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
          </el-table>
          <el-pagination
        background="true"
        layout="prev, pager, next"
        :total="1000">
        </el-pagination>
    </div>
  
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          author:'benzic',
          visit:1280,
          recomm:128,
          kind:'JS/前端',
          original:"原创",
          title:'上海市普陀区金沙江路 1518 弄',
          tag: [{ text: '家', value: '家' }, { text: '公司', value: '公司' }],
          like:'否',
          id:1
        }, {
            date: '2016-05-02',
          author:'benzic',
          visit:1280,
          recomm:128,
          kind:'JS/前端',
          original:"原创",
          title:'上海市普陀区金沙江路 1518 弄',
          tag: [{ text: '家', value: '家' }, { text: '公司', value: '公司' }],
          like:'否',
          id:2
        }, {
            date: '2016-05-02',
          author:'benzic',
          visit:1280,
          recomm:128,
          kind:'JS/前端',
          original:"原创",
          title:'上海市普陀区金沙江路 1518 弄',
          tag: [{ text: '家', value: '家' }, { text: '公司', value: '公司' }],
          like:'否',
          id:3
        }, {
            date: '2016-05-02',
          author:'benzic',
          visit:1280,
          recomm:128,
          kind:'JS/前端',
          original:"原创",
          title:'北海市普陀区金沙江路 1518 弄',
          tag: [{ text: '家', value: '家' }, { text: '公司', value: '公司' }],
          like:'否',
          id:4
        }]
      }
    },
    methods: {
      filterOriginal(value, row, column) {
        console.log(value, row, column)
      },
      filterKind(value, row, column) {
        console.log(value, row, column)
      },
      filterDate(value, row, column) {
        console.log(value, row, column)
      },filterVisit(value, row, column) {
        console.log(value, row, column)
      },
      lookArt (value){
          console.log(value)
          this.$router.replace({ name: 'artcle', query: { id:value.id }})
      },
      deleArt (value) {
        console.log(value)
      }
    }
  }
</script>
<style scoped>
    .el-pagination{
        width: 365px;
        margin: 0 auto;
    }
</style>