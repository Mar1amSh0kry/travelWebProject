
document.querySelectorAll("a").forEach(link => {
    if (link.href === window.location.href) {
        link.style.color = "#007bff"; 
        link.style.fontWeight = "bold";
    }
});


const bookingForm = document.querySelector("#form form");
if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault(); 
        const destination = document.querySelector("#destination").value.trim();
        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#Email").value.trim();

        
        if (!destination ||!name  || !email) {
            alert("Please fill out all required fields.");
            return;
        }

        
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email address.");
            return; 
        }

        alert("Booking successful! We will contact you soon.");
    });
}


const paymentForm = document.querySelector(".payment-form");
if (paymentForm) {
    paymentForm.addEventListener("submit", (e) => {
        e.preventDefault(); 
        const name = document.querySelector("#name").value.trim();
        const cardNumber = document.querySelector("#card-number").value.trim();
        const expiryDate = document.querySelector("#expiry-date").value.trim();
        const cvv = document.querySelector("#cvv").value.trim();

        
        if (!name ||!card-number||  !expiryDate || !cvv) {
            alert("Please fill out all required fields.");
            return;
        }

        
        if (!/^\d{16}$/.test(cardNumber)) {
            alert("Please enter a valid 16-digit card number.");
            return;
        }

        
        if (!/^\d{3}$/.test(cvv)) {
            alert("Please enter a valid 3-digit CVV.");
            return;
        }

        alert("Payment successful! Thank you for booking with us.");
    });
}


document.querySelectorAll("input, textarea, select").forEach(field => {
    field.addEventListener("focus", () => {
        field.style.borderColor = "#007bff"; 
        field.style.boxShadow = "0 0 5px rgba(0, 123, 255, 0.5)"; 
    });
    field.addEventListener("blur", () => {
        field.style.borderColor = "#ddd"; 
        field.style.boxShadow = "none"; 
    });
});