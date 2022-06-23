document.querySelector('button').addEventListener('click', getKanye)

function getKanye() {
  fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = data.quote
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}



let imageArr = ['css/Images/New/kanyeAvatar.png', 'css/Images/New/kanyejawdrop.png', 'css/Images/New/kanyephone.png', 'css/Images/New/kanyeserious.png', 'css/Images/New/KanyeTeeth.png']

let counter = 0
function newImages() {
  counter += 1
  if (counter >= imageArr.length) {
    counter = 0
  }
  document.getElementById('img1').src = imageArr[counter]
}
document.querySelector('button').addEventListener('click', newImages)
