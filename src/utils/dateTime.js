export function getTimeFromDateTime (dateTimeString) {
    time = dateTimeString.split('T')[1];
    hours = time.split(':')[0];
    minutes = time.split(':')[1];
    ampm = 'AM'
    
    if (hours == 12) {
        ampm = 'PM';
    } else if (hours == 0) {
        hours = 12;
    } else if (hours > 12) {
        ampm = 'PM';
        hours -= 12;
    }

    return hours + ':' + minutes + ' ' + ampm;
}

export function getDayFromDateTime (dateTime) {
    date = dateTime.split('T')[0];
    day = date.split('-')[2];
    return day;
}