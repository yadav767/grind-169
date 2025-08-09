//125. Valid Palindrome.
let s="A man, a plan, a canal: Panama";
var isPalindrome = function (s) {
    let current = "";
    for (let i = 0; i < s.length; i++) {
        let code=s.charCodeAt(i)
        if(65<=code && code<=90){
            current+=s[i].toLowerCase()
        }else if(48<=code && code<=57){
            current+=s[i];
        }else if(97<=code && code<=122){
            current+=s[i];
        }else{
            continue
        }
    }
    let start =0;
    let end=current.length-1;
    while(start<end){
        if(current[start]!=current[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;

};
console.log(isPalindrome(s));