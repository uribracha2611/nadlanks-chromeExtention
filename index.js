

submit_buttom=document.querySelector(".submit")

submit_buttom.addEventListener("click",(e)=>{
    e.preventDefault();
    phone_number=document.querySelector(".phone").value
    message=document.querySelector(".message").value
    name=document.querySelector(".name").value
    message=message.replace("$",name)

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var currTab = tabs[0];
        window.close();

    chrome.storage.local.set({data:{phone:phone_number,message:message}},function(){
          
        chrome.scripting.executeScript({
            
            target: { tabId: currTab.id },
            files: ["content.js"]
        });
    })


    })
})