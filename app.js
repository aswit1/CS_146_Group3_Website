
function submitBusiness() {
    var newBusiness = document.getElementById("businessName");
    var newBusinessReview = document.getElementById("businessReview");
    var newBusiness_copy = (' ' + newBusiness.value).slice(1);
    var newBusinessReview_copy = (' ' + newBusiness.value).slice(1);
    newBusiness.value = "";
    newBusinessReview.value= "";
    addBusiness();
    document.getElementById("newBusinessName").innerHTML;
    alert("Submitted successfully!");
}

function clearTextBusiness() {
    const clearBusinessValue = document.getElementById("businessName");
    clearBusinessValue.value = "";
};

function clearTextReview() {
    const clearReviewValue = document.getElementById("businessReview");
    clearReviewValue.value = "";
};

function addBusiness () {
    var newBusinessDiv = document.createElement("div");
    document.getElementById("newBusinessesGoHere").appendChild(newBusinessDiv);
    newBusinessDiv.className = "business card";
    //newBusinessDiv.innerHTML = "<span><h3><span id="newBusinessName"></span></h3><div class="container"><p>Location</p><h4><div class="rating"><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></div></h4></div></span>";
}