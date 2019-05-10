<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" style="background-color: #563d7c;" type="dark" fixed="top">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#about">About</b-nav-item>
            <b-nav-item href="#education">Education</b-nav-item>
            <b-nav-item href="#projects">Projects</b-nav-item>
            <b-nav-item href="#contact">Contact</b-nav-item>
            <b-nav-item
              href="https://www.linkedin.com/in/yannick-willems-49852b150/"
              target="_blank">LinkedIn</b-nav-item>
            <b-nav-item href="https://github.com/Ker0h" target="_blank">GitHub</b-nav-item>
          </b-navbar-nav>
        </b-collapse>

        <b-navbar-brand href="#"><code>Yannick Willems</code></b-navbar-brand>
      </b-navbar>
    </div>

      <router-view/>

  </div>
</template>

<style>
h4 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}

h5 {
	font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

 p {
   font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
 }
</style>
