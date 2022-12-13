let element;
function play_pause_audio() {
  if ((element = document.getElementsByClassName("fa-play")[0])) {
    document.getElementById("music").play();
    element.setAttribute("class", "fa fa-pause");
    document.getElementById("control-btn").style.border = "2px solid darkblue";
  } else {
    element = document.getElementsByClassName("fa-pause")[0];
    document.getElementById("music").pause();
    element.setAttribute("class", "fa fa-play");
    document.getElementById("control-btn").style.border = "2px solid black";
  }
}
