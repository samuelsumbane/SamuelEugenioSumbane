let savedMode = localStorage.getItem("darkmode")

function setDarkMode() {
  document.body.classList.add("darkmode")
  localStorage.setItem("darkmode", "active")
}

function removeDarkMode() {
  document.body.classList.remove("darkmode")
  localStorage.setItem("darkmode", null)
}

if (savedMode === "active") setDarkMode()

document.getElementById("switch-theme").addEventListener("click", () => {
  savedMode = localStorage.getItem("darkmode")
  savedMode !== "active" ? setDarkMode() : removeDarkMode()
})
