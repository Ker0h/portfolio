<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="dark" fixed>
        <b-navbar-brand href="#">Yannick Willems</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#about">About</b-nav-item>
            <b-nav-item href="#projects">Projects</b-nav-item>
            <b-nav-item href="#contact">Contact</b-nav-item>
            <b-nav-item href="https://www.linkedin.com/in/yannick-willems-49852b150/" target="_blank">LinkedIn</b-nav-item>
            <b-nav-item href="https://github.com/Ker0h" target="_blank">GitHub</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<style>

</style>
