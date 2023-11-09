document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  var thumbnails = document.getElementsByClassName("thumbnail");
  var closeBtn = document.getElementsByClassName("close")[0];

  function isMobile() {
    return window.innerWidth < 768;
  }

  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function() {
      if (!isMobile()) {
        modal.style.display = "flex";
        modalImg.src = this.src;
      }
    });
  }

  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });

  modal.addEventListener("click", function(e) {
    if (!isMobile() && e.target === modal) {
      modal.style.display = "none";
    }
  });
});
