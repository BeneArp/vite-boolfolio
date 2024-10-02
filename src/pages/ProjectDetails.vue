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
        },

        mounted(){
            this.slug = this.$route.params.slug;
            
            this.getproject();
            
        }   
    }

</script>

<template>

    <h1>Dettagli Progetto</h1>
    <h2>{{ project.title }}</h2>

    <div>
        <p>{{ project.description }}</p>
    </div>

</template>

<style lang="scss" scoped>



</style>