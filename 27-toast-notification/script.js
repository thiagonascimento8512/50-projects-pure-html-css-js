const button = document.getElementById('button')
const toastas = document.getElementById('toasts')

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four'
]

const types = ['info', 'successs', 'error', 'alert']

button.addEventListener('click', () => createNotification('This is invalid data'))


function createNotification(message = null, type = null) {
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(type ? type : getRandomType())

  notif.innerText = message ? message : getRandomMessage()

  toastas.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 3000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)]
}