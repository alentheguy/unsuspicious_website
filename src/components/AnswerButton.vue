<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <button class="answer">
    {{ text }}
  </button>
</template>
