const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
const resetBtn = document.querySelector('.reset')
const count = document.querySelector('.count')
const changeByValue = document.querySelector('.changeby') 

plusBtn.addEventListener('click',()=>{
   countValue = parseInt(count.innerText);
   const changing = parseInt(changeByValue.value);

   count.innerText = countValue+changing;
})

minusBtn.addEventListener('click' , ()=>{
    countValue = parseInt(count.innerText);
    const changing = parseInt(changeByValue.value);

    count.innerText = countValue-changing;
})

resetBtn.addEventListener('click' , ()=>{
    count.innerText = 0;
})



