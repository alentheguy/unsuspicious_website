<script setup lang="ts">
import type { Question } from '../data/questions'

defineProps<{
  question: Question
}>()

const emit = defineEmits<{
  (e: 'select', next: number | null): void
}>()
</script>

<template>
  <div class="question">
    <h1 :key="question.id" class="question-text">
      {{ question.text }}
    </h1>

    <img v-if="question.image" :src="question.image" alt="" class="question-image" />

    <button
      class="pink"
      v-for="(choice, index) in question.choices"
      :disabled="choice.disabled"
      :key="index"
      @click="emit('select', choice.next)"
    >
      {{ choice.text }}
    </button>
  </div>
</template>
