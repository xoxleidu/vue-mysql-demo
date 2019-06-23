<template>
  <div class="hello">
    <el-button type="primary" @click="handleAdd" disabled>add</el-button>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="id" prop="id"></el-table-column>
      <el-table-column label="Name" prop="name"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { addUser, delUser, updataUser, getUser } from "@/api/index";

export default {
  name: "HelloWorld",
  data() {
    return {
      tableData: [],
      search: ""
    };
  },
  created() {
    this.handleTable();
  },
  methods: {
    /**
     * 增加
     */
    handleAdd() {
      let data = {
        id: 3,
        name: "dulei3"
      };
      addUser(data)
        .then(res => {
          this.handleTable();
        })
        .catch(err => {
          console.log(err);
        });
    },
    /**
     * 删除
     */
    handleDelete(index, row) {
      console.log(index, row);
      delUser(row.id)
        .then(res => {
          this.handleTable();
        })
        .catch(err => {
          console.log(err);
        });
    },
    /**
     * 编辑
     */
    handleEdit(index, row) {
      console.log(index, row);
      updataUser(row)
        .then(res => {
          this.handleTable();
        })
        .catch(err => {
          console.log(err);
        });
    },
    /**
     * 查询
     */
    handleTable(search) {
      getUser(search)
        .then(res => {
          console.log(res);
          this.tableData = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
