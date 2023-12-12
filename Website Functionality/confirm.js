function submitBusiness() {
    var newBusiness = document.getElementById("name");
    var newBusinessLocation = document.getElementById("location");
    var newBusiness_copy = (' ' + newBusiness.value).slice(1);
    var newBusinessLocation_copy = (' ' + newBusinessLocation.value).slice(1);
    alert("Submitted successfully! Our team will review your business.");
}


function addBusiness (newBusiness) {
    var newBusinessDiv = document.createElement("div");
    document.getElementById("newBusinessesGoHere").appendChild(newBusinessDiv);
    newBusinessDiv.className = "business card";
    newBusinessDiv.innerHTML = "<span><h3>${newBusiness}</h3></span>";
}


let form=document.getElementById("formSubmission");

let table=document.getElementById('data');
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  submit();
})


const submit=()=>{
  let name = document.getElementById("name").value;
    let loc = document.getElementById("location").value;
    let rating = document.getElementById("rating").value;

  let newArray = [name,loc,rating];
  newArray.forEach((item)=>{
      var li = document.createElement("li");
  var text = document.createTextNode(item);
  li.appendChild(text);
  table.appendChild(li);
  })
  form.reset(); 
}


