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
function showModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }  
