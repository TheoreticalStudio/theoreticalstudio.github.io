document.addEventListener("DOMContentLoaded", function() {
  var openModalBtn = document.getElementById("openModalBtn");
  var modal = document.getElementById("modal");
  var closeModalBtn = document.getElementById("closeModalBtn");

  openModalBtn.addEventListener("click", function() {
    modal.style.display = "flex";
    openModalBtn.style.display = "none";
  });

  closeModalBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });

  modal.addEventListener("click", function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
