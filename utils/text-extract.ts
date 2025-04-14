export default function (target: Ref<HTMLElement | null>) {
  const element = target.value
  if (!element){
    return []
  }

  const text = element.textContent ?? ''
  element.textContent = ''
  
  text.split('').forEach(char => {
    const span = document.createElement('span')
    span.innerHTML = char === ' ' ? '&nbsp;' : char
    element.appendChild(span)
  })

  return element.querySelectorAll('span')
}