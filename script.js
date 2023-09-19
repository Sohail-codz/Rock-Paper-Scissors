let USERSCORE = parseInt(localStorage.getItem('USERSCORE')) || 0 ;
let PCSCORE = parseInt(localStorage.getItem('PCSCORE')) || 0 ;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(".user_score h2").innerText = USERSCORE;
    document.querySelector(".com_score h2").innerText = PCSCORE;
});

const Userpicked = (option) =>{
    
    let options = document.querySelector('.options');
    options.style.display = "none";
    let scorearea = document.querySelector('.score-area');
    scorearea.style.display = "flex";

    if(option == 'scissors'){
        document.getElementById("UserPick").src = "images/scissor.png"
        var color = document.getElementById("choice-choice");
        color.style.border = "12px solid rgb(191, 63, 255)"
    }
    else if(option == 'rock'){
        document.getElementById("UserPick").src = "images/rock.png"
        var color = document.getElementById("choice-choice");
        color.style.border = "12px solid rgb(0, 136, 255)"
    }
    else if(option == 'paper'){
        document.getElementById("UserPick").src = "images/paper.png"
        var color = document.getElementById("choice-choice");
        color.style.border = "12px solid rgb(255, 164, 36)"
    }
    
    let pcpick = Pcpicked();

    ref(option, pcpick);
}
const Pcpicked = () =>{
    let hands = ['rock','paper','scissors'];
    let pcpick = hands[Math.floor(Math.random()*hands.length)];
    
    if(pcpick == 'scissors'){
        document.getElementById("OpntPick").src = "images/scissor.png"
        var color = document.getElementById("choice-choice-2");
        color.style.border = "12px solid rgb(191, 63, 255)"
    }
    else if(pcpick == 'rock'){
        document.getElementById("OpntPick").src = "images/rock.png"
        var color = document.getElementById("choice-choice-2");
        color.style.border = "12px solid rgb(0, 136, 255)"
    }
    else if(pcpick == 'paper'){
        document.getElementById("OpntPick").src = "images/paper.png"
        var color = document.getElementById("choice-choice-2");
        color.style.border = "12px solid rgb(255, 164, 36)"
    }
    
    return pcpick;
}
const ref = (Uhand, Phand) =>{
    if(Uhand == "paper" && Phand == "scissors"){
        outCome("YOU LOST");
        setScore(USERSCORE,PCSCORE + 1);
        var color2 = document.getElementById("choice-choice");
        color2.style.boxShadow = "1px 1px 50px 1px black";
        var color = document.getElementById("choice-choice-2");
        color.style.boxShadow = "0 0 0 12px rgb(0, 135, 29),0 0 0 22px rgba(0, 147, 32, 0.605),0 0 0 30px rgba(0, 147, 32, 0.285)"
        document.querySelector(".tie").innerText = "AGAINST PC";
        document.querySelector("#p-a").innerText = "PLAY AGAIN";
    }
    if(Uhand == "paper" && Phand == "rock"){
        outCome("YOU WIN");
        setScore(USERSCORE + 1,PCSCORE);
        var color = document.getElementById("choice-choice");
        color.style.boxShadow = "0 0 0 12px rgb(0, 135, 29),0 0 0 22px rgba(0, 147, 32, 0.605),0 0 0 30px rgba(0, 147, 32, 0.285)"
        var color2 = document.getElementById("choice-choice-2");
        color2.style.boxShadow = "1px 1px 50px 1px black";
        document.querySelector(".tie").innerText = "AGAINST PC";
        document.querySelector("#p-a").innerText = "PLAY AGAIN";
        showNextRoundButton();
    }
    if(Uhand == "paper" && Phand == "paper"){
        outCome("TIE UP");
        var color = document.getElementById("choice-choice");
        color.style.boxShadow = "1px 1px 50px 1px black";
        var color2 = document.getElementById("choice-choice-2");
        color2.style.boxShadow = "1px 1px 50px 1px black";
        document.querySelector(".tie").innerText = "";
        document.querySelector("#p-a").innerText = "REPLAY"
    }
    if(Uhand == "rock" && Phand == "scissors"){
        outCome("YOU WIN");
        setScore(USERSCORE + 1,PCSCORE);
        var color = document.getElementById("choice-choice");
        color.style.boxShadow = "0 0 0 12px rgb(0, 135, 29),0 0 0 22px rgba(0, 147, 32, 0.605),0 0 0 30px rgba(0, 147, 32, 0.285)"
        var color2 = document.getElementById("choice-choice-2");
        color2.style.boxShadow = "1px 1px 50px 1px black";
        document.querySelector(".tie").innerText = "AGAINST PC";
        document.querySelector("#p-a").innerText = "PLAY AGAIN";
        showNextRoundButton();
    }
    if(Uhand == "rock" && Phand == "paper"){
        outCome("YOU LOST");
        setScore(USERSCORE, PCSCORE + 1);
        var color2 = document.getElementById("choice-choice");
        color2.style.boxShadow = "1px 1px 50px 1px black";
        var color = document.getElementById("choice-choice-2");
        color.style.boxShadow = "0 0 0 12px rgb(0, 135, 29),0 0 0 22px rgba(0, 147, 32, 0.605),0 0 0 30px rgba(0, 147, 32, 0.285)"
        document.querySelector(".tie").innerText = "AGAINST PC";
        document.querySelector("#p-a").innerText = "PLAY AGAIN";
    }
    if(Uhand == "rock" && Phand == "rock"){
        outCome("TIE UP");
        var color = document.getElementById("choice-choice");
        color.style.boxShadow = "1px 1px 50px 1px black";
        var color2 = document.getElementById("choice-choice-2");
        color2.style.boxShadow = "1px 1px 50px 1px black";
        document.querySelector(".tie").innerText = "";
        document.querySelector("#p-a").innerText = "REPLAY"
    }
    if(Uhand == "scissors" && Phand == "paper"){
        outCome("YOU WIN");
        setScore(USERSCORE + 1, PCSCORE);
        var color = document.getElementById("choice-choice");
        color.style.boxShadow = "0 0 0 12px rgb(0, 135, 29),0 0 0 22px rgba(0, 147, 32, 0.605),0 0 0 30px rgba(0, 147, 32, 0.285)"
        var color2 = document.getElementById("choice-choice-2");
        color2.style.boxShadow = "1px 1px 50px 1px black";
        document.querySelector(".tie").innerText = "AGAINST PC";
        document.querySelector("#p-a").innerText = "PLAY AGAIN";
        showNextRoundButton();
    }
    if(Uhand == "scissors" && Phand == "rock"){
        outCome("YOU LOST");
        setScore(USERSCORE,PCSCORE + 1);
        var color2 = document.getElementById("choice-choice");
        color2.style.boxShadow = "1px 1px 50px 1px black";
        var color = document.getElementById("choice-choice-2");
        color.style.boxShadow = "0 0 0 12px rgb(0, 135, 29),0 0 0 22px rgba(0, 147, 32, 0.605),0 0 0 30px rgba(0, 147, 32, 0.285)"
        document.querySelector(".tie").innerText = "AGAINST PC";
        document.querySelector("#p-a").innerText = "PLAY AGAIN";   
    }
    if(Uhand == "scissors" && Phand == "scissors"){
        outCome("TIE UP");
        var color = document.getElementById("choice-choice");
        color.style.boxShadow = "1px 1px 50px 1px black";
        var color2 = document.getElementById("choice-choice-2");
        color2.style.boxShadow = "1px 1px 50px 1px black";
        document.querySelector(".tie").innerText = "";
        document.querySelector("#p-a").innerText = "REPLAY"
    }
}
const outCome = (result) =>{
    document.querySelector(".outcome h1").innerText = result;
}
const restart = () =>{
    let options = document.querySelector('.options');
    options.style.display = "flex";
    let scorearea = document.querySelector('.score-area');
    scorearea.style.display = "none";
    var color = document.getElementById("choice-choice");
    color.style.boxShadow = "none";
    var color2 = document.getElementById("choice-choice-2");
    color2.style.boxShadow = "none";

    const nextClickBtn = document.getElementById('nextClickBtn');
    nextClickBtn.style.display = 'none';
}
const setScore = (uscore, pscore) =>{
    USERSCORE = uscore;
    PCSCORE = pscore;
    document.querySelector(".user_score h2").innerText = uscore;
    document.querySelector(".com_score h2").innerText = pscore;

    localStorage.setItem('USERSCORE', uscore);
    localStorage.setItem('PCSCORE', pscore);
}
const showNextRoundButton = () => {
    const nextClickBtn = document.getElementById('nextClickBtn');
    nextClickBtn.style.display = 'block';
}
const toWinnerPage = () => {
    window.location.href = "winner.html";
}
function togglePage(){
    document.getElementById("disp").classList.toggle("active");
}



