(function(){emailjs.init("user_T1IXP8y7vmO8lGJyP0ZeI");})();
  function contactFormOnload(){
    var contactForm = $("form#myform");
    contactForm.submit(function(event){
    event.preventDefault();
    // Change to your service ID, or keep using the default service
    var service_id = "outlook";
    var template_id = "send_message";
      
    contactForm.find("#sendOffer").addClass("SendingContact");
    emailjs.sendForm(service_id,template_id,"myform")
      .then(function(){ 
        openDialog();
        //alert("Sent!");
        contactForm.find("#sendOffer").removeClass("SendingContact");
      }, function(err) {
        alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
        contactForm.find("#sendOffer").removeClass("SendingContact");
      });
      return false;
    });
  }

function hiringFormOnload(){
  var hiringForm = $("form#hiring");
  hiringForm.submit(function(event){
	event.preventDefault();

	var params = hiringForm.serializeArray().reduce(function(obj, item) {
     obj[item.name] = item.value;
     return obj;
  }, {});

  // Change to your service ID, or keep using the default service
  var service_id = "outlook";
  var template_id = "template_2018";
  hiringForm.find("#hiringFORM").addClass("SendingHiring");
  emailjs.send(service_id,template_id,params)
  	.then(function(){ 
       openDialog();
      // alert("Sent!");
      hiringForm.find("#hiringFORM").removeClass("SendingHiring");
     }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       hiringForm.find("#hiringFORM").removeClass("SendingHiring");
    });
  return false;
});}