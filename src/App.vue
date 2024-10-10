<!-- tamplate -->
<template>
  <div class="container">
    <div v-if="state === 'error'">
      <p>Imposible de charger le quiz.</p>
    </div>
    <div :aria-busy="state === 'loading'">
      <Quiz :quiz="quiz" v-if="quiz" />
    </div>
  </div>
</template>

<!-- Script -->
<script setup>
// import
import { onMounted, ref } from "vue";
import Quiz from "./components/Quiz.vue";

const quiz = ref(null);
const state = ref("loading");

onMounted(() => {
  fetch("/public/quiz.json")
    .then((r) => {
      if (r.ok) {
        return r.json();
      } else {
        throw new Error("Impossible de récupérer le json.");
      }
    })

    .then((data) => {
      quiz.value = data;
      state.value = "success";
    })
    .catch((e) => {
      state.value = "error";
    });
});
</script>

<!-- style -->
<style>
.container {
  margin-top: 2rem;
}
</style>
