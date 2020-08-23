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

@media screen and (max-width: 1100px){
 
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