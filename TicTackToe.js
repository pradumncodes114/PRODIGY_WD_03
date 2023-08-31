plyr1=document.getElementById("player1");
plyr2=document.getElementById("player2");
msg=document.getElementById("message");
playerdetails=document.getElementById("playerdetails");
btns=document.querySelectorAll(".grid");
plyrname1=document.querySelector(".plyr1");
plyrname2=document.querySelector(".plyr2");
strike=document.getElementById("strike");

const winPattern=[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]

function checkWin(){
    for(let i=0;i<winPattern.length;i++){
        const[pos1,pos2,pos3]=winPattern[i];

        if(btns[pos1].innerText !=="" &&
        btns[pos1].innerText==btns[pos2].innerText &&
        btns[pos2].innerText==btns[pos3].innerText){
            console.log(plyrname1);
            if(btns[pos1].innerText=="X"){
            msg.innerText=plyrname1.value+" is winner!";
            }
            else{
            msg.innerText=plyrname2.value+" is winner!";

            }
            btns.forEach((element) => {
                element.disabled= true;
            })
            strike.classList="style"+i;
        }
    }
}

count=0;
btns.forEach((element) => {
    element.addEventListener("click", ()=>{
        if (count%2==0){
            element.innerText="X";
            element.disabled= true;
            count++;
        }
        else{
            element.innerText="O";
            element.disabled= true;
            count++;
        }
        checkWin();
        plyr1.classList.toggle("turn");
        plyr2.classList.toggle("turn");
        if(count==9){
            msg.innerText="Its a tie!";
        }
    }) 
});

function newGame(){
    plyr1.classList="turn";
    plyr2.classList="";
    btns.forEach((element) => {
        element.innerText="";
        element.disabled= false;
    })
    strike.classList="";
    msg.innerHTML="&nbsp;";
    count=0;
}
function startGame(){
    if(plyrname1.value=="" || plyrname2.value==""){
        alert("Player name can not be empty.");
    }
    else{
    plyr1.innerText="X : "+plyrname1.value;
    plyr2.innerText="O : "+plyrname2.value;
    playerdetails.style.display="none";
    plyr1.style.display="block";
    plyr2.style.display="block";
    }
    
}