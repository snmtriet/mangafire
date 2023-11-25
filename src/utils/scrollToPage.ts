export default function scrollToPage(pageIndex: number) {
  const image = document.getElementById(`page-${pageIndex}`)
  if (!image) return
  image?.scrollIntoView({
    behavior: 'auto',
    block: 'start',
  })
}
