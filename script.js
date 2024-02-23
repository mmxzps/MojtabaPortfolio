
const para = document.getElementById("collab")
para.addEventListener('click', ()=>{
  alert('Lets collaborte!')
})

const moj = document.getElementById("mojtaba")
moj.addEventListener('click', ()=>{
  alert('Lets collaborte!')
})

const jsConfetti = new JSConfetti()
let pressKey = '';
window.addEventListener('keypress', (e)=> {
  pressKey += e.key;
  pressKey = pressKey.slice(-5);
  if(pressKey ==='magic'){

    jsConfetti.addConfetti({
      confettiRadius: 2,
      confettiNumber: 1500
    })
    .then(()=> jsConfetti.addConfetti({
      confettiColors: [
        '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
      ],
      confettiRadius: 2,
      confettiNumber: 1500
    }));

  }

})