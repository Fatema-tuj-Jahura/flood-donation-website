document.getElementById('btn-donate-noakhali')
   .addEventListener('click', function(event){
      event.preventDefault();
      const addMoney = getInputFieldById('add-money-noakhali');
      const currentBalance = getTextFieldById('balance');
      
      if(isNaN(addMoney)){
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
      updateDateTime();
      setInterval(updateDateTime, 1000);
      const time = document.getElementById('dateTime').innerText;
      
      //History   
      const div = document.createElement('div');
      div.classList.add('bg-white');
      div.innerHTML = `
         <div class="border-slate-600 bg-white rounded-lg p-2 lg:p-7 shadow-md my-auto mx-5 lg:mx-40">
           <h4 class="text-black text-xl font-bold">${newDonation} Taka is Donated for flood at Noakhali, Bangladesh</h4>
           <p class="text-black" >${time}</p>
         </div>
      `
      document.getElementById('history-container').appendChild(div);

   })