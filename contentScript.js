let checkboxes = document.getElementById("selectall");


checkboxes.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (function () {
            let selection = window.document.querySelectorAll(".ember-checkbox");
            selection.forEach(a => a.click())
          })
    })
})

