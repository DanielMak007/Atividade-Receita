function paginar( id){
    
    let elemento1 = document.getElementById("pag1");
    let elemento2 = document.getElementById("pag2");
    let elemento3 = document.getElementById("pag3");
    
    if(id == "pag1"){
      
        elemento2.classList.remove("active");
        elemento3.classList.remove("active");
        elemento1.classList.add("active");
    }

    if(id == "pag2"){
        elemento1.classList.remove("active");
        elemento3.classList.remove("active");
        elemento2.classList.add("active");
    }

    if(id == "pag3"){
        elemento1.classList.remove("active");
        elemento2.classList.remove("active");
        elemento3.classList.add("active");
    }

}