'use strict';
let score =0 ; 
//Welcome Massage
let userN = prompt('Hello, What is Your Name ') ;
console.log(userN);
alert(`U R Welcome ${userN} to my Website :)`);
alert(`${userN} Lets Play Gussing Game :D`);
document.write(`Hello ${userN} `);


// This is the first Prompt for user
let userinput1='yes' ;
let userinput2 = 'y';
let userName = prompt('Do You know Me  ?') ;
if(userName.toLowerCase() === userinput1 || userName.toLowerCase() === userinput2 )
{
  alert('Hmmmmm U R My Friend :)') ;
  console.log(`${userinput1}${userinput2}${userName}`);
}else {

  alert('Please Read more about Me :( ') ;
}



//this is the second prompt for first name
let userinput3='YES' ;
let userinput4 = 'Y';
let input ='eman';
let fName = prompt('Is My First Name  Eman ?');
if( fName.toUpperCase() ===userinput3 || fName.toUpperCase() === userinput4){
  alert( 'My First Name is Eman ' );
  console.log('EMAN');
  score = score+1;
}else {
  alert('please Read About me ') ;
  console.log('no');
}


// this is third prompt for where do i live
let userinput5='yes' ;
let userinput6 = 'y';
let cityname = prompt('Do I live in Irbid  ?');
if( cityname.toLowerCase() === userinput5 || cityname.toLowerCase() === userinput6){
  alert( 'I Live in irbid  ' );
  console.log('irbid');
  score = score+1;
}else {
  alert('please Read About me ') ;
  console.log('no');
}


// this is fourth prompt about my degree
let userinput7='yes' ;
let userinput8 = 'y';
let degree = prompt('Is My Degree Is M.Sc  ?');
if( degree.toLowerCase()=== userinput7 || degree.toLowerCase()=== userinput8){
  alert( 'I Have M.Sc ' );
  console.log('M.Sc') ;
  score = score+1;
}else {
  alert('please Read About me ') ;
  console.log('no');
}


//this is fifth prompt about LTUC
let userinput9='yes' ;
let userinput10 = 'y';
let LTUc = prompt(' do i attend to LTUC -ASAC ?')
if( degree.toLowerCase()=== userinput9 || degree.toLowerCase() === userinput10){
  alert( 'iam LTUC - ASAC Student  ' );
  console.log('LTUC') ;
  score = score+1;
}else {
  alert('please Read About me ') ;
  console.log('no')
}

let aboutMe= alert(`U R Most Welcom ${userN},My Name is Eman, i live in irbid, i have M.Sc degree and i am student @ LTUC _ ASAC `) ;

//class - 03
/*Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
Indicates through an alert if the guess is “too high” or “too low”.
It should give the user exactly four opportunities to get the correct answer.
After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.*/

// Question No.1:what is my age ?

let correct= 34;
let i=0 ;
for(i =1 ; i<=4 ; i=i+1){
  let question1 = prompt('what is my age ?');
  question1 = parseInt(question1);

  if (question1 === correct){
    alert('I have '+correct +':)');
    console.log(question1);
    score = score+1;
    break;
  }
  else {
    if(question1>34)
    {
      alert('too high');
      alert('Try again');
      console.log('too high');

    }else if(question1<34){
      alert('too low');
      console.log('too low');
      alert('Try again');}
  } 
  if(i===4){
    alert('You finish your attampts');
    alert('i have 34 years ');
  }

}

/*As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
Add a 7th question that has multiple possible correct answers that are stored in an array.
Give the user 6 attempts to guess the correct answer.
The guesses will end once the user guesses a correct answer or they run out of attempts.
Display all the possible correct answers to the user.
Consider using a loop of some sort for this question.
*/

//Question No.7*/


let Arrcourse = ['html','js','css','java','python'];


let found = false;
for( i = 0 ; i<=6 ; i++){
  let userAns = prompt('what is the most PL used to build webpages?');
  for (let j=0 ; j<= Arrcourse.length; j++){
    if( userAns.toLowerCase()=== Arrcourse[j])
    {
      alert ('yes');
      console.log(userAns);
      score = score+1;
      found = true;
      break;
    }
  }
if(found === true){
console.log('n');
 break;
 }
}
alert('these are some PL using to in webdevelopment: '+ Arrcourse);
alert('Your score is '+ '  '+ score + 'out of 7');
alert(`Thanks ${userN} for your information :)`)

