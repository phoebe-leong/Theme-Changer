let introduction
let currentThemeID = -1

// Format : ["TITLE", BACKGROUND_COLOUR, TEXT_COLOUR]
const themes = [
	["Dark", "#202124", "white"],
	["Darker", "#141414", "white"],
	["Light", "white", "#141414"],
	["Pink", "#ffc0cb", "#bd7d88"]
]

window.onload = () => {
	introduction = document.getElementById("introduction")
}

window.onclick = () => {
	var html = document.querySelector("html")

	if (introduction != null) {
		introduction.remove()

		document.getElementById("themeTitle").style.visibility = "visible"
	}

	currentThemeID++

	if (currentThemeID == themes.length) {
		currentThemeID = 0
	}

	html.style.background = themes[currentThemeID][1]
	html.style.color = themes[currentThemeID][2]

	document.getElementById("themeTitle").innerHTML = `${themes[currentThemeID][0]} Theme`
}