<template>
  <div class="HomeContent">
    <div class="unique-feature-parent">
      <div class="bv-example-row">
        <b-row>
          <b-col md>
            <div class="align-right">
              <div>
                <div class="content-features">
                  <div class="header-features">Monthly delivery cycles</div>
                  <div>
                    Your pets needs are delivered
                    <br />every month, right to your
                    <br />doorstep!
                  </div>
                </div>
               
              </div>
              <div>
                <div class="content-features">
                  <div class="header-features">B-A-P (Breed-Age-Preference)</div>
                  <div class="color">
                    The Boxes are Curated and customised
                    <br />as per the needs of your dog, making
                    <br />it the ‘BAP of all boxes’.
                    2
                  </div>
                </div>
               
              </div>
              <div>
                <div class="content-features">
                  <div class="header-features">The Birthday Woof</div>
                  <div>
                    Special B’day Month Box for
                    <br />subscriptions over 6 months.
                  </div>
                </div>
               
              </div>
            </div>
          </b-col>
          <b-col md>
            <div>
              <video autoplay loop muted playsinline>
                <source
                  src="https://www.thedogbox.in/assets/image/home/animations/video-format/06.webm"
                  type="video/webm"
                />
                <source src="/assets/image/home/animations/video-format/06.mp4" type="video/mp4" />
                <!-- <img src="/assets/image/home/animations/06.gif" alt="unique feature"> -->
              </video>
            </div>
          </b-col>
          <b-col v-on:click="navigate" md>click-sm</b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "HomeContent",
  methods: {
      navigate(){
          console.log('called')
          this.$router.push('/about')
      }
  },
};
</script>

<style lang="scss" scoped>
@import '/src/styles/variables.css';

.color{
  
}
.HomeContent {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
.align-right {
  text-align: right;
}
.header-features {
  font-size: 16px;
  font-weight: bold;
}

.unique_features {
  width: 95%;
  margin: 0 auto;
  padding-bottom: 80px;
}
.unique-feature-parent{
    margin-top: 2rem;
}
@media only screen and (max-width: 767px) {
  .align-right {
    text-align: center;
  }
}
</style>