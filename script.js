//your JS code here. If required.
function firstNonRepeatedChar(s) {
  let charArray = new Array(26).fill(0);
  
  // To Count the frequency of each character
  for(let c of s) {
    let index = c.charCodeAt(0) - 97; // get index of char in the array
    charArray[index]++;
  }
  
  // Find the first character with frequency 1
  for(let c of str) {
    let index = c.charCodeAt(0) - 97; // get index of char in the array
    if (charArray[index] === 1) {
      return c;
    }
  }
  
  // No non-repeated character found
  return null;
}
