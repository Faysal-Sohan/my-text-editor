
function textAction(actionId,className){
    const classes = document.getElementById('text').classList;
    if(!classes.contains(className)){
        document.getElementById('text').classList.add(className);
        document.getElementById(actionId).classList.add('bg-lime-100');
    }
    else{
        document.getElementById('text').classList.remove(className);
        document.getElementById(actionId).classList.remove('bg-lime-100');
    }
}



document.getElementById('make-bold').addEventListener('click', function(){
    textAction('make-bold','font-bold');
})
document.getElementById('make-italic').addEventListener('click', function(){
    textAction('make-italic','italic');
})
document.getElementById('make-underline').addEventListener('click', function(){
    textAction('make-underline','underline');
})

document.getElementById('make-left').addEventListener('click',function(){
    textAction('make-left','text-left');
})
document.getElementById('make-center').addEventListener('click',function(){
    textAction('make-center','text-center');
})
document.getElementById('make-right').addEventListener('click',function(){
    textAction('make-right','text-right');
})
document.getElementById('make-justify').addEventListener('click',function(){
    textAction('make-justify','text-justify');
})

document.getElementById('font-size').addEventListener('click',function(){
    const fontValue = document.getElementById('font-size').value;
    document.getElementById('text').style.fontSize = fontValue+'px';
})

document.getElementById('font-color').addEventListener('click',function(){
    const fontColor = document.getElementById('font-color').value;
    document.getElementById('text').style.color = fontColor;
})