<!-- Template -->
<template>
  <div class="question">
    <h2>{{ question.question }}</h2>
    <ul>
      <li v-for="(choice, index) in question.choices" :key="choice">
        <label :for="`answer-${index}`">
          <input
            id="index"
            type="radio"
            name="answer"
            :value="choice"
            v-model="answer"
          />
          {{ choice }}
        </label>
      </li>
    </ul>
    <button :disabled="!hasAnswer" @click="emit('answer', answer)">
      Question suivante
    </button>
  </div>
</template>

<!-- Script -->
<script setup>
// import
import { ref, computed, watch } from "vue";

// props
const props = defineProps({
  question: Object,
});

// events
const emit = defineEmits(["answer"]);
const answer = ref(null);
const hasAnswer = computed(() => answer.value !== null);
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
