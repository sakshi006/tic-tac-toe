const b1=document.querySelector(".b1");
const b2=document.querySelector(".b2");
const b3=document.querySelector(".b3");
const b4=document.querySelector(".b4");
const b5=document.querySelector(".b5");
const b6=document.querySelector(".b6");
const b7=document.querySelector(".b7");
const b8=document.querySelector(".b8");
const b9=document.querySelector(".b9");
const player1= document.querySelector(".player1");
const player2= document.querySelector(".player2");
const greeting1 = document.querySelector(".greeting1");
const greeting2 = document.querySelector(".greeting2");
const output = document.querySelector(".output");
const buttons = document.querySelector(".gif")


const play1 = "🥵X";
const play2 = "🥶O";


var name1,name2;
//GREETINGS!
player1.addEventListener("input",function(e){
    name1=e.target.value;
    greeting1.innerHTML = "Hello! "+name1+" , You are Player1";
})

player2.addEventListener("input",function(e){
    name2=e.target.value;
    greeting2.innerHTML = "Hello! "+name2+" , You are Player2";
})


//GAAAAMEEEEE

function clicked(button,click){
    if(name1===undefined)
      {
          output.innerHTML="Player 1 : Enter name first"
      }
    else if(name2===undefined)
    {
        output.innerHTML="Player 2 : Enter name first"
    }
    else{
     if(click>9)
     click%=9;
    if(button.value=== "")
     {
         if(click%2==0)
          {
              button.value=play2;
              output.innerHTML= "Player 1 turn (🥵)";
          }
         else
         {
             button.value=play1;
             output.innerHTML= "Player 2 turn(🥶)";
         }
         click++;
         clicks=click;
      }
    else
    {
        output.innerHTML="try another block";
    }
    checkThrees();
}
}

function checkThrees(){
    // console.log(clicks);
    if((b1.value===b2.value && b2.value===b3.value) || (b1.value===b4.value && b4.value===b7.value)|| (b1.value===b5.value && b5.value===b9.value))
      {
          if(b1.value==='🥵X')
           {
              result1();
               clicks=1;
               clear();
           }
          else if(b1.value==='🥶O')
           {
               result2();
               clicks=1;
               clear();
           }
      }
    else if((b4.value===b5.value && b5.value===b6.value) || (b2.value===b5.value && b5.value===b8.value)|| (b3.value===b5.value && b5.value===b7.value))
    {
        if(b5.value==='🥵X')
        {
            result1();
            clicks=1;
            clear();
        }
        else if(b5.value==='🥶O')
        {
           result2();
            clicks=1;
            clear();
        }
    }
    else if((b9.value===b8.value && b8.value===b7.value) || (b9.value===b6.value && b6.value===b3.value))
    {
        if(b9.value==='🥵X')
        {
            result1();
            clicks=1;
            clear();
        }
        else if(b9.value==='🥶O')
        {
            result2();
            clicks=1;
            clear();
        }
    }
    else if(clicks-1==9)
    {
        console.log(clicks);
        alert("Match tie!")
        clicks=1;
        clear();
    }
}


function result1()
{
    alert("Player1 wins!");
}
function result2()
{
    alert("Player2 wins!");
}




var clicks=1;
b1.addEventListener("click",()=>clicked(b1,clicks));
b2.addEventListener("click",()=>clicked(b2,clicks));
b3.addEventListener("click",()=>clicked(b3,clicks));
b4.addEventListener("click",()=>clicked(b4,clicks));
b5.addEventListener("click",()=>clicked(b5,clicks));
b6.addEventListener("click",()=>clicked(b6,clicks));
b7.addEventListener("click",()=>clicked(b7,clicks));
b8.addEventListener("click",()=>clicked(b8,clicks));
b9.addEventListener("click",()=>clicked(b9,clicks));

function clear(){
    b1.value="";
    b2.value="";
    b3.value="";
    b4.value="";
    b5.value="";
    b6.value="";
    b7.value="";
    b8.value="";
    b9.value="";
    greeting1.innerHTML="";
    greeting2.innerHTML="";
    output.innerHTML="";
    player1.value="";
    player2.value="";
}
