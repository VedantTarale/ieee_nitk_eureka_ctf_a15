let element;
function play_pause_audio() {
  if ((element = document.getElementsByClassName("fa-play fa-3x")[0])) {
    document.getElementById("music").play();
    element.setAttribute("class", "fa fa-pause fa-3x");
  } else {
    element = document.getElementsByClassName("fa-pause fa-3x")[0];
    document.getElementById("music").pause();
    element.setAttribute("class", "fa fa-play fa-3x");
  }
}
function end_function() {
  element = document.getElementsByClassName("fa-pause fa-3x")[0];
  document.getElementById("music").pause();
  element.setAttribute("class", "fa fa-play fa-3x");
}
