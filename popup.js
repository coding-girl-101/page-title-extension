document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("myButton");
  button.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs.length > 0) {
        const tabTitle = tabs[0].title;
           document.getElementById("demo").textContent = "Current Page Title: " + tabTitle;
      }
    });
  });
});