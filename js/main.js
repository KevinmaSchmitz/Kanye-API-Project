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

function newImage() {
  (document.getElementById("img1").src = "css/Images/New/kanyejawdrop.png")
}
document.querySelector('button').addEventListener('click', newImage)

