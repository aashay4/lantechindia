<template>
  <div>
  <header-app></header-app>

<!-- Header with full-height image -->


<!-- Header with full-height image -->
<header class="bgimg-1 w3-display-container w3-grayscale-min" id="home">
  <img class="" src="../assets/mac.jpg" alt="Lantech Infocom" width="100%" height="575px;">
<div class="w3-display-left w3-text-white" style="padding:48px">
  <span class="w3-jumbo w3-hide-small">Start something that matters</span><br>
  <span class="w3-xxlarge w3-hide-large w3-hide-medium">Start something that matters</span><br>
  <span class="w3-large">Stop wasting valuable time with projects that just isn't you.</span>
  <p><a href="#about" class="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">Learn more and start today</a></p>
</div>
<div class="w3-display-bottomleft w3-text-grey w3-large" style="padding:24px 48px">
  <i class="fa fa-facebook-official w3-hover-opacity"></i>
  <i class="fa fa-instagram w3-hover-opacity"></i>
  <i class="fa fa-snapchat w3-hover-opacity"></i>
  <i class="fa fa-pinterest-p w3-hover-opacity"></i>
  <i class="fa fa-twitter w3-hover-opacity"></i>
  <i class="fa fa-linkedin w3-hover-opacity"></i>
</div>
</header>

<!-- About Section -->
<div class="w3-container" style="padding:16px" id="about">
  <h3 class="w3-center">ABOUT THE COMPANY</h3>
  <p class="w3-center w3-large">Key features of our company</p>
  <div class="w3-row-padding w3-center" style="margin-top:64px">
    <div class="w3-quarter">
      <i class="fa fa-desktop w3-margin-bottom w3-jumbo w3-center"></i>
      <p class="w3-large">Satisfaction</p>
      <p>Our client's satisfaction is our prime goal. With the team of experts we try to match client's complex demands.</p>
    </div>
    <div class="w3-quarter">
      <i class="fa fa-heart w3-margin-bottom w3-jumbo"></i>
      <p class="w3-large">Passion</p>
      <p>Our passion is to become the best in the buisness and provide what client is expectating.</p>
    </div>
    <div class="w3-quarter">
      <i class="fa fa-diamond w3-margin-bottom w3-jumbo"></i>
      <p class="w3-large">Security</p>
      <p>All the work we do for our clients is confidential and we respect our clients privacy.</p>
    </div>
    <div class="w3-quarter">
      <i class="fa fa-cog w3-margin-bottom w3-jumbo"></i>
      <p class="w3-large">Support</p>
      <p>Our 24*7 support is always there, if our client has got a minor change in the product, we are there to change.</p>
    </div>
  </div>
</div>

<!-- Promo Section - "We know design" -->
<div class="w3-container w3-light-grey" style="padding:12px 16px">
  <div class="w3-row-padding">
    <div class="w3-col m6">
      <h3>About Our Company</h3>
      <p>Lantech Infocom was established in the 1996. It has been around for more then 24 years. It has the dedicated
              team of various developers and technicians who always look to match the client's expectations. With the kind of expertise and commitment it has become one of the most popular computer networking companies. The team accepts new challenges and
              do every task with enthusiasm. The hunger for the excellence has made Lantech Infocom one of the best computer networking companies in Ahmedabad.<br><br>Click to explore our work.</p>
      <p><a href="#clients" class="w3-button w3-black"><i class="fa fa-th"></i>Our Clients</a></p>
    </div>
    <div class="w3-col m6">
      <img class="w3-image w3-round-large w3-hide-small" src="../assets/network-image.jpg" alt="Buildings" width="700" height="394">
    </div>
  </div>
</div>

