function getInputFieldById (id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;

}

function getTextFieldById (id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue.replace(/\D/g, ''));
    return textNumber;

}


function showModal(){
    document.getElementsByClassName('modal').style.display = 'block';
}

function closeModal() {
    document.getElementsByClassName('close-btn').style.display = 'none';
}

function closeInvalidModal(){
    const modal = document.getElementById('modal_1');
    modal.hidden= true;
}
function closeInvalidModal2(){
    const modal = document.getElementById('modal_2');
    modal.style.display="none";
}

function closeInvalidModal3(){
    const modal = document.getElementById('modal_3');
    modal.style.display="none";
}

function showSectionById(id){
    document.getElementById('donation-form').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
    

}
function updateDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();
    const dateString = `Date : ${now.toString()}`;
    dateTimeElement.textContent = dateString;
}

