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
// document.addEventListener("DOMContentLoaded", function() {
//   var AppStore = document.getElementById("AppStore");
//   var GooglePlay = document.getElementById("GooglePlay");
//
//   var platform = navigator.platform.toLowerCase();
//
//   // Проверка, является ли устройство устройством Apple
//   var isAppleDevice = /iphone|ipad|ipod|mac/.test(platform);
//
//   // Проверка, является ли устройство устройством Android
//   var isAndroidDevice = /android/.test(platform);
//
//   // Проверка, является ли устройство компьютером
//   var isDesktop = !isAppleDevice && !isAndroidDevice;
//
//   // В зависимости от типа устройства активируем соответствующие кнопки
//   if (isAppleDevice) {
//     AppStore.classList.add("on");
//   } else if (isAndroidDevice) {
//     GooglePlay.classList.add("on");
//   } else if (isDesktop) {
//     AppStore.classList.add("on");
//     GooglePlay.classList.add("on");
//   }
// });
document.addEventListener("DOMContentLoaded", function() {
  var appStore = document.getElementById("appStore");
  var googlePlay = document.getElementById("googlePlay");

  var platform = navigator.platform.toLowerCase();

  var isAppleDevice = /iphone|ipad|ipod|mac/.test(platform);
  var isAndroidDevice = /android/.test(platform);
  var isDesktop = !isAppleDevice && !isAndroidDevice;

  if (isAppleDevice) {
    appStore.classList.add("on");
  } else if (isAndroidDevice) {
    googlePlay.classList.add("on");
  } else if (isDesktop) {
    appStore.classList.add("on");
    googlePlay.classList.add("on");
  }
});
