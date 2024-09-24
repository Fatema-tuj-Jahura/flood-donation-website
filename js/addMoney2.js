document.getElementById('btn-donate-feni')
   .addEventListener('click', function(event){
      event.preventDefault();
      const addMoneyFeni = getInputFieldById('add-money-feni');
      const currentBalance = getTextFieldById('balance');

      if(isNaN(addMoneyFeni)){
        alert('Invalid Donation Amount');
        return;
      }
      if(addMoneyFeni<0){
        alert('Invalid Donation Amount');
        return;
      }
      if(addMoneyFeni>currentBalance){
        alert('Try again Later');
        return;
      }
  
      const currentAmount = getTextFieldById('current-donation-feni');
      const newDonationFeni = currentAmount + addMoneyFeni;
      document.getElementById('current-donation-feni').innerText = newDonationFeni + ' BDT';

      
      const newBalanceFeni = currentBalance - addMoneyFeni;
      document.getElementById('balance').innerText = newBalanceFeni + ' BDT';
   })