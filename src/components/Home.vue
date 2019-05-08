<template>
  <div class="home">

    <About class="light-bg" />
    <Education class="light-bg"/>
    <Projects class="dark-bg" />
    <Contact class="dark-bg" />

  </div>
</template>

<script>
import About from './About'
import Education from './Education'
import Projects from './Projects'
import Contact from './Contact'

export default {
  name: 'Home',
  components: {
    About,
    Education,
    Projects,
    Contact
  }
}
</script>

<style>
  .home {
    padding-top: 50px;
  }
</style>


<style>
  .dark-bg {
    background-color: #f8f9fa !important;
    padding: 30px;
  }

  .light-bg {
    background-color: #ffffff;
    padding: 30px;
  }

</style>
