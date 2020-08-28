function changecollor(e){
  const key = document.querySelector(`.box_basic[data-key="${e.keyCode}"]`);
  if(!key) return;
  key.classList.add('hit');
}
function removeTransition(e){
  if(e.propertyName !== 'transform') return;
  this.classList.remove(`hit`)
}
const keys = document.querySelectorAll(`.box_basic`);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', changecollor)