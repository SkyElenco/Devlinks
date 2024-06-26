function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light") /*simplificado*/

  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */

  /* pegar a tag img */
  const img = document.querySelector("#profile img")

  /* substituir a imagem */
  if (html.classList.contains("light")) {
    /* se tiver light mode, adicionar a imagem light */
    img.setAttribute("src", "./assets/macaco-light.png")
    img.setAttribute("alt", "Usando 100%")
  } else {
    /* set estiver sem light mode, manter a imagem normal */
    img.setAttribute("src", "./assets/Avatar Pato.png")
    img.setAttribute("alt", "Pato tangerina o grande")
  }
}
