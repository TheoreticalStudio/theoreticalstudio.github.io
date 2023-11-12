// document.addEventListener("DOMContentLoaded", function() {
//   var button1 = document.getElementById("AppStore");
//   var button2 = document.getElementById("GooglePlay");
//
//   var userAgent = navigator.userAgent.toLowerCase();
//
//   // Проверка, является ли устройство устройством Apple
//   var isAppleDevice = /iphone|ipad|ipod|macintosh/.test(userAgent);
//
//   // Проверка, является ли устройство устройством Android
//   var isAndroidDevice = /android/.test(userAgent);
//
//   // В зависимости от типа устройства активируем соответствующую кнопку
//   if (isAppleDevice) {
//     AppStore.classList.add("store-button");
//   } else if (isAndroidDevice) {
//     GooglePlay.classList.add("store-button");
//   }
// });


document.addEventListener("DOMContentLoaded", function() {
  var appStore = document.getElementById("appStore");
  var googlePlay = document.getElementById("googlePlay");

  var platform = navigator.platform.toLowerCase();

  var isAppleDevice = /iphone|ipad|ipod/.test(platform);
  var isAndroidDevice = /android/.test(platform);
  var isDesktop = !isAppleDevice && !isAndroidDevice;


  if (isAppleDevice) {
    appStore.classList.add("on");
    googlePlay.classList.add("off");
  } else if (isAndroidDevice) {
    appStore.classList.add("off");
    googlePlay.classList.add("on");
  } else if (isDesktop) {
    appStore.classList.add("on");
    googlePlay.classList.add("on");
  }
});

