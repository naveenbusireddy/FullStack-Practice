const age = prompt("How old are you? ");
var aliveDays = alert(`you've been alive for roughly ${age*365.25} days`);

    function ageCalculator() {
        var aliveDays = 0;
        var userAge = Number(age);
        

        if(isNaN(age))
        {        
            console.log(`you entered wrong information`);
            
        }  
        else if(age < 0) {
            console.log(`Enter your age correctly`);
        }  
        else {
            aliveDays = userAge*365.25;
            console.log(`you've been alive for roughly ${aliveDays} days`);            
        }
    
    }

    ageCalculator();
    