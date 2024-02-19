function setValue(elementId, value){
  document.getElementById(elementId).innerText = value;
}
function disableAllButtons() {
    for (const button of x) {
        if (!button.classList.contains('selected')) {
            button.classList.add('disabled');
            button.disabled = true;
        }
    }
}
function getValue(elementId){
  return parseFloat(document.getElementById(elementId).innerText)
}
function enableAllButtons() {
    for (const button of x) {
        button.classList.remove('disabled');
        button.disabled = false;
    }
}

function printtotal(x){
   const w = document.getElementById("printprice")
   const div = document.createElement("div")
   const p1 = document.createElement('p')
   const p2 = document.createElement('p')
   const p3 = document.createElement('p')
   p1.innerText = x
   p2.innerText = "Economy"
   p3.innerText = 550
   p1.classList.add("inter","font-medium","text-[16px]","text-[#03071299]")
   p2.classList.add("inter","font-medium","text-[16px]","text-[#03071299]")
   p3.classList.add("inter","font-medium","text-[16px]","text-[#03071299]")
   div.classList.add('flex')
   div.classList.add('justify-between')
   div.classList.add(x)
   div.appendChild(p1)
   div.appendChild(p2)
   div.appendChild(p3)
   w.appendChild(div)
}
function printdiscount(x){
    const w = document.getElementById("discount")
    const div = document.createElement("div")
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    p1.innerText = "Discount"
    p2.innerText = 'BDT'+' '+x
    p1.classList.add("inter","font-medium","text-[16px]")
    p2.classList.add("inter","font-medium","text-[16px]")
    div.classList.add('flex','justify-between','mt-4')
    div.classList.add('Discount')
    div.appendChild(p1)
    div.appendChild(p2)
    w.appendChild(div)
 }
function update_price(w){
    return w * 550  
}
function erase(elementId,p){
    const w = document.getElementById(elementId)
    for(so of w.children){
        if(so.classList.contains(p)){
            w.removeChild(so);
        }
    }
}
function updateButtonState(selected) {
    const selectedSeats = selected
    const phoneNumberInput = document.getElementById('phnumber');
    const phoneNumber = phoneNumberInput.value.trim();

    if (selectedSeats >= 1 && phoneNumber.length >= 1) {
        yourButton.disabled = false;
    } else {
        yourButton.disabled = true;
    }
}

function removediscount(){
    var parent = document.getElementById("discount");
    var className = "Discount";
    for (let w of parent) {
        if (w.classList.contains(className)) {
            childNode.innerHTML = ''
        }
    }
}
