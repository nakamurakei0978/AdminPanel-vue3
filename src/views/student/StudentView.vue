<script setup>
import '../../assets/bootstrap.min.js'
import ContentHeader from '../../components/ContentHeader.vue';

const students = [
  {id: 1, name: 'nakamura kei', gender: 'male', email: 'nakamurakei@gmail.com'},
  {id: 2, name: 'john son', gender: 'male', email: 'johnson@gmail.com'},
  {id: 3, name: 'yu mi', gender: 'female', email: 'yumi@gmail.com'}
]


</script>

<template>
    <ContentHeader :title="'Student view'" :buttonName="'Add student'" :routeName="'addStudent'" />
    
    <main>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="student, index in students" :key="student.id">
      <td>{{ index+1 }}</td>
      <td>{{ student.name }}</td>
      <td>{{student.gender}}</td>
      <td>{{ student.email }}</td>
    </tr>
  </tbody>
</table>
    </main>
</template>

<style scoped>
@import '../../assets/bootstrap.min.css';

main{
  background-color: beige;
  height: calc(100% - 6rem);
  border-radius: 2rem;
  padding: 1rem 2rem;
  color: black;
}
</style>
