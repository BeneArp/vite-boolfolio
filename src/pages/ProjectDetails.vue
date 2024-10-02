<script>
import {store} from '../store/store';

    export default{
        name: 'ProjectDetails',

        data(){

            return{
                project: {},
                slug:'',
            }
        },

        methods:{
            getproject(){

                store.getData.getRequest(store.apiUrl + 'dettagli-progetto/' + this.slug)
                .then(res =>{
                    this.project = res.data.result;
                    console.log(this.project);
                })
                .catch(err => {
                    console.log(err);
                    
                })
            },

            getType(project){
                if(project.type){
                    return project.type.name

                }else{
                    return 'Nessuna tipologia'
                }
            },

            getTechnologies(project){
                if(project.technologies){

                    let technologies =  project.technologies.map(technology => technology.name);

                    if(technologies.length){
                        return technologies.join(' - ')

                    }else{
                        return 'Nessuna tecnologia'
                    }

                }
            },
            // getTechnologies(project){
            //     if(project.technologies.length){
            //         return project.technologies.map(technology => technology.name);

            //     }else{
            //         return 'Nessuna tecnologia'
            //     }
            // }
        },

        mounted(){
            this.slug = this.$route.params.slug;
            
            this.getproject();
            
        }   
    }

</script>

<template>

    <h1>Dettagli Progetto</h1>

    <div class="container">
        <h2>{{ project.title }}</h2>

        <div>
            <p>{{ project.description }}</p>
            <span class="lable">{{ getType(project) }}</span>
            <span class="lable">{{ getTechnologies(project) }}</span>
            <span class="data">Data d'inizio: {{ project.start_date }} || Data fine: {{ project.end_date }}</span>
            <!-- <img :src="project.img_path" :alt="project.img_original_name"> -->
        </div>

    </div>


</template>

<style lang="scss" scoped>
    .container{
        border: 1px solid hsla(160, 100%, 37%, 1);
        padding: 1em 2em;
        border-radius: 1em;
    }

    .lable{
        margin-right: 1em;
    }

    .data{
        display: block;
        margin: 1.5em 0;
    }

    img{
        width: 50%;
        display: block;
        margin: 0 auto 2em;
    }

</style>