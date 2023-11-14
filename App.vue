<template>
  <section>
    <img v-bind:src="picture" width="300" height="400">
    <h1>ชื่อผู้สมัครงาน : {{fullname()}}</h1>
    <h1>อายุ : {{age}} ปี</h1>
    <p>ที่อยู่ : <span v-html="address"></span></p>
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
      address:"<i>จังหวัดฉะเชิงเทรา</i>",
      picture:"https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.15752-9/262418668_3102586646696924_7027298862749235368_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=EGu8Wv8s7XUAX9MFuYT&_nc_ht=scontent.fbkk5-3.fna&oh=03_AdTO9wJDHPgJT7WvwoV3HNaqsShQM3bUk2p2lSe3aitoRg&oe=657B0714"
    }
  },
  methods:{
    fullname(){
      return this.firstname + " "+ this.lastname
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
