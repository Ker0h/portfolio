<template>
  <div class="contact">
    <b-container>
      <b-row>
        <b-col cols="12">
          <h5 id="contact">Contact</h5>
          <p>You can contact me by calling me, sending me an e-mail, or by reaching out on any of my online profiles</p>
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="12" md="6">
          <ul>
            <li>
              <i class="fas fa-phone-square"></i> +316 2672 6232
            </li>
            <li>
              <i class="fas fa-envelope-square"></i> ywillems96@gmail.com
            </li>
          </ul>
        </b-col>

        <b-col sm="12" md="6">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/yannick-willems-49852b150/"
              target="_blank" class="text-dark"><i class="fab fa-linkedin"></i> LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/Ker0h" target="_blank" class="text-dark"><i class="fab fa-github"></i> GitHub</a>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style>
a:hover {
  color: #563d7c !important;
  text-decoration: none !important;
}

  ul {
    list-style: none;
  }
</style>
