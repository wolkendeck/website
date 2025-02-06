<template>
  <a-button class="refraction-button" v-bind="$attrs">
    <slot></slot>
  </a-button>
</template>

<script>
export default {
  name: 'RefractionButton'
}
</script>

<style scoped>
.refraction-button {
  background: #4A90E2; /* Base blue color matching the hero background */
  border: none;
  color: #fff;
  transition: background 0.3s ease;
}

.refraction-button:hover {
  background: #357ABD; /* Darker blue on hover */
}
</style> 