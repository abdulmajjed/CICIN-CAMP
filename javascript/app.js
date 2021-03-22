// DataTypes

/*
- string: Text in JS

-numbers: All types of numbers in JS

-Boolean: True or False



// "Hello my name is abdulmajjed"
// 'strings' 

// alert(5+5);



var x=5;
var y=7;
 
alert (x+y);
// operators: sympol that does an action
// asignment operator : 
// =
// += 
x+=7;
//
x=x+7
//-=
//x-=10
//x=x-10

// arithmatic operators: 
// + plus
// - minus
// * multypliy
// / devide
// % modules
// ** power of\
var hungery = True;
*/ 


/*

alert(UserName);
var x=5;
var y=7;
console.log(x+y);
*/// concatination

/*
== compare the value only
=== compare the value and Datattyoe
!= not equal value only
!== not equal value and datatypes
< smaller than 
>  biggerthan
>= smaller than or equal
<=  bigger tha or equal


var FirstName="Adulmajjed"
var LastName="Al-Najjar"

 //   var age=15;
//    var age2=20;

 //   console.log(age>age2);
 if(conditions){ 
    if true do this code... 
}


var hungrey=true;
var tired=true;

if(hungrey==true)
{console.log('im not working');
}else if(tired==true)
{
    console.log('not working cause tired');
}

else{
    console.log("im working")
}




1- Ask the user whats your favorite artist

2- show image based on answer 


Var CampingType=prompt("How to know the teste ?");


if(CampingType=='Classical'){
    document.write('<img src="');  
 else if {(CampingType==Family)
    document.write( );
}
else{

    alert( "choose Classical ,Family or Descovering "
    */
//---------------------

/*
var UserName=" Abdulmajjed";
var FirstName="Adulmajjed"
var LastName="Al-Najjar"
var FullName=FirstName+LastName



console.log(FullName);


var UserName= prompt("What's your name?");
console.log(UserName);

document.write('<h2>'+UserName+'</h2>');
alert('choose between classical Or family one!')


// var person=prompt("its Classical or Family?" );

//  while(person!=='family'&&person!=='classical')
  var  person= prompt('please choose classical or family');


   


 var age = prompt("your old ?");
;
 function getage(age){
console.log(age)

 if(age >=18 && age <=18 ){
    alert('Welcome Our Site');
 } else if( age <18 || age>39){
    alert('BACK HOME !!  ');
 } else{
    alert('Welcome Our Site :)') }; 

}
 getage(age);


 var numberofpicture =  prompt('number of picture??')

 var numberofpersons = function(){ 
 while (numberofpicture !== 'classical' && numberofpicture !== 'family'){
    numberofpicture = prompt('choose family or classical');
 }

 var numberofpicture = prompt('person !!');

  if (numberofpicture=='classical'){
    painting = '<img src="pictures/classical.jpg"/>';
  }else if(pnumberofpicture=='family'){
    painting = '<img src="pictures/family.jpg"/>';
      }else{
      alert("have fun !!");
     }     
  
     console.log(painting);

    
}
     var result = "";
     for (var i = 0; i < numberofpicture; i++) {
         result += numberofpicture;
     }
     
        

   */
  
     

     var UserName=" Abdulmajjed";
var FirstName="Adulmajjed"
var LastName="Al-Najjar"
var FullName=FirstName+LastName

console.log(FullName);

var UserName= prompt("What's your name");
console.log(UserName);

document.write('<h2>'+UserName+'</h2>');
alert('choose between classical Or family one!')

var person=prompt("its Classical or Family?" );

while(person!=='family'&&person!=='classical'){
    person= prompt('please choose classical or family');

}

var age = prompt("whats your age?");
function getAge(userAge) {

console.log(userAge);
if(userAge>=18 && userAge<=18 ){
    alert('Welcome Our Site');
 } else if( userAge<18 || userAge>39){
    alert('BACK HOME !!  ');
 } else{
    alert('Welcome Our Site :)') }; 
}
    getAge(age);

 var HowManyPersonYOuAre =prompt('How Many Person You Are??')
var painting = '';

  if(person=='classical'){
    painting = '<img src="pictures/classical.jpg"/>';
  }else if(person=='family'){
    painting = '<img src="pictures/family.jpg"/>';
      }else{
      alert("have fun !!");
     }     
  

     var Persons = prompt('number Of picture?');

     
     var result = '';
     console.log(painting);
     
     for (var i = 0; i < Persons; i++) {
         result += painting;
     }
     
     console.log(result);
     
     document.write(result);