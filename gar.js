// let btn = document.querySelector("button")
// btn.addEventListener("click", () => {
//     nav.classlist.toggle("active")
// }) 


// var massages = document.getElementById("massages")
// var textbox = document.getElementById("textbox")
// var button = document.getElementsByClassName(".buttgo")

// button.addEventListener("click", function(){
//     var newMessage = document.createElement("li")
//     newMessage.innerHTML =  textbox.value;
//     massages.appendChild(newMessage);
//     textbox.value = "";
    
// });
// let button = document.getElementsByClassName(".btngo")
// button.addEventListener("click",(e)=> {
// document.body.classList.toggle("active")
// })
let btn=document.querySelector("button")
let nav=document.querySelector("nav")
btn.addEventListener("click", ()=>{
    nav.classList.toggle("active")
})

let button=document.querySelector("button")

button.addEventListener("click",(e)=>{
    document.body.classList.toggle("active")
})
let .save=document.querySelector("button")
    let ul=document.querySelector("ul")
    button.addEventListener("click",function(){
        let input=document.querySelector("input").value
        if (input.length!=0){
            let .li=document.createElement(".li")
            .li.innerHTML=input
            ul.appendChild(li)
        }

        
    })
    var p1=0; 
var p2=0;
let log=console.log;
function send(who) {
	let text1=document.getElementById("typing").value;
	let vaqt=online(true);
	var text="";
	if (text1!="" && text1[0]!=" ") {
	//Asosiy
	for (i in text1) {
		text+=text1[i];
		if (i%30==0 && i!=0) {
			text+="\n";
		}
	}
	//ptichka you
	if (who=="me") {
		++p1;
		log(p2);
		if (p2>0) {
			for (let doublep2=0; doublep2<p2; doublep2++){
				let youp=document.getElementsByClassName("youpid")[doublep2];
				youp.src="./src/images/ptichka1.png";
				
			}
		}
	}

	//ptichka me
	if (who=="you") {
		++p2;
		if (p1>0) {
			for (let doublep1=0; doublep1<p1; doublep1++){
				let mep=document.getElementsByClassName("mepid")[doublep1];
				mep.src="./src/images/ptichka1.png";
			}
		}
	}


	let message = "<div class=\""+who+"\"><span class=\""+who+ "p\"><img class=\""+who+ "pid\" src=\"./src/images/ptichka.png\"></span>"+text+"<span class=\"vaqt\">"+vaqt+"</span></div>";
	let chat = document.getElementById("chat").innerHTML+=message;
	document.getElementById("typing").value="";
	}
}

function ptichka(){

}

function online(vaqt=false) {
	let isOnline=document.getElementById("isOnline");
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  hour = updateTime(hour);
  min = updateTime(min);
  if (vaqt) {return hour + " : " + min};
  if (min%2==0) {
  	isOnline.innerText="online";
  	isOnline.style.color="#439de3";
  } else{
  	 isOnline.innerText = "oxirgi marta "+hour + " : " + min+ " da" ; /* adding time to the div */
 	isOnline.style.color="#cfd6d7";
  }
    var t = setTimeout(function(){ online() }, 1000); /* setting timer */
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

function white(which) {
	// body...
	let pimg=document.getElementById(which);
	if (which === "file") {
		pimg.src=".smile-svgrepo-com.svg";
	}
	if (which === "smile") {
		pimg.src="./src/images/smile1.png";
	}

}

function simple(which) {
	// body...
	let pimg=document.getElementById(which);
	if (which === "file") {
		pimg.src="./src/images/pclip.png";
	}
	if (which === "smile") {
		pimg.src="./src/images/smile.png";
	}

}

var k=false;
function sunmoon(){
	k=!k;
	let sunmoon=document.getElementById("sun");
	let who=document.getElementById("who");
	let sum=document.getElementById("sum");
	let body=document.getElementById("body");
	if (k) {
	sunmoon.src="./src/images/moon.png";
	who.style.background="#298276";
	sum.style.backgroundImage = "url('./src/Images/bgimg1.jpg')";
	body.style.background="#17a";
} else {
	sunmoon.src="./src/images/sun.png";
	who.style.background="#17212b";
	sum.style.backgroundImage = "url('./src/Images/bgimg.jpg')";
	body.style.background="#c9cf19";
}


}
