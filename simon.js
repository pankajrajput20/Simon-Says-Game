let gameSeq=[];
let userSeq=[];
let btns=["red","yellow","green","blue"];

let start=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(start==false){
        console.log("game started");
        start=true;
        levelUp();
    }
});
function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
    }
function levelUp(){
    userSeq=[];
level++;
h2.innerText=`Level ${level}`;

let rndmIdx=Math.floor(Math.random()*3);
let rndmclr=btns[rndmIdx];
let rndbtn=document.querySelector(`.${rndmclr}`);
gameSeq.push(rndmclr);
console.log(gameSeq)
gameFlash(rndbtn);
}

function checkbtn(idx){
    if(userSeq[idx]==gameSeq[idx]){
       if(userSeq.length ==gameSeq.length){
     setTimeout(levelUp,1000);
       }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b> ${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress(){
let btn=this;
userFlash(btn);
userClr=btn.getAttribute("id");
userSeq.push(userClr);
checkbtn(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btnn of allbtns){
    btnn.addEventListener("click",btnPress);
}
function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}