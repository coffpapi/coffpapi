document.addEventListener('DOMContentLoaded', function() {
    var saveButton = document.getElementById('save');
    saveButton.addEventListener('click', function() {
      var language = document.getElementById('language').value;
      chrome.storage.sync.set({ 'targetLanguage': language }, function() {
        console.log('Target language set to ' + language);
      });
    });
  });
  