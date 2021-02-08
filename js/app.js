'use strict';

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
if(userName.toLowerCase() === userinput1 || userName.toLowerCase() === userinput2)
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
}else {
  alert('please Read About me ') ;
  console.log('no');
}


// this is third prompt for where do i live
let userinput5='yes' ;
let userinput6 = 'y';
let cityname = prompt('Do I live in Irbid  ?');
if( cityname.toLowerCase() === userinput1 || cityname.toLowerCase() === userinput2){
  alert( 'I Live in irbid  ' );
  console.log('irbid')
}else {
  alert('please Read About me ') ;
  console.log('no')
}


// this is fourth prompt about my degree
let userinput7='yes' ;
let userinput8 = 'y';
let degree = prompt('Is My Degree Is M.Sc  ?');
if( degree.toLowerCase()=== userinput7 || degree.toLowerCase()=== userinput8){
  alert( 'I Have M.Sc ' );
  console.log('M.Sc') ;
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
  
}else {
  alert('please Read About me ') ;
  console.log('no')
}

let aboutMe= alert(`U R Most Welcom ${userN},My Name is Eman, i live in irbid, i have M.Sc degree and i am student @ LTUC _ ASAC `) ;


