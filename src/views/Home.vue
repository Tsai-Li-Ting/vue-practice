<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div
        class="collapse navbar-collapse d-flex align-items-center"
        id="navbarSupportedContent"
      >
        <!-- 首頁 ▾ -->
        <div class="navbar-nav btn-group me-auto">
          <!-- 首頁 (按鈕) -->
          <button type="button" class="btn btn-outline-secondary">
            <router-link to="/">首頁</router-link>
          </button>
          <!-- ▾ (下拉選單按鈕) -->
          <button
            type="button"
            class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <!-- 下拉選單選項 start -->
          <ul class="dropdown-menu">
            <!-- 交易查詢 ▾ -->
            <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">交易查詢</a>

              <!-- 子選單Level 2 start-->
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">委託查詢</a>
                  <a class="dropdown-item" href="#">成交查詢</a>
                </li>
              </ul>
              <!-- 子選單Level 2 end-->

            </li>
            <li><a class="dropdown-item" href="#">帳務查詢</a></li>
          </ul>

          <!-- 下拉選單選項 end -->
        </div>

        <!-- Account(下拉選單按鈕) -->
        <div class="dropdown bd">
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
                <router-link to="/">登出</router-link>
              </button>
            </li>
          </ul>
        </div>

        <!-- 取得現在時間 -->
        <div class="p-2 d-flex align-items-center">
          <p>當前時間：{{ nowDay }}{{ nowTime }}</p>
        </div>
      </div>
    </div>
  </nav>

  <p>
    /views/Home.vue
  </p>
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

.navbar-nav li:hover>ul.dropdown-menu{
  display: block;
}

.dropdown-submenu{
  position: relative;
}

.dropdown-submenu>.dropdown-menu{
  top:0%;
  left: 100%;
  margin-top: -1px;
}

a {
  text-decoration: none; 
  color: #000;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}

.navbar-nav a:hover {
  color: #fff;
}

button li {
  display: block;
}

p{
  margin: unset;
}
</style>
