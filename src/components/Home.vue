<template>
  <div class="home">
    <Banner />
    <About class="grey-bg"/>
    <Education class="light-bg"/>
    <Experience class="light-bg" />
    <Projects class="light-bg"/>
    <Contact class="grey-bg"/>
    <Footer class="purple-bg text-white"/>
  </div>
</template>

<script>
import Banner from './Banner';
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default {
  name: "Home",
  components: {
    Banner,
    About,
    Education,
    Experience,
    Projects,
    Contact,
    Footer
  }
};
</script>

<style>
.purple-bg {
  background-color: rgb(27, 25, 52) !important;
  padding: 30px;
}

.light-purple-bg {
  background-color: #563d7c !important;
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
