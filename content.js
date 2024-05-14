chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == 'translate') {
      var text = request.text;
      var targetLanguage = request.targetLanguage;
      // Send a message to background to translate the text
      chrome.runtime.sendMessage({ action: 'translate', text: text, targetLanguage: targetLanguage }, function(response) {
        // Replace the text with translated text
        document.body.innerText = document.body.innerText.replace(text, response.translatedText);
      });
    }
  });
  
  // Detect English text and send it for translation
  var englishRegex = /[a-zA-Z]+/g;
  var englishTextNodes = Array.from(document.querySelectorAll('body *')).filter(node => englishRegex.test(node.innerText));
  englishTextNodes.forEach(function(node) {
    chrome.storage.sync.get(['targetLanguage'], function(result) {
      var targetLanguage = result.targetLanguage || 'es'; // Default to Spanish
      chrome.runtime.sendMessage({ action: 'translate', text: node.innerText, targetLanguage: targetLanguage });
    });
  });
  