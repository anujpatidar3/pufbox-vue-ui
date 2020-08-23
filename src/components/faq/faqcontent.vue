<template>
  <div class="faqcontent">
    <div id="faqmis">
      <div class="bv-example-row">
        <b-row class="row-r-overflow">
          <b-col md="8" offset-md="2">
            <div class="bv-example-row">
              <b-row class="row-r-overflow">
                <b-col md>
                  <div class="heading-faq-txt">
                    <h1 v-scrollanimation class="sal-animate">
                      Here are some
                      <br />Frequently
                      <span class="th-color">Asked</span>
                      <br />Questions
                    </h1>
                    <hr style="width:15%;height:3px;background:#17a2b8" />
                    <p v-scrollanimation
                      class="faq-p"
                    >You've asked. We have answered. If you still don't find the answer to your question in the sections below, feel free to contact us directly.</p>
                    <a v-scrollanimation target="_blank">
                      <router-link to="/contact">
                        <button type="button" class="btn-contact">CONTACT US</button>
                      </router-link>
                    </a>
                  </div>
                </b-col>
                <b-col v-scrollanimation class="fq-img" md>
                  <img src="../../assets/images/faq.png" />
                </b-col>
              </b-row>
            </div>
            <div v-scrollanimation id="faqcollapse" role="tablist">
              <b-card v-for="faq in allFaqList" :key="faq.id" no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button
                    class="collapse-button"
                    block
                    v-b-toggle="faq.guid"
                    variant="info"
                  >{{faq.quesion}}</b-button>
                </b-card-header>
                <b-collapse v-bind:id="faq.guid" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text class="collapse-detail-text">{{faq.answer }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
            <div v-scrollanimation id="faqcontact">
              <div class="bv-example-row">
                <b-row class="row-r-overflow">
                  <b-col md="8">
                    <h1 class="contact-2-l" style="font-size:20px;font-weight:600;">Didn't find what you are looking?</h1>
                  </b-col>
                  <b-col md="4">
                    <a class="contact-2-r" target="_blank">
                      <router-link to="/contact">
                        <button type="button" class="btn-contact-2">CONTACT US</button>
                      </router-link>
                    </a>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Faqcontent",
  computed: mapGetters(["allFaqList"]),
};
</script>
<style lang="scss" scoped>
:root {
  --main-bg-color: #ffffff;
  --navrbar-text-color: #7c00b6;
  --theme-vl-color: #17a2b8;
}
 .contact-2-l{
  float: left;
}
 .contact-2-r{
  float: right;
}
#faqcontact {
  padding: 50px 0;
  align-items: center;
}
.btn-contact {
  width: 40%;
  padding: 15px;
  background-color: #242424;
  border: 0;
  border-radius: 50px;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
}
.btn-contact-2 {
  padding: 15px;
  background-color: #242424;
  border: 0;
  border-radius: 50px;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
      padding-left: 40px;
    padding-right: 40px;
}
.btn-contact:hover {
  background-color: #17a2b8;
  color: #000000;
}
.heading-faq-txt p,
a,
span,
a:hover {
  text-decoration: none;
}
.row-r-overflow {
  width: 100%;
}
.th-color {
  color: #17a2b8;
}
.faq-p {
  font-size: 15px;
  width: 70%;
  color: #979797;
  line-height: 25px;
}
.heading-faq-txt {
  padding-top: 30px;
  text-align: left;
}
.faqcontent {
  margin-top: 5rem;
}
#faqmis {
}
.collapse-button {
  font-weight: 700;
}
.collapse-detail-text {
  font-size: 15px;
}
#faqcollapse {
  margin-top: 4rem;
}
@media screen and (max-width: 768px) {
  .faqcontent {
    padding-left: 2rem;
    padding-top: 0;
    margin-top: 1rem;
  }
  #faqcollapse {
    margin-top: 40px;
  }
  .fq-img {
    margin-top: 15px;
  }
  .contact-2-l{
  float: none;
}
 .contact-2-r{
  float: none;
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