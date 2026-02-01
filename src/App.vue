<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { questions } from './data/questions'
import QuestionView from './components/QuestionView.vue'

const currentStep = ref(0)

const skipFade = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('currentQuestion')
  if (saved !== null) {
    currentStep.value = Number(saved)
    skipFade.value = true
  }
})

watch(currentStep, (newVal) => {
  localStorage.setItem('currentQuestion', newVal.toString())
})

const currentQuestion = computed(() => questions.find((q) => q.id === currentStep.value))

function goToNext(next: number | null) {
  if (next !== null) {
    currentStep.value = next
  }
}

function reset() {
  localStorage.removeItem('currentQuestion')
  currentStep.value = 0
}
</script>

<template>
  <main class="app">
    <Transition name="fade" mode="out-in" :appear="!skipFade">
      <QuestionView
        v-if="currentQuestion"
        :key="currentQuestion.id"
        :question="currentQuestion"
        @select="goToNext"
      />

      <div v-else class="final">💖 You made me the happiest person alive 💖</div>
    </Transition>
  </main>
  <div style="width: 100%; position: fixed; bottom: 10vh; text-align: center">
    <button class="pink" @click="reset">Start Over</button>
  </div>
</template>

<style scoped></style>
