<template lang="html">
<div class="">
  <header-app></header-app>
  <header class="w3-display-container w3-wide" id="home">
    <img class="" src="../assets/Server-Room.jpg" alt="Lantech Infocom" width="100%" height="400">
    <div class="w3-display-left w3-padding-large">
      <h1 class="w3-text-white">Mobile App Development India</h1>
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
        <h3>Top Mobile App Development Company India</h3>
        <p>Smartphones have changed the way humans use the internet. It has been an essential part of human lives. Lantech Infocom is a top app development company that can help you to create an app for your business.</p>
          <h4>Why Mobile Apps Are Important?</h4>
        <p>
With mobile apps, you can keep your customers updated about the latest news, updates, and products. Lantech Infocom is a top app development company that has an experience of several years in this field.</p>
      </div>
      <div class="w3-col m6">

      </div>
    </div>
  </div>

  <div class="w3-container w3-light-grey" style="padding:16px 16px">
    <h1>Abour Our Mobile App Development Services</h1><br>
    <div class="w3-row-padding">
      <div class="w3-col m6">
        <h3>Android App Development</h3>
        <p>Android mobile app development is the process from which developers develop a new application for android devices. Mobile apps are written in the Java language since 2009. Apart from Java, android mobile applications can also be written in Kotlin and C++ languages using an android app development kit. We have a wasp experience of developing different android app. Our services include full-cycle development, java code audit, server-side API creation.
          <br><br>Click to explore our work.</p>

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
        <h3>IOS App Development</h3>
        <p>It does not matter if you opt for the ios mobile app development, the IOS app will work across all the Apple devices. Lantech Infocom is a top-notch app development company across India, which has a team of dedicated IOS developers who look forward to every challenge. Make your first business IOS app with cost-effective packages at the most affordable price. Contact us today for any queries.
          <br><br>Click to explore our work.</p>
        <p><a href="#clients" class="w3-button w3-black"><i class="fa fa-th"></i>Our Clients</a></p>
      </div>
    </div>

    <div class="w3-row-padding">
      <div class="w3-col m6">
        <h3>React-Native Development</h3>
        <p>React Native is an open-source framework developed by Facebook to empower javascript developers to use React.js components across all the platforms like web, android, and ios environment. The biggest advantage of react native is that your app will work on all smartphones including IOS and android. You just need to pay once for mobile app development and it will work across all devices. We have a dedicated team of developers who can write code in React native.
          <br><br>Click to explore our work.</p>
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
        <h3>Ionic App Development</h3>
        <p>Just like React Native, the Ionic mobile app development framework is also built to use one shared code base across the web, android, and IOS. Over the years, it has gained a lot of momentum and big companies are also preferring Ionic framework for their company's mobile app development. Along with that, simplicity is one of the biggest advantages of Ionic mobile apps. The apps built with this platform are easy to maintain and update.
          <br><br>Click to explore our work.</p>
        <p><a href="#clients" class="w3-button w3-black"><i class="fa fa-th"></i>Our Clients</a></p>
      </div>
    </div>

    <div class="w3-row-padding">
      <div class="w3-col m6">
        <h3>Phone Gap App Development</h3>
        <p>Phonegap is one of the oldest and widely used cross-platform technology for mobile app development. It uses Javascript, CSS, and HTML for production. Since PhoneGap is old and mature, it offers a highly robust application performance system that helps to create scalable complex mobile apps. If you are planning to develop an online eCommerce app then we would highly recommend you go with the Phonegap mobile app development framework.
          <br><br>Click to explore our work.</p>
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
        <h3>Vue-Native App Development</h3>
        <p>Vue-native is also a cross-platform app development framework. Vue-native is a new framework compared to other frameworks like PhoneGap, Ionic, React-native, and many others. With Vue native, we can use all vuejs components in the web, android, and IOS smartphone. It has a small community and there are few applications developed with this framework but the response from the users is pretty amazing. We think you should also give this framework a try as Vue.js is very successful.
          <br><br>Click to explore our work.</p>
        <p><a href="#clients" class="w3-button w3-black"><i class="fa fa-th"></i>Our Clients</a></p>
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
       title: 'App Development Company India | Develop Mobile App',
       meta: [

         {name: 'viewport', content: 'width=device-width, initial-scale=1'},
         {name: 'description', content: 'Lantech Infocom is moile app development company in India & USA. Get innovative app development services in Android and IOS with Ionic, PhoneGap, React-native frameworks.'}
       ],
       link: [
      {rel: 'canonical', href: 'https://lantechinfocom.co.in/mobile-app-development-services/'}
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
