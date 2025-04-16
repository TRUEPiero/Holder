<template>
    {{ projectName }}
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

    //После загрузки страницы
    mounted() {
        this.projectName = 'Тут будет название проекта'
    },

    //Выполняется после обновление виртуального DOM
    updated() {
        this.getProject()
    },

    created(){
        console.log("Проект");
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
