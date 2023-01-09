<template>
  <div id="Login">

    <!-- header -->
    <nav class="navbar navbar-light bg-light mb-3">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">CRM登入</span>
      </div>
    </nav>
    <div class="container">
      <div class="card">
        <div class="card-body">
          <!-- Account Input -->
          <div class="mb-3 row">
            <label for="staticEmail" class="col-3 col-form-label"
              >Account:</label
            >
            <div class="col-7 align-self-center">
              <input class="form-control" type="text" v-model="account" />
            </div>
          </div>
          <!-- Password Input -->
          <div class="mb-3 row">
            <label for="inputPassword" class="col-3 col-form-label" 
              >Password:</label
            >
            <div class="col-7 align-self-center">
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                v-model="password"
              />
            </div>
          </div>

          <!-- date picker Input -->
          <div class="mb-3 row">
            <label for="inputPassword" class="col-3 col-form-label"
              >Birthday:</label
            >
            <div class="col-7 align-self-center">
              <input
                type="date"
                class="form-control"
                id="inputPassword"
                v-model="birthday"
              />
            </div>
          </div>
          <hr />
          <!-- 有值才會顯示 -->
          <div v-if="account || password || birthday"></div>
          <p v-if="account">Account: {{ account }}</p>
          <p v-if="password">Password: {{ password }}</p>
          <p v-if="birthday">Birthday: {{ birthday }}</p>

          <!-- button -->
          <div class="container">
            <div class="row">
              <div class="col-6">
                <button type="button" class="btn btn-lg btn-primary btn-block">
                  <router-link to="/">登入</router-link>
                </button>
              </div>
              <div class="col-6">
                <button
                  type="button"
                  class="btn btn-lg btn-secondary btn-block"
                  v-on:click="cleanForm"
                >
                  clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  el: "#app",
  data() {
    return {
      account: "",
      password: "",
      birthday: "",
    };
  },
  /**彈出視窗 */
  methods: {
    greet() {
      alert("登入成功");
    },
    cleanForm:function(){
      this.account = "";
      this.password= "";
      this.birthday= "";
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
  text-decoration: none;
  color: #fff;
}
</style>
