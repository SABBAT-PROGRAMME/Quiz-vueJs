<!-- Template -->
<template>
  <div class="question">
    <h2>{{ question.question }}</h2>
    <ul>
      <li v-for="(choice, index) in randomChoice" :key="choice">
        <Answer
          :id="`answer-${index}`"
          :value="choice"
          :disabled="hasAnswer"
          @change="onAnswer"
          :modelValue="answer"
          :correcteAnswer="question.correct_answer"
        />
      </li>
    </ul>
    <!-- <button :disabled="!hasAnswer" @click="emit('answer', answer)">
      Question suivante
    </button> -->
  </div>
</template>

<!-- Script -->
<script setup>
// import
import { shuffleArray } from "@/function/array";
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import Answer from "./Answer.vue";

// props
const props = defineProps({
  question: Object,
});

// events
const emit = defineEmits(["answer"]);
const answer = ref(null);
const hasAnswer = computed(() => answer.value !== null);
const randomChoice = computed(() => shuffleArray(props.question.choices));

let timer;
const onAnswer = (e) => {
  answer.value = e.currentTarget.value;
  clearTimeout(timer);
  timer = setTimeout(() => {
    emit("answer", answer.value);
  });
};

//

onMounted(() => {
  timer = setTimeout(() => {
    emit("answer", answer.value);
  }, 3000);
});

onUnmounted(() => {
  clearTimeout(timer);
});
</script>

<!-- Style -->
<style>
.question {
  padding-top: 2rem;
}
.question button {
  margin-left: auto;
  display: block;
}
</style>
