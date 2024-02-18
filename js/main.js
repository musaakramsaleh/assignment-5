function goTo(){
    const p = document.getElementById("ticket")
    if(p){
        p.scrollIntoView({behavior:"smooth"});
    }
}
 let i = 0
// const x = document.getElementsByClassName('handle')
// for(const z of x){
//     z.addEventListener('click',function(event){
//         z.classList.add(selected)
//         z.style.backgroundColor ="blue"
//         i++
//         setValue('available',i)
//         if(i>=4){
//           disableAllButtons();
//         }
//     })
// }

const x = document.getElementsByClassName('handle');
let selectedSeats = 0;

for (const z of x) {
    z.addEventListener('click', function (event) {
        if (!z.classList.contains('selected')) {
            z.classList.add('selected');
            z.style.backgroundColor = "#1DD100";
            z.style.color = "white"
            selectedSeats++;
            const l = document.getElementById('phnumber').value.trim()
            if(selectedSeats >= 1 && l.length>=1){
              console.log(l)
              document.getElementById('apply').removeAttribute("disabled",true)
            }
            setValue('available', selectedSeats);
            setValue('seat',getValue('seat')-1)
            printtotal(z.innerText)
            setValue('total-price',update_price(selectedSeats))
            setValue('grand',getValue('total-price'))
            if (selectedSeats >= 4) {
                disableAllButtons();
                const r = document.getElementById('coupon')
                r.disabled = false
                const applyButton = document.getElementById('apply');

              applyButton.addEventListener('click', function () {
        if (r.value === "NEW15" || r.value === 'Couple 20') {
            if (r.value === "NEW15") {
                setValue('grand', getValue('total-price') - (getValue('total-price') * 0.15));
            } else if (r.value === "Couple 20") {
                setValue('grand', getValue('total-price') - (getValue('total-price') * 0.20));
            }
            applyButton.classList.add("hidden")
            r.classList.add("hidden")
        }
        else{
            alert("pls enter valid Coupon")
            r.value = ""
        }
    });
            }
        } 
        
        else {
            z.classList.remove('selected');
            z.style.backgroundColor = "";
            z.style.color = "" 
            selectedSeats--;
            setValue('available', selectedSeats);
            erase('printprice',z.innerText)
            setValue('total-price',update_price(selectedSeats))
            setValue('seat',getValue('seat')+1)
            setValue('grand',getValue('total-price'))
            const r = document.getElementById('coupon')
            r.disabled = true
            enableAllButtons();
        }
    });
   
}
const pnumber = document.getElementById("phnumber")
pnumber.addEventListener("keyup",function(event){
    const r = event.target.value.length
    const p = document.getElementById("next")
    if(r > 0 && selectedSeats > 0){
        p.removeAttribute("disabled")
    }
    else{
        p.setAttribute("disabled",true)
        
    }    
})
document.getElementById('close').addEventListener('click',function(){
    location.reload();

})
