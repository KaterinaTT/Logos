window.onload = function(){
    
     var fc = document.getElementById("fontClass");
        fc.innerHTML= localStorage.getItem('compName');
     document.getElementById('fontClass').style.fontFamily = localStorage.getItem('textFont');
    document.getElementById('fontClass').style.color = localStorage.getItem('textColor');
     document.getElementById('fontClass').style.fontSize = localStorage.getItem('textSize');
    document.getElementById('fontClass').style.transform = 'skew('+ localStorage.getItem('textRotate') + 'deg)' ;
    document.getElementById('doneAll').style.background = localStorage.getItem('textColorBack');
     document.getElementById('doneAll').style.borderRadius = localStorage.getItem('backRadius');
    
    
     var ec = document.getElementById("editClass");
    
    
    var i;
   
    for(i=0; i<17; i++){
        if(localStorage.getItem('checkedImg') == i){ 
            ec.innerHTML="<img src='images/"+i+"IT.png'>";
        }}
    for(i=17; i<33; i++){
        if(localStorage.getItem('checkedImg') == i){ 
            ec.innerHTML="<img src='images/"+i+"Medicine.png'>";
        }}
    for(i=33; i<49; i++){
        if(localStorage.getItem('checkedImg') == i){ 
            ec.innerHTML="<img src='images/"+i+"Zoo.png'>";
        }}
    for(i=49; i<65; i++){
        if(localStorage.getItem('checkedImg') == i){ 
            ec.innerHTML="<img src='images/"+i+"Education.png'>";
        }}
    
    
   }
    
    
    
   
         