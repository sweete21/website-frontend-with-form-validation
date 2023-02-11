function validate()
{
    var number=document.getElementById("mobile")
    if(number.value.length>10)
    {
        alert("phone number cant exceed 10");
        return false;
         
    }
}