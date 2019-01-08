//function definition or declerarion
//zero parameter function
function showMsg(){
  alert("This is my first function");

}
showMsg();

function showTicket(name){
  alert("Welcome to Show"+name);
}

showTicket("horror");

function showData(name,age,gender,email){
  var user={};
  user.name=name;
  user.age=age;
  user.gender=gender;
  user.email=email;
  console.log(user);
}

showData("Prathibha",26,"Female","aba@gmail.com");
showData("ravi",32,"male","abc@gmail.com");
showData("pavan",33,"male","aa@gmail.com");
showData("preety",26,"Female","cc@gmail.com");
