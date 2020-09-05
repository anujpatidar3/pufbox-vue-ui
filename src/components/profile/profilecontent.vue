<template>
  <div class="profilecontent">
    <div class="bv-example-row">
      <b-row class="row-r-overflow">
        <b-col md="8" offset-md="2">
          <div>
            <div
              id="step-first"
              v-bind:class="{ 'show-step': active==='first','hide-step': active!=='first' }"
            >
              <div id="first-content-prn" class="content-prn">
                <div id="first-content" class="content-child">
                  <h4 style="font-weight:bold">Tell us about your Dog?</h4>
                  <p>Answer some basic questions and we will get the right box for them.</p>
                  <form @submit.prevent="onStepFirstSubmit">
                    <div>
                      <b-input
                        v-model="dogName"
                        class="input-text input-height"
                        placeholder="What is his/her name?"
                        required
                      ></b-input>
                    </div>

                    <button type="submit" class="btn-contact-2">Continue</button>
                  </form>
                </div>
              </div>
            </div>
            <div
              id="step-second"
              v-bind:class="{ 'show-step': active==='second','hide-step': active!=='second' }"
            >
              <div id="second-content-prn" class="content-prn">
                <div id="second-content" class="content-child">
                  <h5 style="font-size:32px">How big is {{dogName}}?</h5>
                  <div class="bv-example-row">
                    <b-row class="row-r-overflow">
                      <b-col md>
                        <div v-on:click="onStepSecondSubmit('0‐10 kgs')" class="card card-custom">
                          <div class="card-body" id="first-card-style">
                            <img class="small" src="../../assets/profile/small.webp" alt />
                            <div class="card-content">
                              <h6>Small</h6>
                              <p>0‐10 kgs</p>
                            </div>
                          </div>
                        </div>
                      </b-col>
                      <b-col md>
                        <div v-on:click="onStepSecondSubmit('10-20 kgs')" class="card card-custom">
                          <div class="card-body" id="first-card-style">
                            <img class="medium" src="../../assets/profile/medium.webp" alt />
                            <div class="card-content">
                              <h6>Medium</h6>
                              <p>10-20 kgs</p>
                            </div>
                          </div>
                        </div>
                      </b-col>
                      <b-col md>
                        <div v-on:click="onStepSecondSubmit('20+ kgs')" class="card card-custom">
                          <div class="card-body" id="first-card-style">
                            <img class="large" src="../../assets/profile/large.webp" alt />
                            <div class="card-content">
                              <h6>Big</h6>
                              <p>20+ kgs</p>
                            </div>
                          </div>
                        </div>
                      </b-col>
                    </b-row>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="step-third"
              v-bind:class="{ 'show-step': active==='third','hide-step': active!=='third' }"
            >
              <div id="third-content-prn" class="content-prn">
                <div id="third-content" class="content-child">
                  <div>
                    <form @submit.prevent="onStepThirdSubmit">
                      <div class="bv-example-row">
                        <b-row class="row-r-overflow">
                          <b-col style="margin-top:3rem" md>
                            <h5 style="font-size:32px">What breed is {{dogName}}?</h5>
                            <div style="margin-top:2rem">
                              <b-input
                                v-model="breedName"
                                list="browsers"
                                name="browser"
                                placeholder=" Select Breed"
                                id="browser"
                                class="input-height"
                                required
                              ></b-input>
                              <datalist id="browsers">
                                <option
                                  v-for="breed in allBreedList"
                                  :key="breed.breedId"
                                  v-bind:value="breed.breedName"
                                ></option>
                              </datalist>
                            </div>
                            <div class="footer-msg">
                              <p>If {{dogName}} is a mix,you can add another breed</p>
                            </div>
                          </b-col>
                          <b-col style="margin-top:3rem" md>
                            <h5 style="font-size:32px">When is {{dogName}} Birthday?</h5>
                            <div style="margin-top:2rem">
                              <b-input
                                v-model="dogBirthdayDate"
                                class="input-height"
                                type="date"
                                required
                              ></b-input>
                            </div>
                            <div class="footer-msg">
                              <p>We want to help in celebrate {{dogName}}'s special day.</p>
                            </div>
                          </b-col>
                        </b-row>
                      </div>

                      <button type="submit" class="btn-contact-2">Continue</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="step-fourth"
              v-bind:class="{ 'show-step': active==='fourth','hide-step': active!=='fourth' }"
            >
              <div id="third-content-prn" class="content-prn">
                <div id="third-content" class="content-child">
                  <div>
                    <h4 style="font-weight:bold">Don't Send us</h4>
                    <div class="footer-msg">
                      <p>{{dogName}} is allergic to some foods, so please exclude the following in the box</p>
                    </div>
                    <div class="bv-example-row">
                      <b-row class="row-r-overflow">
                        <b-col
                          v-for="options in optionsNotNeeded"
                          :key="options.key"
                          style="margin-top:3rem"
                          md
                        >
                          <div class="border-chk">
                            <label class="container-custom">
                              {{options.name}}
                              <input
                                v-model="options.disabled"
                                v-bind:value="options.name"
                                type="checkbox"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </div>
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                  <div style="margin-top:3rem;display:inline-flex">
                    <span style="padding-right: 1rem;">
                      <h4 style="font-weight:bold">Send us only Veg</h4>
                    </span>
                    <span>
                      <label class="switch">
                        <input v-model="isVeg" @change="onlyVegCheckBox($event)" type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </span>
                  </div>
                </div>
              </div>
              <button type="submit" v-on:click="onStepFourthSubmit()" class="btn-contact-2">Continue</button>
            </div>
            <div id="step-fifth" v-bind:class="{ 'show-step': active==='fifth','hide-step': active!=='fifth' }">
              <div id="third-content-prn" class="content-prn">
                <div id="third-content" class="content-child">
                  defs
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      {{stepData}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "profilecontent",
  data: () => ({
    active: "first",
    dogName: "",
    dogWeight: "",
    breedName: "",
    dogBirthdayDate: "",
    stepData: {},
    selected: [],
    isVeg: false,
    optionsNotNeeded: [
      { key: 1, item: "Egg", name: "Egg", disabled: false },
      { key: 2, item: "Chicken", name: "Chicken", disabled: false },
      { key: 3, item: "Beef", name: "Beef", disabled: false },
      { key: 4, item: "Pork", name: "Pork", disabled: false },
      { key: 5, item: "Dairy", name: "Dairy", disabled: false },
    ],
  }),
  computed: mapGetters(["allBreedList"]),
  methods: {
    onStepFirstSubmit() {
      this.stepData.dogName = this.dogName;
      this.setDone("first", "second");
    },
    onStepSecondSubmit(dogWeight) {
      this.dogWeight = dogWeight;
      this.stepData.dogWeight = this.dogWeight;
      this.setDone("second", "third");
    },
    onStepThirdSubmit() {
      this.stepData.breedName = this.breedName;
      this.stepData.dogBirthdayDate = this.dogBirthdayDate;
      this.setDone("third", "fourth");
    },
    onStepFourthSubmit() {
      this.stepData.isVeg = this.isVeg;
      this.stepData.optionsNotNeeded = this.optionsNotNeeded;
      this.setDone("fourth", "fifth");
    },
    setDone(id, index) {
      console.log(index);
      if (index) {
        this.active = index;
      }
    },
    onlyVegCheckBox(event) {
      console.log(event);
      if (event) {
        this.optionsNotNeeded.forEach((element) => {
          element.disabled = false;
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/variables.css";
@import "../../styles/checkbox.css";
.row-r-overflow {
  width: 100%;
  padding-left: 2rem;
}
.profilecontent {
  margin-top: 8rem;
}
.show-step {
  display: block;
}
.hide-step {
  display: none;
}
.btn-custom {
  background-color: var(--theme-vl-color) !important;
  color: white;
}
.input-height {
  height: 50px;
}
.input-text {
  width: 50%;
  display: inline;
}
.btn-contact-2 {
  margin-top: 3rem;
  padding: 15px;
  background-color: var(--theme-vl-color);
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
.btn-contact-2:hover {
  background-color: #242424;
  color: #fff;
}
.card-custom {
  padding: 0 !important;
  transition: 0.3s ease;
  height: 250px;
  cursor: pointer;
}
.card-body {
  justify-content: center;
  align-items: center;
  padding: 1.25rem;
}
.small {
  height: 80px;
  width: 60px;
  margin-top: -60px;
}
.medium {
  height: 90px;
  width: 90px;
  margin-top: -70px;
}
.large {
  height: 140px;
  width: 100px;
  margin-top: -122px;
}
.card-content {
  width: 100%;
  height: 100%;
  padding-top: 60px;
}
.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin-top: 8rem;
}
.card-content h6 {
  color: #000000;
  font-weight: bold;
}
.card-content p {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
}
input[list] {
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 20px 20px 20px 20px;
  color: black;
}
.footer-msg p {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 0.5rem;
}
.border-chk {
  border: 1px solid #ccc;
  padding: 1rem;
  padding-top: 22px;
}
.switch-checkbox.custom-control-input:checked ~ .custom-control-label::before {
  color: #fff !important;
  border-color: red !important;
  background-color: red !important;
}
@media screen and (max-width: 768px) {
  .input-text {
    width: 100%;
    display: inline;
  }
}
</style>
