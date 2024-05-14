chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == 'translate') {
      var targetLanguage = request.targetLanguage;
      var textToTranslate = request.text;
      // Use your preferred translation API here
      // For example, you can use Google Translate API, but you need an API key
      // Here's a placeholder for the translation function
      var translatedText = translateText(textToTranslate, targetLanguage);
      sendResponse({ translatedText: translatedText });
    }
  });
  
  // Placeholder function for translation
  function translateText(text, targetLanguage) {
    // Implement translation logic here
    // For demonstration, return the text itself
    return text;
  }
  