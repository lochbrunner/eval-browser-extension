
browser = chrome || browser;

browser.browserAction.onClicked.addListener(
    ()=>browser.tabs.executeScript({file: "/injected.js"})
);
