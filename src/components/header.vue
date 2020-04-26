<template lang="html">
  <div>
  <div class="w3-top">
  <div class="w3-bar w3-white w3-card" id="myNavbar">
    <router-link to="/"><a class="w3-bar-item w3-button w3-wide"><img src="../assets/logo.png" style="height:37px; width:37px"></a></router-link>
    <!-- Right-sided navbar links -->
    <div>
    <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" v-on:click='isclose = !isclose'>
      <i class="fa fa-bars"></i>
    </a>
  </div>
    <div class="">
      <a href="tel:9426527612" class="w3-bar-item w3-button w3-right"><i class="fa fa-phone fa fa-phone fa-fw w3-xxlarge"></i> CALL NOW</a>
    </div>
    <div class="w3-hide-small" style="margin-left: 22%">
      <router-link to="/">
      <a class="w3-bar-item w3-button"><i class="fas fa-desktop"></i> Computer Networking</a></router-link>
      <router-link to="/web-development-services/">
      <a class="w3-bar-item w3-button"> <i class="fa fa-code"></i> Web Development</a></router-link>
      <router-link to="/mobile-app-development-services/">
      <a class="w3-bar-item w3-button"><i class="fa fa-mobile"></i> Mobile App Development</a></router-link>
      <router-link to="/seo-services/">
      <a class="w3-bar-item w3-button"><i class="fa fa-link"></i> SEO Services</a></router-link>
      <router-link to="/contact-us/">
      <a class="w3-bar-item w3-button"><i class="fas fa-map"></i> Contact</a></router-link>
    </div>
    <!-- Hide right-floated links on small screens and replace them with a menu icon -->
  </div>
</div>

<!-- Sidebar on small screens when clicking the menu icon -->
<nav class="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" v-show="isclose" id="mySidebar">
  <a href="javascript:void(0)" v-on:click='isclose = !isclose' class="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
    <router-link to="/">
  <a onclick="w3_close()" class="w3-bar-item w3-button"><i class="fas fa-desktop"></i> Computer Networking</a></router-link>
  <router-link to="/web-development-services/">
  <a onclick="w3_close()" class="w3-bar-item w3-button"><i class="fa fa-code"></i> Web Development</a></router-link>
  <router-link to="/mobile-app-development-services/">
  <a onclick="w3_close()" class="w3-bar-item w3-button"><i class="fa fa-mobile"></i> Mobile App Development</a></router-link>
  <router-link to="/seo-services/">
  <a onclick="w3_close()" class="w3-bar-item w3-button"><i class="fa fa-link"></i> SEO Services</a></router-link>
  <router-link to="/contact-us/">
  <a onclick="w3_close()" class="w3-bar-item w3-button"><i class="fa fa-phone"></i> Contact Us</a></router-link>
</nav>
</div>
</template>

<script>
export default {
  data() {
    return {
      isclose: false
  }
},
methods: {
  smalltoggle: function() {
    this.isclose = !this.close
  }
}
}
</script>

<style lang="css">
</style>
