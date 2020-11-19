<!--
 * @Author: your name
 * @Date: 2020-11-19 15:22:55
 * @LastEditTime: 2020-11-19 18:39:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /login-demo/login-vue/src/views/Home.vue
-->
<template>
  <div class="home">
    <a-row style="height: 150px" />
    <a-row>
      <a-col :span="9" />
      <a-col :span="6">
        <a-card style="width: 100%">
          <br />
          <a-input v-model:value="data.userName" placeholder="Basic usage" />
          <br />
          <br />
          <br />
          <a-input-password
            v-model:value="data.password"
            placeholder="input password"
          />
          <br />
          <br />
          <br />
          <div style="text-align: center">
            <a-button type="primary" style="width: 150px" @click="lodin">
              登录
            </a-button>
          </div>
        </a-card>
      </a-col>
      <a-col :span="9" />
    </a-row>
    <a-row style="height: 150px" />
  </div>
</template>
<script>
import { UserOutlined, InfoCircleOutlined } from "@ant-design/icons-vue";
import { reactive } from "vue";
import { message } from "ant-design-vue";
import axios from "axios";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    UserOutlined,
  },
  setup() {
    const data = reactive({
      userName: "",
      password: "",
    });
    function lodin() {
      form.append("user_name", data.userName);
      form.append("password", data.password);

      axios
        .post("/login", form)
        .then((response) => {
          if (response.status != 200) {
            message.error(`登录失败.`);
          } else {
            message.success(`登录成功.`);
          }
        })
        .catch((error) => {
          if (error.response) {
            message.error(`登录失败.`);
          } else if (error.request) {
            message.error(`登录失败，服务器端无响应.`);
          } else {
            message.error(`登录失败，请求封装失败.`);
          }
        });
    }
    return { data };
  },
};
</script>
