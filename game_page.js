player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
var answer;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn -" + player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn -" + player2_name;
function send() {
   n1=document.getElementById("num1").value;
    n2=document.getElementById("num2").value;
 remove_charAt3=n1+"x"+n2
 answer=n1*n2;
    
    
   
    question_word="<h4 id='word_display'>Q."+remove_charAt3+"</h4>";
    input_box="<br>Answer:<input type='text' id='input_check_box'>";
check_button="<br><br><button class='btn btn-info'onclick='check()'>Check</button>";
row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}
question_turn="player1";
answer_turn="player2";
function check()
{
    get_answer=document.getElementById("input_check_box").value;
    
    
    if(answer==get_answer)
        {
    if(answer_turn=="player1")
    {
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;

    }
    else
    {
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
        
    }

}
if(question_turn=="player1")
{
    question_turn="player2"
    document.getElementById("player_question").innerHTML="Question Turn-"+player2_name;

}
else{
    question_turn="player1"
    document.getElementById("player_question").innerHTML="Question Turn-"+player1_name;

    
}
if(answer_turn=="player1")
{
    answer_turn="player2"
    document.getElementById("player_answer").innerHTML="AnswerTurn-"+player2_name;
    
}
else{
    answer_turn="player1"
    document.getElementById("player_answer").innerHTML="AnswerTurn-"+player1_name;
    
}
document.getElementById("output").innerHTML="";
}
