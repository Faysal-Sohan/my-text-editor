document.getElementById('make-bold').addEventListener('click', function(){
    const classes = document.getElementById('text').classList;
    if(!classes.contains('font-bold')){
        document.getElementById('text').classList.add('font-bold');
        document.getElementById('make-bold').classList.add('bg-lime-100');
    }
    else{
        document.getElementById('text').classList.remove('font-bold');
        document.getElementById('make-bold').classList.remove('bg-lime-100');
    }
})

document.getElementById('make-italic').addEventListener('click',function(){
    const classes = document.getElementById('text').classList;
    if(!classes.contains('italic')){
        document.getElementById('text').classList.add('italic');
        document.getElementById('make-italic').classList.add('bg-lime-100');
    }
    else{
        document.getElementById('text').classList.remove('italic');
        document.getElementById('make-italic').classList.remove('bg-lime-100');
    }
})

document.getElementById('make-underline').addEventListener('click',function(){
    const classes = document.getElementById('text').classList;
    if(!classes.contains('underline')){
        document.getElementById('text').classList.add('underline');
        document.getElementById('make-underline').classList.add('bg-lime-100');
    }
    else{
        document.getElementById('text').classList.remove('underline');
        document.getElementById('make-underline').classList.remove('bg-lime-100');
    }
})