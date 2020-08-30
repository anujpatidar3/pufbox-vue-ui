<template>
  <div class="Contact">
    <Contactcontent></Contactcontent>
    <div style="margin-top:3rem">
      <facebook-login class="button"
      appId="2867441940158712"
      @login="onLogin"
      @logout="onLogout"
      @sdk-loaded="sdkLoaded">
    </facebook-login>
    </div>
  </div>
</template>

<script>
import facebookLogin from 'facebook-login-vuejs';
import Contactcontent from '../components/contact/contactcontent'

export default {
  name: "Contact",
  components: {
   Contactcontent,
   facebookLogin
  },
  
  data(){
    return{
      isConnected: false,
      name: '',
      email: '',
      personalID: '',
      FB: undefined
    }
  },
  methods: { 
  getUserData() {
      this.FB.api('/me', 'GET', { fields: 'id,name,email' },
        userInformation => {
          console.warn("data api",userInformation)
          this.personalID = userInformation.id;
          this.email = userInformation.email;
          this.name = userInformation.name;
        }
      )
    },
    sdkLoaded(payload) {
      console.log("sdk loaded")
      this.isConnected = payload.isConnected
      this.FB = payload.FB
      if (this.isConnected) this.getUserData()
    },
    onLogin() {
      console.log("loogin called")
      this.isConnected = true
      this.getUserData()
    },
    onLogout() {
      console.log("logout called")
      this.isConnected = false;
    }
  }
}
</script>