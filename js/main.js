document.querySelector('button').addEventListener('click', getKanye, newImage)

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
  if (document.getElementById("img").src == "css/Images/New/kanyeAvatar.png") {
    document.getElementById("img2").src = "css/Images/New/kanyejawdrop.png"
  } else if (document.getElementById("img2").src = "css/Images/New/kanyejawdrop.png") {
    document.getElementById("img3").src = "css/Images/New/kanyephone.png"
  }
}

// testing
