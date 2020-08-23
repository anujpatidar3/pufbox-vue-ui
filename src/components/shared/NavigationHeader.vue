<template>
  <div>
    <nav class="fixed-nav">
      <div class="hamburger" v-on:click="toggle()">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <ul class="nav-links" v-bind:class="{ 'open': isToggle }">
        <li v-bind:class="{ 'fade': isToggle,'m-right': !isToggle }">
          <a>
            <router-link to="/">Home</router-link>
          </a>
        </li>
        <li v-bind:class="{ 'fade': isToggle,'m-right': !isToggle }">
          <a>
            <router-link to="/about">About</router-link>
          </a>
        </li>
        <li v-bind:class="{ 'fade': isToggle,'m-right': !isToggle }">
          <a>
            <router-link to="/faq">Faq's</router-link>
          </a>
        </li>
        <li v-bind:class="{ 'fade': isToggle,'m-right': !isToggle }">
          <a>
            <router-link to="/contact">Contact</router-link>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavigationHeader",
  data() {
    return {
      isToggle: false,
    };
  },
  methods: {
    toggle() {
      this.isToggle = !this.isToggle;
    },
  },
};
</script>

<style lang="scss">
:root {
  --main-header-bg-color: white;
  --navrbar-text-color: yellow;
  --handburger-line-color: #17a2b8;
}
.nav-links a a:hover {
  text-decoration: none;
}
.fixed-nav {
  position: fixed;
  width: 100%;
  z-index: 2000;
}
nav {
  height: 10vh;
  background: var(--main-header-bg-color);
}
.m-right {
  margin-right: 3.5rem;
}
.nav-links {
  // display: flex;
  // list-style: none;
  // width: 50%;
  // height: 100%;
  // justify-content: space-around;
  // align-items: center;
  // margin-left: auto;
  list-style: none;
  width: 90%;
  height: 100%;

  align-items: center;

  display: inline-flex;
}

.nav-links li a a{
  color:#17a2b8 !important;
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  opacity: 0.9;
}
@media screen and (max-width: 768px) {
  .line {
    width: 30px;
    height: 3px;
    background: var(--handburger-line-color);
    margin: 5px;
  }
  nav {
    position: relative;
  }

  .hamburger {
    position: absolute;
    cursor: pointer;
    right: 5%;
    top: 50%;
    transform: translate(-5%, -50%);
    z-index: 2;
  }

  .nav-links {
    justify-content: start;
    margin-top: 3rem;
    position: fixed;
    background: var(--main-header-bg-color);
    height: 100vh;
    width: 100%;
    flex-direction: column;
    clip-path: circle(0 at 90% -10%);
    display: flex;
    transition: all 1s ease-out;
    pointer-events: none;
  }
  .nav-links.open {
    clip-path: circle(1000px at 90% -10%);
    //-webkit-clip-path: circle(1000px at 90% -10%);
    pointer-events: all;
  }
  .landing {
    flex-direction: column;
  }
  .nav-links li {
    opacity: 0;
  }
  .nav-links li a a{
    font-size: 19px;
  }
  .nav-links li:nth-child(1) {
    transition: all 0.5s ease 0.2s;
  }
  .nav-links li:nth-child(2) {
    transition: all 0.5s ease 0.4s;
  }
  .nav-links li:nth-child(3) {
    transition: all 0.5s ease 0.6s;
  }
  li.fade {
    opacity: 1;
    padding: 1rem;
  }
  .fade {
    opacity: 1 !important;
  }
}
</style>