const day = 'monday';

switch(day){
    case 'monday': // day === 'monday'
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case 'tuesday':
        console.log("Prepare theory videos");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Write Code Examples");
    case 'friday':
        console.log("Record Videos");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend :D");
        break;
    default: ("Not a valid day");
}
