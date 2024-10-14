<!-- Tamplate -->
<template>
  <h1>Recap</h1>
  <p>{{ hasWon ? quiz.success_message : quiz.failure_message }}</p>
  <p>{{ score }} / {{ quiz.questions.length }}</p>
</template>

<!-- Script -->
<script setup>
import { computed } from "vue";
import Quiz from "./Quiz.vue";

const props = defineProps({
  quiz: Object,
  answers: Array,
});

const score = computed(() => {
  return props.quiz.questions.reduce((acc, question, ke) => {
    if (question.correct_answer === props.answers[ke]) {
      return acc + 1;
    }
    return acc;
  }, 0);
});

const hasWon = computed(() => {
  return score.value >= props.quiz.minimum_score;
});
</script>
