
let ans=getNumberOfVowels('alifeo')

console.log(ans);

function getNumberOfVowels(str){
    let count=0;
    str.split('');
    for(let i=0;i<str.length;i++){
        let vowel= isVowel(str[i]);
        if(vowel){
            count++;
        }   
    }
    return count;
}

function isVowel(str){
    if(str=='a'||str=='e'||str=='i'||str=='o'||str=='u'||str=='A'||str=='E'||str=='I'||str=='O'||str=='U'){
        return true;
    }
    return false;
}