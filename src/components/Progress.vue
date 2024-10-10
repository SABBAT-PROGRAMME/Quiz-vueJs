<!-- Tamplate -->
<template>
  <div>Etape {{ value + 1 }} / {{ max + 1 }}</div>
</template>

<!-- Script -->
<script setup>
// props
defineProps({
  value: Number,
  max: Number,
});
</script>
