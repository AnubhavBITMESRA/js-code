const form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');
    if(height==='' || height<0 || isNaN(height))
    {
        results.innerHTML=`Please give a valid height ${height}`;
    }
    else if(weight==='' || weight<0 || isNaN(weight))
        {
            results.innerHTML=`Please give a valid height ${weight}`;
        }
    else
    {
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    if(bmi<18.6){

        results.innerHTML=`<span>Under weight :${bmi}</span>`;

        }else if(bmi>18.6 && bmi<24.9){

            results.textContent=`Normal Weight:${bmi}`;

        }else{

            results.textContent=`Over Weight : ${bmi}`;

        }
    }
    
   });