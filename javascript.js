let countEl = document.getElementById("count-h2")
        console.log(countEl)
        let count = 0
        
        function increment(){
            count = count + 1
            countEl.innerHTML = count
        }

        function decrement(){
            count = count - 1
            countEl.innerHTML = count
        }