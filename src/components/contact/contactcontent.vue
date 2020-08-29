<template>
  <div class="contactcontent">
    <div class="bv-example-row">
      <b-row style="padding-left:15px" class="row-r-overflow">
        <b-col style="padding-right:0" md="8" offset-md="2">
          <div id="decided">
            <h1>
              Decided?
              <span v-scrollanimation>Contact Us</span>
            </h1>
          </div>
          <div id="contactdetail">
            <div id="phone-icon">
              <div class="contact-icon">
                <img v-scrollanimation class="image-icon" src="../../assets/Icons/Circular/phone.svg" />
                <div class="icon-bt-border">
                  <hr />
                </div>
                <div class="icon-detail">
                  <h4 v-scrollanimation>(+91) 9826583845</h4>
                </div>
              </div>
            </div>
            <div id="whatsapp-icon">
              <div class="contact-icon">
                <img v-scrollanimation class="image-icon" src="../../assets/Icons/Circular/whatsapp.svg" />
                  <div class="icon-bt-border">
                  <hr />
                </div>
                <div class="icon-detail">
                  <h4 v-scrollanimation>(+91) 8377094122</h4>
                </div>
              </div>
            </div>
            <div id="email-icon">
              <div class="contact-icon">
                <img v-scrollanimation class="image-icon" src="../../assets/Icons/Circular/email.svg" />
                  <div class="icon-bt-border">
                  <hr />
                </div>
                <div class="icon-detail">
                  <h4 v-scrollanimation>info@pufbox.com</h4>
                </div>
              </div>
            </div>
            <div id="location-icon">
              <div class="contact-icon">
                <img  v-scrollanimation class="image-icon" src="../../assets/Icons/Circular/location.svg" />
                  <div class="icon-bt-border">
                  <hr />
                </div>
                <div class="icon-detail">
                  <h4 v-scrollanimation>#128, Second Floor, Apollo Tower, Vijay Nagar</h4>
                  <h4 v-scrollanimation>Indore</h4>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contactcontent",
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.css";
.contactcontent {
  margin-top: 4rem;
}
.row-r-overflow {
  width: 100%;
}
#decided h1 {
  font-size: 60px;
}

#decided span {
  font-weight: 550;
  color: var(--theme-vl-color);
}
.contact-icon {
  padding: 18px 0px;
}
.image-icon {
  width: 50px;
}
.icon-detail {
  margin-top: 3%;
}
.icon-bt-border {
  text-align: center;
  text-align: -webkit-center;
}
.icon-bt-border hr {
  width: 70px;
  height: 2px;
  background: var(--theme-vl-color);;
}
#whatsapp-icon img,
#email-icon img,
#phone-icon img,
#location-icon img{
 transition: all 1.2s;
}
#whatsapp-icon:hover img,
#email-icon:hover img,
#phone-icon:hover img,
#location-icon:hover img{
  transform: scale(1.2);
    -webkit-transform: scale(1.2);
}
@media screen and (max-width: 1100px) {
}
@media screen and (max-width: 768px) {
  .contactcontent {
    margin-top: 0rem;
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