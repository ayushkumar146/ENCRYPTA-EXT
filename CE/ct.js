chrome.runtime.onMessage.addListener(
    function asa(request, sender, sendResponse) {
        try {
            // console.log("string");
            // document.getElementById("input-firstname").value=request.fName,
            // document.getElementById("input-lastname").value=request.lname,
            // console.log(document.getElementById("email"));
            // document.getElementById("email").value=request.emailid,
            // document.querySelector('input[type="text"]').value=request.emailid,
            // document.querySelector('input[type="password"]').value=request.password,

            let d = document.forms[0];
            let d1 = (d.querySelectorAll("input"));
            // let d1=["email","text"];
            // let t=d.querySelector('input');
            let z = 0;
            for (let a of d1) {
                if (a.attributes.type.value === "email" || a.attributes.type.value === "text") {

                    z = a.attributes.type.value;
                    break;

                }
                console.log(a);
                console.log(a.attributes.type.value);
            }
            console.log(z);
            if (d.querySelector(`input[type="${z}"]`) && d.querySelector('input[type="password"]')) {

                d.querySelector(`input[type="${z}"]`).value = request.emailid;
                d.querySelector('input[type="password"]').value = request.password;
                //    d.submit();
            }
            else if (d.querySelector('input[type="password"]') === null) {
                d.querySelector('input[type="text"]').value = request.emailid;
                // d.submit();

            }
            else if (d.querySelector('input[type="password"]')) {
                d.querySelector('input[type="password"]').value = request.password;
                // d.submit();
            }
            // console.log(document.querySelector('input[type="text"]'));
            // console.log(d);
            // document.getElementById("pass").value=request.password,

            // document.getElementById("phone").value=request.contact
            sendResponse({ status: "Success!" });
        } catch (error) {
            console.log(error)
            sendResponse({ status: "error occured!" });
        }
    }
);
