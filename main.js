const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const modal = document.getElementById('modal');
modal.classList.add('hidden');

const likeGlyphs = document.querySelectorAll('.like-glyph');

likeGlyphs.forEach(glyph => {
  glyph.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        if (glyph.innerText === EMPTY_HEART) {
          glyph.innerText = FULL_HEART;
          glyph.classList.add('activated-heart');
        } else {
          glyph.innerText = EMPTY_HEART;
          glyph.classList.remove('activated-heart');
        }
      })
      .catch(error => {
        modal.classList.remove('hidden');
        modal.innerText = error;
        setTimeout(() => {
          modal.classList.add('hidden');
        }, 3000);
      });
  });
});





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
