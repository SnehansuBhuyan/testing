   
context.setVariable("orderCache", context.getVariable("ServiceCallout.response"));

if (context.getVariable("ServiceCallout.response") == null)
{
context.setVariable("errorflag", "true");
context.setVariable("code", "404"); 
context.setVariable("errordetailmsg", "Data not Found");
}