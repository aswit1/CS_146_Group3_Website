
function submitBusiness() {
    var newBusiness = document.getElementById("businessName");
    var newBusiness_copy = (' ' + newBusiness.value).slice(1);
    var newBusinessReview_copy = (' ' + newBusiness.value).slice(1);
    newBusiness.value = "";
    alert("Submitted successfully! Our team will review your business.");
}

// let stars = document.querySelectorAll(".ratings span");
// let products = document.querySelectorAll(".ratings");
// let ratings = [];

// for (let star of stars){
//    star.addEventListener("click", function(){
//       let children = star.parentElement.children;
//       for(let child of children){
//          if(child.getAttribute("data-clicked")){
//             return false;
//          }
//       }


//       this.setAttribute("data-clicked", "true");
//       let rating = this.dataset.rating;
//       let productId = this.parentElement.dataset.productid
      
//       let data = {
//          "stars": rating,
//          "product-id": productId
//       }
//       ratings.push(data);
//       localStorage.setItem("rating", JSON.stringify(ratings));
//    });
// }

// if(localStorage.getItem("rating")){
//    ratings = JSON.parse(localStorage.getItem("rating"));
//    for(let rating of ratings){
//       for (let product of products){
//          if(rating["product-id"] == product.dataset.productid){
//             let reversedStars = Array.from(product.children).reverse();
//             let index = parseInt(rating["stars"]) - 1;
//             reversedStars[index].setAttribute("data-clicked", "true");

//          }
//       }
//    }
// }


function addBusiness (newBusiness) {
    var newBusinessDiv = document.createElement("div");
    document.getElementById("newBusinessesGoHere").appendChild(newBusinessDiv);
    newBusinessDiv.className = "business card";
    newBusinessDiv.innerHTML = "<span><h3>${newBusiness}</h3></span>";
}

