 let score= JSON.parse(localStorage.getItem('score'))||{
  wins:0,
  loses:0,
  tie:0
};
document.querySelector(".score").innerHTML=`Wins: ${score.wins}\nLoses: ${score.loses}\nTies: ${score.tie}`
function randm()
{
  let computerMove;
  const chooseRandom=Math.random();
  if(chooseRandom>0 && chooseRandom<1/3)
  {
    computerMove='Rock';
  }
  else if(chooseRandom>=1/3 && chooseRandom<2/3)
  {
    computerMove='Paper';
  }
  else if(chooseRandom>=2/3 && chooseRandom<1)
  {
    computerMove='Scissor';
  }
  return computerMove;
}


function move(user)
{
  let result='';
  const computerMove=randm();
  if(user==='Rock')
  {
    if(computerMove==='Rock')
    {
      score.tie++;
      result="Tie.";
    }
    else if(computerMove==='Paper')
    {
      score.loses++;
      result='You Lose.';
    }
    else if(computerMove==='Scissor')
    {
      score.wins++;
      result='You Win.';
    }
  }
  else if(user==='Paper')
  {
    if(computerMove==='Rock')
    {
      score.wins++;
      result='You Win.';
    }
    else if(computerMove==='Paper')
    {
      score.tie++;
      result="Tie.";
    }
    else if(computerMove==='Scissor')
    {
      score.loses++;
      result='You Lose.';
    }
  }
  else if(user==='Scissor')
  {
    if(computerMove==='Rock')
    {
      score.loses++;
      result='You Lose.';
    }
    else if(computerMove==='Paper')
    {
      score.wins++;
      result='You Win.';
    }
    else if(computerMove==='Scissor')
    {
      score.tie++;
      result="Tie.";
    }
  }
  document.querySelector(".result").innerHTML=result;

  document.querySelector(".moves").innerHTML=`Your Move: <img src="./${user}-emoji.png"><span class="vs"> Vs </span>Computer Move: <img src="./${computerMove}-emoji.png"> `;

  document.querySelector(".score").innerHTML=`Wins: ${score.wins}\nLoses: ${score.loses}\nTies: ${score.tie}`;

  localStorage.setItem('score',JSON.stringify(score));
}
function resets(){
  score={
    wins:0,
    loses:0,
    tie:0
  };
  localStorage.setItem('score',JSON.stringify(score));

  document.querySelector(".score").innerHTML=`Wins: ${score.wins}\nLoses: ${score.loses}\nTies: ${score.tie}`;

  document.querySelector(".result").innerHTML="";

  document.querySelector(".moves").innerHTML=`Choose your Move`;
}



