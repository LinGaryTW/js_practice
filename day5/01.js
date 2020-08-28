const panels = document.querySelectorAll('.panel')
function toggleOpne() {
  this.classList.toggle('open')
}
function toggleActive(e) {
  if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  }
}
panels.forEach(panel => panel.addEventListener('click', toggleOpne));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));