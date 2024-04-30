var txtanimado = document.getElementById('txtanimado');
var typewriter = new Typewriter(txtanimado, { loop: true });
typewriter.typeString('PROGRAMADOR FRONT-END')
    .pauseFor(2500)
    .deleteAll()
    .typeString('DESIGNER')
    .pauseFor(2500)
    .deleteAll()
    .typeString('EDITOR DE VIDEO')
    .pauseFor(2500)
    .deleteAll()
    .start();
    
 const mode = document.getElementById("mode_icon");

mode.addEventListener('click', () => {
  if(mode.classList.contains('fa-moon')){
    mode.classList.remove('fa-moon');
    mode.classList.add('fa-sun');
    return;
  }

  mode.classList.add('fa-moon');
  mode.classList.remove('fa-sun');
});

document.getElementById('mode_icon').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});