<template>
 <div>
    <WdHeader></WdHeader>
    <router-view></router-view>
    <Footer v-show="$route.meta.show" ></Footer>

</div>
</template>

<script>
import WdHeader from './components/Header'
import Footer from './components/Footer'
export default{
    name:'',
    data(){
        return{

        }
    },
    components:{
        WdHeader,
        Footer
    },
    mounted(){
        this.$store.dispatch('categoryList');
    },
}

</script>

<style>

</style>
