document.getElementById('btn-donate-noakhali')
   .addEventListener('click', function(event){
      event.preventDefault();
      const addMoney = getInputFieldById('add-money-noakhali');
      const currentBalance = getTextFieldById('balance');
      const randomNum = /^\d+(\.\d{1,2})?$/;

      if(isNaN(addMoney)){
        alert('Invalid Donation Amount');
        closeInvalidModal();
        location.reload(true);
        return;
      }
      if(!randomNum.test(addMoney)){
        alert('Invalid Donation Amount');
        closeInvalidModal();
        location.reload(true);
        return;

      }
      if(addMoney<0){
        alert('Invalid Donation Amount');
        closeInvalidModal();
        location.reload(true);
        return;
      }
      if(addMoney>currentBalance){
        alert('Try again Later');
        closeInvalidModal();
        location.reload(true);
        return;
      }
      
  
      const currentAmount = getTextFieldById('current-donation-nk');
      const newDonation = currentAmount + addMoney;
      document.getElementById('current-donation-nk').innerText = newDonation + ' BDT';

      
      const newBalance = currentBalance - addMoney;
      document.getElementById('balance').innerText = newBalance + ' BDT';
    
   })