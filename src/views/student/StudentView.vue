<script setup>
import {ref} from 'vue'
import { useRouter} from 'vue-router';
import ContentHeader from '../../components/ContentHeader.vue'
import studentsData from '../../assets/StudentJson.json'


const students = ref(studentsData.students)
console.log(students);

function deleteStudent(student){
  students.value = students.value.filter((s) => s !== student)
}

const router = useRouter()

const goToRoute = (r, id) => {
  r === 'back' ? router.go(-1) : router.push({ name: r, params: {id: id} }) 
}

</script>

<template>
  <ContentHeader v-if="$route.name==='student'" :title="'Student view'" :buttonName="'Add student'" :routeName="'addStudent'" />
  <main v-if="$route.name==='student'">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Gender</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student, index in students" :key="student.id">
          <td>{{ index + 1 }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.gender }}</td>
          <td>{{ student.email }}</td>
          <td>
            <button>Details</button>
            <button @click="goToRoute('editStudent', student.id)">Edit</button>
            <button @click="deleteStudent(student)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
  <RouterView />
</template>

<style scoped>
@import 'bootstrap';

main {
  background-color: beige;
  height: calc(100% - 6rem);
  border-radius: 2rem;
  padding: 1rem 2rem;
  color: black;
}
</style>

