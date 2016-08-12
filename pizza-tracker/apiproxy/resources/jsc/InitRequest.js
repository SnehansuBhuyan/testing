var orderId ;
var subscriptionId;

var requestContent = context.getVariable("request.content");
orderId = context.getVariable("orders.orderId");
context.setVariable("orderId", orderId); 

var jsonObject= JSON.parse(requestContent); 

subscriptionId = jsonObject.subscriptionId;
context.setVariable("subscriptionId", subscriptionId);
context.setVariable("orderCache", requestContent);

if(orderId == null || orderId.length == 0) {
    
context.setVariable("errorflag", "true");
context.setVariable("code", "400");
context.setVariable("errordetailmsg", "Bad Request : Invalid OrderId");

}