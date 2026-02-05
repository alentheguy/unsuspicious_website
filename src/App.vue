<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { questions } from './data/questions'
import QuestionView from './components/QuestionView.vue'

const currentStep = ref(0)

const skipFade = ref(false)

const router = useRouter()

onMounted(() => {
  const saved = localStorage.getItem('currentQuestion')
  if (saved !== null) {
    currentStep.value = Number(saved)
    skipFade.value = true
  }
  router.replace('/')
})

watch(currentStep, (newVal) => {
  if (newVal == 17) {
    localStorage.setItem('currentQuestion', '13')
  } else {
    localStorage.setItem('currentQuestion', newVal.toString())
  }
})

const currentQuestion = computed(() => questions.find((q) => q.id === currentStep.value))

function goToNext(next: number | null) {
  if (next !== null) {
    currentStep.value = next
  }
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

      <router-view v-else />
    </Transition>
  </main>
</template>

<style scoped></style>
