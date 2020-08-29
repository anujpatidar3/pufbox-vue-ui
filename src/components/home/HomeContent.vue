<template>
  <div class="HomeContent">
    <div  class="bv-example-row">
      <b-row class="row-r-overflow">
        <b-col style="padding-right:0" md="8" offset-md="2">
          <div id="about-one-b">
            <div class="bv-example-row">
              <b-row class="row-r-overflow">
                <b-col md>
                  <div v-scrollanimation class="header-a">
                    <h1>
                      The
                      <span class="about-d-t">Puf Box,</span>
                      <br />because you shouldn't have to play fetch for your
                      <span
                        class="about-d-t"
                      >Dog &nbsp;</span>supplies.
                    </h1>
                  </div>
                  <div id="btn-register-banner">
                    <span>
                      <button v-on:click="contact()" type="button" class="btn-register">Register</button>
                    </span>

                    <span style="margin-left:20px">
                      <button v-on:click="contact()" type="button" class="btn-contact">Contact</button>
                    </span>
                  </div>
                </b-col>
                <b-col md>
                  <div v-scrollanimation class="about-image">
                    <img src="../../assets/home/banner1men.png" />
                  </div>
                </b-col>
              </b-row>
            </div>
          </div>
          <div id="working">
            <h1 class="heading-text">
              How The Puf
              <span v-scrollanimation class="about-d-t">Box Works?</span>
            </h1>
            <div class="heading-description">
              <p v-scrollanimation>We have what your dog wants, the way you want it. Everything you love about curated subscription boxes, plus customizable auto-replenishments, combined together.</p>
            </div>
          </div>
          <div id="process">
            <div class="bv-example-row">
              <b-row class="row-r-overflow">
                <b-col md>
                  <div class="process-img">
                    <img v-scrollanimation src="../../assets/images/step1.jpg" />
                    <div id="step1" class="process-step">
                      <h4>Register</h4>
                      <p v-scrollanimation>Sign up with your email/mobile number.</p>
                    </div>
                  </div>
                </b-col>
                <b-col md>
                  <div class="process-img">
                    <img v-scrollanimation src="../../assets/images/step2.jpg" />
                    <div id="step2" class="process-step">
                      <h4>Tell us about your pet</h4>
                      <p v-scrollanimation>Fill in details of your pet (Breed, Age, Preference)</p>
                    </div>
                  </div>
                </b-col>
                <b-col md>
                  <div class="process-img">
                    <img v-scrollanimation src="../../assets/images/step3.jpg" />
                    <div id="step3" class="process-step">
                      <h4>Kick back and relax</h4>
                      <p v-scrollanimation>Start getting your pet's monthly supplies at your doorstep</p>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
            <div id="get-started-btn">
              <span>
                <button v-on:click="contact()" type="button" class="btn-getstarted">Get Started!</button>
              </span>
            </div>
            <div v-scrollanimation id="welcome">
              <h4>
                Welcome to the
                <span class="vl-color">PufBox</span> family!
              </h4>
              <p>We are pawsitively thrilled to have you here! Now sit back and enjoy, let us take care of your pet.</p>
            </div>
          </div>
          <div id="whatis">
            <div id="story">
              <h1>
                What is the
                <span v-scrollanimation id="story-text">PufBox?</span>
              </h1>
            </div>
          </div>
          <div id="vision-header">
            <div class="bv-example-row">
              <b-row class="row-r-overflow">
                <b-col md="8">
                  <div  id="vision-text">
                    <p v-scrollanimation>The PufBox is your one-stop monthly subscription box for all your dog care needs.It is designed to be a pet parents virtual best-friend that curates an assortment of products that are all carefully chosen to meet the preferences and growth requirements of your furry friends.</p>
                    <p v-scrollanimation>The PufBox includes a whole host of pet care products like delicious daily food, softening shampoos, fragrant colognes, mlem inducing treats, moisturising paw butters, and tail-chasing toys among a variety of products that are sure to delight your pet.</p>
                    <p v-scrollanimation>Every box offers convenience, personalisation and variety at an exceptional value.So go ahead and choose from our range of 3 wonderfully curated boxes of unconditional pet care.</p>
                  </div>
                </b-col>
                <b-col style="padding-right: 0;" md="4">
                  <div id="story-vision-block">
                    <div id="vision-block">
                      <h1>
                        Our
                        <span v-scrollanimation style="font-weight:bold">Philosophy</span>
                      </h1>
                      <p v-scrollanimation>The philosophy behind the creation of The Puf Box is to deliver a million smiles through customer intimacy. We want your pet parenting experience to be simple yet surreal.</p>
                      <img v-scrollanimation src="../../assets/images/philosophy-pen.png" />
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
          </div>
          <div id="pricing">
            <PriceDetail></PriceDetail>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import PriceDetail from './PriceDetail'
