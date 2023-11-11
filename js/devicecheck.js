document.addEventListener("DOMContentLoaded", function() {
  var button1 = document.getElementById("AppStore");
  var button2 = document.getElementById("GooglePlay");

  var userAgent = navigator.userAgent.toLowerCase();

  // Проверка, является ли устройство устройством Apple
  var isAppleDevice = /iphone|ipad|ipod|macintosh/.test(userAgent);

  // Проверка, является ли устройство устройством Android
  var isAndroidDevice = /android/.test(userAgent);

  // В зависимости от типа устройства активируем соответствующую кнопку
  if (isAppleDevice) {
    AppStore.classList.add("active");
  } else if (isAndroidDevice) {
    GooglePlay.classList.add("active");
  }
});
