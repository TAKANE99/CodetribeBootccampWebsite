//formspree
function validate()
{
    var names=document.forms["myform"]["fname"].value;
    var date=document.forms["myform"]["date"].value;
    var email=document.forms["myform"]["email"].value;
    var contact=document.forms["myform"]["contact"].value;

    //name validate
    
    if(names == "")
    {
        alert("enter the name");
        return false;
    }
    if(!isNaN(names))
    {
        alert("name should be in charecter");
    }

    //date validate

    if(date == "")
    {
        alert("enter the date");
        return false;
    }
    if(!isNaN(date))
    {
        alert("date should be in numbers");
    }

    //email validate
    if(email == "")
    {
        alert("enter the email");
        return false;
    }
    if(!isNaN(email))
    {
        alert("email should be in charecter");
    }
    //contact validatr
    if(contact == "")
    {
        alert("enter the your contact");
        return false;
    }
    if(!isNaN(contact))
    {
        alert("numbers should be in numeric");
    }

}
//
