

function check(){
    let out=document.getElementById("outel")
    let age=document.getElementById('age').value
    if(age<18){
        out.innerText="You are not eligible to vote🙂"
    }else{
        out.innerText="wohooo! your are eligible to vote 🥳"
    }
}
