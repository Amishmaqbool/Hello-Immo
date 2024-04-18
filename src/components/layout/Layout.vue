<template>
    <TopBanner />
    <slot />
    <Footer />
</template>

<script>
import TopBanner from '../common/TopBanner.vue';
import Footer from '../common/Footer.vue'

export default {
  name: 'Layout',
  components: {
    TopBanner,
    Footer
  }
}
</script>