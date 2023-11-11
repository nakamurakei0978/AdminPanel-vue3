<script setup>
import ContentHeader from '../../components/ContentHeader.vue';

</script>

<template>
    <ContentHeader :title="'Add student'" :button-name="'Back'" :route-name="'back'" />
    <main>

    </main>
</template>
<style scoped>

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

main{
  background-color: beige;
  height: calc(100% - 6rem);
  border-radius: 2rem;
  padding: 1rem 2rem;
  color: black;
}
</style>