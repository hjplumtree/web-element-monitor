// Minimal background service worker

chrome.runtime.onInstalled.addListener(() => {
  console.log("Web Element Monitor extension installed.");
});

// Placeholder for handling message to/from content script or API
