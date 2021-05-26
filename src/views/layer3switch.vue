<template lang="html">
<div class="">
  <header-app></header-app>
  <div class="w3-content w3-margin-top" style="max-width:1600px">

  <div class="w3-row w3-padding w3-border">
    <div class="w3-col l8 s12">
      <div class="w3-container w3-white w3-margin w3-padding-large">
        <div class="w3-justify">
          <h1>How to configure layer 3 switch?</h1>
          <hr>
          <video width="100%" height="500" controls>
  <source src="../assets/l3-switch.mp4" type="video/mp4">
  <source src="../assets/l3-switch.mp4" type="video/ogg">
  Your browser does not support the video tag.
</video>
<p>Configuring a layer-3 switch is quite complicated at first. But once you understand the configuration of Virtual LAN then it gets really easy.</p>
<h2>Why did we use Layer-3 switch?</h2>
<p>Our client was facing slow data transmission speed mostly because of too many requests and traffic on the LAN. They had over one thousand systems connected with the Layer-2 switch and several networks. When a user sent a request to X network, the layer-2 switch broadcast the request on each network, this increased network traffic and eventually slowed down data transmission speed.</p>
<p>We recommended replacing layer-2 switches with layer-3 switches just to reduce network traffic. A Layer-3 switch determines for which network a request is to be sent and then broadcasts that request to that particular network. Unlike layer-2 switch which broadcast requests to all the networks.</p>
<h2>Configure layer-3 switch</h2>
<b>First, determine all the networks.</b>
<p>For a basic configuration switch, three interfaces are required. One is a switch's default route, the second is for data VLAN, and the third one for voice VLAN.</p>
<div class="w3-panel w3-leftbar w3-light-grey">
    <p><i>"Vlan is Virtual LAN. As the name suggests, it is used to connect to a system that is not on the same network. It allows the admin to group hosts together even if a host is not directly connected to the same network with switch."</i></p>
    <p>Here, we need three Virtual LANs(VLAN). The default route VLAN is nothing but the default route for the switch. Data VLAN is configured and will be used to carry only user-generated traffic for transmission. The Voice VLAN will be used to carry voice traffic from these IPs, it only accepts untagged traffic from the users.</p>
  </div>
  <p>

<ul>
  <li>First, go to <b>Monitor</b> --> <b>Switch</b> and then <b>"Distribution switch"</b> details page.</li>
  <li>Click on status and select Initialize layer 3</li>
    <li>Enter following settings:
      <ul>
        <li><b>Name:</b> Uplink</li>
        <li><b>Subnet:</b> 192.168.128.0/24</li>
        <li><b>Interface IP:</b> 192.168.128.1</li>
        <li><b>Interface IP:</b> 20</li>
        <li><b>Default Gateway:</b> 192.168.128.254</li>
      </ul>
    </li>
