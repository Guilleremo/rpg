var txtKeywords = document.getElementById("answer");

txtKeywords.onkeypress = function(e){
    if(e.keyCode === 13){
        var name=document.getElementById("answer").value;
        document.getElementById("storyline").innerHTML="Ahh, "+name+", your one of the fools that came in here to kill the minotaur. I see he has wiped out the rest of your crew, but kept you alive ... how odd, Don't your think?";
        console.log(name);
    }
}
