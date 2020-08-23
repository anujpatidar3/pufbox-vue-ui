<template>
  <div class="home">
    <Caraousle></Caraousle>
    <HomeContent></HomeContent>
    <CardCarousle></CardCarousle>
  </div>
</template>

<script>
import CardCarousle from '../components/home/CardCarousle'
import Caraousle from '../components/home/Caraousle'
import HomeContent from '../components/home/HomeContent'

export default {
  name: 'Home',
  components: {
    CardCarousle,
    Caraousle,
    HomeContent
  }
}
</script>
<style lang="scss" scoped>

</style>
