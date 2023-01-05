<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div
        class="collapse navbar-collapse d-flex align-items-center"
        id="navbarSupportedContent"
      >
        <!-- 首頁(下拉選單按鈕) -->
        <div class="btn-group me-auto p-2">
          <button type="button" class="btn btn-outline-secondary">
            <router-link to="/" nested-dropdown-menu>首頁</router-link>
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
            <!-- Default dropend button -->
            <div class="btn-group dropend">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropright
              </button>
              <ul class="dropdown-menu">
                <li>111</li>
              </ul>
            </div>

            <li><a class="dropdown-item" href="#">交易查詢</a></li>
            <li><a class="dropdown-item" href="#">帳務查詢</a></li>
          </ul>
        </div>

        <!-- Account(下拉選單按鈕) -->
        <div class="dropdown bd p-2">
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Account
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li>
              <button class="dropdown-item" type="button">
                <router-link to="/login">登出</router-link>
              </button>
            </li>
          </ul>
        </div>

        <!-- 取得現在時間 -->
        <ul class="mb-2 p-2">
          <li>當前時間：</li>
          <li>{{ nowDay }}</li>
          <li>{{ nowTime }}</li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  el: "#app",
  data: function () {
    return {
      nowDay: "",
      nowTime: "",
    };
  },
  // },
  methods: {
    // 得到當下時間
    timeFormate(timeStamp) {
      let newdate = new Date(timeStamp);
      // let week = ['日', '一', '二', '三', '四', '五', '六'];

      let year = newdate.getFullYear();
      let month =
        newdate.getMonth() + 1 < 10
          ? "0" + (newdate.getMonth() + 1)
          : newdate.getMonth() + 1;
      let date =
        newdate.getDate() < 10 ? "0" + newdate.getDate() : newdate.getDate();
      let hh =
        newdate.getHours() < 10 ? "0" + newdate.getHours() : newdate.getHours();
      let mm =
        newdate.getMinutes() < 10
          ? "0" + newdate.getMinutes()
          : newdate.getMinutes();
      let ss =
        newdate.getSeconds() < 10
          ? "0" + newdate.getSeconds()
          : newdate.getSeconds();

      this.nowTime = hh + ":" + mm + ":" + ss;
      this.nowDay = year + "年" + month + "月" + date + "日";
    },
    // 定時器函數
    nowTimes() {
      let self = this;
      self.timeFormate(new Date());
      setInterval(function () {
        self.timeFormate(new Date());
      }, 1000);
    },
  },
  // 創建完成時
  created() {
    this.nowTimes();
  },
  // 掛載完成時
  mounted() {
    this.nowTimes();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}
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
  color: #000;
}
</style>