</ul>
  </p>
  <p>Next, configure layer-3 interfaces for voice and data Virtual LAN(VLANs)</p>
  <ul>
    <li>
      Click <b>Add an interface</b> from configure --> Layer 3 routing
    </li>
    <li>Select Distribution Switch</li>
    <li>Enter following data:</li>
    <ul>
      <li><b>Name:</b> Data</li>
      <li><b>Subnet:</b> 10.1.0.0/23</li>
      <li><b>Interface IP:</b> 10.1.1.254</li>
      <li><b>VLAN:</b> 5</li>
      <li><b>Client Addressing:</b> Relay DHCP to another server</li>
      <li><b>DHCP server IPs:</b> 192.168.128.254</li>
    </ul>
    <li>Click on save and add another</li>
    <li>Again, select Distribution switch (for the voice configuration)</li>
    <ul>
      <li><b>Name:</b> Voice</li>
      <li><b>Subnet:</b> 10.1.2.0/23</li>
      <li><b>Interface IP:</b> 10.1.3.254</li>
      <li><b>VLAN:</b> 10</li>
      <li><b>Client Addressing:</b> Relay DHCP to another server</li>
      <li><b>DHCP server IPs:</b> 192.168.128.254</li>
    </ul>
    <li>Click save</li>
  </ul>
  <h3>Configure switch ports for downstream:</h3>
  <p>The routed interfaces can allow the downstream access switch and all the connected clients by getting the access switch configured as trunk so that both, Data and Voice Vlans can transmit to other networks as well. You can do this by clicking on the configure option and then <b>switch ports</b>. Under the switch port, you can access switch, add a switch, and update by adding the following options:</p>
  <ul>
    <li><b>Type:</b> Trunk</li>
    <li><b>Native VLAN:</b> 1</li>
    <li><b>Allowed VLANs:</b> All</li>
  </ul>
  <div class="w3-panel w3-leftbar w3-light-grey">
      <p><i>"Here, an uplink port is used to connect to another router, switch or internet and it should be configured identically, otherwise you will get VLAN mismatch error. The access also needs to be configured properly in order to place client traffic to Voice and data VLANs. Here, in this article, we have shared how to configured the switch ports and how to change these ports."</i></p>
    </div>
    <h2>Firewall configuration</h2>
    <p>To provide full network connectivity, we need to perform a few additional distribution steps on the firewall. The firewall needs to be configured with static routes which you can find under <b>Configure --> Addressing and VLANs</b> so that any inbound traffic looking to reach voice or data VLANs can directly go through the routing interface of a switch. You can configure the routes by the below steps:</p>
    <ul>
      <li>For the data VLANs:</li>
      <ul>
        <li><b>Enabled: </b> Yes</li>
        <li><b>Name: </b> Data</li>
        <li><b>Subnet: </b> 10.1.0.0/23</li>
        <li><b>Next hop IP: </b> 192.168.128.1</li>
        <li><b>Active: </b> Always</li>
        <li><b>In VPN: </b> No</li>
      </ul>
    </ul><br>
    <ul>
      <li>For the voice VLANs:</li>
      <ul>
        <li><b>Enabled: </b> Yes</li>
        <li><b>Name: </b> Voice</li>
        <li><b>Subnet: </b> 10.1.2.0/23</li>
        <li><b>Next hop IP: </b> 192.168.128.1</li>
        <li><b>Active: </b> Always</li>
        <li><b>In VPN: </b> No</li>
      </ul>
    </ul>
    <p>A catalyst 4500 series switch supports IPX routing along with Apple routing. Below, we have shared the configuration of the logic layer-3 interface and updating/assigning a new IP address:</p>
    <ul>
      <li>
        Switch> <b>enable</b>
      </li>
      <li>
        Switch# <b>config term</b>
      </li>
      <li>
        Switch(config)# <b>vlan 2</b>
      </li>
      <li>
        Switch(config)# <b>interface vlan 2</b>
      </li>
      <li>
        Switch(config-if)# <b>ip address 10.1.1.1 255.255.255.248</b>
      </li>
      <li>
        Switch(config-if)# <b>no shutdown</b>
      </li>
      <li>
        Switch(config-if)# <b>end</b>
      </li>
    </ul>
    <p>Configure an IP address on Fast Ethernet Interface with this code:</p>
    <ul>
      <li>
        Switch# <b>configure terminal</b>
      </li>
      <li>
        Switch(config)# <b>ip routing</b>
      </li>
      <li>
        Switch(config)# <b>interface fastethernet 2/1</b>
      </li>
      <li>
        Switch(config-if)# <b>no switchport</b>
      </li>
      <li>
        Switch(config-if)# <b>ip address 10.1.1.1 255.255.255.248</b>
      </li>
      <li>
        Switch(config-if)# <b>no shutdown</b>
      </li>
      <li>Switch(config-if)# <b>end</b></li>
    </ul>
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
       title: 'Configure Layer-3 Switch',
       meta: [

         {name: 'viewport', content: 'width=device-width, initial-scale=1'},
         {name: 'description', content: 'Learn about configuring layer 3 switch.'},
         {property: 'og:type', content: 'article'},
         {property: 'og:image', content: 'https://lantechinfocom.co.in/img/network-image.28d6d687.jpg'},
         {property: 'og:title', content: 'Mother dairy plant, Ahmedabad - Cisco-catalyst 4500 series layer-3'}
       ],
       link: [
      {rel: 'canonical', href: 'https://lantechinfocom.co.in/configure-layer-3-switch/'}
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
