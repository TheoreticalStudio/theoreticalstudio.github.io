document.addEventListener("DOMContentLoaded", function() {
  var sidebar = document.getElementById('sidebar');
  var toggleBtn = document.querySelector('.toggle-btn');

  window.addEventListener('scroll', function() {
    if (window.innerWidth > 1024 && window.scrollY >= 400) {
      sidebar.classList.add('show');
    } else {
      sidebar.classList.remove('show');
    }
  });

  toggleBtn.addEventListener('click', function() {
    toggleSidebar();
  });
});

function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('show');
}
