function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
   
    document.getElementById("result").innerHTML=""

    if(parseInt(principal)<=0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").value="";
        document.getElementById("principal").focus();
        return;
    }
    else
    {

        
        if(principal)
        {
            document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"

        }
        else
        {
            
            alert("Please input Amount");
        }
    }
}
        
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}