function isPalindrome(str) {
    const lowerCaseStr = str.toLowerCase();
    
    let start = 0;
    let end = lowerCaseStr.length - 1;
  
    while (start < end) {
      if (lowerCaseStr[start] !== lowerCaseStr[end]) {
        return false;
      }
  
      start++;
      end--;
    }
  
    return true;
  }

let ans=  isPalindrome('Nano');
console.log(ans);