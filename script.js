//your JS code here. If required.
const button = document.getElementById('openModal')
const modal = document.querySelector('.modal')
const close = document.getElementById('close-button');

button.addEventListener('click',()=>{
	modal.style.display = 'flex'
	button.style.background = 'gray'
})
close.addEventListener('click',()=>{
	modal.style.display = 'none'
	button.style.background = 'none'
})
window.addEventListener('click',(event)=>{
	if(event.target === modal){
modal.style.display='none'
		button.style.background = 'none'
	}
})