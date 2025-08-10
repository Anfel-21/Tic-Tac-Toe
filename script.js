document.addEventListener("DOMContentLoaded", () => {

   let turn = document.getElementById("turn") 
   let cells = document.querySelectorAll(".cell")
   let cell1 = document.getElementById("one")
   let cell2 = document.getElementById("two")
   let cell3 = document.getElementById("three")
   let cell4 = document.getElementById("four")
   let cell5 = document.getElementById("five")
   let cell6 = document.getElementById("six")
   let cell7 = document.getElementById("seven")
   let cell8 = document.getElementById("eight")
   let cell9 = document.getElementById("nine")
   let restart = document.getElementById("restart")
   let trn = "X"

   cells.forEach(cell => {
        cell.addEventListener("click", function() {
           this.innerHTML = `<h1>${trn}</h1>`
           this.disabled = true 
           result()
           if(trn == "X"){
              trn = "O"
              turn.innerHTML = `O's turn`
           }else{
              trn = "X"
              turn.innerHTML = `X's turn`
           }               
        }) 
    })

    function result(){
      if(cell1.innerText !== "" && cell1.innerText === cell2.innerText && cell2.innerText === cell3.innerText){win()}
       if(cell4.innerText !== "" && cell4.innerText === cell5.innerText && cell5.innerText === cell6.innerText){win()}
       if(cell7.innerText !== "" && cell7.innerText === cell8.innerText && cell8.innerText === cell9.innerText){win()}
       if(cell1.innerText !== "" && cell1.innerText === cell4.innerText && cell4.innerText === cell7.innerText){win()}
       if(cell2.innerText !== "" && cell2.innerText === cell5.innerText && cell5.innerText === cell8.innerText){win()}
       if(cell3.innerText !== "" && cell3.innerText === cell6.innerText && cell6.innerText === cell9.innerText){win()}
       if(cell1.innerText !== "" && cell1.innerText === cell5.innerText && cell5.innerText === cell9.innerText){win()}
       if(cell3.innerText !== "" && cell3.innerText === cell5.innerText && cell5.innerText === cell7.innerText){win()}

       let nll = true
        cells.forEach(cell => {
            if (cell.innerText === "") {
                  nll = false
            }
        })

        if (nll) {
        alert("No one won")
        start()
    }

    } 
    
    function win(){
        alert(`The winner is : ${trn}`)
        start()
    }

    restart.addEventListener("click", start)

    function start(){   
        trn = "X"
        turn.innerHTML = `X's turn`
        cells.forEach(cell =>{
            cell.innerHTML = ""
            cell.disabled = false         
        })  
    }

})