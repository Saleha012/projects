const form = document.querySelector("form")
form.addEventListener('submit',function(e)
{
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#result")
    const bmis = document.querySelector("#BMI")

    if (height === '' || height <0 || isNaN(height))

     { results.innerHTML = `please enter a valid height ${height}`;
     console.log("height",height)
    }
    else if(weight === "" || weight < 0 || isNaN(weight))
    {

         results.innerHTML = `please enter a valid weight ${weight}`;
         console.log("weight",weight)
        }
    else
    { const bmi = (weight/((height*height)/10000)).toFixed(2);
       console.log(bmi)
       results.innerHTML = `<span>${bmi}</span>`;
       if (bmi < 18.5)
       { bmis.innerHTML=`underweight range because BMI is ${bmi}`}
       else if (bmi > 18.5 || bmi <= 24.9)
       { bmis.innerHTML=`healthy weight range because BMI is ${bmi}`}
       else if (bmi>25 || bmi <= 29.9)
       { bmis.innerHTML=`overweight range because BMI is ${bmi}`}
    
    }


})