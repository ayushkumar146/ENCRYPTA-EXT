chrome.runtime.onInstalled.addListener(async() =>{
    let url=chrome.runtime.getURL('hw/hello.html')
    let tab=await chrome.tabs.create({url})
    console.log(`Create tab ${tab.id}`)
})