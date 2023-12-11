<template>
    <div>
        <h1>Table Component</h1>
        <table class="border:1px">
            <thead>
                <th v-for="thd in theader" :key="thd">{{ thd }}</th>
            </thead>
            <tbody>
                <tr v-for="tdds in tdata" :key="tdds">
                    <td v-for="tdd in tdds" :key="tdd">{{ tdd }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props:{
        theader:{
            type:Object,
            required:true
        },
        tdata:{
            type:Object,
        }
    },
    components:{

    }
}
</script>

<style scoped>
table,th,td{
    border: 1px solid;
    border-color: blue;
    text-align: center;
}
</style>