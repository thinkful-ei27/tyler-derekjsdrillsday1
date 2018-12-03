function daysInAMonth(month, leapYear){
    let number = 0;
    
    
    switch(month){
        case 'September':
        case 'April':
        case 'June':
        case 'November':
            number = 30;
            break;
     
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            number = 31;
            break;
        
        case 'February':
            if(leapYear === true){
                number = 29;
            }else{number = 28;};
            break;
        
        default:
            throw new Error('Please enter a valid month');
            
        

    }
    let sentence = `${month} has ${number} days`
    return sentence;
}
console.log(daysInAMonth(4568, false))