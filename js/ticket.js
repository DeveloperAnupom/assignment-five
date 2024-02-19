const allSeats = document.getElementsByClassName('seat');
let count = 0;
let seatAhead = 40;
for (const seat of allSeats) {
    seat.addEventListener("click", function (event) {
        count = count + 1;
        buttonAble()
        seatAhead = seatAhead - 1;
        if (count <= 4) {
            seat.classList.add('bg-[#1DD100]');
            document.getElementById('count-seat').innerText = count;
            document.getElementById('seat-ahead').innerText = seatAhead;
            document.getElementById('total-price').innerText = count * 550;
            const seatName = event.target.innerText;
            const addTicket = document.getElementById('add-ticket');
            const li = document.createElement('li');
            const h3 = document.createElement('h3');
            h3.innerText = seatName;
            const h32 = document.createElement('h3');
            h32.innerText = "Economy Class";
            const h33 = document.createElement('h3');
            h33.innerText = "550";
            li.appendChild(h3);
            li.appendChild(h32);
            li.appendChild(h33);
            addTicket.appendChild(li);
        }
        else {
            alert("SORRY !!!! You Can Buy Only 4 Seats.")
        }
    }, { once: true })
}

document.getElementById('coupon-apply').addEventListener('click', function () {
    const couponInput = document.getElementById('coupon-input');
    const grandTotal = document.getElementById("grand-total");
    const totalPrice = count * 550;
    if (couponInput.value === "NEW15") {
        const discount = totalPrice * 0.15;
        grandTotal.innerText = totalPrice - discount;
        const discountText = document.getElementById('discount');
        const h3 = document.createElement("h3");
        h3.innerText = "Your Discount Amount Is : ";
        const h32 = document.createElement("h3");
        h32.innerText = discount;
        discountText.appendChild(h3);
        discountText.appendChild(h32);
    }
    else if (couponInput.value === "Couple 20") {
        const discount2 = totalPrice * 0.2;
        grandTotal.innerText = totalPrice - discount2;
        const discountText = document.getElementById('discount');
        const h3 = document.createElement("h3");
        h3.innerText = "Your Discount Amount Is : ";
        const h32 = document.createElement("h3");
        h32.innerText = discount2;
        discountText.appendChild(h3);
        discountText.appendChild(h32);
    }
    else {
        grandTotal.innerText = totalPrice;
    }
}, { once: true })






function buttonAble() {
    const phoneNumber = document.getElementById("number").value;
    const applyButton = document.getElementById('apply');
    console.log(count);
    if (count > 0 && phoneNumber.length > 0) {
        applyButton.removeAttribute('disabled');
    }

}


document.getElementById('reset-button').addEventListener('click', function () {
    window.location.reload()
})

