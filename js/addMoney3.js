document.getElementById('btn-donate-injured')
   .addEventListener('click', function(event){
      event.preventDefault();
      const addMoneyInjured = getInputFieldById('add-money-injured');
      const currentBalance = getTextFieldById('balance');

      if(isNaN(addMoneyInjured)){
        alert('Invalid Donation Amount');
        closeInvalidModal3();
        location.reload(true);
        return;
      }
      if(addMoneyInjured<0){
        alert('Invalid Donation Amount');
        closeInvalidModal3();
        location.reload(true);
        return;
      }
      if(addMoneyInjured>currentBalance){
        alert('Try again Later');
        closeInvalidModal3();
        location.reload(true);
        return;
      }
  
      const currentAmount = getTextFieldById('current-donation-injured');
      const newDonationInjured = currentAmount + addMoneyInjured;
      document.getElementById('current-donation-injured').innerText = newDonationInjured + ' BDT';

      
      const newBalanceInjured = currentBalance - addMoneyInjured;
      document.getElementById('balance').innerText = newBalanceInjured + ' BDT';

      updateDateTime();
      setInterval(updateDateTime, 1000);
      const time3 = document.getElementById('dateTime').innerText;

      const div = document.createElement('div');
       div.classList.add('bg-white');
       div.innerHTML = `
          <div class="border-slate-600 bg-white rounded-lg py-7 px-7 shadow-md my-auto mx-40">
            <h4 class="text-xl font-bold">${newDonationInjured} Taka is Donated for 15500 Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h4>
            <p>${time3}</p>
          </div>
       `
       document.getElementById('history-container').appendChild(div);

    
   })