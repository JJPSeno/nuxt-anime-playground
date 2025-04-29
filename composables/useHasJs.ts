export const useHasJs = () => {
  const hasJs = ref(false)

  if (typeof window !== 'undefined') {
    hasJs.value = true
  }

  onMounted(() => {
    hasJs.value = true
  })

  return { hasJs }
}