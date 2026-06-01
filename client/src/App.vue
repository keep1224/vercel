<template>
  <div id="app">
    <h1>Vue 3 + Node.js 全栈应用</h1>
    <p>前端: Vue 3 + Vite</p>
    <p>后端: Node.js</p>
    <button @click="fetchData">获取用户数据</button>
    <div v-if="userData">
      <h2>用户数据</h2>
      <pre>{{ userData }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const userData = ref(null)

const fetchData = async () => {
  try {
    const response = await fetch('/api/users')
    userData.value = await response.json()
  } catch (error) {
    console.error('获取数据失败:', error)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
}
button:hover {
  background-color: #3aa876;
}
pre {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 4px;
  text-align: left;
  margin-top: 20px;
}
</style>