<template>
  <div class="hello">
    {{msg}}
    <el-button type="success" @click="handleGet">GETUSER</el-button>
    <el-button type="success" @click="handlePost">ADDUSER</el-button>
  </div>
</template>

<script>
import { getUser, addUser } from "@/api/index";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    handleGet() {
      // this.$http.get('api/getUser').then((res)=>{
      //   console.log(res)
      // })
      const data = { id: 1 };
      getUser(data)
        .then(res => {
          console.log(res);
          this.msg = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handlePost() {
      const data = { id: 1, name: "dulei" };
      addUser(data)
        .then(res => {
          console.log(res);
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
