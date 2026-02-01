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
    <!-- <Transition name="fade" appear> -->
    <h1 :key="question.id" class="question-text">
      {{ question.text }}
    </h1>
    <!-- </Transition>

    <TransitionGroup name="fade-answers" tag="div" class="choices"> -->
    <button
      class="pink"
      v-for="(choice, index) in question.choices"
      :disabled="choice.disabled"
      :key="index"
      @click="emit('select', choice.next)"
    >
      {{ choice.text }}
    </button>
    <!-- </TransitionGroup> -->
  </div>
</template>
