<template>
  <div class="about">
    <b-row>
      <b-col cols="4" offset="4" sm="12" offset-sm="0">
        <b-img src="../assets/face.png" thumbnail fluid rounded="circle" v-bind="{width: '100%'}"></b-img>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <h3>
          <code>About Me</code>
        </h3>
        <p>Welcome to my online portfolio. 
          My name is Yannick Willems and I'm an Information Technology student at Avans University in Breda. 
          My interests currently lie in developing web-based applications, but I always enjoy learning new things.<br />
          You can find more information about the projects I've been working on recently, on this page and on my GitHub linked below.</p>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6" offset="6" sm="12" offset-sm="0">
        <h3>
          <code>Projects</code>
        </h3>
      </b-col>

      <b-col cols="12">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus repellendus sed sunt pariatur doloremque perferendis iure, maiores facere rem ullam quo tenetur aspernatur nisi quis expedita. Maiores, sequi pariatur?</p>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <h3>
          <code>Contact</code>
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestiae reprehenderit ex incidunt ab quibusdam. Doloribus cupiditate corrupti consequuntur enim maiores ex doloremque ad? Dolorem ipsa odit quod harum consequuntur?</p>
      </b-col>
    </b-row>

  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style>
code {
  color: black;
}
</style>
