const inputContainer = document.querySelector('input')
const bodyElement = document.documentElement

const lightTheme = {
    '--background-color': '#FFFFFF',
    '--section-color':  'rgba(216, 182, 250, 0.1)',
    '--card-background-color': 'rgba(255, 255, 255, 0.5)',
    '--card-linear-gradient': 'linear-gradient(180deg, #D9D9D9 0%, #FFA9DC 0.01%, #FAF3B6 50.83%, #B46EFB 95.62%)',
    '--text-color': '#000',
    '--title-color-second': '#fff',
    '--title-color': '#F925A2',
    '--subtitle-color': '#9B3EF8',
    '--button-color': '#FFA9DC',
    '--icon-theme': 'url("../assets/light.svg");',
    '--bubbles-background': 'url("../assets/bubbles.svg")',
    '--toggle-icon': 'url("../assets/light.svg")',
    '--floating-menu': '#fff',
    '--hover-floating': '#F925A2',
    '--border-floating': '1px solid #FFA9DC',
    '--bg-avatar': 'url("../assets/border.svg")',
    '--footer-background': 'rgba(255, 253, 243, 0.3)',
    '--text-footer': '#FFC700'
}

const darkTheme = {
        '--background-color': '#07091B',
        '--card-background-color': 'rgba(25, 19, 43, 0.7)',
        '--card-linear-gradient': 'linear-gradient(135.93deg, rgba(255, 48, 128, 0.5) 5.92%, rgba(65, 72, 251, 0.5) 90.08%)',
        '--section-color': 'rgba(70, 71, 85, 0.2)',
        '--text-color': '#fff',
        '--title-color': '#9B3EF8',
        '--linear-color': 'linear-gradient(90deg, #9B3EF8 22.35%, #F925A2 82.75%)',
        '--line-color': '#A750DB',
        '--bubbles-background': 'url("../assets/bubbles_dark.svg")',
        '--button-color': '#7E24AB',
        '--icon-theme': 'url("../assets/dark.svg")',
        '--toggle-icon': 'url("../assets/dark.svg")',
        '--floating-menu': '#07091B',
        '--hover-floating': '#7E24AB',
        '--border-floating': '1px solid #7E24AB',
        '--bg-avatar': 'url("../assets/borderDark.svg")',
        '--footer-background': 'rgba(75, 0, 150, 0.1)',
        '--text-footer': '#fff'
}

inputContainer.addEventListener('change', function() {
    const isChecked = inputContainer.checked
    if (isChecked) {
        changeTheme(darkTheme)
    } else {
        changeTheme(lightTheme)
    }
})

function changeTheme(theme) {
   for (let prop in theme) {
    changeProperty(prop, theme[prop])
   }
   console.log(theme)
}

function changeProperty(property, value) {
    bodyElement.style.setProperty(property, value)
}