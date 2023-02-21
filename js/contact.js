
const fullName = /^[a-zA-Z0-9 ]*$/;
const subject = /^[a-zA-Z0-9 ]{8,30}$/;
const email = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
const streetAddress = /^[a-zA-Z0-9 ]{25,50}$/;

const regexTester = (input, rule) => {
    if (input === '') {
      console.log('RegTest:', 'false, empty string');
      return false;
    }
    console.log('RegTest:', rule.test(input));
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
console.log(popupmessage)

form.onsubmit = (e) => {
    e.preventDefault();
    if (!regexTester(userName.value, fullName) || 
    !regexTester(userSubject.value, subject) ||
    !regexTester(userEmail.value, email) ||
    !regexTester(address.value, streetAddress)
    ){
        message.innerHTML = "One of the inputs are in the wrong format. Check again"
        return; 
    } else {
        message.innerHTML = "Success";
        popupmessage.innerHTML = `<p>Type your message to us here:<p/> <br><input id="popup" placeholder="Your Message" type="text">`
        
    }
}
