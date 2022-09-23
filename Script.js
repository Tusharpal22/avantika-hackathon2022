
    var character ,symbol,digit,platform;
    character=document.getElementById('char').value;
     
     window.localStorage.setItem("char",character)
     var C=localStorage.getItem('Char');
     console.log("Number of Charecter ");
     document.getElementById('Nchar').innerText="Number of Charecter is "+C;

    
