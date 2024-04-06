let licheckboxes = document.getElementById("selectalllinkedin");
let liketweets = document.getElementById("likestwitter");


licheckboxes.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (function () {
            let selection = window.document.querySelectorAll(".ember-checkbox");
            selection.forEach(a => a.click())
          })
    })
})

// const nodeList = document.querySelectorAll('[data-testid="like"]');

// for (let i = 0; i < nodeList.length; i++) {
//     const item = nodeList[i];
//     item.click()
// }



// document.querySelectorAll('[data-testid="like"]').forEach(e => e.click())


document.getElementById('likestwitter').addEventListener('click', async() => {
    const scrollAmount = parseInt(document.getElementById('scrollAmount').value, 10);
  
    if (!isNaN(scrollAmount)) {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: (amount) => {
                for (let i = 0; i < amount; i++) {
                    document.querySelectorAll('[data-testid="like"]').forEach(e => e.click());
                    window.scrollBy(0, window.innerHeight);
                    console.log(i);
                }
            },
            args: [scrollAmount] 
        });

        console.log(scrollAmount);
    } else {
        alert('Please enter a valid number!');
    }
});