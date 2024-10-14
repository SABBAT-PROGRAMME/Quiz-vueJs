<!-- Template -->
<template>
  <label :for="id" :class="classes">
    <input
      :disabled="disabled"
      :id="id"
      type="radio"
      name="answer"
      :value="value"
      v-model="modelValue"
    />
    {{ value }}
  </label>
</template>

<!-- Script -->
<script setup>
import { computed, toRefs } from "vue";

const props = defineProps({
  id: String,
  disabled: Boolean,
  value: String,
  correcteAnswer: String,
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const modelValue = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const classes = computed(() => ({
  disabled: props.disabled,
  right: props.disabled && props.value === props.correcteAnswer,
  wrong:
    !props.disabled &&
    props.value !== props.correcteAnswer &&
    modelValue.value === props.value,
}));
</script>

<!-- Style -->
<style>
.disabled {
  opacity: 0.5;
}
.right {
  opacity: 1;
  color: green;
}
.wrong {
  opacity: 1;
  color: red;
}
</style>
