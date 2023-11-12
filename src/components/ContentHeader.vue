<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
    title: String,
    buttonName: String,
    routeName: String
})


const router = useRouter();
const goToRoute = (r) => {
  r === 'back' ? router.go(-1) : router.push({ name: r })
};
</script>

<template>
    <header>
      <p>{{ title || 'N/A' }}</p>
      <button v-if="buttonName" @click="goToRoute(routeName)" class="btn btn-primary">{{buttonName}}</button>
    </header>
</template>

<style scoped>
@import 'bootstrap';

header{
  background-color: beige;
  color: black;
  height: 4rem;
  border-radius: 3rem;
  padding: 0 2rem;
  line-height: 4rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
}
header>p{
  font-size: 2em;
}
</style>