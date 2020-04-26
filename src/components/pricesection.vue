<template lang="html">
  <div class="w3-container w3-center w3-dark-grey" style="padding:128px 16px" id="oservices">
    <h3>Services Other Than Computer Networking</h3>
    <p class="w3-large">Have a look at our services.</p>
    <div class="w3-row-padding" style="margin-top:64px">
      <div class="w3-third w3-section">
        <ul class="w3-ul w3-white w3-hover-shadow">
          <li class="w3-black w3-xlarge w3-padding-32">SEO Services</li>
          <li class="w3-padding-16"><b>Local SEO</b></li>
          <li class="w3-padding-16"><b>Ecommerce SEO</b></li>
          <li class="w3-padding-16"><b>Javascript SEO</b></li>
          <li class="w3-padding-16"><b>White Label SEO</b></li>
          <li class="w3-padding-16">
            <h2 class="w3-wide">$12</h2>
            <span class="w3-opacity">per hour</span>
          </li>
          <li class="w3-light-grey w3-padding-24">
            <router-link to="/seo-services/">
            <button class="w3-button w3-black w3-padding-large">Know More</button></router-link>
          </li>
        </ul>
      </div>
      <div class="w3-third">
        <ul class="w3-ul w3-white w3-hover-shadow">
          <li class="w3-red w3-xlarge w3-padding-48">Web Development Services</li>
          <li class="w3-padding-16" style="color: red;"><b>Node.js Development</b></li>
          <li class="w3-padding-16" style="color: red;"><b>Vue.js Development</b></li>
          <li class="w3-padding-16" style="color: red;"><b>React.js Development</b></li>
          <li class="w3-padding-16" style="color: red;"><b>Angular Development</b></li>
          <li class="w3-padding-16">
            <h2 class="w3-wide">$20</h2>
            <span class="w3-opacity">per hour</span>
          </li>
          <li class="w3-light-grey w3-padding-24">
            <router-link to="/web-development-services/">
            <button class="w3-button w3-black w3-padding-large w3-hover-red">Know More</button></router-link>
          </li>
        </ul>
      </div>
      <div class="w3-third w3-section">
        <ul class="w3-ul w3-white w3-hover-shadow">
          <li class="w3-black w3-xlarge w3-padding-32">Mobile App Development</li>
          <li class="w3-padding-16"><b>Ionic Development</b></li>
          <li class="w3-padding-16"><b>Phonegap Development</b></li>
          <li class="w3-padding-16"><b>React-Native Development</b></li>
          <li class="w3-padding-16"><b>Vue Native Development</b></li>
          <li class="w3-padding-16">
            <h2 class="w3-wide">$16</h2>
            <span class="w3-opacity">per hour</span>
          </li>
          <li class="w3-light-grey w3-padding-24">
            <router-link to="/mobile-app-development-services/">
            <button class="w3-button w3-black w3-padding-large">Know More</button></router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
