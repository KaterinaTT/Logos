window.onload = function(){
     var ec = document.getElementById("editClass");
    
    if (localStorage.getItem('choose_click') == "shab")
        {
    var i;
   
    for(i=1; i<17; i++){
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
    for(i=49; i<66; i++){
        if(localStorage.getItem('checkedImg') == i){ 
            ec.innerHTML="<img src='images/"+i+"Education.png'>";
        }}
    
   
        }
    
    
    
     if (localStorage.getItem('choose_click') == "rand"){
         
         
         
        // var shabOrFontsRand = ['1', '2'];
        // var shabOrFonts = shabOrFontsRand[Math.floor(Math.random() * shabOrFontsRand.length)];
        // if (shabOrFonts == "1"){
            //  localStorage.setItem('shabOrFonts',1);
             
             
             if(localStorage.getItem('compDirection')=="IT"){
                 
                 
                 if(localStorage.getItem('compCountry')=="" || localStorage.getItem('compCountry')==null){
                     
                     if(localStorage.getItem('compAngle')=="Pointed") {
                         var myArray = ['1IT.png', '12IT.png', '4IT.png', '15IT.png', '7IT.png', '11IT.png', '6IT.png', '16IT.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);
                         
                     }
                     
                     if(localStorage.getItem('compAngle')=="Rounded") {
                         var myArray = ['13IT.png', '2IT.png', '5IT.png', '14IT.png', '8IT.png', '9IT.png', '3IT.png', '10IT.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);
                         
                     }
                     
                      if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                         var myArray = ['1IT.png', '2IT.png', '3IT.png', '4IT.png', '5IT.png', '6IT.png', '7IT.png', '8IT.png','9IT.png', '10IT.png', '11IT.png', '12IT.png', '13IT.png', '14IT.png', '15IT.png', '16IT.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);    
                     }
                     
                 }
                     
                
                 if(localStorage.getItem('compCountry')=="Belarus"){
                     
                     if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                         var myArray = ['1IT.png', '12IT.png', '2IT.png', '13IT.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);    
                     }
                     
                     
                      if(localStorage.getItem('compAngle')=="Pointed"){
                         
                          var myArray = ['1IT.png', '12IT.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }
             
           
                      if(localStorage.getItem('compAngle')=="Rounded"){
                         
                          var myArray = ['2IT.png', '13IT.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }}
             
             if(localStorage.getItem('compCountry')=="Russia"){
                 
                  if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                         var myArray = ['4IT.png','15IT.png','5IT.png','4IT.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);    
                     }
                 
                 
                      if(localStorage.getItem('compAngle')=="Pointed"){
                         
                          var myArray = ['4IT.png','15IT.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }
                 
                 
                      if(localStorage.getItem('compAngle')=="Rounded"){
                         
                          var myArray = ['5IT.png','14IT.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }}
             
              if(localStorage.getItem('compCountry')=="Ukraine"){
                  
                   if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                         var myArray = ['7IT.png', '11IT.png','8IT.png','9IT.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);    
                     }
                  
                  
                      if(localStorage.getItem('compAngle')=="Pointed"){
                         
                          var myArray = ['7IT.png', '11IT.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }
                   
                      if(localStorage.getItem('compAngle')=="Rounded"){
                         
                          var myArray = ['8IT.png','9IT.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }}
             
              if(localStorage.getItem('compCountry')=="America"){
                      
                          
                           if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                         var myArray = ['6IT.png', '16IT.png','3IT.png', '10IT.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);    
                     }
                          
                         
                      if(localStorage.getItem('compAngle')=="Pointed"){
                          var myArray = ['6IT.png', '16IT.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }
                 
                      if(localStorage.getItem('compAngle')=="Rounded"){
                         
                          var myArray = ['3IT.png', '10IT.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }
              }
             
             
             }
             
             
            if(localStorage.getItem('compDirection')=="Medicine"){
                
                 if(localStorage.getItem('compCountry')=="" || localStorage.getItem('compCountry')==null){
                     
                     if(localStorage.getItem('compAngle')=="Pointed") {
                         var myArray = ['25Medicine.png', '18Medicine.png','32Medicine.png', '26Medicine.png', '24Medicine.png', '20Medicine.png', '21Medicine.png', '31Medicine.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);
                         
                     }
                     
                     if(localStorage.getItem('compAngle')=="Rounded") {
                         var myArray = ['23Medicine.png', '17Medicine.png','28Medicine.png', '19Medicine.png','29Medicine.png', '22Medicine.png','27Medicine.png', '30Medicine.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);
                         
                     }
                     
                      if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                         var myArray = ['23Medicine.png', '17Medicine.png','28Medicine.png', '19Medicine.png','29Medicine.png', '22Medicine.png','27Medicine.png', '30Medicine.png', '25Medicine.png', '18Medicine.png','32Medicine.png', '26Medicine.png', '24Medicine.png', '20Medicine.png', '21Medicine.png', '31Medicine.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);    
                     }
                     
                 }
                
                
               if(localStorage.getItem('compCountry')=="Belarus"){
                   
                    if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                         var myArray = ['25Medicine.png', '18Medicine.png','23Medicine.png', '27Medicine.png' ];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);    
                     }
                   
                   
                      if(localStorage.getItem('compAngle')=="Pointed"){
                         
                          var myArray = ['25Medicine.png', '18Medicine.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }
             
             
                      if(localStorage.getItem('compAngle')=="Rounded"){
                         
                          var myArray = ['23Medicine.png', '27Medicine.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }}
             
             if(localStorage.getItem('compCountry')=="Russia"){
                 
                  if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                         var myArray = ['26Medicine.png', '32Medicine.png',  '17Medicine.png', '28Medicine.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);    
                     }
                   
                 
                 
                      if(localStorage.getItem('compAngle')=="Pointed"){
                         
                          var myArray = ['26Medicine.png', '32Medicine.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }
                 
                 
                 
                      if(localStorage.getItem('compAngle')=="Rounded"){
                         
                          var myArray = ['17Medicine.png', '28Medicine.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }}
             
              if(localStorage.getItem('compCountry')=="Ukraine"){
                  
  if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                         var myArray = ['24Medicine.png', '20Medicine.png', '19Medicine.png', '29Medicine.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);    
                     }
                  
                  
                  
                      if(localStorage.getItem('compAngle')=="Pointed"){
                         
                          var myArray = ['24Medicine.png', '20Medicine.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }
                 
                  
                      if(localStorage.getItem('compAngle')=="Rounded"){
                         
                          var myArray = ['19Medicine.png', '29Medicine.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }}
             
              if(localStorage.getItem('compCountry')=="America"){
                  
                  
                  
                   if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                         var myArray = ['21Medicine.png', '31Medicine.png', '22Medicine.png', '30Medicine.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);    
                     }
                  
                  
                      if(localStorage.getItem('compAngle')=="Pointed"){
                         
                          var myArray = ['21Medicine.png', '31Medicine.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }
                 
                  
                      if(localStorage.getItem('compAngle')=="Rounded"){
                         
                          var myArray = ['22Medicine.png', '30Medicine.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }}
             
             
             }
             
            
            if(localStorage.getItem('compDirection')=="Zoo"){
                
                
                
                 if(localStorage.getItem('compCountry')=="" || localStorage.getItem('compCountry')==null){
                     
                     if(localStorage.getItem('compAngle')=="Pointed") {
                         var myArray = ['47Zoo.png','34Zoo.png','39Zoo.png','33Zoo.png','45Zoo.png','41Zoo.png','48Zoo.png','46Zoo.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);
                         
                     }
                     
                     if(localStorage.getItem('compAngle')=="Rounded") {
                         var myArray = ['44Zoo.png','38Zoo.png','35Zoo.png','43Zoo.png','42Zoo.png','37Zoo.png','36Zoo.png','40Zoo.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);
                         
                     }
                     
                      if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                         var myArray = ['44Zoo.png','38Zoo.png','35Zoo.png','43Zoo.png','42Zoo.png','37Zoo.png','36Zoo.png','40Zoo.png', '47Zoo.png','34Zoo.png','39Zoo.png','33Zoo.png','45Zoo.png','41Zoo.png','48Zoo.png','46Zoo.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);    
                     }
                     
                 }
        
        if(localStorage.getItem('compCountry')=="Belarus"){
            
              if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                         var myArray = ['47Zoo.png', '34Zoo.png','44Zoo.png', '38Zoo.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);    
                     }
            
            
                      if(localStorage.getItem('compAngle')=="Pointed"){
                         
                          var myArray = ['47Zoo.png', '34Zoo.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }
             
             
                      if(localStorage.getItem('compAngle')=="Rounded"){
                         
                          var myArray = ['44Zoo.png', '38Zoo.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }}
             
             if(localStorage.getItem('compCountry')=="Russia"){
                 
                  if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                         var myArray = ['39Zoo.png', '33Zoo.png','43Zoo.png', '35Zoo.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);    
                     }
                 
                      if(localStorage.getItem('compAngle')=="Pointed"){
                         
                          var myArray = ['39Zoo.png', '33Zoo.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }
                 
                  
                      if(localStorage.getItem('compAngle')=="Rounded"){
                         
                          var myArray = ['43Zoo.png', '35Zoo.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }}
             
              if(localStorage.getItem('compCountry')=="Ukraine"){
                  
                    if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                         var myArray = ['45Zoo.png', '41Zoo.png','42Zoo.png', '37Zoo.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);    
                     }
                  
                  
                      if(localStorage.getItem('compAngle')=="Pointed"){
                         
                          var myArray = ['45Zoo.png', '41Zoo.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }
                 
                      if(localStorage.getItem('compAngle')=="Rounded"){
                         
                          var myArray = ['42Zoo.png', '37Zoo.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }}
             
              if(localStorage.getItem('compCountry')=="America"){
                  
                  
                  
                    if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                         var myArray = ['48Zoo.png', '46Zoo.png','36Zoo.png', '40Zoo.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);    
                     }
                  
                  
                      if(localStorage.getItem('compAngle')=="Pointed"){
                         
                          var myArray = ['48Zoo.png', '46Zoo.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }
                 
                 
                      if(localStorage.getItem('compAngle')=="Rounded"){
                         
                          var myArray = ['36Zoo.png', '40Zoo.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }}
            }
     
            if(localStorage.getItem('compDirection')=="Education"){
                
                
                
                
                 if(localStorage.getItem('compCountry')=="" || localStorage.getItem('compCountry')==null){
                     
                     if(localStorage.getItem('compAngle')=="Pointed") {
                         var myArray = ['59Education.png', '60Education.png','53Education.png', '56Education.png', '49Education.png', '50Education.png','52Education.png', '64Education.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);
                         
                     }
                     
                     if(localStorage.getItem('compAngle')=="Rounded") {
                         var myArray = ['62Education.png', '63Education.png','51Education.png', '61Education.png', '55Education.png', '54Education.png','57Education.png', '58Education.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);
                         
                     }
                     
                      if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                         var myArray = ['44Zoo.png','38Zoo.png','35Zoo.png','43Zoo.png','42Zoo.png','37Zoo.png','36Zoo.png','40Zoo.png', '47Zoo.png','34Zoo.png','39Zoo.png','33Zoo.png','45Zoo.png','41Zoo.png','48Zoo.png','46Zoo.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);    
                     }
                     
                 }
                
                
                
        
                if(localStorage.getItem('compCountry')=="Belarus"){
                    
                    if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                         var myArray = ['59Education.png', '60Education.png','62Education.png', '63Education.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);    
                     }
                    
                      if(localStorage.getItem('compAngle')=="Pointed"){
                         
                          var myArray = ['59Education.png', '60Education.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }
             
             
                      if(localStorage.getItem('compAngle')=="Rounded"){
                         
                          var myArray = ['62Education.png', '63Education.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }}
             
             if(localStorage.getItem('compCountry')=="Russia"){
                 
                  if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                         var myArray = ['53Education.png', '56Education.png','51Education.png', '61Education.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);    
                     }
                 
                 
                      if(localStorage.getItem('compAngle')=="Pointed"){
                         
                          var myArray = ['53Education.png', '56Education.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }
                 
                  
                      if(localStorage.getItem('compAngle')=="Rounded"){
                         
                          var myArray = ['51Education.png', '61Education.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }}
             
              if(localStorage.getItem('compCountry')=="Ukraine"){
                  
                   if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                         var myArray = ['49Education.png', '50Education.png','55Education.png', '54Education.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);    
                     }
                  
                  
                      if(localStorage.getItem('compAngle')=="Pointed"){
                         
                          var myArray = ['49Education.png', '50Education.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }
                 
                  
                      if(localStorage.getItem('compAngle')=="Rounded"){
                         
                          var myArray = ['55Education.png', '54Education.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }}
             
              if(localStorage.getItem('compCountry')=="America"){
                  
                  
                  if(localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null){
                         var myArray = ['52Education.png', '64Education.png','57Education.png', '58Education.png' ];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);    
                     }
                  
                  
                      if(localStorage.getItem('compAngle')=="Pointed"){
                         
                          var myArray = ['52Education.png', '64Education.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }
                 
                      if(localStorage.getItem('compAngle')=="Rounded"){
                         
                          var myArray = ['57Education.png', '58Education.png'];
                  var rand = myArray[Math.floor(Math.random() * myArray.length)];
                          ec.innerHTML="<img src='images/"+ rand +"'>";
                  var r = /\d+/;
                  var picNumb = rand.match(r);
                  localStorage.setItem('checkedImg',picNumb);               
            }}
            }
             
         
         
         
         
          
        // if (shabOrFonts == "2"){
             
             
            // localStorage.setItem('shabOrFonts',2);
             //localStorage.setItem('checkedImg',0);
         
           
             //fonts
             
        // }
     }
    
    
    var hammingDistance = function(images) {
    let count =1;
    while(count>0){
            if (localStorage.getItem('compCountry')=="America" || localStorage.getItem('compCountry')=="Belarus" || localStorage.getItem('compCountry')=="Russia" || localStorage.getItem('compCountry')=="Ukrain"){ 
            if  (localStorage.getItem('compAngle')=="Pointed" ||    localStorage.getItem('compAngle')=="Rounded" ||  localStorage.getItem('compAngle')=="" || localStorage.getItem('compAngle')==null )  {  count++;}
      
      
    }
     return count;
        
        if (count[i] > count[i+1]) {
            count[i]
            if( count[i] = count[i+1]) {
            count[i], count[i+1];
        }
        }
}
    }
    
     document.getElementById('mySelectColorBack').onclick = function(){
        var selCB =document.getElementById('mySelectColorBack').selectedIndex;
        var optionsCB=document.getElementById('mySelectColorBack').options;
        var selecCB = optionsCB[selCB].text;
        localStorage.setItem('textColorBack',selecCB);}
     
     var fc = document.getElementById("fontClass");
        fc.innerHTML= localStorage.getItem('compName');
     //document.getElementById('fontClass').style.backgroundColor = localStorage.getItem('textColorBack');
    
    document.getElementById('colorBackOk').onclick = function(){
      document.getElementById('allEdit').style.backgroundColor = localStorage.getItem('textColorBack');
    }
     
    
    document.getElementById('mySelect1').onclick = function(){
        var sel1 =document.getElementById('mySelect1').selectedIndex;
        var options1=document.getElementById('mySelect1').options;
        var selec1 = options1[sel1].text;
        localStorage.setItem('textFont',selec1);}
     
     var fc = document.getElementById("fontClass");
        fc.innerHTML= localStorage.getItem('compName');
     document.getElementById('fontClass').style.fontFamily = localStorage.getItem('textFont');
    
    document.getElementById('fontOk').onclick = function(){
      document.getElementById('fontClass').style.fontFamily = localStorage.getItem('textFont');
    }
    
    
     document.getElementById('mySelectBackRad').onclick = function(){
        var sel1BR =document.getElementById('mySelectBackRad').selectedIndex;
        var options1BR=document.getElementById('mySelectBackRad').options;
        var selec1BR = options1BR[sel1BR].text;
        localStorage.setItem('backRadius',selec1BR);}
    
    document.getElementById('backRadOk').onclick = function(){
      document.getElementById('allEdit').style.borderRadius = localStorage.getItem('backRadius');
    }
    
    
    
    
    
    
    
    
   
     document.getElementById('mySelectColor').onclick = function(){
        var selC =document.getElementById('mySelectColor').selectedIndex;
        var optionsC=document.getElementById('mySelectColor').options;
        var selecC = optionsC[selC].text;
        localStorage.setItem('textColor',selecC);}
     
     var fc = document.getElementById("fontClass");
        fc.innerHTML= localStorage.getItem('compName');
     document.getElementById('fontClass').style.color = localStorage.getItem('textColor');
    
    document.getElementById('colorOk').onclick = function(){
      document.getElementById('fontClass').style.color = localStorage.getItem('textColor');
    }
    
    
    
     document.getElementById('mySelectSize').onclick = function(){
        var selS =document.getElementById('mySelectSize').selectedIndex;
        var optionsS=document.getElementById('mySelectSize').options;
        var selecS = optionsS[selS].text;
        localStorage.setItem('textSize',selecS);}
     
     var fc = document.getElementById("fontClass");
        fc.innerHTML= localStorage.getItem('compName');
     document.getElementById('fontClass').style.fontSize = localStorage.getItem('textSize');
    
    document.getElementById('sizeOk').onclick = function(){
      document.getElementById('fontClass').style.fontSize = localStorage.getItem('textSize');
    }
    
   
    
     document.getElementById('mySelectRotate').onclick = function(){
        var selR =document.getElementById('mySelectRotate').selectedIndex;
        var optionsR=document.getElementById('mySelectRotate').options;
        var selecR = optionsR[selR].text;
        localStorage.setItem('textRotate',selecR);}
     
     var fc = document.getElementById("fontClass");
        fc.innerHTML= localStorage.getItem('compName');
     document.getElementById('fontClass').style.transform = 'skew('+ localStorage.getItem('textRotate') + 'deg)' ;
    
    document.getElementById('rotateOk').onclick = function(){
      document.getElementById('fontClass').style.transform = 'skew('+ localStorage.getItem('textRotate') + 'deg)' ;
    }
    
     
    
    document.getElementById('done').onclick = function(){
         location.replace("done.html");
     }
}

























