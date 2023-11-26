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
  var userAgent = navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

  var isAppleDevice = /iphone|ipad|ipod/.test(platform);
  var isAndroidDevice = /android/.test(platform);
  var isDesktop = !isAppleDevice && !isAndroidDevice;

const platform = getMobileOperatingSystem();
  if (platform === "iOS") {
    appStore.classList.add("on");
    googlePlay.classList.add("off");
  } else if (platform === "Android") {
    appStore.classList.add("off");
    googlePlay.classList.add("on");
  } else{
    appStore.classList.add("on");
    googlePlay.classList.add("on");
  }
});


/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
}
