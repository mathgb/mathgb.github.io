function overlayIn() {
  $("#overlay").animate({
    top: "0",
    left: "0"
  }, 200);
};

function overlayOut() {
  $("#overlay").animate({
    top: "-100vh",
    left: "-100vw"
  }, 200);
};

$(document).ready(function() {
  $("#overlay-btn").click(overlayIn);
  $("#overlay-closer").click(overlayOut);
});
