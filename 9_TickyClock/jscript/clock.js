var d, h, m, s, clock, clr;

function clocky() {
  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();

  if (h <= 9) {
    h = "0" + h;
  }
  if (m <= 9) {
    m = "0" + m;
  }
  if (s <= 9) {
    s = "0" + s;
  }

  clock = h + ":" + m + ":" + s;

  //rgb will be selected according to hour: minute:second
  clr = "#" + h + m + s;
  document.body.style.background = clr;

  document.getElementById("clock").innerHTML = clock;
  //call itself afrer each 1 sec
  setTimeout(clocky, 1000);
}

clocky();
