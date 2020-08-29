<template>
  <div class="aboutcontent">
    <div class="bv-example-row">
      <b-row class="row-r-overflow">
        <b-col style="padding-right:0" md="8" offset-md="2">
          <div  id="about-one-b">
            <div class="bv-example-row">
              <b-row class="row-r-overflow">
                <b-col md>
                  <div v-scrollanimation class="header-a">
                    <h1>
                      At The
                      <span class="about-d-t">Puf Box,</span>
                      <br />we don't
                      just curate the boxes for
                      your
                      <span
                        class="about-d-t"
                      >
                        dog's
                        personality,
                      </span>
                      <br />we create experiences
                      <br />around it!
                    </h1>
                  </div>
                </b-col>
                <b-col md>
                  <div v-scrollanimation class="about-image">
                    <img src="../../assets/images/about.png" />
                  </div>
                </b-col>
              </b-row>
            </div>
          </div>
          <div v-scrollanimation id="about-two-b">
            <div id="story">
              <h1>
                Our
                <span id="story-text">Story</span>
              </h1>
            </div>
          </div>
          <div id="our-story-b-b">
            <hr id="our-story-border" />
          </div>
          <div  id="vision-header">
            <div class="bv-example-row">
              <b-row class="row-r-overflow">
                <b-col md="8">
                  <div v-scrollanimation id="vision-text">
                    <p>The origin of The Dog Box started back in 2019 at the University of Warwick, where Harshit, our founder, was tasked to write a dissertation. Little did we know that this 30,000 word document would play such a crucial role in developing our envisioned platform!</p>
                    <p>Fast-forwarding a year, wherein we surveyed over 700 people, brainstormed for 1000s of hours and underwent countless iterations, ‘The Dog Box’ was finally born, with three determined co-founders; Harshit, Harsh and Kushal at its helm. Together, embarking on a quest to revolutionize the way pet parenting works.</p>
                    <p>So long story short, what began as a one-line idea has today paved the way for us to define our journey!</p>
                  </div>
                </b-col>
                <b-col style="padding-right: 0;" md="4">
                  <div id="story-vision-block">
                    <div id="vision-block">
                      <h1>
                        Our
                        <span style="font-weight:bold">Vision</span>
                      </h1>
                      <p>To give all dogs the finest experience by providing them with curated one-stop boxes that take care of all their essentials and more.</p>
                      <img v-scrollanimation src="../../assets/images/micro.png" />
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
          </div>
          <div  id="beyond">
            <div id="beyond-header">
              <h1>
                Beyond
                <span v-scrollanimation>The Box</span>
              </h1>
              <p v-scrollanimation>Going beyond our boxes, at The PufBox, we aim to make a difference for every dog out there. For every box that is purchased, we feed a stray. In essence, every time you buy a box, you are looking out for your dog and their furry friend. So come and join our tribe as we strive to build a more dog inclusive world, one box at a time.</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aboutcontent",
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.css";
.about-d-t {
  color: var(--theme-vl-color);
}
.aboutcontent {
  margin-top: 2rem;
}
.row-r-overflow {
  width: 100%;
}
.about-image {
  padding-top: 100px;
}
.header-a {
  padding: 150px 0 50px;
  display: flex;
  height: 100%;
  align-items: center;
}
.header-a h1 {
  font-size: 35px;
  color: #242424;
  text-align: left;
  word-spacing: 2px;
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
#our-story-b-b {
  margin-top: 4rem;
}
#our-story-border {
  width: 6%;
  background-color: var(--theme-vl-color);
  height: 3px;
}
#vision-header {
  margin-top: 3rem;
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
  line-height: 22px;
  padding-top: 20px;
  text-align: justify;
}
#vision-block img {
  position: absolute;
  top: 0;
  right: 0;
}
#beyond {
  margin-top: 4rem;
}
#beyond span {
  color: var(--theme-vl-color);
}
#beyond p {
  font-size: 16px;
  line-height: 26px;
  padding-top: 20px;
  text-align: justify;
  color: var(--text-secondary-second-color);
}
@media screen and (max-width: 1200px) {
  .header-a {
  }

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
  #our-story-border {
    width: 9%;
  }
}
@media screen and (max-width: 768px) {
  .aboutcontent {
    padding-left: 2rem;
    padding-top: 0;
    margin-top: 1rem;
  }
  .header-a {
    padding: 50px 0 50px;
  }
  .about-image {
  }
  #about-two-b {
    margin-top: 40px;
  }
  #our-story-b-b {
    margin-top: 6rem;
  }
  #our-story-border {
    width: 10%;
  }
  #vision-block h1 {
    float: left;
  }
  #vision-block p {
    margin-top: 3rem;
  }
}
@media screen and (max-width: 568px) {
  #our-story-border {
    width: 12%;
  }
}
@media screen and (max-width: 468px) {
  #our-story-border {
    width: 14%;
  }
}
@media screen and (max-width: 368px) {
  #our-story-border {
    width: 16%;
  }
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