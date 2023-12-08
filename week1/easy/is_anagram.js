let ans=isAnagram('hello','elloh');

console.log(ans);
function isAnagram(str1,str2){
    let firstString=str1.length;
    let secondString=str2.length;

    if(firstString!=secondString){
        return false;
    }

    let str1Array = str1.split('').sort().join('');
    let str2Array = str2.split('').sort().join('');

    for (let i = 0; i < firstString; i++) {
        if (str1Array[i] !== str2Array[i]) {
            return false;
        }
    }
    return true;
}
