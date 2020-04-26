<template lang="html">
  <div class="">
    <header-app></header-app>
    <contactsection></contactsection>
      <footer-app></footer-app>
  </div>
</template>

<script>
import footer from '@/components/footer.vue'
import contactsection from '@/components/contactsection.vue'
import header from '@/components/header.vue'

export default {
components: {
  'footer-app': footer,
  'contactsection': contactsection,
  'header-app': header
}

}
</script>

<style lang="css">
</style>
