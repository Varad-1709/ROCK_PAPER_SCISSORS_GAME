// BUTTONS FOR ROCK,SCISSOR,PAPER

let rockBtn=document.getElementById('rock-btn');
let scissorBtn=document.getElementById('scissor-btn');
let paperBtn=document.getElementById('paper-btn');


let box=document.getElementsByClassName('box');

// USER BTN

let userBtn=document.getElementById('user-btn');

// PC BTN

let pcBtn=document.getElementById('pc-btn');

// NEXT BTN

let nextBtn=document.getElementById('next-btn');


let msg_1=document.getElementById('msg-1');
let msg_2=document.getElementById('msg-2');


// DIAGRAM CONTAINER

let diagram=document.getElementById('diagram');

// LOWER BODY CONTAINER

let lowerBody=document.getElementById('lower-body');

// RULES CONTAINER

let rules_box=document.getElementById('rules-box');


// RULES BTN

let rulesBtn=document.getElementById('rules-btn');

rulesBtn.addEventListener('click',function(){
    rules_box.style.display='block';
})


// CLOSE BUTTON

let closeBtn=document.getElementById('close-btn');
closeBtn.addEventListener('click',function(){
    rules_box.style.display='none';
})

// VICTORY BOX

let victory_box=document.getElementById('victory-box');


// NEXT BUTTON

nextBtn.addEventListener('click',function(){
    victory_box.style.display='flex';
    box[0].style.display='none';
    lowerBody.style.display='none';
    nextBtn.style.display='none';
})

// RESET BTN

let reset_button=document.getElementById('reset-btn');
reset_button.addEventListener('click',function(){
    location.reload();
})

let final_button=document.getElementById('final-play');
final_button.addEventListener('click',function(){
    location.reload();
})

// VARIABLES TO STORE USER AND PC INPUT

let user_input=0;
let pc_input=0;
let array=[1,3,5];

// USER AND PC SCORES

let user_score,pc_score;

user_score=localStorage.getItem("User") ? localStorage.getItem("User") : 0;
pc_score=localStorage.getItem("Pc") ? localStorage.getItem("Pc") : 0;

let current_score=document.getElementById('your-score');
let computer_score=document.getElementById('computer-score');

current_score.innerText=user_score;
computer_score.innerText=pc_score;


// FUNCTION FOR PC INPUT



function pcInput(){
    let randomChoice=parseInt(Math.random()*3);
    return array[randomChoice];
}



function Check(){
    if(user_input>pc_input)
    {
        if((user_input-pc_input)<4)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    else
    {
        if(Math.abs(user_input-pc_input)<4)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
}

function MsgBox(){

    if(user_input==pc_input)
    {
        msg_1.innerText="TIE UP";
        msg_2.style.display='none';
        reset_button.innerText="REPLAY";
        nextBtn.style.display='none';
    }

    else if(Check())
    {
        msg_1.innerText="YOU WON";
        msg_2.innerText="AGAINST PC";
        reset_button.innerText="PLAY AGAIN";
        user_score++;
        localStorage.setItem("User",user_score);
        current_score.innerText=localStorage.getItem("User");
        nextBtn.style.display='block';
        userBtn.classList.add('winner-btn');
    }
    
    else
    {
        msg_1.innerText="YOU LOST";
        msg_2.innerText="AGAINST PC";
        reset_button.innerText="PLAY AGAIN";
        pc_score++;
        nextBtn.style.display='none';
        localStorage.setItem("Pc",pc_score);
        computer_score.innerText=localStorage.getItem("Pc");
        pcBtn.classList.add('winner-btn');
    }
}
function UserChoice(value){

    user_input=value;
    pc_input=pcInput();

    diagram.style.display='none';
    lowerBody.style.display='flex';

    if(user_input==5){
        let UserRockButton=rockBtn.cloneNode('true');
        UserRockButton.disabled=true;
        userBtn.appendChild(UserRockButton);
        
    }

    else if(user_input==3)
    {
        let UserScissorButton=scissorBtn.cloneNode('true');
        UserScissorButton.disabled=true;
        userBtn.appendChild(UserScissorButton);
    }

    else
    {
        let UserPaperButton=paperBtn.cloneNode('true');
        UserPaperButton.disabled=true;
        userBtn.appendChild(UserPaperButton);
    }
}

function PcChoice()
{
    if(pc_input==5)
    {
        let PcRockButton=rockBtn.cloneNode('true');
        PcRockButton.disabled=true;
        pcBtn.appendChild(PcRockButton);
    }

    else if(pc_input==3)
    {
        let PcScissorButton=scissorBtn.cloneNode('true');
        PcScissorButton.disabled=true;
        pcBtn.appendChild(PcScissorButton);
    }

    else
    {
        let PcPaperButton=paperBtn.cloneNode('true');
        PcPaperButton.disabled=true;
        pcBtn.appendChild(PcPaperButton);
    }
}

// ROCK EVENT LISTENER

rockBtn.addEventListener('click',function(){
    UserChoice(5);
    PcChoice();
    MsgBox();
})

// SCISSOR EVENT LISTENER

scissorBtn.addEventListener('click',function(){
    UserChoice(3);
    PcChoice();
    MsgBox();
})

// PAPER EVENT LISTENER

paperBtn.addEventListener('click',function(){
    UserChoice(1);
    PcChoice();
    MsgBox();
})

