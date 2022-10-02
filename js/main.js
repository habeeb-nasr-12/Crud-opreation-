var proudctNameInput = document.getElementById("proudctName")
var proudctpriceInput = document.getElementById("proudctprice")
var proudctcategoryInput = document.getElementById("proudctcategory")
var proudctdescInput = document.getElementById("proudctdesc")


var proudcts = []
var myindex;


if (localStorage.getItem("allproudcts") != null) {

  proudcts = JSON.parse(localStorage.getItem("allproudcts"))
  displaydata()
}

document.querySelector(".addbtn").addEventListener("click",addproudct)

function addproudct() {



if (document.getElementById("add").innerHTML == "ADD") {

  var proudct = {
    name: proudctNameInput.value,
    price: proudctpriceInput.value,
    category: proudctcategoryInput.value,
    desc: proudctdescInput.value
  }

  proudcts.push(proudct)

  localStorage.setItem("allproudcts", JSON.stringify(proudcts))
  displaydata()


  clear()





}
else {

  proudcts[myindex].name = proudctNameInput.value
  proudcts[myindex].price = proudctpriceInput.value
  proudcts[myindex].category = proudctcategoryInput.value
  proudcts[myindex].desc = proudctdescInput.value

  clear()
  displaydata()
  localStorage.setItem("allproudcts", JSON.stringify(proudcts))
  document.getElementById("add").innerHTML = "ADD"


}


}



function displaydata() {
  cartona = ""
  for (var i = 0; i < proudcts.length; i++) {

    cartona += `     <tr>
        <td>${proudcts[i].name}</td>
        <td>${proudcts[i].price}</td>
        <td>${proudcts[i].category}</td>
        <td>${proudcts[i].desc}</td>
        <td><button onclick="updateElement(${i})" class="btn btn-outline-warning ">UPDATE</button> </td>
        <td><button onclick="deleteElement(${i})" class="btn btn-outline-danger ">DELETE</button> </td>
      </tr>`

  }

  document.getElementById("tbody").innerHTML = cartona

}



function clear() {
  proudctNameInput.value = ""
  proudctpriceInput.value = ""
  proudctcategoryInput.value = ""
  proudctdescInput.value = ""



}

function deleteElement(index) {

  proudcts.splice(index, 1)
  localStorage.setItem("allproudcts", JSON.stringify(proudcts))
  displaydata()
}


function updateElement(index) {

  myindex = index;


  proudctNameInput.value = proudcts[index].name
  proudctpriceInput.value = proudcts[index].price
  proudctcategoryInput.value = proudcts[index].category
  proudctdescInput.value = proudcts[index].desc
  document.getElementById("add").innerHTML = "UPDATE"
  displaydata()
}





function search(term){
var contanier = ""
    for (var i=0;i<proudcts.length;i++){

  if(proudcts[i].name.toLowerCase().trim().includes( term.toLowerCase()) || proudcts[i].category.toLowerCase().trim().includes( term.toLowerCase())){
 
    contanier += `     <tr>
    <td>${proudcts[i].name}</td>
    <td>${proudcts[i].price}</td>
    <td>${proudcts[i].category}</td>
    <td>${proudcts[i].desc}</td>
    <td><button onclick="updateElement(${i})" class="btn btn-outline-warning ">UPDATE</button> </td>
    <td><button onclick="deleteElement(${i})" class="btn btn-outline-danger ">DELETE</button> </td>
  </tr>`



  }


}
document.getElementById("tbody").innerHTML=contanier

}

















































