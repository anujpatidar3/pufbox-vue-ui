<template>
  <div class="PriceDetail">
    <div id="plan-heading">
      <h4>
        Plans by
        <span style="font-weight:bold" class="vl-color">PufBox</span>
      </h4>
    </div>
    <div id="plan-cards">
      <div class="bv-example-row">
        <b-row class="row-r-overflow">
          <b-col class="card-col" md="4">
            <div class="card-prn">
              <div class="plan-header">
                <h6>The Shiny Silver Wag-On!</h6>
              </div>
              <div class="plan-rate">
                <h2>
                  <sup>₹</sup>
                  <span>2100/</span>
                  <small style="font-size:initial;color: dimgrey;">month*</small>
                </h2>
                <small>Onwards</small>
              </div>
              <div class="plan-description">
                <p>The perfect Dog Box to meet all your pet toy needs. Get one for yourself, or a friend! This box will have 5 to 6 items which can include an assortment of toys, treats, accessories and grooming products.</p>
              </div>
               <div class="btn-image">
                   <span class="dot"><img src="../../assets/images/mustaches.svg"></span>
              </div>
            </div>
          </b-col>
          <b-col class="card-col" md="4">
            <div class="card-prn">
              <div class="plan-header">
                <h6>The Bold Gold Wag-On!</h6>
              </div>
              <div class="plan-rate">
                <h2>
                  <sup>₹</sup>
                  <span>3500/</span>
                  <small style="font-size:initial;color: dimgrey;">month*</small>
                </h2>
                <small>Onwards</small>
              </div>
              <div class="plan-description">
                <p>This bassy Box brings to you all the charms of the Shiny Silver package along with 8-10kg of dog food best suited to your pet’s breed provided by companies like Pedigree, Drools, Purina Super Coat and Smart Heart.</p>
              </div>
               <div class="btn-image">
                   <span class="dot"><img src="../../assets/images/mustaches.svg"></span>
              </div>
            </div>
          </b-col>
          <b-col class="card-col" md="4">
            <div class="card-prn">
              <div class="plan-header">
                <h6>The Plucky Platinum Wag-ON!</h6>
              </div>
              <div class="plan-rate">
                <h2>
                  <sup>₹</sup>
                  <span>6100/</span>
                  <small style="font-size:initial;color: dimgrey;">month*</small>
                </h2>
                <small>Onwards</small>
              </div>
              <div class="plan-description">
                <p>The shiny silver box takes on some more shimmer with 7-12kg of premium dog food best suited to your pet’s nutritional needs supplied by premium companies like Farmina, Royal Canin.</p>
              </div>
              <div class="btn-image">
                   <span class="dot"><img src="../../assets/images/mustaches.svg"></span>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PriceDetail",
};
</script>
<style lang="scss" scoped>
@import "../../styles/variables.css";
.vl-color {
  color: var(--theme-vl-color);
}
.row-r-overflow {
  width: 100%;
}
#plan-heading h4 {
  font-size: 50px;
}
#plan-cards {
  margin-top: 2rem;
  color: #000000;
}
.card-col {
  margin-top: 1rem;
}
.card-prn {
  background-color: var(--text-secondary-color);
  padding-top: 2rem;
  padding-bottom: 1rem;
}
.plan-header h6 {
  font-size: 11px;
  color: rgba(0, 0, 0, 0.9);
  font-weight: bold;
}
.plan-rate {
  padding-top: 6%;
}
.plan-rate h2 span {
  font-weight: bold;
}
.plan-description {
  margin-top: 9%;
}
.plan-description p {
  padding: 0px 18px;
  text-align: justify;
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.6);
}
.btn-image{
    margin-top: 3rem;
    margin-bottom: 1rem;
    transition: 0.3s ease;
}
.card-prn:hover .btn-image img{
    transform:scale(1.2) ;
    -webkit-transform: scale(1.2);
}
.card-prn:hover {
  background-color: var(--white-grey-color);
  padding-bottom: 1rem;
      z-index: 6;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.4);
}
.dot {
  height: 50px;
  width: 50px;
  border:1px solid #00776e;;
  border-radius: 50%;
  display: inline-block;
  padding: 10px;
}
.card-prn:hover .dot {
  height: 60px;
  width: 60px;
  padding: 12px;
}
.dot:hover {
  border:1px solid #00776e;
  background-color: var(--text-secondary-color);
  cursor: pointer;
}
</style>