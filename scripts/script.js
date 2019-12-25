
 document.getElementById('firstPage_ok').onclick = function(){
        
        alert(a);
        location.replace("choose.html");}

 document.getElementById('choose_random').onclick = function(){
        location.replace("random.html");}
    
     document.getElementById('choose_shablons').onclick = function(){
        location.replace("shablons.html");}


function displayRadioValue() { 

				
    var pc = document.getElementById("pic");
var ele = document.getElementsByName('shablon');
    
    
              
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
				{
                document.getElementById("result").innerHTML
				= "shablon: "+ele[i].value;
//						
//						if (ele[i].value == "first")
//						{
//							//pc.innerHTML="<img src='firstIT.png'>";
//							
//							
//							mimg=document.createElement("img");
//							mimg.setAttribute('src', 'firstIT.png');
//							//document.body.appendChild(mimg);
//						}
//						
//						
//						if (ele[i].value == "second")
//						{
//							//pc.innerHTML="<img src='secondIT.png'>";
//							mimg=document.createElement("img");
//							mimg.setAttribute('src', 'secondIT.png');
//							//document.body.appendChild(mimg)
//						}
//						
//							if (ele[i].value == "third")
//						{
//							//pc.innerHTML="<img src='thirdIT.png'>";
//							mimg=document.createElement("img");
//							mimg.setAttribute('src', 'thirdIT.png');
//							document.body.appendChild(mimg)
//						}
//						
//							if (ele[i].value == "four")
//						{
//							//pc.innerHTML="<img src='fourIT.png'>";
//							mimg=document.createElement("img");
//							mimg.setAttribute('src', 'fourIT.png');
//							document.body.appendChild(mimg)
//						}
//						
//						if (ele[i].value == "five")
//						{
//							//pc.innerHTML="<img src='fiveMedicine.png'>";
//							
//							
//							mimg=document.createElement("img");
//							mimg.setAttribute('src', 'fiveMedicine.png');
//							document.body.appendChild(mimg);
//						}
//						
//						if (ele[i].value == "six")
//						{
//							//pc.innerHTML="<img src='sixMedicine.png'>";
//							mimg=document.createElement("img");
//							mimg.setAttribute('src', 'sixMedicine.png');
//							document.body.appendChild(mimg)
//						}
//						
//							if (ele[i].value == "seven")
//						{
//							//pc.innerHTML="<img src='sevenMedicine.png'>";
//							mimg=document.createElement("img");
//							mimg.setAttribute('src', 'sevenMedicine.png');
//							document.body.appendChild(mimg)
//						}
//						
//							if (ele[i].value == "eight")
//						{
//							//pc.innerHTML="<img src='eightMedicine.png'>";
//							mimg=document.createElement("img");
//							mimg.setAttribute('src', 'eightMedicine.png');
//							document.body.appendChild(mimg)
//						}
						
						// if (ele[i].value == "first")
						// {
							// //pc.innerHTML="<img src='firstIT.png'>";
							
							
							// mimg=document.createElement("img");
							// mimg.setAttribute('src', 'firstIT.png');
							// document.body.appendChild(mimg);
						// }
						
						
						// if (ele[i].value == "second")
						// {
							// //pc.innerHTML="<img src='secondIT.png'>";
							// mimg=document.createElement("img");
							// mimg.setAttribute('src', 'secondIT.png');
							// document.body.appendChild(mimg)
						// }
						
							// if (ele[i].value == "third")
						// {
							// //pc.innerHTML="<img src='thirdIT.png'>";
							// mimg=document.createElement("img");
							// mimg.setAttribute('src', 'thirdIT.png');
							// document.body.appendChild(mimg)
						// }
						
							// if (ele[i].value == "four")
						// {
							// //pc.innerHTML="<img src='fourIT.png'>";
							// mimg=document.createElement("img");
							// mimg.setAttribute('src', 'fourIT.png');
							// document.body.appendChild(mimg)
						// }
						
						//location.replace("edit.html");
						
						 
			
			    }
            } 
        } 


function displayEdit() { 

document.body.appendChild(mimg);

}



function displaySelectValue() { 
var e = document.getElementById("select");
var strUser = e.options[e.selectedIndex].value;
alert(strUser);

}















