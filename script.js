const startbtn = document.getElementById("startbtn");
const content = document.getElementById("content");
const loader = document.getElementById("loader");
const music = document.getElementById("music");

//Add an event listner to the start button
startbtn.addEventListener("click", () => {
  //Show the loader and hide the button
  loader.style.display = "";
  startbtn.style.display = "none";
  //Wait for the music to start
  music.play().then(() => {
    //Hide the loader and show the content
    content.style.display = "";
    loader.style.display = "none";
  });
});