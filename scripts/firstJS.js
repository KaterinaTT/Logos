window.onload = function(){
    
    document.getElementById('firstPage_ok').onclick = function(){
        var a = document.as.niknik.value;
        localStorage.setItem('compName',a);
        location.replace("choose.html");}

    
    document.getElementById('mySelect').onclick = function(){
        var sel =document.getElementById('mySelect').selectedIndex;
        var options=document.getElementById('mySelect').options;
        var selec = options[sel].text;
        localStorage.setItem('compDirection',selec);}
    
        document.getElementById('mySelect2').onclick = function(){
        var sel2 =document.getElementById('mySelect2').selectedIndex;
        var options2=document.getElementById('mySelect2').options;
        var selec2 = options2[sel2].text;
        localStorage.setItem('compCountry',selec2);}
        
            document.getElementById('mySelect3').onclick = function(){
        var sel3 =document.getElementById('mySelect3').selectedIndex;
        var options3=document.getElementById('mySelect3').options;
        var selec3 = options3[sel3].text;
        localStorage.setItem('compAngle',selec3);}
     

            
    
     

}












