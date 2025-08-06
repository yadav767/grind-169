let s = "()[]{}";
function validParanthesis(s){
    let st=[];
    for(let i=0 ;i<s.length ;i++){
        let symbol=s.charAt(i);
        if(symbol=='(' || symbol=='{' || symbol=='['){
            st.push(symbol);
        }else{
            if(st.length===0){return false;}
            let top =st[st.length-1];
            if(
                top=='(' && symbol==')' ||
                top=='{' && symbol=='}' ||
                top=='[' && symbol==']' 
            ){
                st.pop();
            }
            else{
                return false;
            }
        }
    }
    return st.length===0;
}
console.log(validParanthesis(s))