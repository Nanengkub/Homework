<template>
    <div class="container">
        <h2>{{ userdata }}</h2>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
    </div>
</template>

<script>
import httpMethod from '../http/http.config';
export default {
    data() {
        return {
            userdata: {
                id: 0,
                name:"",
                lasename:"",
                age:"",
            },info:"",
        };
    },
methods:{
    showuser(){
        httpMethod.get('/user').than(res => {
            this.userdata=res.data.data
        });
    },
},
mounted(){
    this.showuser();
}
};
</script>


<style scoped lang="scss"></style>