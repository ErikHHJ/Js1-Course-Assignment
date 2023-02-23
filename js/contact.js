
const fullName = /^[a-zA-Z0-9 åæø]{8,30}$/;
const subject = /^[a-zA-Z0-9 åæø]{8,50}$/;
const email = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})$/;
const streetAddress = /^[a-zA-Z0-9 åæø]{25,50}$/;

const regexTester = (input, rule) => {
    return rule.test(input);
};
const submit = document.querySelector("#submit");
const form = document.querySelector("#form");
const userName = document.querySelector("#name");
const userSubject = document.querySelector("#subject");
const userEmail = document.querySelector("#email");
const address = document.querySelector("#streetaddress");
const message = document.querySelector("#message");
const popupmessage = document.querySelector(".parapopup");
const main = document.querySelector(".contactpage"); 


form.onsubmit = (e) => {
    e.preventDefault();
    if (!regexTester(userName.value, fullName) || 
    !regexTester(userSubject.value, subject) ||
    !regexTester(userEmail.value, email) ||
    !regexTester(address.value, streetAddress)
    ){
        message.innerHTML = `One of the inputs are in the wrong format. Check again <br> Username: ${regexTester(userName.value, fullName)} <br> Subject: ${regexTester(userSubject.value, subject)} <br>
        Email: ${regexTester(userEmail.value, email)} <br> Address: ${regexTester(address.value, streetAddress)} `
        return; 
    }else if (!regexTester(userName.value, fullName)){

    } else {
        message.innerHTML = "Success";
        popupmessage.innerHTML = `<p>Type your message to us here:<p/> <br><input id="popup" placeholder="Your Message" type="text">`
        const messageSubmit = document.createElement("button");
        messageSubmit.classList.add("messagebtn")
        messageSubmit.innerHTML = "Submit Message"
        popupmessage.appendChild(messageSubmit);
        messageSubmit.onclick = () => {
            popupmessage.innerHTML = "<p>Thank you for submitting the message!</p>"
        }
        

        
    }
}
