import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentView from '../views/student/StudentView.vue'
import AddStudent from '../views/student/AddStudent.vue'
import ProductView from '../views/product/ProductView.vue'

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
      children:[
        {
          path: 'add-student',
          name: 'addStudent',
          component: AddStudent
        },
      ]
    },{
      path: '/product',
      name: 'product',
      component: ProductView
    }
  ]
})

export default router
