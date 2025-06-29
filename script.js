
  const container = document.querySelector(".container");
  const unitType = document.querySelector("#unittype");
  const start = document.querySelector("#start");

  const lengthunit = ["meter", "kilometer", "centimeter"];
  const massunit = ["gram", "kilogram", "pounds", "ounce"];
  const tempunit = ["celsius", "fahrenheit", "kelvin"];
  const lengthToMeter = {
    meter: 1,
    kilometer: 1000,
    centimeter: 0.01
  };

  function showUnitConverter() {
    let units = [];

    if (unitType.value == "length") {
      units = lengthunit;
      console.log("len");
    } else if (unitType.value == "mass") {
      units = massunit;
      console.log("mass");
    } else if (unitType.value == "temp") {
      units = tempunit;
      console.log("temp");
    }
console.log("hello")
    container.innerHTML = `
      <select id="from">
      </select>
      <select id="to">
       </select>
      <br><br>
      <input type="number" id="inputValue" placeholder="Enter value">
      <h3 id="outputValue" ></h3>
      <button class="convert">Convert</button>
    `;

    const from = document.querySelector("#from");
    const to = document.querySelector("#to");
    const convertbtn=document.querySelector(".convert");

    units.forEach((opt) => {
      from.innerHTML += `<option value="${opt}">${opt}</option>`;
      to.innerHTML += `<option value="${opt}">${opt}</option>`;
    });
    convertbtn.addEventListener("click",()=>{
        let inV=document.querySelector("#inputValue");
        let outV=document.querySelector("#outputValue");
        let out;
        if(unitType.value == "length"){
            if(from.value==to.value){
        out=inV.value;
     }
     else if(from.value=="meter" && to.value=="kilometer"){
        out=inV.value*0.001 +"km"
     }
     else if(from.value=="meter" && to.value=="centimeter"){
        out=inV.value*100 +"cm"
     }
     else if(from.value=="kilometer" && to.value=="meter"){
        out=inV.value*1000 +"m"
     }
     else if(from.value=="kilometer" && to.value=="centimeter"){
        out=inV.value*100000+"cm"
    }
    else if(from.value=="centimeter" && to.value=="meter"){
        out=inV.value*0.01+"m"
    }
    else if(from.value=="centimeter" && to.value=="kilometer"){
        out=inV.value*0.0001 +"km"
    }
     outV.textContent=` ${from.value} to ${to.value} =${out}`;
        }
        
         if(unitType.value == "mass"){
            if(from.value==to.value){
        out=inV.value;
     }
     else if(from.value=="gram" && to.value=="kilogram"){
        out=inV.value*0.001 +"kg"
     }
     else if(from.value=="gram" && to.value=="pounds"){
        out=inV.value/453.6 +"p"
     }
     else if(from.value=="gram" && to.value=="ounce"){
        out=inV.value/28.35+"oz"
     }
     else if(from.value=="kilogram" && to.value=="gram"){
        out=inV.value*1000+"gm"
    }
    else if(from.value=="kilogram" && to.value=="pounds"){
        out=inV.value*2.205+"p"
    }
     else if(from.value=="kilogram" && to.value=="ounce"){
        out=inV.value*35.274+"p"
     }
    else if(from.value=="pounds" && to.value=="gram"){
        out=inV.value*453.6 +"gm"
    }
    else if(from.value=="pounds" && to.value=="kilogram"){
        out=inV.value/2.205 +"kg"
    }
    else if(from.value=="pounds" && to.value=="ounce"){
        out=inV.value*16 +"oz"
    }
    else if(from.value=="ounce" && to.value=="gram"){
        out=inV.value*28.35+"gm"
    }
    else if(from.value=="ounce" && to.value=="kilogram"){
        out=inV.value/35.274 +"kg"
    }
    else if(from.value=="ounce" && to.value=="pounds"){
        out=inV.value/16+"p"
    }
     outV.textContent=` ${from.value} to ${to.value} =${out}`;
        
         }
         if(unitType.value == "temp"){
            if(from.value==to.value){
        out=inV.value;
        console.log("same")
     }
            else if(from.value=="celsius" && to.value=="kelvin"){
        out=Number(inV.value)+273.15 +"k"
        console.log(typeof inV.value)
    }
    else if(from.value=="celsius" && to.value=="fahrenheit"){
        out=(Number(inV.value)*9/5)+32  +"f";
    }
         else if(from.value=="kelvin" && to.value=="celsius"){
        out=Number(inV.value)-273.15+"c"
    }   
    else if(from.value=="kelvin" && to.value=="fahrenheit"){
        out=(Number(inV.value)-273.15)*9/5 +32 +"f"
    } 
    else if(from.value=="fahrenheit" && to.value=="kelvin"){
        out=(Number(inV.value)-32)*5/9 +273.15 +"k"
    } 
    else if(from.value=="fahrenheit" && to.value=="celsius"){
        out=(Number(inV.value)-32)*5/9 +"c"
    }   
    outV.textContent=` ${from.value} to ${to.value} =${out}`;
         }
    })
  }

  start.addEventListener("click", showUnitConverter);