<!-- Team Section -->
<div class="w3-container" style="padding:24 16px" id="services">
  <h3 class="w3-center">Computer Networking Services</h3>
  <p class="w3-center w3-large">Things We Are Good At</p>
  <div class="w3-row-padding w3-grayscale" style="margin-top:64px">
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-card w3-hover-shadow">
        <img src="../assets/system_integre.jpg" alt="System Integration" style="width:100%; height:207px;">
        <div class="w3-container">
          <h3>System Integration</h3>
          <p class="w3-opacity">System Integration Services</p>
          <p>Lantech offer system integration for complete data communication in a network. Contact now.</p>
          <p><button class="w3-button w3-light-grey w3-block" onclick="document.getElementById('contactsi').style.display='block'"><i class="fa fa-envelope"></i> Contact</button></p>
        </div>
      </div>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-card w3-hover-shadow">
        <img src="../assets/network_audit.jpg" alt="Structured Cabling" style="width:100%; height:207px;">
        <div class="w3-container">
          <h3>Structured Cabling</h3>
          <p class="w3-opacity">Structured Cabling</p>
          <p>We offer complete voice / video and data cabling for building communication system. Contact now.</p>

          <p><button class="w3-button w3-light-grey w3-block" onclick="document.getElementById('structuredcable').style.display='block'"><i class="fa fa-envelope"></i> Contact</button></p>
        </div>
      </div>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-card w3-hover-shadow">
        <img src="../assets/lan_implement.jpg" alt="LAN WAN" style="width:100%; height:207px;">
        <div class="w3-container">
          <h3>LAN/WAN Implementation</h3>
          <p class="w3-opacity">L/W Implementation</p>
          <p>Get LAN/WAN implementation services at the most affordable price from Lantech Infocom.</p>
          <p><button class="w3-button w3-light-grey w3-block" onclick="document.getElementById('lanwan').style.display='block'"><i class="fa fa-envelope"></i> Contact</button></p>
        </div>
      </div>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-card w3-hover-shadow">
        <img src="../assets/lan_audit.jpg" alt="LAN Audit" style="width:100%; height:207px;">
        <div class="w3-container">
          <h3>LAN Audit</h3>
          <p class="w3-opacity">LAN Audit</p>
          <p>Run an audit report for your LAN structure including node details and network operations.</p>
        <p><button class="w3-button w3-light-grey w3-block" onclick="document.getElementById('lanaudit').style.display='block'"><i class="fa fa-envelope"></i> Contact</button></p>
        </div>
      </div>
    </div>
  </div>

  <div class="w3-row-padding w3-grayscale" style="margin-top:64px">
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-card w3-hover-shadow">
        <img src="../assets/troubleshooting.jpg" alt="Troubleshooting" style="width:100%; height:207px;">
        <div class="w3-container">
          <h3>Troubleshooting and Maintanance</h3>
          <p class="w3-opacity">Troubleshooting and Maintanance</p>
          <p>Get all the network complexity solved and keep your network uptodate with troubleshooting & maintanance.</p>
          <p><button class="w3-button w3-light-grey w3-block" onclick="document.getElementById('troublemain').style.display='block'"><i class="fa fa-envelope"></i> Contact</button></p>
        </div>
      </div>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-card w3-hover-shadow">
        <img src="../assets/migration.jpg" alt="Migration" style="width:100%; height:207px;">
        <div class="w3-container">
          <h3>Migration to 1/10 Gigabit Data Network</h3>
          <p class="w3-opacity">Network Migration</p>
          <p>Transfer data and programs from old network to the new network with our services. Contact for more details.</p>
          <p><button class="w3-button w3-light-grey w3-block" onclick="document.getElementById('migration').style.display='block'"><i class="fa fa-envelope"></i> Contact</button></p>
        </div>
      </div>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-card w3-hover-shadow">
        <img src="../assets/certification.jpg" alt="Certification" style="width:100%; height:207px;">
        <div class="w3-container">
          <h3>Site Certification</h3>
          <p class="w3-opacity">Site Certification</p>
          <p>Find out the faults on your site and get the solution from our site certification services. Contact today for more details.</p>
          <p><button class="w3-button w3-light-grey w3-block" onclick="document.getElementById('systemin').style.display='block'"><i class="fa fa-envelope"></i> Contact</button></p>
        </div>
      </div>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-card w3-hover-shadow">
        <img src="../assets/network_audit.jpg" alt="Networking Audit" style="width:100%; height:207px;">
        <div class="w3-container">
          <h3>Industrial Audit Report</h3>
          <p class="w3-opacity">Industrial Audit Report</p>
          <p>With our experties, we halp you to create the perfect audit reports in the least amount of time.</p>
          <p><button class="w3-button w3-light-grey w3-block" onclick="document.getElementById('auditreport').style.display='block'"><i class="fa fa-envelope"></i> Contact</button></p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Contact us Pop up-->

