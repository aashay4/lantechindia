<template lang="html">
<div class="">
  <header-app></header-app>
  <header class="w3-display-container w3-wide" id="home">
    <img class="" src="../assets/Server-Room.jpg" alt="Lantech Infocom" width="100%" height="400">
    <div class="w3-display-left w3-padding-large">
      <h1 class="w3-text-white">Website Development Services, Ahmedabad, India</h1>
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
  <div class="w3-container w3-row w3-center w3-white w3-padding-64">
    <div class="w3-quarter">
      <span class="w3-xxlarge">20+</span>
      <br>Year of Experience
    </div>
    <div class="w3-quarter">
      <span class="w3-xxlarge">100+</span>
      <br>Projects Done
    </div>
    <div class="w3-quarter">
      <span class="w3-xxlarge">75+</span>
      <br>Happy Clients
    </div>
    <div class="w3-quarter">
      <span class="w3-xxlarge">100+</span>
      <br>Products We Distribute
    </div>
  </div>
  <div class="w3-container w3-white w3-padding-64 w3-light-gray">
    <div class="w3-row-padding">
      <div class="w3-col m6">
        <b><h3>Top Web Development Company</h3></b>
        <p>Planning to take your business online? Our web development services can help you<br>
          take your business on the digital platform with ease.</p>
          <b><h4>How We Perform Web Development?</h4></b>
        <p>There are plenty of Content Management Systems and frameworks like Wordpress, React.js, Python and many more available<br>
          . We choose the best one as per your requirement. <br>
          </p>
      </div>
    </div>
  </div>
  <div class="w3-container w3-light-grey" style="padding:16px 16px">
    <h1 class="">Frameworks We Use for Web Development</h1>
    <div class="w3-row-padding w3-light-grey">
      <div class="w3-col m6">
        <h3>Node.js Web Development</h3>
        <p>Node.js is a javascript server-side framework. It is one of the fastest frameworks among others. Node.js is used to build real-time applications, chat applications, video streaming applications. For web development, we use Express.js along with Node.js which is a framework of node.js and specially built to use node.js for web development. It is highly scalable and electrifyingly fast. If you want to develop large-scale applications then we will highly recommend you to go with Node.js and express.js.<br><br>Click to explore our work.</p>

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
        <h3>Vue.js</h3>
        <p>Vue.js is a front-end Javascript framework. This framework is new but it is highly scalable. Large websites like Gitlab, Hackernoon, behenced, and many others are using Vue.js. In the presence of giants like Angular and React, Vue.js has made its community. The biggest advantages of Vue.js are speed, size, and flexibility. The apps built with vuejs are normally less complex compared to react or angular. We use node.js & express as the back-end frameworks with Vue.js. This is called the MEVN stack.
          <br><br>Click to explore our work.</p>
        <p><a href="#clients" class="w3-button w3-black"><i class="fa fa-th"></i>Our Clients</a></p>
      </div>

    </div>

    <div class="w3-row-padding w3-light-grey">
      <div class="w3-col m6">
        <h3>Angular</h3>
        <p>Angular is powered by Google and it follows a Model-view-controller pattern for web development. This framework is highly scalable and used to develop large applications. Google has used Angular in Gmail, Adsense, and Google Analytics. Apart from that, a huge amount of websites are using Angular. There are nine versions of angular are available which means it is a mature and highly scalable framework. If you want to develop software as a service or a medium to the large application then we will recommend Angular.<br><br>Click to explore our work.</p>
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
        <h3>React.js Development</h3>
        <p>Powered by Facebook, React.js is one of the most popular Javascript front-end frameworks in recent times. It is simpler than Angular and used to build user interfaces. The internal communication between components makes react.js simple. React.js boosts the productivity of an application and makes it easy for the developer to maintain an application. Since it is powered by Facebook, it guarantees stable code and scalability. We use Node.js and Express.js as the back-end frameworks with React.js which makes it MERN stack.<br><br>Click to explore our work.</p>
        <p><a href="#clients" class="w3-button w3-black"><i class="fa fa-th"></i>Our Clients</a></p>
      </div>

    </div>

    <div class="w3-row-padding w3-light-grey">
      <div class="w3-col m6">
        <h3>Wordpress Web Development</h3>
        <p>Wordpress is a Content Management System. If you are planning to develop a small business website with a few pages then choosing Wordpress web development services is an ideal choice. Wordpress is also an SEO-friendly framework, so if you do not need many features and looking to develop a simple app then WordPress web development is great.
          <br><br>Click to explore our work.</p>
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
       title: 'Web Development Services | Hire Web Developers',
       meta: [

         {name: 'viewport', content: 'width=device-width, initial-scale=1'},
         {name: 'description', content: 'With the dedicated team of web developers, get top-notch web development services at the most affordable price. Visit our website and Hire web developers today.'}
       ],
       link: [
      {rel: 'canonical', href: 'https://lantechinfocom.co.in/web-development-services/'}
    ]
     },

  components: {
    'footer-app': footer,
    'contactsection': contactsection,
    'header-app': header
  },
  data() {
    return {
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
