import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentView from '../views/student/StudentView.vue'
import AddStudent from '../views/student/AddStudent.vue'
import ProductView from '../views/product/ProductView.vue'
import EditStudent from '../views/student/EditStudent.vue'
import PageNotFound from '../views/PageNotFound.vue'
import studentsData from '../assets/StudentJson.json'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },{
      path: '/student',
      name: 'student',
      component: StudentView,
      children: [{
        path: 'add-student',
        name: 'addStudent',
        component: AddStudent
      },{
        path: 'edit-student/:id',
        name: 'editStudent',
        component: EditStudent,
        beforeEnter(to){
          const id = parseInt(to.params.id)
          const localStudents = studentsData.students
          const exists = localStudents.some((s)=> s.id === id)
          if(!exists) return {name: 'pageNotFound'}
        }
      }
    ]},{
      path: '/product',
      name: 'product',
      component: ProductView
    },
    //redirect not found!
    {
      path: '/:pathMatch(.*)*',
      name: 'pageNotFound',
      component: PageNotFound
    }
  ]
})


export default router
