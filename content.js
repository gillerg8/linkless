// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var elements = document.getElementsByTagName('a');
      undefined
      for (i = 0; i < elements.length; i++) {
        elements[i].removeAttribute("href");
        elements[i].removeAttribute("data-href");
        elements[i].style.cssText = 'color:black!important; color:black!important; text-decoration:none!important; cursor:text!important; background-image:none!important;';
      }
    }
  }
);
