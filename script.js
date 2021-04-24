var demo = document.getElementById('demo')
    var um = "", dois = "", tres = "", quatro = "", cinco = "", seis = ""

    function contador(mi,ma) {
        var x = Math.floor((Math.random() * 6) + 1)
	    if(mi<ma){
            contador(++mi, ma)
            console.log("Dado caiu no número "+x+"!")
            if(x == 1){
                um += "1"
            }else if(x == 2){
                dois += "2"
            }else if(x == 3){
                tres += "3"
            }else if(x == 4){
                quatro += "4"
            }else if(x == 5){
                cinco += "5"
            }else if(x == 6){
                seis += "6"
            }
	    }
    }
    
    function dado(){
        n = Number(document.querySelector("#numero").value)
        if(n < 0 || n > 1000 || n == ""){
            alert("Digite um valor de 1 até 1000")
        }else{
            contador(0,n)
            demo.innerHTML = ""
            demo.innerHTML += `O número um apareceu: ${um.length} vezes.<br>`
            demo.innerHTML += `O número dois apareceu: ${dois.length} vezes.<br>`
            demo.innerHTML += `O número três apareceu: ${tres.length} vezes.<br>`
            demo.innerHTML += `O número quatro apareceu: ${quatro.length} vezes.<br>`
            demo.innerHTML += `O número cinco apareceu: ${cinco.length} vezes.<br>`
            demo.innerHTML += `O número seis apareceu: ${seis.length} vezes.`
        }
    }     