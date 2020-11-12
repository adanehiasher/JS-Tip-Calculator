window.addEventListener('load', function(){

    const inputBill = document.querySelector('#input-bill');
    const inputUser = document.querySelector('#input-users');
    const service = document.querySelector('#input-service');
    const feedback = document.querySelector('.feedback');
    const result = document.querySelector('.submitBtn');
    const resultContainer = document.querySelector('.results');
    const clear = document.querySelector('#clear');


    result.addEventListener('click', function(event){
            event.preventDefault();

        calculateTip();  
    })

    function calculateTip(){

        let tipCalc = parseFloat(inputBill.value) * parseFloat(service.value);
        let total = parseFloat(inputBill.value) + tipCalc;
        let dividend = total / parseFloat(inputUser.value);

        document.getElementById('tip-amount').textContent = tipCalc;
        document.getElementById('total-amount').textContent = total;
        document.getElementById('person-amount').textContent = dividend;

        resultContainer.classList.add('showItem');
        clear.classList.add('showItem');

        document.querySelector('#tip-form').reset();

    }

    clear.addEventListener('click', function(e){
        e.preventDefault();

        resultContainer.classList.remove('showItem');
        this.classList.remove('showItem');
    })
    
    // console.log(service);
    
    
    // option.addEventListener('click', function(e){
    //     console.log(this.dataset.filter)
    // })
    
    
    // result.addEventListener('click', function(e){
    //     e.preventDefault();
    //     // console.log(service)
    //     if(inputBill == "" || inputBill == "0"){
    //         feedback.classList.add('showItem', 'alert-danger');
    //         feedback.innerHTML =  `<p>Bill must be added</p>`;
    //     }else{
    //         feedback.innerHTML = "";
    //     }
    //     if(inputUser == "" || inputUser == "0"){
    //         feedback.classList.add('showItem', 'alert-danger');
    //         feedback.innerHTML +=  `<p>Add Number of users</p>`;
    //     }
    //     if(service == "Choose..."){
    //         feedback.classList.add('showItem', 'alert-danger');
    //         feedback.innerHTML +=  `<p>Select Tip Percentage</p>`;
    //     }
    
    //     let tipCalc = Number(inputBill) * Number(service);
    //     console.log(tipCalc)
    //     let total = Number(inputBill) + tipCalc;
    //     console.log(total)
    //     let dividend = total / inputUser;
    //     console.log(dividend);
    
    
    //     document.getElementById('tip-amount').innerHTML = tipCalc;
    //     document.getElementById('total-amount').innerHTML = total;
    //     document.getElementById('person-amount').innerHTML = dividend;
    
    //     resultContainer.classList.add('showItem');
    
       
    
    //     setTimeout(function(){
    //         document.getElementById('tip-amount').innerHTML = "";
    //         document.getElementById('total-amount').innerHTML = "";
    //         document.getElementById('person-amount').innerHTML = "";
        
    //         resultContainer.classList.remove('showItem');
    
    //         inputUser = '';
            
    //     },4000)
           
       
        
    // })
})


