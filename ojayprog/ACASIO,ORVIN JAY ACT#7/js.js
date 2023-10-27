document.getElementById('show-btn').addEventListener('click', function(){
    document.getElementById('skwer').style.display = 'block';
    document.getElementById('show-btn').disabled=true
    document.getElementById('hide-btn').disabled=false
})

document.getElementById('hide-btn').addEventListener('click', function(){
    document.getElementById('skwer').style.display = 'none';
    document.getElementById('show-btn').disabled=false
    document.getElementById('hide-btn').disabled=true
   
})

document.getElementById('left-btn').addEventListener('click', function(){
    document.getElementById('skwer').style.marginLeft="10px";
    
})
document.getElementById('right-btn').addEventListener('click', function(){
    document.getElementById('skwer').style.marginLeft="150px";
    
})