var sjcl = require('./sjcl');

var hashed = sjcl.hash.sha256.hash(`document.getElementById('correlation_option').onclick = function correlate() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "go_to_correlation_stream"});
});
}
document.getElementById('policy_option').onclick = function policy() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "go_to_policy_stream"});
});
}`);

console.log(sjcl.codec.base64.fromBits(hashed))