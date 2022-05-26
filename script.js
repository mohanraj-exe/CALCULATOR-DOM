var result = document.getElementById("result");

var buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button => {
    button.addEventListener("click", (e) =>{
        switch(e.target.innerHTML){
            case 'C':
                result.value = "";
                break;

            case '=':
                try{
                    result.value = eval(result.value)
                }catch{
                    result.value = "Error!"
                }
            break;
            
            case '←':
                if(result.value){
                    result.value = result.value.slice(0,-1)
                }
                break;

            default:
                result.value += e.target.innerHTML
        }
    })
})