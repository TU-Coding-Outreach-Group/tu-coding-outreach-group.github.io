document.addEventListener("DOMContentLoaded", function() {
  const collapsibleBtns = document.querySelectorAll(".collapsible-btn");

  collapsibleBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      const content = this.nextElementSibling;

      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});