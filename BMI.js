var label11=document.querySelector('#label11');
var label22=document.querySelector('#label22');
var btn=document.querySelector('#btn');
var container=document.querySelector('.container');
var div=document.createElement('div');

  
btn.addEventListener("click",()=>{
  
    if(label11.value===''|| isNaN(label11.value)||(label11.value<=0))
    {
        document.getElementById('error').innerHTML='please provide a valid height';
    }
    else{
       document.getElementById('error').innerHTML=''; 
    }
    if(label22.value===''|| isNaN(label22.value)||(label22.value<=0))
    {
        document.getElementById('error1').innerHTML='please provide a valid weight';
    }
    else{
       document.getElementById('error1').innerHTML=''; 
    }
    let total=label22.value/(label11.value*label11.value);
    
   if(label11.value!=='' && label22.value!=='' && !isNaN(label11.value) && !isNaN(label22.value) &&!(label11.value<=0)&& !(label22.value<=0))
   {
    div.className='Bmi '
    div.innerHTML=total;
    
    container.appendChild(div);
    if(div.textContent<=18.5)
    {
        
        div.textContent='Under weight';
       
    }
    else if(div.textContent< 24.9)
   {
    
    div.textContent='Normal Weight';
   }
   else if(div.textContent<29.9)
   {
   
    div.textContent='Overweight';
   }
   else if(div.textContent>30)
   {
   
    div.textContent='obese';
   }
}

})
var reset=document.querySelector('#reset');
reset.addEventListener("click",()=>{
    label11.value='';
    label22.value='';
    div.remove();
    document.getElementById('error').innerHTML='';
    document.getElementById('error1').innerHTML='';

})