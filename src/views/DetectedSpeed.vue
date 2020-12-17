<template>
  <detected-speed @network-speed="handleNetworkSpeed"> 
    <span slot="unknown">
      Unable to identify your network type.
    </span>
    <span slot="slow">
      You got slow internet
    </span>
    <span slot="fast">
      You got fast internet
     <h3> {{ speed }} Mbps</h3>
    </span>
  </detected-speed>
</template>

<script>
import DetectedSpeed from 'vue-identify-network';

export default {
  components: {
    DetectedSpeed,
  },
  data() {
      return {
          speed: ''
      }
  },
  methods: {
    handleNetworkSpeed(speed) {
        this.speed = speed
    }
  }
}
</script>