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

    
   })