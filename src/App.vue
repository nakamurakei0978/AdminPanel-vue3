<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <aside>
    <div class="profile">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="80" height="80" />
      <span>Kei</span>
    </div>
    <nav class="side-nav">
      <div>
          <RouterLink to="/" class="menu" active-class="active-route">Home</RouterLink>
          <RouterLink :to="{name: 'student'}" class="menu" active-class="active-route">Student</RouterLink>
          <RouterLink :to="{name: 'product'}" class="menu" active-class="active-route">Product</RouterLink>
      </div>
      <button class="menu log-menu">Log out</button>
    </nav>
  </aside>
  <div class="content-panel">
    <RouterView />
  </div>
</template>

<style scoped>
aside {
  height: 100dvh;
  padding: 2rem;
}
.content-panel{
  padding: 2rem 0rem;
  padding-right: 2rem;
}
.profile{
  background-color: beige;
  border-radius: 3rem;
  display: flex;
  margin-bottom: 2rem;
}
.profile>img{
  height: 4rem;
  width: 4rem;
  object-fit: contain;
  background-color: black;
  border-radius: 50%;
}
.profile>span{
  color: black;
  width: calc(100% - 4rem);
  line-height: 4rem;
  padding: 0 0.5rem;
  font-size: 2rem;
  font-weight: bolder;
}
.side-nav{
  background-color: beige;
  height: calc(100% - 6rem);
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.side-nav .menu{
  border-bottom: 1px solid green;
  line-height: 3rem;
  display: block;
  height: 3rem;
  padding: 0 2rem;
  font-size: 1.5rem;
  text-decoration: none;
  transition: padding 300ms ease;
}
.side-nav .menu:last-child{
  border: none;
}
.side-nav .menu:hover{
  padding-left: 3rem;
}
.side-nav .menu.active-route{
  padding-left: 3rem;
}
.side-nav button{
  background-color: transparent;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
}

</style>
