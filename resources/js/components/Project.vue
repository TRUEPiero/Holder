<template>
    <div class="mainpage">
        <h1 v-if="projectName">{{ projectName }}</h1>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Project',

    data() {
        return {
            projectName: null
        }
    },

    methods: {
        getProject(){
            axios.get('/api/projects/'+this.$route.params.id)
            .then(response=>{
                    this.projectName = response.data.title
                }
            )
        }
    },

    mounted() {
        this.getProject()
    },
    //Выполняется после обновление виртуального DOM
    updated() {
        this.getProject()
    },

    //Вычисляемые значения
    computed: {

    },

    //Подключаемые компоненты
    components: {

    }
}
</script>

<style>
    .mainpage{
        padding-left: 70px;
    }
</style>
