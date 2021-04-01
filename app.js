var readlineSync=require('readline-sync');
var name=readlineSync.question("Hello User, May I know your Name Please- ");
console.log("Welcome "+name);

   console.log("Let's See How Much You Know me..!! ");
   console.log("----------------------------------");

   console.log('\n');
   
   var questions=["What's my birth date? (Only Day No.)- ","My Favourite color? Black or Red  (Answer as B or R)- ","What would I prefer for vacation, Mountains or beaches? (Answer as M or B)- ","How Many Siblings Do I have?- ","Last one-My Fav Cuisine- Chinese or North-Indian (C or N)- "];
   var answer=[5,"B","M",3,"N"];
   var score =0;
   for(var a=0;a<questions.length;a++)
   {
     quiz(questions[a],answer[a]);
   }
   if(score>=4)
   {
     console.log("Your Final Score is "+score+"/5,"+ 
    '\n'+"Nicee, You Know me pretty well");
     console.log("Thanks for Playing");
   }
   else
   {
     console.log("Your Final Score is "+score+"/5, Thanks For Playing");
   }
 

function quiz(a,b)
{
  
  var ans=readlineSync.question(a);
  if(ans==b)
  {
    score=score+1;
    console.log("Correct Answer, Score is "+score+" now.");
    console.log('\n');
  }
  else
  {
    score=score-1;
    console.log("Oops, The correct answer was "+b+", Score is "+score+" now.");
    console.log('\n');
  }
}