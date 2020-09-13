<template>
  <div class="summaryaddress">
    <div>
      <div>
        <b-form @submit="onSubmit" v-if="show">
          <div class="bv-example-row contact-prn">
            <b-row class="row-r-overflow">
              <b-col md>
                <div>
                  <div  class="summary-header-border">
                    <h4 v-scrollanimation >Where to deliver goodies?</h4>
                  </div>
                  <div>
                    <b-form-group v-scrollanimation id="input-group-2" label="Address (Line 1)" label-for="input-2">
                      <b-form-input
                        id="input-2"
                        v-model="form.addressone"
                        required
                        placeholder="Address Line 1"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                    v-scrollanimation
                      id="input-group-ad-2"
                      label="Address (Line 2)"
                      label-for="input-ad-2"
                    >
                      <b-form-input
                        id="input-ad-2"
                        v-model="form.addresstwo"
                        required
                        placeholder="Address Line 2"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group v-scrollanimation id="input-group-city" label="City" label-for="input-city">
                      <b-form-input id="input-city" v-model="form.city" required placeholder="City"></b-form-input>
                    </b-form-group>
                    <b-form-group v-scrollanimation
                      id="input-group-pincode"
                      label="Pincode"
                      label-for="input-pincode"
                    >
                      <b-form-input
                        id="input-pincode"
                        v-model="form.pincode"
                        required
                        placeholder="Pincode"
                        type="number"
                        min="0"
                        max="99999999"
                      ></b-form-input>
                    </b-form-group>
                  </div>
                </div>
              </b-col>
              <b-col md>
                <div>
                  <div class="summary-header-border">
                    <h4 v-scrollanimation >Whom to get in touch with?</h4>
                  </div>
                  <div>
                    <b-form-group
                    v-scrollanimation
                      id="input-group-contact-person"
                      label="Contact Person"
                      label-for="input-contact-person"
                    >
                      <b-form-input
                        id="input-contact-person"
                        v-model="form.contactperson"
                        required
                        placeholder="Contact Person"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group v-scrollanimation id="input-group-1" label="Email" label-for="input-1">
                      <b-form-input
                        id="input-1"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Email Id"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                    v-scrollanimation
                      id="input-group-mob"
                      label="Contact Number"
                      label-for="input-mob"
                      description="We'll never share your contact number with anyone else."
                    >
                      <b-form-input
                        id="input-mob"
                        v-model="form.mobilenumber"
                        type="number"
                        required
                        placeholder="Contact Number"
                        min="1"
                        max="999999999999"
                      ></b-form-input>
                    </b-form-group>
                  </div>
                </div>
              </b-col>
            </b-row>
          </div>

          <button v-scrollanimation type="submit" class="btn-contact-2">Submit</button>
        </b-form>
      </div>
    </div>

    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "summaryaddress",
  data() {
    return {
      form: {
        email: "",
        addressone: "",
        addresstwo: "",
        city: "",
        pincode: "",
        contactperson: "",
        mobilenumber: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/variables.css";
.summaryaddress {
  margin-left: 3rem;
  margin-right: 3rem;
}
.row-r-overflow {
  width: 100%;
  padding-left: 2rem;
}

.contact-prn {
  display: block;
  text-align: left;
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
.summary-header-border {
  border-left: 2px solid;
  padding-left: 0.4rem;
  border-left-color: var(--theme-vl-color);
  margin-bottom: 1.5rem;
  margin-top: 1.6rem;
}
@media screen and (max-width: 768px) {
  .summaryaddress {
    margin-left: 0.4rem;
    margin-right: 0.4rem;
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