<div id="systemin" class="w3-modal w3-animate-opacity">
  <div class="w3-modal-content" style="padding:32px">
    <div class="w3-container w3-white">
      <i onclick="document.getElementById('systemin').style.display='none'" class="fa fa-remove w3-transparent w3-button w3-xlarge w3-right"></i>
      <h2>Industrial Audit Report</h2>
      <input class="w3-input w3-border" type="text" name="" placeholder="Industrial Audit Report" v-model="networkmigra" />
      <p><input class="w3-input w3-border" v-model="phone" type="number" placeholder="Enter Phone Number"></p>
      <p><input class="w3-input w3-border" v-model="question" type="text" placeholder="Enter your question."></p>
      <p><input class="w3-input w3-border" v-model="email" type="text" placeholder="Enter e-mail"></p>
      <button type="button" @click="industrial()" class="w3-button w3-block w3-padding-large w3-red w3-margin-bottom" onclick="document.getElementById('systemin').style.display='none'">Contact</button>
    </div>
  </div>
</div>

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

<div id="contactsi" class="w3-modal w3-animate-opacity">
  <div class="w3-modal-content" style="padding:32px">
    <div class="w3-container w3-white">
      <i onclick="document.getElementById('contactsi').style.display='none'" class="fa fa-remove w3-transparent w3-button w3-xlarge w3-right"></i>
      <h2 class="w3-wide">Contact for System Integration</h2>
      <input class="w3-input w3-border" type="text" name="" placeholder="System Integration" v-model="networkmigra" />
      <p><input class="w3-input w3-border" type="email" v-model="email" placeholder="Enter e-mail"></p>
      <p><input class="w3-input w3-border" type="number" v-model="phone" placeholder="Enter Phone Number"></p>
      <p><input class="w3-input w3-border" type="text" v-model="question" placeholder="Enter your question."></p>
  <button type="button" @click="industrial()" class="w3-button w3-block w3-padding-large w3-red w3-margin-bottom" onclick="document.getElementById('contactsi').style.display='none'">Contact</button>
    </div>
  </div>
</div>

<div id="structuredcable" class="w3-modal w3-animate-opacity">
  <div class="w3-modal-content" style="padding:32px">
    <div class="w3-container w3-white">
      <i onclick="document.getElementById('structuredcable').style.display='none'" class="fa fa-remove w3-transparent w3-button w3-xlarge w3-right"></i>
      <h2 class="w3-wide">Contact for Structured Cabling</h2>
      <input class="w3-input w3-border" type="text" name="" placeholder="Structured Cabling" v-model="networkmigra" />
      <p><input class="w3-input w3-border" type="email" v-model="email" placeholder="Enter e-mail"></p>
      <p><input class="w3-input w3-border" type="number" v-model="phone" placeholder="Enter Phone Number"></p>
      <p><input class="w3-input w3-border" type="text" v-model="question" placeholder="Enter your question."></p>
  <button type="button" @click="industrial()" class="w3-button w3-block w3-padding-large w3-red w3-margin-bottom" onclick="document.getElementById('structuredcable').style.display='none'">Contact</button>
    </div>
  </div>
</div>

<div id="lanwan" class="w3-modal w3-animate-opacity">
  <div class="w3-modal-content" style="padding:32px">
    <div class="w3-container w3-white">
      <i onclick="document.getElementById('lanwan').style.display='none'" class="fa fa-remove w3-transparent w3-button w3-xlarge w3-right"></i>
      <h2>Contact for LAN/WAN Implementation</h2>
      <input class="w3-input w3-border" type="text" name="" placeholder="LAN/WAN Implementation" v-model="networkmigra" />
      <p><input class="w3-input w3-border" type="email" v-model="email" placeholder="Enter e-mail"></p>
      <p><input class="w3-input w3-border" type="number" v-model="phone" placeholder="Enter Phone Number"></p>
      <p><input class="w3-input w3-border" type="text" v-model="question" placeholder="Enter your question."></p>
  <button type="button" @click="industrial()" class="w3-button w3-block w3-padding-large w3-red w3-margin-bottom" onclick="document.getElementById('lanwan').style.display='none'">Contact</button>
    </div>
  </div>
