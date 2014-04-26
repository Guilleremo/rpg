var txtKeywords = document.getElementById("answer");
var p=document.getElementById("storyline");
var health=100;

window.onload=function(){
    setInterval(life, 1000);
}

txtKeywords.onkeypress = function(e){
    if(e.keyCode === 13){
        var name=document.getElementById("answer").value;
        p.innerHTML="Ahh, "+name+", your one of the fools that came in here to kill the minotaur. I see he has wiped out the rest of your crew, but kept you alive ... how odd, don't you think? (yes, no)";
        if(document.getElementById("answer").value==="no"){
            p.innerHTML="Well I sure do. Let's get you out of here. You can climb that wall or try and find another way out. (climb wall, another way out)";
        }
        else if(document.getElementById("answer").value==="yes"){
            p.innerHTML="Yes, quite odd indeed. Let's get you out of here. You can climb that wall or try and find another way out. (climb wall, another way out)";
        }
        if(document.getElementById("answer").value==="climb wall"){
            p.innerHTML="Use the rope on the wall. Well you climb very fast, where to next? (left, right)";
        }
        else if(document.getElementById("answer").value==="another way out"){
            p.innerHTML="The door has a lock. You can either look for a key or opt to break the door with brute force. (look for key, use brute force";
        }
        if(document.getElementById("answer").value==="left"){
            p.innerHTML="Use the rope on the wall. Well you climb very fast, where to next? (left, right)";
        }
        else if(document.getElementById("answer").value==="right"){
            p.innerHTML="As you start truning the corner, you see a terrifying monster. Well, you can fight the monster or try and avoid injury and go down the trap door. (fight monster, trap door)";
        }
        if(name==="look for key"){
            p.innerHTML="Do you look to the floor or the wall? (look to floor, look at wall)";
        }
        else if(name==="use brute force"){
            p.innerHTML="Good job! You nearly fell unconscious and lost some health. Do you look for a key or call for help? (look for key, call for help)";
        }
     }
        
}

function life(){
    document.getElementByID("healthbar").innerHTML=health;
    if(life===0){
        document.getElementById("body").innerHTML="Game Over";
    }
}