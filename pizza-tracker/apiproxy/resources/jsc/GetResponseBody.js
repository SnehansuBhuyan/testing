 
var orderCache1;
var subscriptionId ;

context.setVariable("response.content", context.getVariable("orderCache"));
context.setVariable("orderCache1", context.getVariable("orderCache")); 
 
subscriptionId = context.getVariable("subscriptions.subscriptionId");
context.setVariable("subscriptionId", subscriptionId);

if (context.getVariable("orderCache") == null)
{
  
context.setVariable("errorflag", "true");
context.setVariable("code", "404"); 
context.setVariable("errordetailmsg", "Data not Found");
}