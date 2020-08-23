<template>
  <div class="navigation-footer">
    <footer class="footer-distributed">
      <div class="footer-right">
        <a href="#">
          <!-- <i class="fa fa-facebook-square"></i> -->
          <font-awesome-icon :icon="['fas', 'ad']" ></font-awesome-icon>
        </a>
        <a href="#">
          <!-- <i class="fa fa-address-book"></i> -->
           <font-awesome-icon :icon="['fas', 'ad']" ></font-awesome-icon>
        </a>
        <a href="#">
          <!-- <i class="far fa-linkedin"></i> -->
           <font-awesome-icon :icon="['fas', 'ad']" ></font-awesome-icon>
        </a>
        <a href="#">
          <!-- <i class="far fa-github"></i> -->
           <font-awesome-icon :icon="['fas', 'ad']" ></font-awesome-icon>
        </a>
      </div>

      <div class="footer-left">
        <p class="footer-links">
          <a class="link-1" href="#">Home</a>

          <a href="#">About</a>

          <a href="#">Faq's</a>

          <a href="#">Contact</a>

          <a href="#">Login</a>
        </p>

        <p>PufBox &copy; 2020</p>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: "NavigationFooter",
};
</script>

<style lang="scss">

:root {
  --main-bg-color:  #f7f7f7;
  --navrbar-text-color:#17a2b8;
}
// footer {
//   height: 8vh;
//   background-color: var(--main-bg-color);
// }
// .footer-list{
//     list-style: none;
//     height: 100%;
//     align-items: center;
//     display: inline-flex;
//     color:var(--navrbar-text-color) ;
// }
// .footer-list li a {
//     color: var(--navrbar-text-color);
//     text-decoration: none;
//     font-size: 15px;
//     font-weight: bold;
//     opacity: 0.9;
//     padding-left: 1rem;
//     padding-right: 1rem;
// }




.footer-distributed {
  background-color:var(--main-bg-color);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: normal 16px sans-serif;
  padding: 45px 50px;
}

.footer-distributed .footer-left p {
  color: var( --theme-vl-color);
    text-decoration: none;
    font-size: 15px;
    font-weight: bold;
    opacity: 0.9;
    margin: 0;
}
/* Footer links */

.footer-distributed p.footer-links {
  color: var(--theme-vl-color);
    text-decoration: none;
    font-size: 15px;
    font-weight: bold;
    opacity: 0.9;
  margin: 0 0 10px;
  padding: 0;
  transition: ease 0.25s;
}

.footer-distributed p.footer-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
  transition: ease 0.25s;
}

.footer-distributed .footer-links a:before {
  content: "  ";
  font-size: 20px;
  left: 0;
  color: #fff;
  display: inline-block;
  padding-right: 10px;
}

.footer-distributed .footer-links .link-1:before {
  content: none;
}

.footer-distributed .footer-right {
  float: right;
  margin-top: 6px;
  max-width: 180px;
}

.footer-distributed .footer-right a {
  text-decoration: none;
  display: inline-block;
  width: 35px;
  height: 35px;
  border-radius: 2px;
  font-size: 25px;
  color: #17a2b8 !important;
  text-align: center;
  line-height: 35px;
  margin-left: 3px;
  transition: all 0.25s;
}



.footer-distributed .footer-right a:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
}

.footer-distributed p.footer-links a:hover {
  text-decoration: none;
  color: #17a2b8 !important;
}

/* Media Queries */

@media (max-width: 600px) {
  .footer-distributed .footer-left,
  .footer-distributed .footer-right {
    text-align: center;
  }
  .footer-distributed .footer-right {
    float: none;
    margin: 0 auto 20px;
  }
  .footer-distributed .footer-left p.footer-links {
    line-height: 1.8;
  }
}
</style>