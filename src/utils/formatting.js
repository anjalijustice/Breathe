export function formatLocation (inputString) {
    let stringList = inputString.split('_');
    stringList = stringList.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    return stringList.join(' ');
    // return inputString.replace('_', ' ');
    // Use this if you still want locations to be all caps
}