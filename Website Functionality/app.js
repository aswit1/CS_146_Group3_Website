
function submitBusiness() {
    var newBusiness = document.getElementById("businessName");
    var newBusinessReview = document.getElementById("businessReview");
    var newBusiness_copy = (' ' + newBusiness.value).slice(1);
    var newBusinessReview_copy = (' ' + newBusiness.value).slice(1);
    newBusiness.value = "";
    newBusinessReview.value= "";
    alert("Submitted successfully!");
}

function clearText() {
    const clearBusinessValue = document.getElementById("businessName");
    const clearReviewValue = document.getElementById("businessReview");
    clearBusinessValue.value = "";
    clearReviewValue.value = "";
};