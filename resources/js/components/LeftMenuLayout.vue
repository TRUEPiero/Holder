<template>
  <div class="menu-left position-fixed h-100">
    <div class="app-brand text-center p-5">
    </div>
    <ul class="menu-inner p-0">
      <li class="d-flex"><img src="" alt="analytics"><router-link to="/projects/1">Аналитика</router-link></li>
      <li class="d-flex"><img src="" alt="vallet"><router-link to="/projects/2">Бюджет</router-link></li>
    </ul>
    <ul class="menu-inner bottom-menu-inner p-0 position-absolute bottom-0">
      <li class="d-flex"><img src="" alt="profile"><router-link to="">{Имя пользователя}</router-link></li>
      <li class="d-flex"><img src="" alt="notification"><router-link to="">Уведомления</router-link></li>
      <li class="d-flex"><img src="" alt="settings"><router-link to="">Настройки</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'LeftMenuLayout',

    data(){
        return {

        }
    }
}
</script>

<style>
  .menu-left {
    width: 100%;
    max-width: 70px !important;
    background-color: #211a2e;
    transition: max-width 0.4s;
  }

  .menu-left a{
    display: none;
  }

  .menu-left:hover {
    max-width: 250px !important;
    transition: max-width 0.4s;
  }

  .menu-left:hover a {
    display: block;
  }

  .menu-left a {
    color: white;
  }

  .menu-left ul {
    width: 100%;
  }

  .menu-left li {
    width: 95%;
    border-radius: 0 50px 50px 0;
  }

  .menu-left li:hover {
    background-color: rgba(126, 124, 124, 0.1);
  }

  .menu-left li img {
    width: 80px;
  }
</style>
