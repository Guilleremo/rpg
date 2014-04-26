var txtKeywords = document.getElementById("answer");
var p=document.getElementById("storyline");
var health="120";

window.onload=function(){
    setInterval(life, 1000);
    document.getElementById("healthbar").innerHTML=health;
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
        if(document.getElementById("answer").value==="left"){
            p.innerHTML='As you start turning the corner, you see a terrifying monster. Well, you can fight the monster or try and avoid injury and go down the trap door. (fight monster, trap door)';
        }
        else if(document.getElementById("answer").value==="right"){
            p.innerHTML="As you start turning the corner, you see a terrifying monster. Well, you can fight the monster or try and avoid injury and go down the trap door. (fight monster, trap door)";
        }
        if(name==="fight monster"){
            p.innerHTML="He hasn't see you yet, you can lure him into a trap or be very brave and fight him head on. (into trap, be brave)";
        }
        if(name==="into trap"){
            p.innerHTML="A very wise choice. You see a pit to the right and a large stone at your feet. You make a noise to call the monster and as it comes closer, you throw the stone. Its successful but it cuts you on the way down and you get injured.";
            health-=15;
            document.getElementById('healthbar').innerHTML=health;
        }
        else if(name==="be brave"){
            p.innerHTML="A very bold choice, there is a pit to your right with a sword you can use, or you can use your bare hands. (sword, bare hands)";
            health-=30;
            document.getElementById("healthbar").innerHTML=health;
        }
        if(name==="bare hands"){
            document.getElementById("").innerHTML="You died.";
        }
        else if(name==="trap door"){
            p.innnerHTML="Wise choice, now climb down the ladder of the trap door. As you get to the bottom, the ladder breaks and you fall. There is no way back up. AS you are walking there is a strange man in your way, and to get by you have to make a choice. He tells you to either go right or left. Do you go right or left? (go right, go left)";
            health-=15;
            document.getElementById("healthbar").innerHTML=health;
        }
        else if(document.getElementById("answer").value==="another way out"){
            p.innerHTML="The door has a lock. You can either look for a key or opt to break the door with brute force. (look for key, use brute force)";
        }
        if(name==="look for key"){
            p.innerHTML="Do you look to the floor or the wall? (look to floor, look at wall)";
        }
        if(name==="look to floor"){
            p.innerHTML="You found the key and now you can get out of the cage.";
        }
        else if(name==="look at wall"){
            p.innerHTML="Nothing there. Try again.";
        }
        else if(name==="use brute force"){
            p.innerHTML="Good job! You nearly fell unconscious and lost some health. Do you look for a key or call for help? (look for key, call for help)";
            health-=15;
            document.getElementById("healthbar").innerHTML=health;
        }
        if(name==="call for help"){
            p.innerHTML="A hesitant elf appears, shows you a ladder, and then runs away.";
        }
     }
        
}

function life(){
    document.getElementByID("healthbar").innerHTML=health;
    if(life<=0){
        document.getElementById("body").innerHTML="Game Over";
    }
}