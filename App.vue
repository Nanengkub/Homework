<template>
  <section>
    <img v-bind:src="picture" width="260" height="300">
    <h1>ชื่อผู้สมัครงาน : {{fullname()}}</h1>
    <h1>อายุ : {{age}} ปี</h1>
    <p>ที่อยู่ : <span v-html="address"></span></p>
    <h2><img v-bind:src="picture1" width="30" height="25"> : <a :href="social" target="_blank">Isnan Napapha</a></h2>
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
      picture:"https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/318087905_2347445945423816_6541491558505673002_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0aEOhQoBdp4AX8UkZiz&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfBRnAG4MogvnOdJIC6rEenF78MKX--RiMJEL6h6sPo4bQ&oe=655BB776",
      social:"https://www.facebook.com/NapaphaTh",
      picture1:"https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338509_1280.png"
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
