<!--
 * @Author: chenshaolang
 * @Date: 2020-11-19 15:22:55
 * @LastEditTime: 2020-11-19 16:24:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /login-vue/src/App.vue
-->
<template>
  <div class="home">
    <a-layout id="components-layout-demo-top" class="layout">
      <a-layout-header>
      </a-layout-header>
      <a-layout-content style="padding: 0 50px">
        <a-breadcrumb style="margin: 16px 0">
        </a-breadcrumb>
        <div
          :style="{ background: '#fff', padding: '24px', minHeight: '280px' }"
        >
          <router-view/>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  /* background: rgba(255, 255, 255, 0.2); */
  margin: 16px 24px 16px 0;
  float: left;
}
</style>