<template>
  <section>
    <h1>ชื่อผู้สมัครงาน : {{firstname}}</h1>
    <h1>นามสกุล : {{lastname}}</h1>
    <h1>อายุ : {{age}} ปี</h1>
  </section>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      firstname:"ณปภา",
      lastname:"ธุวสินธุ์",
      age:17,
    }
  }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>