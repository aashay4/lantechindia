<template lang="html">
  <div id="contact" class="w3-container w3-light-grey" style="padding: 16px">
    <h3 class="w3-center">CONTACT</h3>
    <p class="w3-center w3-large">Lets get in touch. Send us a message:</p>
    <div style="margin-top:48px">
      <p><i class="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i> Ahmedabad, IN</p>
      <p><i class="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone: +91 9426527612</p>
      <p><i class="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email: aashay@lantechinfocom.co.in</p>
      <br>
        <p><input class="w3-input w3-border" v-model="networkmigra" type="text" placeholder="Name" required name="Name"></p>
        <p><input class="w3-input w3-border" v-model="email" type="text" placeholder="Email" required name="Email"></p>
        <p><input class="w3-input w3-border" v-model="question" type="text" placeholder="Subject" required name="Subject"></p>
        <p><input class="w3-input w3-border" v-model="phone" type="text" placeholder="Message" required name="Message"></p>
        <p>
          <button @click="industrial()" class="w3-button w3-black">
            <i class="fa fa-paper-plane"></i> SEND MESSAGE
          </button>
        </p>

      <!-- Image of location/map -->
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14687.892060568312!2d72.5715469!3d23.024763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x24502f086901e018!2sLantech%20Infocom!5e0!3m2!1sen!2sin!4v1577540870562!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>
  </div>
</template>

<script>
import { createNote }  from '../repository'

export default {
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

<style lang="css" scoped>
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
