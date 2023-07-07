document.getElementById("autofill").addEventListener("click",()=>{
    
    chrome.tabs.query({active:true, currentWindow:true},function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,{
            
            // fName:document.getElementById('fname').value,
            // lname:document.getElementById('lname').value,
            emailid:document.getElementById('emailid').value,
            password:document.getElementById('password').value,
            // contact:document.getElementById('contactno').value,
        },function(response){
            console.log(response.status);
        });
    });
});
document.getElementById('save').addEventListener('click',()=>{
    chrome.storage.sync.set({
        // fName:document.getElementById('fname').value,
        //     lname:document.getElementById('lname').value,
            email:document.getElementById('emailid').value,
            password:document.getElementById('password').value,
            // contact:document.getElementById('contactno').value,
    },function(){
        console.log("saved!")
    })
})
document.getElementById('load').addEventListener('click',()=>{
    chrome.storage.sync.get([
        // 'fname',
        // 'lname',
        'email',
        'password'
        // 'contact'
        
    ],function(result){
        // document.getElementById('fname').value=result.fName;
        // document.getElementById('lname').value=result.lName;
        document.getElementById('email').value=result.email;
        document.getElementById('password').value=result.password;
        // document.getElementById('contactno').value=result.contact;

    })
})
// let d=fetch("http://www.demo.extension.encrypta.in/GetDetails");
// d.then((val)=>{
//     return val.json();
// }).then((val))

