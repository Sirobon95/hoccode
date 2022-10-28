// Menu--------
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// --------------------------------
// phần trình chiếu

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}
// ----------------------------------------------------------------------------------------------------
// JS đăng nhập / đăng ky

// let formLogin = document.getElementById('form-login');
// if(formLogin.attachEvent){
//   formLogin.attachEvent('submit',onFormSubmit);
// }
// else{
//   formLogin.addEventListener('submit',onFormSubmit);
// }
// function onFormSubmit(a){
//   let username = inputUsername.value ;
//   let password = inputPassword.value ;

//   if(username == newName && password == newPassword){
//     alert (" Đăng nhập thành công !");
//   }else ("Vui lòng nhập lại tài khoản hoặc mật khẩu")

// }
  // let newName = "sirobon" ;
  // let newPassword = "bonbon" ;
  // let inputUsername = document.getElementById('username');
  // let inputPassword = document.getElementById('password');

  // function login(){
  //      let username = inputUsername.value ;
  //      let password = inputPassword.value ;
  //      if(username == newName && password == newPassword){
  //         alert (" Đăng nhập thành công !");
  //         windown.location
  //       }else { 
  //         alert("Vui lòng nhập lại tài khoản hoặc mật khẩu");
  //       }
  // }   
 // -------------------------------------------------------------------------------------------

//  class modeProducts{
//   img;
//   name;
//   price;
//   constructor(img,name,price){
//     this.img = img ;
//     this.name = name ;
//     this.price = price ;
//   }
//  }

 
//  let a1 = new modeProducts("img","Bánh Ngọt", "50.000VND");
//  let a2 = new modeProducts("img","Bánh Pizza", "50.000VND");
//  let a3 = new modeProducts("img","Bánh Kem", "50.000VND");
//  let a4 = new modeProducts("img","Bánh trung thu", "50.000VND");
//  let a5 = new modeProducts("img","Bánh mỳ bò", "50.000VND");
//  let a6 = new modeProducts("img","Bánh bao", "50.000VND");

//  let modeProducts = [a1,a2,a3,a4,a5,a6];
//  let upSanpham = document.getElementById(addSanpham);

//  function addSanpham(){
//   let str = "" ;
//   for (let i = 0 ; i < modeProducts.length ; i++ ){
//     str += `<th>
//               <td><img src="${modeProducts[i].img}" width="220" height="150"></td>
//               <td>${modeProducts[i].name}</td>
//               <td>${modeProducts[i].price}</td>
//               <td><button onclick="edit(${i})">Edit</button></td>
//               <td><button onclick="xoa(${i})">Delete</button></td>
//             </th>`
//   } 
//   upSanpham.innerHTML = str;
//  }
//  addSanpham();

//  function add(){
//   let img = document.getElementById("inputImg").value ;
//   let name = document.getElementById("inputName").value ;
//   let price = document.getElementById("inputPrice").value ;
//   modeProducts.push(newOpj);
//   addSanpham();
//  }

//  function edit (index){
//   let img = prompt("img muốn sửa");
//   let name = prompt("mane muốn sửa");
//   let price = prompt("price muốn sửa");
//   modeProducts.splice(index,1,newOpj);
//   addSanpham();
//  }

//  function xoa (index){
//   modeProducts.splice(index,1);
//   addSanpham();
//  }






