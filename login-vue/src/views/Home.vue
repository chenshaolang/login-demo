<!--
 * @Author: your name
 * @Date: 2020-11-19 15:22:55
 * @LastEditTime: 2020-11-19 17:17:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /login-demo/login-vue/src/views/Home.vue
-->
<template>
  <div class="home">
    <a-row style="height: 150px"/>
    <a-row>
      <a-col :span="9" />
      <a-col :span="6">
        <a-card style="width: 100%">
          <a-input
            placeholder="Basic usage"
            v-model:value="userName"
            ref="userNameInput"
          >
            <template #prefix><user-outlined type="user" /></template>
            <template #suffix>
              <a-tooltip title="Extra information">
                <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
              </a-tooltip>
            </template>
          </a-input>
          <br />
          <br />
          <br />
          <a-input-password
            v-model:value="password"
            placeholder="input password"
          />
          <br />
          <br />
          <br />
          <div style="text-align: center">
            <a-button type="primary" style="width: 150px"> 登录 </a-button>
          </div>
        </a-card>
      </a-col>
      <a-col :span="9" />
    </a-row>
     <a-row style="height: 150px"/>
  </div>
</template>
<script>
import { UserOutlined, InfoCircleOutlined } from "@ant-design/icons-vue";
import { reactive } from "vue";
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
  },
};
</script>
