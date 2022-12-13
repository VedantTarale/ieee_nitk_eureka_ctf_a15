let element;
function play_pause_audio() {
  if ((element = document.getElementsByClassName("fa-play")[0])) {
    document.getElementById("music").play();
    element.setAttribute("class", "fa fa-pause fa-2x");
  } else {
    element = document.getElementsByClassName("fa-pause")[0];
    document.getElementById("music").pause();
    element.setAttribute("class", "fa fa-play fa-2x");
  }
}
