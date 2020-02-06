export function fixCase (inputString) {
    newString = inputString.replace('_', ' ');
    newString = newString.toLowerCase();
    newString = newString.charAt(0).toUpperCase()

    return newString;
}