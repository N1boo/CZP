//mijn javascriptje
var icon = document.getElementById("mobile");
var home_text = document.getElementById("text_home");
function open_hamburger_menu() {
  if (icon.style.display === "block") {
    icon.style.display = "none";
    home_text.style.display = "block";
  } else {
    icon.style.display = "block";
    home_text.style.display = "none";
  }
}

function close_mobile_menu(x) {
  console.log("close mobile:", icon);
  if (x.matches) {
    icon.style.display = "none";
    home_text.style.display = "block";
  }
}

const match_media = window.matchMedia("(min-width: 600px)");

close_mobile_menu(match_media);

match_media.addEventListener("change", function () {
  close_mobile_menu(match_media);
});
