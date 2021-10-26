// $(document).ready(show_cupcakes);

var cup_cakes=[
    {"name":"Chocolate","calories":"high","weight":"200gm","color":"red"},
    {"name":"Carrot","calories":"medium","weight":"150gm","color":"rgb(158, 235, 44)"},
    {"name":"Banana","calories":"high","weight":"200gm","color":"red"},
    {"name":"Strawberry","calories":"low","weight":"160gm","color":"rgb(158, 235, 44)"},
    {"name":"Peanut","calories":"medium","weight":"200gm","color":"red"}
];
// function show_cupcakes(){
    //write code that shows the cupcakes in the table as per the instructions
// }
for(i=0 ; i<5 ;i++){
// let com=document.getElementsByClassName("name")[i].body.style.background= "black"
// .innerHTML=cup_cakes[i].name
document.getElementsByClassName("name")[i].innerHTML=cup_cakes[i].name
document.getElementsByClassName("name")[i].style.backgroundColor = cup_cakes[i].color;
document.getElementsByClassName("type")[i].innerHTML=cup_cakes[i].calories
document.getElementsByClassName("type")[i].style.backgroundColor = cup_cakes[i].color;
document.getElementsByClassName("weight")[i].innerHTML=cup_cakes[i].weight
document.getElementsByClassName("weight")[i].style.backgroundColor = cup_cakes[i].color;
}


// function validate(){
    //write code that validates the form
    let boolvalidate ;
    function validate() {
        boolvalidate="";
//username
if (!($('#CustomerName').val().length >= 5 && $('#CustomerName').val().length <= 16)) {
    boolvalidate += "false";
    document.getElementById('comment').innerText = "the name must me between 5 - 16, idc if your name is mai";
    document.getElementById('comment').style.color = 'red';
    $('#CustomerName').css({ "border": "2px solid red" });
 }
 else {
    boolvalidate += "true";
    document.getElementById('comment').innerText = "You're good to go";
    document.getElementById('comment').style.color = 'green';
    $('#CustomerName').css({ "border": "2px solid green" });
}

   //Count Chcek 

   if (!($('#Count').val() > 0 && $('#Count').val() <= 15)) {
    boolvalidate += "false";
    document.getElementById('comment-1').innerText = "You can't go more than 15 faty";
    document.getElementById('comment-1').style.color = 'red';
    $('#Count').css({ "border": "2px solid red" });

} else {
    boolvalidate += "true";
    document.getElementById('comment-1').innerText = "You're good to go";
    document.getElementById('comment-1').style.color = 'green';
    $('#Count').css({ "border": "2px solid green" });
}
   // check  type  -------------
   if (($('#Type').val() == 'none')) {
    boolvalidate += "false";
    $('#Type').css({ "border": "2px solid red" });
} else {
    boolvalidate += "true";
    $('#Type').css({ "border": "2px solid green" });
}
 // Delivery Check  ------------  
 
 if (($('#DeliveryTime').val() == 'none')) {
    boolvalidate += "false";
    $('#DeliveryTime').css({ "border": "2px solid red" });

} else {
    boolvalidate += "true";
    $('#DeliveryTime').css({ "border": "2px solid green" });
}


 // selectAllergiesInput chcek -------------------------
 if($('#Type').val() == 'choco' && ($('#Allergies').val() == 'dairy')){
    $('#Allergies').css({ "border": "2px solid red" });
    $('#comment-3').css({ "color": "red" });
    boolvalidate+="false";
    document.getElementById('comment-3').innerText="The choco has dairy sry for that !";
}else if($('#Type').val() == 'pecan' && ($('#selectAllergiesInput').val() == 'nut')){
    $('#Allergies').css({ "border": "2px solid red" });
    $('#comment-3').css({ "color": "red" });
    document.getElementById('comment-3').innerText="The pecan has nut sry for that !";
    boolvalidate+="false";
   }else {
    $('#Allergies').css({ "border": "2px solid green" });
    document.getElementById('comment-3').innerText="That's better ";
    $('#comment-3').css({ "color": "green" });
    boolvalidate+="true";
}

if($('#Type').val() == 'choco' && ($('#DeliveryTime').val() == 't4')){
    $('#DeliveryTime').css({ "border": "2px solid red" });
    document.getElementById('comment-4').style.color = 'red';
    document.getElementById('comment-4').innerText=" We can't deliver choco at 4";
    boolvalidate+="false";

}else {$('#DeliveryTime').css({ "border": "2px solid green" });
document.getElementById('comment-4').style.color = 'green';
document.getElementById('comment-4').innerText=" Good";
boolvalidate+="true";
}

if(((boolvalidate.includes("false"))? false : true)){
sessionStorage.setItem('user',$('#CustomerName').val());

}
return (boolvalidate.includes("true"))? false : true;

}

function show_storage() {
//write code that shows the name from local storage
document.getElementById('welcome').innerText= "Welcome "+sessionStorage.getItem('user');

}
    

// function show_storage(){
//write code that shows the name from local storage