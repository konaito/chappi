chrome.commands.onCommand.addListener(function (command) {
    if (command === "open_chatgpt") {
        chrome.tabs.query({ url: "https://chat.openai.com/*" }, function (tabs) {
            if (tabs.length > 0) {
                // 既存のタブがあればアクティブにする
                chrome.tabs.update(tabs[0].id, { active: true });
            } else {
                // 新しいタブとして開く
                chrome.tabs.create({ url: "https://chat.openai.com" });
            }
        });
    }
});
