//242. Valid Anagram
let s="listen";
let t="silent";
var isAnagram = function(s, t) {
    
    let freq=new Array(123).fill(0);
    for(let i=0 ; i<s.length ;i++){
        let ascii=s.charCodeAt(i);
        freq[ascii]++;
    }
    for(let i=0 ; i<t.length ;i++){
        let ascii=t.charCodeAt(i);
        freq[ascii]--;
    }
    for(let i=0 ;i<freq.length ;i++){
        if(freq[i]!=0){
            return false;
        }
    }
    return true;
};

console.log(isAnagram(s,t));