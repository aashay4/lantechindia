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
  metaInfo: {
       title: 'Contact Us! Lantech Infocom',
       meta: [

         {name: 'viewport', content: 'width=device-width, initial-scale=1'},
         {name: 'description', content: 'Contact us! We are Number 1 IT company in Ahmedabad.'}
       ],
       link: [
      {rel: 'canonical', href: 'https://lantechinfocom.co.in/contact-us/'}
    ]
     },
components: {
  'footer-app': footer,
  'contactsection': contactsection,
  'header-app': header
}

}
</script>

<style lang="css">
</style>
