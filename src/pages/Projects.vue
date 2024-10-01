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

    <ul>
      <li v-for="project in projects"> <strong>Id:</strong> {{ project.id }} | <strong>Titolo:</strong> {{ project.title }} | <strong>Data d'inizio:</strong> {{  project.start_date  }} | <strong>Data fine:</strong> {{ project.end_date }}</li>
    </ul>

  </div>

</template>

<style>

</style>
