let doorCont = document.querySelector("#door-container");
let cont = document.querySelector("#container");
let h1 = document.querySelector("#h1");

function pressD() {
  if (doorCont.innerHTML.indexOf("closed", 0) !== -1) {
    doorCont.innerHTML = `
        <img id="door" src="images/door-open.png" class="door-img" />  
        <img id="white-rabbit" src="images/white_rabbit.png" class="rabbit" />
      `;
    h1.innerHTML = "Follow ME...";
    doorCont = document.querySelector("#door-container");
    let wRabbit = document.querySelector("#white-rabbit");
    wRabbit.addEventListener("click", goAbout);
  } else {
    doorCont.innerHTML = `
        <img id="door" src="images/door-closed.png" class="door-img" /> 
        <img id="white-rabbit" src="images/empty.png" class="rabbit" />        
    `;
    h1.innerHTML = "I still there... Open the door!";
  }
}
doorCont.addEventListener("click", pressD);

function goAbout() {
  window.location.href = "/about.html";
}
