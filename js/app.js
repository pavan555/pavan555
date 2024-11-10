
const clipBoard = new ClipboardJS('#copyEmail');
clipBoard.on('success', function(e) {
  document.getElementById("copyEmail").innerText = "Email Copied!";
  setTimeout(function() {
    document.getElementById("copyEmail").innerText = "gandhipavan555@gmail.com";
  }, 2000);
  e.clearSelection();
});

clipBoard.on('error', function(e) {
  console.error('Action:', e.action);
  console.error('Trigger:', e.trigger);
});
