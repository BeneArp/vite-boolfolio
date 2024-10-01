<script>
  import {store} from '../store/store';
  // import {getData} from '../store/store';

  export default{

    data(){

      return{
        projects:[],

      }

    },

    methods:{
      getApi(){

        // console.log('sto funzionando');


        store.getData.getRequest(store.apiUrl + 'progetti')
          .then(res => {  
            this.projects = res.data;
            console.log(this.projects);
        })
          .catch(err => {
            console.log(err);
            
        });
      
      }
    },

    mounted(){
      this.getApi();
    }
  }
</script>

<template>

  <h1>Progetti</h1>

  <div>

 

  </div>

</template>

<style>

</style>
