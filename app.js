function grad() {
  let cel = document.getElementById("celsius");
  let fah = document.getElementById("fahrenheit");
  let res = document.getElementById("hid");
  let disp = document.getElementById("hid1");
  let te = document.getElementById("hid2");
  let num = Number(document.getElementById("num").value);

  if (fah.checked && cel.checked) {
    disp.style.transition = "05.s";
    disp.style.display = "block";
    res.innerHTML = "";
    te.style.display = "none";
  } else if (fah.checked) {
    res.innerHTML = Number((num * 5) / 9 + 32) + "°";
    res.style.color = "#C50404";
    disp.style.display = "none";
    te.style.display = "none";
  } else if (cel.checked) {
    res.innerHTML = Number(((num - 32) * 5) / 9) + "°";
    res.style.color = "#C50404";
    disp.style.display = "none";
    te.style.display = "none";
  } else {
    te.style.display = "block";
    res.innerHTML = "";
    disp.style.display = "none";
  }
  fah.checked = false;

  cel.checked = false;
}
