import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAd, faCoffee } from '@fortawesome/free-solid-svg-icons'



// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faAd, faCoffee)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)