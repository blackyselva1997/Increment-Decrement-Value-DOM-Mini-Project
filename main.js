let btn = document.getElementById("increment");
        let btn1 = document.getElementById("decrement");
        let counter = document.getElementById("output");

        btn.addEventListener("click", function() {
            counter.value = Number(counter.value) +1;
        });
        
        btn1.addEventListener("click", function() {
            if (counter.value > 0) {
                counter.value = Number(counter.value) -1;
            }
        });