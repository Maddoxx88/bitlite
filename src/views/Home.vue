<template>
  <div class="home">
    <h2 class="font-weight-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
    <router-link to="/demo"><button class="btn btn-primary m-2 btn-lg">See the Demo</button></router-link>
    <router-link to="/free-trial"><button class="btn btn-outline-primary m-2 btn-lg">Free Trial</button></router-link>
    <DetectedSpeed />
  </div>
</template>

<script>
// @ is an alias to /src
import DetectedSpeed from './DetectedSpeed.vue';

export default {
  name: 'Home',
  components: {
    DetectedSpeed
  }
};
</script>
