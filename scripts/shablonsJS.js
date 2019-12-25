window.onload = function(){
    
    if(localStorage.getItem('compDirection')==null || localStorage.getItem('compDirection')=="" ){
        
        var i;
        for(i=0; i<4; i++){
        document.getElementsByClassName('tab')[i].style.display = 'block';}}
       
     
    if(localStorage.getItem('compDirection')=="IT"){
         
                 if(localStorage.getItem('compCountry')=="" || localStorage.getItem('compCountry')==null){
                     
                     if(localStorage.getItem('compAngle')=="Pointed") {
                        document.getElementById('IT1').style.display = 'block';}
                     
                     if(localStorage.getItem('compAngle')=="Rounded") {
                          document.getElementById('IT2').style.display = 'block'; }
                     
                      if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                          document.getElementById('IT').style.display = 'block';   
                     }
                    
                 }
                     if(localStorage.getItem('compCountry')=="Belarus"){
                     
                     if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                        document.getElementById('IT3').style.display = 'block';     }
                      if(localStorage.getItem('compAngle')=="Pointed"){
                          document.getElementById('IT4').style.display = 'block';               
            }if(localStorage.getItem('compAngle')=="Rounded"){
                         document.getElementById('IT5').style.display = 'block';             
            }}
             
             if(localStorage.getItem('compCountry')=="Russia"){
                 
                  if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                  document.getElementById('IT6').style.display = 'block';   
                     }
                 
                 
                      if(localStorage.getItem('compAngle')=="Pointed"){
                         
                   document.getElementById('IT7').style.display = 'block';             
            }
                 
                 
                      if(localStorage.getItem('compAngle')=="Rounded"){
                         
                    document.getElementById('IT8').style.display = 'block';               
            }}
             
              if(localStorage.getItem('compCountry')=="Ukraine"){
                  
                   if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                       document.getElementById('IT9').style.display = 'block';    
                     }
                  
                  
                      if(localStorage.getItem('compAngle')=="Pointed"){
                       document.getElementById('IT10').style.display = 'block';              
            }
                   
                      if(localStorage.getItem('compAngle')=="Rounded"){
                         document.getElementById('IT11').style.display = 'block';               
            }}
             
              if(localStorage.getItem('compCountry')=="America"){
                    
                          
                           if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                         document.getElementById('IT12').style.display = 'block';    
                     }
                          
                         
                      if(localStorage.getItem('compAngle')=="Pointed"){
                           document.getElementById('IT13').style.display = 'block';               
            }
                 
                      if(localStorage.getItem('compAngle')=="Rounded"){
                        document.getElementById('IT14').style.display = 'block';              
            }
             
             
             }
    }
        
     
    if(localStorage.getItem('compDirection')=="Medicine"){
        
        
         
                 if(localStorage.getItem('compCountry')=="" || localStorage.getItem('compCountry')==null){
                     
                     if(localStorage.getItem('compAngle')=="Pointed") {
                        document.getElementById('1Medicine').style.display = 'block';}
                     
                     if(localStorage.getItem('compAngle')=="Rounded") {
                          document.getElementById('2Medicine').style.display = 'block'; }
                     
                      if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                          document.getElementById('Medicine').style.display = 'block';   
                     }
                    
                 }
                     if(localStorage.getItem('compCountry')=="Belarus"){
                     
                     if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                        document.getElementById('3Medicine').style.display = 'block';     }
                      if(localStorage.getItem('compAngle')=="Pointed"){
                          document.getElementById('4Medicine').style.display = 'block';               
            }if(localStorage.getItem('compAngle')=="Rounded"){
                         document.getElementById('5Medicine').style.display = 'block';             
            }}
             
             if(localStorage.getItem('compCountry')=="Russia"){
                 
                  if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                  document.getElementById('6Medicine').style.display = 'block';   
                     }
                 
                 
                      if(localStorage.getItem('compAngle')=="Pointed"){
                         
                   document.getElementById('7Medicine').style.display = 'block';             
            }
                 
                 
                      if(localStorage.getItem('compAngle')=="Rounded"){
                         
                    document.getElementById('8Medicine').style.display = 'block';               
            }}
             
              if(localStorage.getItem('compCountry')=="Ukraine"){
                  
                   if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                       document.getElementById('9Medicine').style.display = 'block';    
                     }
                  
                  
                      if(localStorage.getItem('compAngle')=="Pointed"){
                       document.getElementById('10Medicine').style.display = 'block';              
            }
                   
                      if(localStorage.getItem('compAngle')=="Rounded"){
                         document.getElementById('11Medicine').style.display = 'block';               
            }}
             
              if(localStorage.getItem('compCountry')=="America"){
                      if(localStorage.getItem('compAngle')=="Pointed"){
                          
                           if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                         document.getElementById('12Medicine').style.display = 'block';    
                     }
                          
                         
                      if(localStorage.getItem('compAngle')=="Pointed"){
                           document.getElementById('13Medicine').style.display = 'block';               
            }
                 
                      if(localStorage.getItem('compAngle')=="Rounded"){
                        document.getElementById('14Medicine').style.display = 'block';              
            }}
             
             
             }
    
    
    
    
    
    
    }
    
    if(localStorage.getItem('compDirection')=="Zoo"){
        
        
                 if(localStorage.getItem('compCountry')=="" || localStorage.getItem('compCountry')==null){
                     
                     if(localStorage.getItem('compAngle')=="Pointed") {
                        document.getElementById('1Zoo').style.display = 'block';}
                     
                     if(localStorage.getItem('compAngle')=="Rounded") {
                          document.getElementById('2Zoo').style.display = 'block'; }
                     
                      if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                          document.getElementById('Zoo').style.display = 'block';   
                     }
                    
                 }
                     if(localStorage.getItem('compCountry')=="Belarus"){
                     
                     if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                        document.getElementById('3Zoo').style.display = 'block';     }
                      if(localStorage.getItem('compAngle')=="Pointed"){
                          document.getElementById('4Zoo').style.display = 'block';               
            }if(localStorage.getItem('compAngle')=="Rounded"){
                         document.getElementById('5Zoo').style.display = 'block';             
            }}
             
             if(localStorage.getItem('compCountry')=="Russia"){
                 
                  if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                  document.getElementById('6Zoo').style.display = 'block';   
                     }
                 
                 
                      if(localStorage.getItem('compAngle')=="Pointed"){
                         
                   document.getElementById('7Zoo').style.display = 'block';             
            }
                 
                 
                      if(localStorage.getItem('compAngle')=="Rounded"){
                         
                    document.getElementById('8Zoo').style.display = 'block';               
            }}
             
              if(localStorage.getItem('compCountry')=="Ukraine"){
                  
                   if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                       document.getElementById('9Zoo').style.display = 'block';    
                     }
                  
                  
                      if(localStorage.getItem('compAngle')=="Pointed"){
                       document.getElementById('10Zoo').style.display = 'block';              
            }
                   
                      if(localStorage.getItem('compAngle')=="Rounded"){
                         document.getElementById('11Zoo').style.display = 'block';               
            }}
             
              if(localStorage.getItem('compCountry')=="America"){
                      if(localStorage.getItem('compAngle')=="Pointed"){
                          
                           if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                         document.getElementById('12Zoo').style.display = 'block';    
                     }
                          
                         
                      if(localStorage.getItem('compAngle')=="Pointed"){
                           document.getElementById('13Zoo').style.display = 'block';               
            }
                 
                      if(localStorage.getItem('compAngle')=="Rounded"){
                        document.getElementById('14Zoo').style.display = 'block';              
            }}
             
             
             }
    
    
    
    
    
    }
     
    if(localStorage.getItem('compDirection')=="Education"){
        
        
                 if(localStorage.getItem('compCountry')=="" || localStorage.getItem('compCountry')==null){
                     
                     if(localStorage.getItem('compAngle')=="Pointed") {
                        document.getElementById('1Education').style.display = 'block';}
                     
                     if(localStorage.getItem('compAngle')=="Rounded") {
                          document.getElementById('2Education').style.display = 'block'; }
                     
                      if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                          document.getElementById('Education').style.display = 'block';   
                     }
                    
                 }
                     if(localStorage.getItem('compCountry')=="Belarus"){
                     
                     if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                        document.getElementById('3Education').style.display = 'block';     }
                      if(localStorage.getItem('compAngle')=="Pointed"){
                          document.getElementById('4Education').style.display = 'block';               
            }if(localStorage.getItem('compAngle')=="Rounded"){
                         document.getElementById('5Education').style.display = 'block';             
            }}
             
             if(localStorage.getItem('compCountry')=="Russia"){
                 
                  if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                  document.getElementById('6Education').style.display = 'block';   
                     }
                 
                 
                      if(localStorage.getItem('compAngle')=="Pointed"){
                         
                   document.getElementById('7Zoo').style.display = 'block';             
            }
                 
                 
                      if(localStorage.getItem('compAngle')=="Rounded"){
                         
                    document.getElementById('8Education').style.display = 'block';               
            }}
             
              if(localStorage.getItem('compCountry')=="Ukraine"){
                  
                   if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                       document.getElementById('9Education').style.display = 'block';    
                     }
                  
                  
                      if(localStorage.getItem('compAngle')=="Pointed"){
                       document.getElementById('10Education').style.display = 'block';              
            }
                   
                      if(localStorage.getItem('compAngle')=="Rounded"){
                         document.getElementById('11Education').style.display = 'block';               
            }}
             
              if(localStorage.getItem('compCountry')=="America"){
                      
                          
                           if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                         document.getElementById('12Education').style.display = 'block';    
                     }
                          
                         
                      if(localStorage.getItem('compAngle')=="Pointed"){
                           document.getElementById('13Education').style.display = 'block';               
            }
                 
                      if(localStorage.getItem('compAngle')=="Rounded"){
                        document.getElementById('14Education').style.display = 'block';              
            }
             
             
             }
    
    
    
    
    }
    
    
    document.getElementById('displayRadioValue').onclick = function(){
        var ele = document.getElementsByName('shablon');
    
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
				{ var j;
                    for(j=0; j<65; j++){
                       if (ele[i].value == j)
                           {
                             localStorage.setItem('checkedImg',j);  
                           }
                    }
                    location.replace("edit.html");}}} 
}