export default {
  name: "HomeContent",
  methods: {
    contact() {
      this.$router.push("/contact");
    },
  },
  components:{
    PriceDetail
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.css";

.vl-color {
  color: var(--theme-vl-color);
}
.HomeContent {
  margin-top: 2rem;
}
.row-r-overflow {
  width: 100%;
}
.header-a {
  padding: 150px 0 50px;
  display: flex;
  height: 86%;
  align-items: center;
}
.header-a h1 {
  font-size: 35px;
  color: #242424;
  text-align: left;
  word-spacing: 2px;
}
.about-d-t {
  color: var(--theme-vl-color);
}
.about-image {
  padding-top: 100px;
}
#btn-register-banner {
  display: block;
  float: left;
}
.btn-register {
  padding: 15px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #000000;
  border: 0;
  border-radius: 50px;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
}
.btn-register:hover {
  background-color: var(--theme-vl-color);
  color: #fff;
}
.btn-contact {
  padding: 15px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: transparent;
  border: 1px solid var(--theme-vl-color);
  border-radius: 50px;
  color: var(--theme-vl-color);
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
}
.btn-contact:hover {
  background-color: var(--theme-vl-color);
  color: #fff;
}

// how we work
#working {
  margin-top: 3.6rem;
  text-align: left;
}
#working .heading-text {
  font-size: 40px;
}
#working .heading-description {
  margin-top: 1rem;
  text-align: justify;
  color: var(--text-secondary-second-color);
  font-size: 16px;
  line-height: 26px;
}
.heading-description {
  border-left: 2px solid;
  border-left-color: var(--theme-vl-color);
  padding-left: 1rem;
  margin-left: 0.1rem;
}
.heading-description p {
  margin-bottom: 0px;
}

// process div
#process {
  margin-top: 3.6rem;
}
.process-step {
  margin-top: 1.5rem;
}
.process-step h4 {
  color: var(--theme-vl-color);
  padding-left: 1rem;
}
.process-step p {
  color: var(--text-secondary-second-color);
  font-size: 16px;
  line-height: 22px;
}
.process-img {
  margin-top: 2rem;
}
.process-img:hover img {
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
}
//get staryted buttons
#get-started-btn {
  margin-top: 2rem;
  display: none;
}

.btn-getstarted {
  padding: 15px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: transparent;
  border: 2px solid;
  border-color: var(--theme-vl-color);
  border-radius: 50px;
  color: var(--theme-vl-color);
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
}
.btn-getstarted:hover {
  background-color:#000000 ;
  color: #fff;
   border: 2px solid;
  border-color: #000000;
}
// welcome div
#process #welcome {
  margin-top: 3rem;
  background-image: url("../../assets/patterns/pattern2.jpg");
  padding: 50px 0px;
  background-attachment: fixed;
}
#process #welcome h4 {
  font-size: 30px;
  padding: 0px 20px;
}
#process #welcome p {
  color: var(--text-secondary-second-color);
  font-size: 16px;
  line-height: 22px;
  padding: 0px 20px;
}
.process-img img {
  transition: all 1.2s;
}

// what is puff box
#vision-header {
  margin-top: 9rem;
}
#vision-text {
  text-align: justify;
  color: var(--text-secondary-second-color);
  font-size: 16px;
  line-height: 26px;
}
#story-vision-block {
  display: flex;
  height: 100%;
}

#vision-block {
  padding: 50px;
  position: relative;
  background-color: #000000;
  width: 100%;
  color: white;
  margin-bottom: 1.1rem;
  margin-top: 0.3rem;
}
#vision-block h1 {
  font-size: 20px;
}
#vision-block p {
  font-size: 16px;
  line-height: 20px;
  padding-top: 20px;
  text-align: justify;
}
#vision-block img {
  position: absolute;
  top: 0;
  right: 0;
}

#whatis {
  margin-top: 3.5rem;
  margin-bottom: 2rem;
}
#story {
  font-size: 50px;
}
#story h1 {
  float: left;
}
#story-text {
  font-weight: 550;
  color: var(--theme-vl-color);
}

#pricing{
  margin-top:3rem
}

@media screen and (max-width: 1200px) {
  .about-image {
    padding-top: 185px;
  }
}
@media screen and (max-width: 991px) {
  .header-a {
    padding-top: 10px;
  }
  .header-a h1 {
    font-size: 32px;
    line-height: 35px;
  }
  .about-image {
    padding-top: 10px;
  }
  #btn-register-banner {
    display: none;
  }
  #get-started-btn {
    margin-top: 2rem;
    display: block;
  }
}
@media screen and (max-width: 768px) {
  .header-a {
    padding: 50px 0 50px;
  }
  .HomeContent {
    padding-left: 2rem;
    padding-top: 0;
    margin-top: 1rem;
  }
  #welcome {
    margin-right: 1rem;
  }
  #vision-block h1 {
    float: left;
  }
  #vision-block p {
    margin-top: 3rem;
  }
  #get-started-btn {
    margin-right: 1rem;
  }
}
@media screen and (max-width: 330px){
}
/*
    This classes are for the directive. 
    For each element observed by our directive, the before-enter class is added.
  */
.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}
/* 
    If the element intersects with the viewport, the before-enter class is added.
  */
.enter {
  opacity: 1;
  transform: translateY(0px);
}

</style>