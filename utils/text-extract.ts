export default function textExtract(text: string, customClass: string = ''): HTMLElement[] {
  return text.split('').map(char => {
    const span = document.createElement('span')
    span.innerHTML = char === ' ' ? '&nbsp;' : char
    span.style.display = 'inline-block'
    span.className = customClass
    return span
  })
}