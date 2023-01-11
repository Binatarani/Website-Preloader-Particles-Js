window.onload = function () {
  const preloderArea = document.getElementById("preloader-area");
  preloderArea.className = "page-loaded";

  setTimeout(function () {
    preloderArea.style.display = "none";
  }, 500);
};