</div>

<div id="lanaudit" class="w3-modal w3-animate-opacity">
  <div class="w3-modal-content" style="padding:32px">
    <div class="w3-container w3-white">
      <i onclick="document.getElementById('lanaudit').style.display='none'" class="fa fa-remove w3-transparent w3-button w3-xlarge w3-right"></i>
      <h2 class="w3-wide">LAN - WAN Audit</h2>
      <input class="w3-input w3-border" type="text" name="" placeholder="LAN - WAN Audit" v-model="networkmigra" />
      <p><input class="w3-input w3-border" type="email" v-model="email" placeholder="Enter e-mail"></p>
      <p><input class="w3-input w3-border" type="number" v-model="phone" placeholder="Enter Phone Number"></p>
      <p><input class="w3-input w3-border" type="text" v-model="question" placeholder="Enter your question."></p>
  <button type="button" @click="industrial()" class="w3-button w3-block w3-padding-large w3-red w3-margin-bottom" onclick="document.getElementById('lanaudit').style.display='none'">Contact</button>
    </div>
  </div>
</div>

<div id="troublemain" class="w3-modal w3-animate-opacity">
  <div class="w3-modal-content" style="padding:32px">
    <div class="w3-container w3-white">
      <i onclick="document.getElementById('troublemain').style.display='none'" class="fa fa-remove w3-transparent w3-button w3-xlarge w3-right"></i>
      <h2 class="w3-wide">Query Troubleshooting and Maintanance</h2>
      <input class="w3-input w3-border" type="text" name="" placeholder="Troubleshooting and Maintanance" v-model="networkmigra" />
      <p><input class="w3-input w3-border" type="email" v-model="email" placeholder="Enter e-mail"></p>
      <p><input class="w3-input w3-border" type="number" v-model="phone" placeholder="Enter Phone Number"></p>
      <p><input class="w3-input w3-border" type="text" v-model="question" placeholder="Enter your question."></p>
  <button type="button" @click="industrial()" class="w3-button w3-block w3-padding-large w3-red w3-margin-bottom" onclick="document.getElementById('troublemain').style.display='none'">Contact</button>
    </div>
  </div>
</div>

<div id="migration" class="w3-modal w3-animate-opacity">
  <div class="w3-modal-content" style="padding:32px">
    <div class="w3-container w3-white">
      <i onclick="document.getElementById('migration').style.display='none'" class="fa fa-remove w3-transparent w3-button w3-xlarge w3-right"></i>
      <h2 class="w3-wide">Contact Regarding Network Migration</h2>
      <input class="w3-input w3-border" type="text" name="" placeholder="Network Migration" v-model="networkmigra" />
      <p><input class="w3-input w3-border" type="email" v-model="email" placeholder="Enter e-mail"></p>
      <p><input class="w3-input w3-border" type="number" v-model="phone" placeholder="Enter Phone Number"></p>
      <p><input class="w3-input w3-border" type="text" v-model="question" placeholder="Enter your question."></p>
  <button type="button" @click="industrial()" class="w3-button w3-block w3-padding-large w3-red w3-margin-bottom" onclick="document.getElementById('migration').style.display='none'">Contact</button>
    </div>
  </div>
</div>

<div id="auditreport" class="w3-modal w3-animate-opacity">
  <div class="w3-modal-content" style="padding:32px">
    <div class="w3-container w3-white">
      <i onclick="document.getElementById('auditreport').style.display='none'" class="fa fa-remove w3-transparent w3-button w3-xlarge w3-right"></i>
      <h2 class="w3-wide">Industrial Audit reports</h2>
      <input class="w3-input w3-border" type="text" name="" placeholder="Industrial Audit reports" v-model="networkmigra" />
      <p><input class="w3-input w3-border" v-model="phone" type="number" placeholder="Enter Phone Number"></p>
      <p><input class="w3-input w3-border" v-model="question" type="text" placeholder="Enter your question."></p>
      <p><input class="w3-input w3-border" v-model="email" type="text" placeholder="Enter e-mail"></p>

  <button type="button" @click="industrial()" class="w3-button w3-block w3-padding-large w3-red w3-margin-bottom" onclick="document.getElementById('auditreport').style.display='none'">Contact</button>
    </div>
  </div>
