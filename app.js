
function submitBusiness() {
    var newBusiness = document.getElementById("businessName");
    var newBusinessReview = document.getElementById("businessReview");
    var newBusiness_copy = (' ' + newBusiness.value).slice(1);
    var newBusinessReview_copy = (' ' + newBusiness.value).slice(1);
    newBusiness.value = "";
    newBusinessReview.value= "";
    document.getElementById("newBusinessName").innerHTML;
    alert("Submitted successfully! Our team will review your business.");
}

function clearTextBusiness() {
    const clearBusinessValue = document.getElementById("businessName");
    clearBusinessValue.value = "";
};

function clearTextReview() {
    const clearReviewValue = document.getElementById("businessReview");
    clearReviewValue.value = "";
};

function addBusiness (newBusiness) {
    var newBusinessDiv = document.createElement("div");
    document.getElementById("newBusinessesGoHere").appendChild(newBusinessDiv);
    newBusinessDiv.className = "business card";
    newBusinessDiv.innerHTML = "<span><h3>${newBusiness}</h3></span>";
}
//<span id="newBusinessName"></span>
//<div class="container"><p>Location</p><h4><div class="rating"><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></div></h4></div></span>

// const ratingStars = [...document.getElementsByClassName("rating__star")];
// const ratingResult = document.querySelector(".rating__result");

// printRatingResult(ratingResult);

// function executeRating(stars, result) {
//     const starClassActive = "rating__star fas fa-star";
//     const starClassInactive = "rating__star far fa-star";
//     const starsLength = stars.length;
//     let i;
//     stars.map((star) => {
//         star.onclick = () => {
//             i = stars.indexOf(star);
//             if (star.className.indexOf(starClassInactive) !== -1) {
//                 printRatingResult(result, i+1);
//                 for (i; i >= 0; --i) stars[i].className = starClassActive;
//             } else {
//                 printRatingResult(result, i);
//                 for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
//             }
//         }
//     });
// }

// function printRatingResult(result, num = 0) {
//     result.textContent = '${num}/5';
// }
// executeRating(ratingStars, ratingResult);

const ratingStars = document.getElementsByClassName("rating__star");
const ratingResult = document.querySelector(".rating__result");

printRatingResult(ratingResult);

function executeRating(stars, result) {
   const starClassActive = "rating__star fas fa-star";
   const starClassUnactive = "rating__star far fa-star";
   const starsLength = stars.length;
   let i;
   stars.map((star) => {
      star.onclick = () => {
         i = stars.indexOf(star);

         if (star.className.indexOf(starClassUnactive) !== -1) {
            printRatingResult(result, i + 1);
            for (i; i >= 0; --i) stars[i].className = starClassActive;
         } else {
            printRatingResult(result, i);
            for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
         }
      };
   });
}

function printRatingResult(result, num = 0) {
   result.textContent = `${num}/5`;
}

executeRating(ratingStars, ratingResult);