var txtKeywords = document.getElementById("answer");
var p=document.getElementById("storyline");
var health="120";
var image=document.getElementById("image");

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
            document.body.style.color = "black";
        }
        else if(document.getElementById("answer").value==="yes"){
            p.innerHTML="Yes, quite odd indeed. Let's get you out of here. You can climb that wall or try and find another way out. (climb wall, another way out)";
            
        }
        if(document.getElementById("answer").value==="climb wall"){
            p.innerHTML="Use the rope on the wall. Well you climb very fast, where to next? (left, right)";
            //image.className="image7";
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
            document.getElementById("healthbar").innerHTML=health;
        }
        if(name==="bare hands"){
           setTimeout(death, 100);
        }
        else if(name==="sword"){
            p.innerHTML="You run to the sword by the pit, the monster sees and starts charging at you. Then you pick up the sword and stab him in the neck and he hits you in the shoulder. You pull the sword out and throw him in the pit.";
            health-=30;
            document.getElementById("healthbar").innerHTML=health;
        }
        else if(name==="trap door"){
            p.innnerHTML="Wise choice, now climb down the ladder of the trap door. As you get to the bottom, the ladder breaks, you fall, you lose a little health and there is no way back up. Then as you are walking there is a strange man in your way and he tells you something. I see you need to get by and I won't let you unless you choose a hand. Both are bad but you have to choose, right hand or left hand. (right hand, left hand)";
            health-=15;
            document.getElementById("healthbar").innerHTML=health;
        }
        if(name==="right hand"){
            p.innerHTML="";
            health-=30;
            document.getElementById("healthbar").innerHTML=health;
        }
        else if(name==="left hand"){
            p.innerHTML="";
            health-=15;
            document.getElementById("healthbar").innerHTML=health;
        }
        else if(document.getElementById("answer").value==="another way out"){
            p.innerHTML="While lookig for another way out you find a door and the door has a lock. You can either look for a key or opt to break the door with brute force. (look for key, use brute force)";
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
            p.innerHTML="A hesitant elf appears, shows you a path, and then keeps running. Do you follow the elf or go your own way? (follow elf, go own way)";
        }
        if(name==="follow elf"){
            p.innerHTML="He leads you to a ladder. What do you do? (not yet available)";
        }
        else if(name==="go own way"){
            p.innerHTML="Congrats! You got lost. You can go back how you came or keep going. (go back, keep going)";
        }
        if(name==="go back"){
            p.innerHTML="You get lost. Soon you will starve."
            setTimeout(death, 10000);
        }
        if(name==="keep going"){
            p.innerHTML="You get lost. Soon you will starve."
            setTimeout(death, 10000);
        }
     }
        
}

function life(){
    document.getElementByID("healthbar").innerHTML=health;
    if(life<=0){
        document.getElementById("body").innerHTML="Game Over";
    }
}

function death(){
    document.getElementById("body").innerHTML="<h1> You died! </h1>";    
    document.body.style.backgroundColor = "black";
    document.body.style.color = "brown";
    document.body.style.fontsize = "100px";
    document.body.style.margin = "100px 550px 100px 625px";
    
}