</div>

<!-- Promo Section "Statistics" -->
<div class="w3-container w3-row w3-center w3-dark-grey w3-padding-64">
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

<!-- Work Section -->
<div class="w3-container" style="padding:128px 16px" id="clients">
  <h3 class="w3-center">OUR Clients</h3>
  <p class="w3-center w3-large">What we've done for people</p>

  <div class="w3-row-padding" style="margin-top:64px">
    <div class="w3-col l3 m6">
      <img src="../assets/boi.png" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="A microphone">
    </div>
    <div class="w3-col l3 m6">
      <img src="../assets/electro.png" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="A phone">
    </div>
    <div class="w3-col l3 m6">
      <img src="../assets/hitachi.png" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="A drone">
    </div>
    <div class="w3-col l3 m6">
      <img src="../assets/amul.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Soundbox">
    </div>
  </div>
</div>

<!-- Modal for full size images on click-->
<div id="modal01" class="w3-modal w3-black" onclick="this.style.display='none'">
  <span class="w3-button w3-xxlarge w3-black w3-padding-large w3-display-topright" title="Close Modal Image">×</span>
  <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
    <img id="img01" class="w3-image">
    <p id="caption" class="w3-opacity w3-large"></p>
  </div>
</div>

<!-- Skills Section -->
<div class="w3-container w3-light-grey w3-padding-64">
  <div class="w3-row-padding">
    <div class="w3-col m6">
      <h3>Our Skills.</h3>
      <p>Our skills in computer networking, structure cabling, L/W Implementation,<br>
        LAN Audit, Troubleshooting and Maintanance, Network Migration, and Industrial Audit Report.</p>
      <p>Along with these computer networking services, we also provide front-end and <br>
        back-end development solution. We use Node/Express as the back-end frameworks and <br>
        Vue.js & React.js as the Front-end frameworks.</p>
    </div>
    <div class="w3-col m6">
      <p class="w3-wide"><i class="fa fa-link w3-margin-right"></i>Computer Networking</p>
      <div class="w3-grey">
        <div class="w3-container w3-dark-grey w3-center" style="width:95%">95%</div>
      </div>
      <p class="w3-wide"><i class="fa fa-code w3-margin-right"></i>Back-End Development</p>
      <div class="w3-grey">
        <div class="w3-container w3-dark-grey w3-center" style="width:90%">90%</div>
      </div>
      <p class="w3-wide"><i class="fa fa-desktop w3-margin-right"></i>Front-End Development</p>
      <div class="w3-grey">
        <div class="w3-container w3-dark-grey w3-center" style="width:87%">87%</div>
      </div>
    </div>
  </div>
</div>

<!-- Pricing Section -->
<pricesection id="oservices"></pricesection>

<!-- Contact Section -->
<contactsection id="contact"></contactsection>

<!-- Footer -->
<footer-app></footer-app>
</div>
</template>

<script>
// @ is an alias to /src
import footer from '@/components/footer.vue'
import contactsection from '@/components/contactsection.vue'
import pricesection from '@/components/pricesection.vue'
import header from '@/components/header.vue'

import { createNote }  from '../repository'
export default {
  metaInfo: {
       title: 'Computer networking company | Contact for networking services',
       meta: [

         {name: 'viewport', content: 'width=device-width, initial-scale=1'},
         {name: 'description', content: 'We provide computer networking services. Lantech Infocom is a well-known computer networking company which has done around 500 computer networking projects.'}
       ],
       link: [
      {rel: 'canonical', href: 'https://lantechinfocom.co.in/'}
    ]
     },
  name: 'home',
  components: {
    'footer-app': footer,
    'contactsection': contactsection,
    'pricesection': pricesection,
    'header-app': header
  },
    data() {
      return {
        isclose: false,
        networkmigra: '',
        email: '',
        phone: '',
        question: '',
    }
  },
  methods: {
    smalltoggle: function() {
      this.isclose = !this.close
    },
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
<style scoped>
body,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", sans-serif}
body, html {
  height: 100%;
  line-height: 1.8;
}
/* Full height image header */
.bgimg-1 {
  background-position: center;
  background-size: cover;
  min-height: 100%;
}
.w3-bar .w3-button {
  padding: 16px;
}
</style>
