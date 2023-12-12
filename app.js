
function submitBusiness() {
    var newBusiness = document.getElementById("businessName");
    var newBusinessLocation = document.getElementById("businessLocation");
    var newBusiness_copy = (' ' + newBusiness.value).slice(1);
    var newBusinessLocation_copy = (' ' + newBusinessLocation.value).slice(1);
    newBusiness.value = "";
    newBusinessLocation.value = "";
    alert("Submitted successfully! Our team will review your business.");
}


function addBusiness (newBusiness) {
    var newBusinessDiv = document.createElement("div");
    document.getElementById("newBusinessesGoHere").appendChild(newBusinessDiv);
    newBusinessDiv.className = "business card";
    newBusinessDiv.innerHTML = "<span><h3>${newBusiness}</h3></span>";
}

//starting all users average rating & number of submissions (arbitrary)
var userAverage1 = 4.1;
var userSubmissions1 = 10;
var userAverage2 = 2.7;
var userSubmissions2 = 10;
var userAverage3 = 4.8;
var userSubmissions3 = 20;

function submitStarRating1() {
    //update average user score for 1st business
    var currentTotal = (userAverage1*userSubmissions1);
    var userRating = parseFloat(document.getElementById("output").value);
    var newTotal = (currentTotal+userRating);
    userSubmissions1++;
    userAverage1 = (newTotal/userSubmissions1);
    document.getElementById("userScore1").innerHTML = userAverage1;
}

function submitStarRating2() {
    //update average user score for 2nd business
    var currentTotal = (userAverage2*userSubmissions2);
    var userRating = parseFloat(document.getElementById("output2").value);
    var newTotal = (currentTotal+userRating);
    userSubmissions2++;
    userAverage2 = (newTotal/userSubmissions2);
    document.getElementById("userScore2").innerHTML = userAverage2;
}

function submitStarRating3() {
    //update average user score for 3rd business
    var currentTotal = (userAverage3*userSubmissions3);
    var userRating = parseFloat(document.getElementById("output3").value);
    var newTotal = (currentTotal+userRating);
    userSubmissions3++;
    userAverage3 = (newTotal/userSubmissions3);
    document.getElementById("userScore3").innerHTML = userAverage3;
}

document.addEventListener('DOMContentLoaded', function(){
    //load starting average user scores
    document.getElementById("userScore1").innerHTML = userAverage1;
    document.getElementById("userScore2").innerHTML = userAverage2;
    document.getElementById("userScore3").innerHTML = userAverage3;
   (function(){
       let sr = document.querySelectorAll('.my-star');
       let i = 0;
       //loop through stars
       while (i < sr.length){
           //attach click event
           sr[i].addEventListener('click', function(){
               //current star
               let cs = parseInt(this.getAttribute("data-star"));
               //output current clicked star value
               document.querySelector('#output').value = cs;
               /*our first loop to set the class on preceding star elements*/
               let pre = cs; //set the current star value
               //loop through and set the active class on preceding stars
               while(1 <= pre){
                   //check if the classlist contains the active class, if not, add the class
                   if(!document.querySelector('.star-'+pre).classList.contains('is-active')){
                       document.querySelector('.star-'+pre).classList.add('is-active');
                   }
                   //decrement our current index
                   --pre;
               }//end of first loop
 
               /*our second loop to unset the class on succeeding star elements*/ 
               //loop through and unset the active class, skipping the current star
               let succ = cs+1;
               while(5 >= succ){
                   //check if the classlist contains the active class, if yes, remove the class
                   if(document.querySelector('.star-'+succ).classList.contains('is-active')){
                       document.querySelector('.star-'+succ).classList.remove('is-active');
                   }
                   //increment current index
                   ++succ;
               }
 
           })//end of click event
           i++;
       }//end of while loop
   })();//end of function
 })

 document.addEventListener('DOMContentLoaded', function(){
   //load starting average user scores
   document.getElementById("userScore1").innerHTML = userAverage1;
   document.getElementById("userScore2").innerHTML = userAverage2;
   document.getElementById("userScore3").innerHTML = userAverage3;
  (function(){
      let sr = document.querySelectorAll('.my-star2');
      let i = 0;
      //loop through stars
      while (i < sr.length){
          //attach click event
          sr[i].addEventListener('click', function(){
              //current star
              let cs = parseInt(this.getAttribute("data-star2"));
              //output current clicked star value
              document.querySelector('#output2').value = cs;
              /*our first loop to set the class on preceding star elements*/
              let pre = cs; //set the current star value
              //loop through and set the active class on preceding stars
              while(1 <= pre){
                  //check if the classlist contains the active class, if not, add the class
                  if(!document.querySelector('.star2-'+pre).classList.contains('is-active')){
                      document.querySelector('.star2-'+pre).classList.add('is-active');
                  }
                  //decrement our current index
                  --pre;
              }//end of first loop

              /*our second loop to unset the class on succeeding star elements*/ 
              //loop through and unset the active class, skipping the current star
              let succ = cs+1;
              while(5 >= succ){
                  //check if the classlist contains the active class, if yes, remove the class
                  if(document.querySelector('.star2-'+succ).classList.contains('is-active')){
                      document.querySelector('.star2-'+succ).classList.remove('is-active');
                  }
                  //increment current index
                  ++succ;
              }

          })//end of click event
          i++;
      }//end of while loop
  })();//end of function
})

document.addEventListener('DOMContentLoaded', function(){
   //load starting average user scores
   document.getElementById("userScore1").innerHTML = userAverage1;
   document.getElementById("userScore2").innerHTML = userAverage2;
   document.getElementById("userScore3").innerHTML = userAverage3;
  (function(){
      let sr = document.querySelectorAll('.my-star3');
      let i = 0;
      //loop through stars
      while (i < sr.length){
          //attach click event
          sr[i].addEventListener('click', function(){
              //current star
              let cs = parseInt(this.getAttribute("data-star3"));
              //output current clicked star value
              document.querySelector('#output3').value = cs;
              /*our first loop to set the class on preceding star elements*/
              let pre = cs; //set the current star value
              //loop through and set the active class on preceding stars
              while(1 <= pre){
                  //check if the classlist contains the active class, if not, add the class
                  if(!document.querySelector('.star3-'+pre).classList.contains('is-active')){
                      document.querySelector('.star3-'+pre).classList.add('is-active');
                  }
                  //decrement our current index
                  --pre;
              }//end of first loop

              /*our second loop to unset the class on succeeding star elements*/ 
              //loop through and unset the active class, skipping the current star
              let succ = cs+1;
              while(5 >= succ){
                  //check if the classlist contains the active class, if yes, remove the class
                  if(document.querySelector('.star3-'+succ).classList.contains('is-active')){
                      document.querySelector('.star3-'+succ).classList.remove('is-active');
                  }
                  //increment current index
                  ++succ;
              }

          })//end of click event
          i++;
      }//end of while loop
  })();//end of function
})