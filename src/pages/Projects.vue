<script>
  import {store} from '../store/store';
  // import {getData} from '../store/store';

  export default{

    data(){

      return{
        projects:[],
        technologies:[],
        types:[],
      }

    },

    methods:{
      getProjects(){

        // console.log('sto funzionando');

        store.getData.getRequest(store.apiUrl + 'progetti')
          .then(res => {  
            this.projects = res.data;
            console.log(this.projects);
        })
          .catch(err => {
            console.log(err);
            
        });
      
      },

      getTechnologies(){

        store.getData.getRequest(store.apiUrl + 'tecnologie')
          .then(res =>{
            this.technologies = res.data;
            console.log(this.technologies);
          })
          .catch(err => {
            console.log(err);
            
          })
      },

      getTypes(){
        store.getData.getRequest(store.apiUrl + 'tipi')
          .then(res => {
            this.types = res.data;
            console.log( this.types);
          })
          .catch(err => {
            console.log(err);
            
          })
      },
    },

    mounted(){
      this.getProjects();

      this.getTechnologies();

      this.getTypes();
    }
  }
</script>

<template>

  <h1>Progetti</h1>

  <div class="wrapper">

    <!-- elenco progetti -->
    <div>

      <h3>Lista progetti</h3>

      <ul>
        <li v-for="project in projects"> <strong>Id:</strong> {{ project.id }} | <strong>Titolo:</strong> {{ project.title }} | <strong>Data d'inizio:</strong> {{  project.start_date  }} | <strong>Data fine:</strong> {{ project.end_date }}</li>
      </ul>

    </div>

    <!-- elenco tecnologie e categorie -->
    <div>

      <h3>Tecnologie</h3>

      <ul>
        <li v-for="technology in technologies"><strong>Nome:</strong> {{ technology.name }} </li>
      </ul>


      <h3>Tipologie</h3>

      <ul>
        <li v-for="type in types"> <strong>Nome:</strong> {{ type.name }} </li>
      </ul>

    </div>

  </div>



</template>

<style lang="scss" scoped>

  .wrapper{
    display: flex;
    justify-content: space-between;
    gap: 5em;
  }

  h3{
    margin-top: 2em;
  }

</style>
