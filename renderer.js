const { ipcRenderer } = require('electron');

// Get DOM elements
const backButton = document.getElementById('back-button');
const forwardButton = document.getElementById('forward-button');
const reloadButton = document.getElementById('reload-button');
const addressBar = document.getElementById('address-bar');
const webview = document.querySelector('webview');

// Event listeners for navigation buttons
backButton.addEventListener('click', () => {
    if (webview.canGoBack()) {
        webview.goBack();
    }
});

forwardButton.addEventListener('click', () => {
    if (webview.canGoForward()) {
        webview.goForward();
    }
});

reloadButton.addEventListener('click', () => {
    webview.reload();
});

// Event listener for address bar
addressBar.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        navigateToURL(addressBar.value);
    }
});

// Function to navigate to a URL
function navigateToURL(url) {
    if (url.startsWith('http://') || url.startsWith('https://')) {
        webview.src = url;
    } else {
        webview.src = 'https://' + url;
    }
}

// Event listeners for webview events
webview.addEventListener('did-navigate', (event) => {
    addressBar.value = event.url;
});

webview.addEventListener('did-start-loading', () => {
    backButton.disabled = !webview.canGoBack();
    forwardButton.disabled = !webview.canGoForward();
    reloadButton.classList.add('loading');
});

webview.addEventListener('did-stop-loading', () => {
    reloadButton.classList.remove('loading');
});
