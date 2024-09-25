document.getElementById('btn-donate-feni')
   .addEventListener('click', function(event){
      event.preventDefault();
      const addMoneyFeni = getInputFieldById('add-money-feni');
      const currentBalance = getTextFieldById('balance');

      if(isNaN(addMoneyFeni)){
        alert('Invalid Donation Amount');
        closeInvalidModal2();
        location.reload(true);
        return;
      }
      if(addMoneyFeni<0){
        alert('Invalid Donation Amount');
        closeInvalidModal2();
        location.reload(true);
        return;
      }
      if(addMoneyFeni>currentBalance){
        alert('Try again Later');
        closeInvalidModal2();
        location.reload(true);
        return;
      }
  
      const currentAmount = getTextFieldById('current-donation-feni');
      const newDonationFeni = currentAmount + addMoneyFeni;
      document.getElementById('current-donation-feni').innerText = newDonationFeni + ' BDT';

      
      const newBalanceFeni = currentBalance - addMoneyFeni;
      document.getElementById('balance').innerText = newBalanceFeni + ' BDT';

      updateDateTime();
      setInterval(updateDateTime, 1000);
      const time2 = document.getElementById('dateTime').innerText;

       //History   
       const div = document.createElement('div');
       div.classList.add('bg-white');
       div.innerHTML = `
          <div class="border-slate-600 bg-white rounded-lg p-2 lg:p-7 shadow-md my-auto mx-5 lg:mx-40">
            <h4 class="text-black text-xl font-bold">${newDonationFeni} Taka is Donated for famine-2024 at Feni, Bangladesh</h4>
            <p class="text-black" >${time2}</p>
          </div>
       `
       document.getElementById('history-container').appendChild(div);
 

    
   })