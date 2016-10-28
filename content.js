// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      	$('a').removeAttr('href');
      	$('a').css('color', '#252525');
      	$('a').css('text-decoration', 'none');
    }
  }
);
