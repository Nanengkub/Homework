<template>
  <div class="container">
    <h1>Login Page</h1>
    <form>
  <!-- Email input -->
  <div class="form-outline mb-4">
    <label class="form-lable" for="from2Example1">Email address</label>
    <input type="text" id="form2Example1" class="form-control" v-model="user.username"/>
  </div>

  <!-- Password input -->
  <div class="form-outline mb-4">
    <label class="form-label" for="fornExample2">Password</label>
    <input type="password" id="form2Example2" class="form-control" v-model="user.password" />
  </div>

  <!-- 2 column grid layout for inline styling -->
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <!-- Checkbox -->
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class=" form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
      <!-- simple link -->
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <!-- Submit button -->
  <button type="button" class="btn btn-primary btn-block mb-4" @click="userLogin()">Sign in</button>

  <!-- Register buttons --> 
  <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p> 
    <p>or sign up with:</p>
    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="Fab fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
</form>
</div>
</template>

<script>
import httpMethod from "../http/http.config";
export default {
data(){
return{
    user:{
        username:"",
        password:"",
    }
}
},
methods:{
    userLogin(){
    localStorage.setItem("auth",true);
    this.$router.push({name:'home'});
       let userData={
            userName:this.user.username,
            paswword:this.user.password
        };
        console.log(typeof(userData));
        httpMethod.post('/user',JSON.stringify(userData)).then((res) =>{
            console.log(res.data);
        });
    }, 
},
}
</script>

<style lang="css" scoped>
.container{
    align-content: center;
    width: 25%;
}
form{
    display: flexbox;
    background-color: cornsilk;
}
input{
    background-color: aqua;
    color: blue;
    cursor: pointer;
}
input:hover{
    background-color: yellow;
}
</style>