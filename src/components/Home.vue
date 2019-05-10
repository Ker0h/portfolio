<template>
  <div class="home">

    <About class="grey-bg" />
    <Education class="light-bg"/>
    <Projects class="light-bg" />
    <Contact class="grey-bg" />
    <Footer class="purple-bg text-white" />

  </div>
</template>

<script>
import About from './About'
import Education from './Education'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

export default {
  name: 'Home',
  components: {
    About,
    Education,
    Projects,
    Contact,
    Footer
  }
}
</script>

<style>
  .purple-bg {
    background-color: #563d7c !important;
    padding: 30px;
  }

  .light-purple-bg {
    background-color: #A68DCC !important;
  }

  .grey-bg {
    background-color: #f8f9fa !important;
    padding: 30px;
  }

  .light-bg {
    background-color: #ffffff !important;
    padding: 30px;
  }

</style>
