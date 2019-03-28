<template>
  <div class="about">
    <b-row>
      <b-col cols="4" offset="4" sm="12" offset-sm="0">
        <b-img src="../assets/face.png" thumbnail fluid rounded="circle" v-bind="{width: '100%'}"></b-img>
      </b-col>
    </b-row>

    <b-row id="#about">
      <b-col>
        <h4>About Me</h4>
        <!-- TODO: Put paragraphs in seperate columns -->
        <p>Welcome to my online portfolio.
          My name is Yannick Willems and I'm an Information Technology student at Avans University in Breda.
          My interests currently lie in developing web-based applications, but I always enjoy learning new things.<br />
          You can find more information about the projects I've been working on recently, on this page and on my GitHub linked below.</p>
      </b-col>
    </b-row>

    <b-row id="projects">
      <b-col cols="1" offset="8" offset-sm="9" offset-md="10">
        <h4>Projects</h4>
      </b-col>

      <b-col cols="12">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus repellendus sed sunt pariatur doloremque perferendis iure, maiores facere rem ullam quo tenetur aspernatur nisi quis expedita. Maiores, sequi pariatur?</p>
      </b-col>
    </b-row>

    <b-row id="contact">
      <b-col>
        <h4>Contact</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestiae reprehenderit ex incidunt ab quibusdam. Doloribus cupiditate corrupti consequuntur enim maiores ex doloremque ad? Dolorem ipsa odit quod harum consequuntur?</p>
      </b-col>
    </b-row>

  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
h4 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}
 p {
   font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
 }
</style>
