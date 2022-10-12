window.onload = function(){
    const progress = document.getElementById('progress')
    const prev = document.getElementById('prev')
    const next = document.getElementById('next')
    const circles = document.querySelectorAll('.circle')

    let currenAcitve = 1
    next.onclick = function(){
        currenAcitve++
        if(currenAcitve > circles.length){
            currenAcitve = circles.length
        }
        update() 
    }
    prev.onclick = function(){
        currenAcitve--
        if(currenAcitve < 1){
            currenAcitve = 1
        }
        update() 

    }
    function update(){
        circles.forEach((circle,inx)=>{
            if(inx < currenAcitve){
                circle.classList.add('active')
            }else{
                circle.classList.remove('active')
            }
        })
        const active = document.querySelectorAll('.active')
        progress.style.width = (active.length -1) /(circles.length - 0.99) * 100 + '%'

        if(currenAcitve === 1) {
            prev.disabled = true
        } else if(currenAcitve === circles.length) {
            next.disabled = true
        } else {
            prev.disabled = false
            next.disabled = false
        }
    }
}
