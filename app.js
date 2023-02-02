const bodyBtn = document.querySelector('#bodyBtn')
const eyebrowsBtn = document.querySelector('#eyebrowsBtn')
const eyesBtn = document.querySelector('#eyesBtn')
const mouthBtn = document.querySelector('#mouthBtn')
const teethBtn = document.querySelector('#teethBtn')
const changeAllBtn = document.querySelector('#changeAllBtn')

// Object of color arrays
const colors = {
    body: ['#48dbaf', '#d051d6', '#c8e04f', 'cornflowerblue', '#cf1d38' ],
    eyebrows: ['#cf611d', '#000', '#5c5b5a', '#96d6d5', '#500454' ],
    eyes: ['#3630ab', '#28c969', '#b84d4f', '#000', '#fff'],
    mouth: ['#000', '#df79e0', '#ff0522', '#ebaa3b', '#dee37b'],
    teeth: ['#fff', '#d3f516', '#9564f5', '#49b3a6', '#63237a']
}

// Add event listener to change body button
bodyBtn.addEventListener('click', () => {
    // Grab monster from DOM
    const monster = document.querySelector('.monster')

    // Set monster background to a random color in the colors object body array
    monster.style.background = colors.body[Math.floor(Math.random() * colors.body.length)]
})

// Add event listener to the eyebrowsBtn
eyebrowsBtn.addEventListener('click', () => {
    // Grab both eyebrows from the DOM
    const eyebrowLeft = document.querySelector('.eyebrow1');
    const eyebrowRight = document.querySelector('.eyebrow2')

    // Grab a random color from the colors object eyebrows aray
    let eyebrowColor = colors.eyebrows[Math.floor(Math.random() * colors.eyebrows.length)]

    // Set background color of eyebrows
    eyebrowLeft.style.backgroundColor = eyebrowColor
    eyebrowRight.style.backgroundColor = eyebrowColor
})

eyesBtn.addEventListener('click', () => {
    // Grab the eyes from the dom
    const eyes = document.querySelectorAll('.eye')

    // Get a random eye color
    let eyesColor = colors.eyes[Math.floor(Math.random() * colors.eyes.length)]

    // Loop through each eye and set the background
    eyes.forEach(eye => {
        eye.style.background = eyesColor
    })
})

mouthBtn.addEventListener('click', () => {
    // Grab the mouth from the DOM
    const mouth = document.querySelector('.mouth')

    // Seth the background to a random color
    mouth.style.background = colors.mouth[Math.floor(Math.random() * colors.mouth.length)]
})

// Add event listener to the eyebrowsBtn
teethBtn.addEventListener('click', () => {
    // Grab both eyebrows from the DOM
    const toothLeft = document.querySelector('.tooth1');
    const toothRight = document.querySelector('.tooth2')

    // Grab a random color from the colors object eyebrows aray
    let toothColor = colors.teeth[Math.floor(Math.random() * colors.teeth.length)]

    // Set background color of eyebrows
    toothLeft.style.borderTop = `40px solid ${toothColor}`
    toothRight.style.borderTop = `40px solid ${toothColor}`
})

changeAllBtn.addEventListener('click', () => {
    // Grab monster from DOM
    const monster = document.querySelector('.monster')
     // Grab both eyebrows from the DOM
     const eyebrowLeft = document.querySelector('.eyebrow1');
     const eyebrowRight = document.querySelector('.eyebrow2')
     // Grab the eyes from the dom
    const eyes = document.querySelectorAll('.eye')
    // Grab the mouth from the DOM
    const mouth = document.querySelector('.mouth')
    // Grab both eyebrows from the DOM
    const toothLeft = document.querySelector('.tooth1');
    const toothRight = document.querySelector('.tooth2')

    // Set monster background to a random color in the colors object body array
    monster.style.background = colors.body[Math.floor(Math.random() * colors.body.length)]

    // Grab a random color from the colors object eyebrows aray
    let eyebrowColor = colors.eyebrows[Math.floor(Math.random() * colors.eyebrows.length)]

    // Set background color of eyebrows
    eyebrowLeft.style.backgroundColor = eyebrowColor
    eyebrowRight.style.backgroundColor = eyebrowColor

    // Get a random eye color
    let eyesColor = colors.eyes[Math.floor(Math.random() * colors.eyes.length)]

    // Loop through each eye and set the background
    eyes.forEach(eye => {
        eye.style.background = eyesColor
    })

    // Seth the background to a random color
    mouth.style.background = colors.mouth[Math.floor(Math.random() * colors.mouth.length)]

     // Grab a random color from the colors object eyebrows aray
     let toothColor = colors.teeth[Math.floor(Math.random() * colors.teeth.length)]

     // Set background color of eyebrows
     toothLeft.style.borderTop = `40px solid ${toothColor}`
     toothRight.style.borderTop = `40px solid ${toothColor}`
    
})









