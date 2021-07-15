<template lang="html">
<div class="">
  <header-app></header-app>
  <div class="w3-content w3-margin-top" style="max-width:1600px">

  <div class="w3-row w3-padding w3-border">
    <div class="w3-col l8 s12">
      <div class="w3-container w3-white w3-margin w3-padding-large">
        <div class="w3-justify">
          <h1>Pros and Cons of Vue.js</h1>
          <hr>
          <p>The kind of revolution Javascript has made in the last decade is magnificent and it gave us such awesome frameworks that are simple and helps us to code in the least amount of time. The list of Javascript frameworks just does not end. This list includes Angular, React.js, Node.js, Express.js, and many other. Here, in this article, we are going to talk about one such awesome Javascript framework, "Vue.js." Over the last few years, Vue.js has gained great popularity. It is not powered by big organizations like Google or Facebook yet, it is one of the finest and best-maintained frameworks. Here, in this article, we are going to talk about the various advantages and disadvantages of Vue.js. Just travel through this article and you will get to learn something.</p>
          <h3>What is Vue.js?</h3>
          <p>Vue.js is a progressive web app Javascript framework. It is written in Javascript and Model-view-ViewModel framework which is great for building interactive user interfaces. Along with that, it is a single-page application framework that provides great internal page navigation. Many developers believe that Vue.js is a mixture of Angular and React.js. Just like Twitter, Vue.js has Vuex for state management. Vue.js helps you to perform all the logic in one file and reduces the length & complexity of a code.</p>
          <h3>Advantages of Vue.js</h3>
          <p>The biggest advantage of Vue.js is that it is very lean. It is way smaller than other front-end frameworks like Angular and React.js. Along with that Vue.js has huge community support with great documentation which helps you to develop quickly.</p>
          <p>Vue.js is highly scalable and works great for bigger websites. Many large websites like GitLab, Chess and many other websites are developed with Vue.js. If you are also planning to develop your product then choosing this framework can be the right choice. As discussed above, Vue.js is a single-page application framework that enables it to make the internal page navigation in the least amount of time. For that reason, it has become the price choice of almost all the developers and many developers are turning towards this framework.</p>
          <p>It works great with other back-end frameworks like Node.js and express.js. With middleware like Axios, it becomes really easy to become a full-stack developer. With the help of Axios, you can easily send the HTTP requests in the least amount of time and get a response easily as well.</p>
          <h3>Dis-advantages of Vue.js</h3>
          <p>Just like other popular front-end frameworks, Vue.js is also a single-page application framework. It simply means that there is only one HTML file in the whole project and all the content rendered in that one HTML file dynamically. This makes it difficult for search engines to read the content on these websites. If you are willing to rank your website for some keywords then it might get difficult to rank easily. There are two ways to render content to search engines. The first is pre-rendering and the second is server-side rendering.</p>
          <p>To perform pre-rendering, you need to install an extra node.js package and create a few files at the root. While server-side rendering is difficult, you can either perform it by yourself or use other SSR frameworks like Nuxt.js, Quasar, or Next.js for the same. Next.js is the server-side rendering framework for React.js while Next.js and Quasar are the server-side rendering frameworks for Vue.js.</p>
                </div>
              </div>

    <!-- About/Information menu -->

  <!-- END GRID -->
  </div>

<!-- END w3-content -->
</div>

  <contactsection></contactsection>
  <footer-app></footer-app>
</div>
</div>
</template>

<script>
import footer from '@/components/footer.vue'
import contactsection from '@/components/contactsection.vue'
import header from '@/components/header.vue'
import { createNote }  from '../repository'
export default {
  metaInfo: {
       title: 'Pros and Cons of Vuejs',
       meta: [

         {name: 'viewport', content: 'width=device-width, initial-scale=1'},
         {name: 'description', content: ''},
         {property: 'og:type', content: 'article'},
         {property: 'og:image', content: 'https://lantechinfocom.co.in/img/network-image.28d6d687.jpg'},
         {property: 'og:title', content: 'Everything about vuejs'}
       ],
       link: [
      {rel: 'canonical', href: 'https://lantechinfocom.co.in/pros-cons-vue-js/'}
    ]
     },
  components: {
    'footer-app': footer,
    'contactsection': contactsection,
    'header-app': header
  },
  data() {
    return {
      networkmigra: '',
      email: '',
      phone: '',
      question: ''
  }
  },
  methods: {
  industrial: function() {
    let data = { networkmigra: this.networkmigra, email: this.email, phone: this.phone, question: this.question }
    createNote(data)
    .then(response => {
      console.log(response);
    })
    .catch(err => alert(err.message));
  }
  }
}
</script>

<style lang="css">
</style>
