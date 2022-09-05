const panels = document.querySelectorAll('.panel')
console.log(panels)


panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        fechaPanel();
        panel.classList.add('active')
    })
})

function fechaPanel(){
    panels.forEach((panel) =>{
        panel.classList.remove('active');
    })
}
