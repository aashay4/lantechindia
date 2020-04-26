<template lang="html">
<div class="">
  <header-app></header-app>
  <header class="w3-display-container w3-wide" id="home">
    <img class="" src="../assets/Server-Room.jpg" alt="Lantech Infocom" width="100%" height="400">
    <div class="w3-display-left w3-padding-large">
      <h1 class="w3-text-white">SEO Services Ahmedabad, India</h1>
      <h6><button class="w3-button w3-white w3-padding-large w3-large w3-opacity w3-hover-opacity-off" onclick="document.getElementById('contact4').style.display='block'">Contact Us</button></h6>
    </div>
  </header>

  <div id="contact4" class="w3-modal w3-animate-opacity">
    <div class="w3-modal-content" style="padding:32px">
      <div class="w3-container w3-white">
        <i onclick="document.getElementById('contact4').style.display='none'" class="fa fa-remove w3-transparent w3-button w3-xlarge w3-right"></i>
        <h2 class="w3-wide">Contact Us</h2>
        <p>Having any Questions? Contact us today and we will get back to you in 24 hour.</p>
        <p><input class="w3-input w3-border" type="email" v-model="email" placeholder="Enter e-mail"></p>
        <p><input class="w3-input w3-border" type="phone" v-model="phone" placeholder="Enter Phone Number"></p>
        <p><input class="w3-input w3-border" type="text" v-model="question" placeholder="Enter your question."></p>
    <button type="button" @click="industrial()" class="w3-button w3-block w3-padding-large w3-red w3-margin-bottom" onclick="document.getElementById('contact4').style.display='none'">Contact</button>
      </div>
    </div>
  </div>

  <div class="w3-container w3-light-grey w3-padding-64">
    <div class="w3-row-padding">
      <div class="w3-col m6">
        <h3>SEO Company in Ahmedabad</h3>
        <p>Have you got a business website? Great! Our SEO services can help you to<br>
          increase business sales from the digital platform.</p>
          <h4>What is SEO?</h4>
        <p>SEO stands for Search Engine Optimization. We as an SEO company analyze websites <br>
          and make then search engine friendly. SEO services are required for businesses  <br>
          to open a new income source from the internet.</p>
      </div>
      <div class="w3-col m6">

      </div>
    </div>
  </div>
<h1>Explore our SEO Services</h1>

  <div class="w3-container w3-light-grey" style="padding:64px 16px">
    <div class="w3-row-padding">
      <div class="w3-col m6">
        <h3>Local SEO</h3>
        <p>Are you a local service provider? If yes then opting for Lantech Infocom's local SEO services is the right option for you. Our local services include creating and optimizing Google My Business listings, helping your business to rank in the Google maps, and ranking your business website in the Google for that particular region. For example, if you are a skin dermatologist in Ahmedabad then we will help you to rank in the Google Maps, SERP, and optimize your Google my business listing.<br><br>Click to explore our work.</p>

        <p><a href="#clients" class="w3-button w3-black"><i class="fa fa-th"></i>Our Clients</a></p>
      </div>
      <div class="w3-col m6">
        <img class="w3-image w3-round-large w3-hide-small" src="../assets/network-image.jpg" alt="Buildings" width="700" height="394">
      </div>
    </div>

    <div class="w3-row-padding">
      <div class="w3-col m6">
        <img class="w3-image w3-round-large w3-hide-small" src="../assets/network-image.jpg" alt="Buildings" width="700" height="394">
      </div>

      <div class="w3-col m6">
        <h3>Ecommerce SEO</h3>
        <p>SEO plays a huge role in improving sales of an Ecommerce website. We have helped various Ecommerce websites to increase revenue. By targeting revenue-oriented keywords and improving google search results, we can help you to sell products online. For example, if you are selling wholesale clothes then targeting keywords like "wholesale clothing", "buy wholesale clothes" and ranking for these keywords in Google can increase your business' revenue by a huge margin.
          <br><br>Click to explore our work.</p>
        <p><a href="#clients" class="w3-button w3-black"><i class="fa fa-th"></i>Our Clients</a></p>
      </div>

    </div>

    <div class="w3-row-padding">
      <div class="w3-col m6">
        <h3>Javascript SEO</h3>
        <p>Almost 58% of startups that are built with Javascript fail due to bad SEO. Javascript frameworks like Angular, Vue.js, and React.js have become very popular over the last few years. We have the expertise to make a website built with Javascript frameworks SEO friendly. We perform Server-Side rendering and pre-rendering for content rendering. Also, we take care of minify js files, including meta tags, canonical tags, rendering, XML files, and including https certificate with Let's Encrypt.<br><br>Click to explore our work.</p>

        <p><a href="#clients" class="w3-button w3-black"><i class="fa fa-th"></i>Our Clients</a></p>
      </div>
      <div class="w3-col m6">
        <img class="w3-image w3-round-large w3-hide-small" src="../assets/network-image.jpg" alt="Buildings" width="700" height="394">
      </div>
    </div>
  </div>

  <contactsection></contactsection>
  <footer-app></footer-app>
</div>
</template>

<script>
import footer from '@/components/footer.vue'
import contactsection from '@/components/contactsection.vue'
import header from '@/components/header.vue'
import { createNote }  from '../repository'
export default {
  metaInfo: {
       title: 'SEO Services Ahmedabad | Hire SEO Expert',
       meta: [

         {name: 'viewport', content: 'width=device-width, initial-scale=1'},
         {name: 'description', content: 'We are top seo company in India. Expand your business on the digitally with SEO services. With unique strategy, we skyrocket businesses. Contact to hire seo expert.'}
       ],
       link: [
      {rel: 'canonical', href: 'https://lantechinfocom.co.in/seo-services/'}
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
