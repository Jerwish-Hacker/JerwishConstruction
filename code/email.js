function sendMail(){
    var params ={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };
    const serviceID ="service_m7j74c4";
    const templateID ="template_dhpt9mc";
    
    emailjs
        .send(serviceID,templateID,params)
        .then((res) =>{
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("message").value="";
            //alert="Message send"
            alert("Message send to Demo Construction!!");
        })
        .catch((err)=> console.log(err))
}
