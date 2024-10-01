<script>
  import {store} from '../store/store';

  export default{

    data(){

      return{
        projects:[],
      }

    },

    methods:{
      getApi(){
        console.log('sto funzionando');
        
      }
    },

    mounted(){

      this.getApi();
    }
  }
</script>

<template>

  <h1>Progetti</h1>

</template>

<style>

</style>
