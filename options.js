let fromText = document.getElementById("fromField");
let fromText = document.getElementById("toField");
let setButton = document.getElementById("button");

setButton.addEventListener("click", function() {
  chrome.storage.sync.set({fromStored: fromText.value, toStored: toText.value})
});
