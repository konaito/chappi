let lastActiveTabId = null;

chrome.commands.onCommand.addListener(function (command) {
    if (command === "open_chatgpt") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const currentTab = tabs[0];
            if (currentTab.url.includes("https://chat.openai.com")) {
                if (lastActiveTabId) {
                    chrome.tabs.update(lastActiveTabId, { active: true });
                } else {
                    chrome.scripting.executeScript({
                        target: { tabId: currentTab.id },
                        function: () => {
                            window.history.back();
                        }
                    });
                }
            } else {
                lastActiveTabId = currentTab.id;
                chrome.tabs.query({ url: "https://chat.openai.com/*" }, function (tabs) {
                    if (tabs.length > 0) {
                        chrome.tabs.update(tabs[0].id, { active: true });
                    } else {
                        chrome.tabs.create({ url: "https://chat.openai.com" });
                    }
                });
                chrome.scripting.executeScript({
                    target: { tabId: currentTab.id },
                    function: () => {
                        const textarea = document.getElementById('prompt-textarea');
                        if (textarea) {
                            textarea.focus();
                        }
                    }
                });
            }
        });
  } else if (command === "focus_on_textarea") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentTab = tabs[0];
      if (currentTab.url.includes("https://chat.openai.com")) {
        chrome.scripting.executeScript({
          target: { tabId: currentTab.id },
          function: () => {
            const textarea = document.getElementById("prompt-textarea");
            if (textarea) {
              if (document.activeElement === textarea) {
                textarea.blur();
              } else {
                textarea.focus();
              }
            }
          },
        });
      }
    });
  }
});
