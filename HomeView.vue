<template>
  <section>
    <img v-bind:src="picture" width="200" height="300">
    <h1>ชื่อผู้สมัครงาน : {{fullname()}}</h1>
    <h1>อายุ : {{age}} ปี</h1>
    <p>ที่อยู่ : <span v-html="address"></span></p>
    <h2><img v-bind:src="picture1" width="30" height="25"> : <a :href="social" target="_blank">Isnan Napapha</a></h2>
    <p>งานอดิเรก : </p>
    <ul>
         <li>{{ hobby[0] }}</li>
         <li>{{ hobby[1] }}</li>
         <li>{{ hobby[2] }}</li>
         <li>{{ hobby[3] }}</li>
    </ul>
    <p>ข้อมูลพื้นฐาน : </p>
    <ul>
         <li>เพศ : {{ general.gender }}</li>
         <li>น้ำหนัก : {{ general.weight }} กิโลกรัม</li>
         <li>ส่วนสูง : {{ general.height }} เซนติเมตร</li>
         <li>โรคประจำตัว : {{ general.status }}</li>
    </ul>
    <button @click="showData"> คลิกเพื่อดูข้อมูล </button>
    <button @click="increment"> เพิ่ม </button>
    <button @click="decrement"> ลด </button>
  </section>
  <TableCom :theader="theader" :tdata="tdata"/>
</template>

<script>
import TableCom from "../components/TableMng.vue";

export default {

  name: 'App',
  components:{
    TableCom,
  },
  data(){
    return{
      firstname:"ณปภา",
      lastname:"ธุวสินธุ์",
      age:17,
      address:"<i>จังหวัดฉะเชิงเทรา</i>",
      picture:"https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.15752-9/385505884_717666229999416_7802181730478896997_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=4b3pPA_00KkAX9fl_gA&_nc_ht=scontent.fbkk5-6.fna&oh=03_AdRtvrANANObwporelpOMyW16NYpPcQf7iLa66mH2M6Hxg&oe=6597F818",
      social:"https://www.facebook.com/NapaphaTh",
      picture1:"https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338509_1280.png",
      hobby:["ดูหนัง","ฟังเพลง","อ่านนิยาย","เล่นกีฬา"],
      general:{gender:"หญิง",weight:39,height:148,status:false},
      theader:["ชื่อ-นามสกุล","งานอดิเรก","อายุ","น้ำหนัก","ส่วนสูง"],
      tdata:[{"col1":"ณปภา ธุวสินธุ์","col2":"ทำขนม","col3":"17","col4":"39","col5":"160"}]
    }
  },
  methods:{
    fullname(){
      return this.firstname + " "+ this.lastname
    },
    showData(){
       alert(this.firstname)
    },
    increment(){
      this.age++
    },
    decrement(){
      this.age--
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