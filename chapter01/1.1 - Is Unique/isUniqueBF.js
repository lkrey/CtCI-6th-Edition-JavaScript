function isUnique(str) {
  // loop over & evaluate 1 character at a time to the rest of the string
  for(let i = 0; i < str.length; i++) {
    for(let k = i+1; k < str.length; k++) {
      // if the currChar being evaluated has a match, return false
      if(str[i] === str[k]) {
        return false;
      }
    }
  }
  // if we haven't found a match, all characters are unique, return true
  return true;
}

/**
 * T: 0(n^2)
 * Brute force solution
 */
