import UuidGenerator from '@/views/main/UuidGenerator.vue'
import About from '@/views/AboutPage.vue'
import PrivacyPage from '@/views/PrivacyPage.vue'
import ContactPage from '@/views/ContactPage.vue'



export default [
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacyPage,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
  },
  {
    path: '/',
    name: 'index',
    component: UuidGenerator,
  },

]
