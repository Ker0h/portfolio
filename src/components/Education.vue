<template>
  <div class="education">
    <b-container>
      <b-row>
        <b-col cols="12">
          <h5 id="education">Education</h5>
        </b-col>

        <b-card no-body class="overflow-hidden card" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col cols="12" md="3">
              <b-img src="../assets/avans.png" class="card-img rounded-0"></b-img>
            </b-col>
            <b-col cols="12" md="9">
              <b-card-body title="Information Technology">
                <b-card-text>
                  Avans University, Breda
                  <br>2017 - Now
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>

        <b-card no-body class="overflow-hidden card" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col cols="12" md="3">
              <b-img src="../assets/fablab.png" class="card-img rounded-0"></b-img>
            </b-col>
            <b-col cols="12" md="9">
              <b-card-body title="Application Development Internship">
                <b-card-text>
                  Fablab Zeeland, Middelburg
                  <br>February - July 2016
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>

        <b-card no-body class="overflow-hidden card" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col cols="12" md="3">
              <b-img src="../assets/zwa.png" class="card-img rounded-0"></b-img>
            </b-col>
            <b-col cols="12" md="9">
              <b-card-body title="Application Development Internship">
                <b-card-text>
                  Zuid-West Automatisering B.V., Middelburg
                  <br>February - July 2015
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>

        <b-card no-body class="overflow-hidden card" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col cols="12" md="3">
              <b-img src="../assets/scalda.png" class="card-img rounded-0"></b-img>
            </b-col>
            <b-col cols="12" md="9">
              <b-card-body title="Application Development">
                <b-card-text>
                  Scalda, Vlissingen
                  <br>2014 - 2017
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Education"
};
</script>

<style scoped>
.card {
  margin: 10px;
}

.card-img {
  padding: 10px;
}
</style>
