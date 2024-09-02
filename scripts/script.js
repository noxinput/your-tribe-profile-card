const expandButton = document.querySelector('header button') // hiermee zorg je ervor dat je expandbutton kan noemen, hier selecteert hij de button in de header
expandButton.addEventListener('click', expand) // Hier zorg je ervoor dat de button "luistert" naar een click waardoor de functie expand uitgevoerd wordt

function expand () {
  document.body.classList.toggle('expand') // Hier wordt de class expand getoggled op de body, waardoor deze een andere styling krijgt
}
