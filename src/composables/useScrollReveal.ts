import { onMounted, onUnmounted} from "vue"

export function useScrollReveal(selector = " .fade-in"){
  let intersectionObserver: IntersectionObserver
  let mutationObserver: MutationObserver

  function ObserveNewElements(){
    document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
      if (!el.classList.contains("visible")){
        intersectionObserver.observe(el)
      }
    })
  }

  onMounted(() => {
    intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            intersectionObserver.unobserve(entry.target)
          }
        })
      },
      {threshold: 0.12},

    )

    ObserveNewElements()


    mutationObserver = new MutationObserver(() => ObserveNewElements())
    mutationObserver.observe(document.body, { childList: true, subtree: true})

  })

  onUnmounted(() => {
    intersectionObserver?.disconnect()
    mutationObserver?.disconnect()
  })

}

