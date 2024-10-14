export function shuffleArray(array) {
  const arr = [...array];
  return arr
    .map((item) => ({ value: item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((item) => item.value);
}
