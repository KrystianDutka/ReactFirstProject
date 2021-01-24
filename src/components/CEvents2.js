import React from 'react'
//zdarzenia: 15 16 17 
function FunctionClick() {
    
    function Alert() {
        alert("Została wpisana jakaś wartość")
    }
   
    function Paste () {
        document.getElementById("paste").innerHTML = "Została wklejona jakaś wartość"
    }

    function Erase () {
        document.getElementById("erase").innerHTML = "Element został usunięty"
    }


    return (
        <div className="Events">
           
            
            <h4>Należy wpisać dowolną wartość</h4> 
            <input type="text" onKeyDown={Alert}/>
            <br/>
            <br/>
            
            <h4>Należy wkleić dowolną wartoś</h4>
            <input type="text" onPaste={Paste} size="40"/>
            <p id="paste"></p>
            <br/>
            
            <h4>Należy wpisać dowolną wartość, a następnie użyć komendy "Control + X" – usunąć element</h4>
            <input type="text" onCut={Erase}/>
            <p id="erase"></p>
            <br/>
            
    </div>
    )

   
}

export default FunctionClick