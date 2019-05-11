<template>
  <div id="app">
    <div id="nav">
      <b-navbar id="navbar" toggleable="lg" style="background-color: rgb(27, 25, 52);" type="dark">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item
              href="https://www.linkedin.com/in/yannick-willems-49852b150/"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i> LinkedIn
            </b-nav-item>
            <b-nav-item href="https://github.com/Ker0h" target="_blank">
              <i class="fab fa-github"></i> GitHub
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>

        <b-navbar-brand href="#">
          <code>Yannick Willems</code>
        </b-navbar-brand>
      </b-navbar>
    </div>

    <router-view/>
  </div>
</template>

<style>
#navbar {
  background-color: rgb(27, 25, 52);
  border-bottom: 1px solid rgb(16, 17, 38) !important;
}

h4 {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

h5 {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
}

p {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>
