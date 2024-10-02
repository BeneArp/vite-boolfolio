<script>
  import {store} from '../store/store';
  // import {getData} from '../store/store';
  import Loader from '../components/partials/Loader.vue'

  import { RouterLink } from 'vue-router';

  export default{

    name: 'Projects',
    components:{
      Loader
    },

    data(){

      return{
        projects:[],
        technologies:[],
        types:[],
        loading:true,
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
            this.loading = false;
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

  <section v-if="this.loading">

    <div class="loading" v-if="loading">
        <Loader></Loader>
    </div>

  </section>

  <section v-else>

    <h1>Progetti</h1>

    <div class="wrapper">
      <!-- elenco progetti -->
      <div>

        <h3>Lista progetti</h3>

        <ul>
          <li v-for="project in projects">
            
            <!-- id -->
            <strong>Id:</strong> {{ project.id }} |

            <!-- titlo -->
            <strong>Titolo:</strong>
            <!-- link dettagli progetto -->
            <router-link class="project-title" :to="{name:'project-details', params:{slug: project.slug}}"> {{ project.title }} </router-link> |

            <!-- data inizio -->
           <strong>Data d'inizio:</strong> {{  project.start_date  }} |

           <!-- data fine -->
           <strong>Data fine:</strong> {{ project.end_date }}
           
          </li>
        </ul>

      </div>

      <!-- elenco tecnologie e categorie -->
      <div>

        <h3>Tecnologie</h3>

        <ul>
          <li class="lable" v-for="technology in technologies">{{ technology.name }} </li>
        </ul>


        <h3>Tipologie</h3>

        <ul>
          <li class="lable" v-for="type in types">{{ type.name }} </li>
        </ul>

      </div>

    </div>

  </section>


</template>

<style lang="scss" scoped>

  .wrapper{
    display: flex;
    justify-content: space-between;
    gap: 5em;

      h3{
      margin-top: 2em;
    }

    .lable{
      background-color: hsla(160, 100%, 37%, 1);
      color: black;
      padding: 0.2em 0.8em;
      border-radius: 0.6em;
      width: fit-content;
      font-size: 13px;
      cursor: pointer;
      transition: all 0.5s;
      font-weight: bold;

      &:hover{
        background-color: rgb(3, 122, 83);
        color: white;
      }
    }

    li{
      cursor: default;
      // margin-bottom: 1.2em;

      .project-title{
        font-weight: bold;
        color: whitesmoke;
      }
    }

  }


</style>
