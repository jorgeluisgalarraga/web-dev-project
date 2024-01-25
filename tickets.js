const buttonPressed = (event) => {

    event.preventDefault();

    console.log("You pressed the button!")

    const ticketType = document.getElementById("ticketType").value;

    const numOfTicket = parseInt(document.getElementById("numOfTicket").value);

    const firstName = document.getElementById("firstName").value; 

    const lastName = document.getElementById("lastName").value;

    const ccInfo = parseInt(document.getElementById("ccInfo").value);

    console.log(typeof(ticketType))
    console.log(typeof(numOfTicket))
    console.log(typeof(firstName))
    console.log(typeof(lastName))
    console.log(typeof(ccInfo))

    console.log("Ticket type is:", ticketType);
    console.log("Number of Tickets:", numOfTicket);


    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);

    console.log("Credit Card Information:", ccInfo);

    // calcilation 


    const priceOneDay = 95.00;
    const priceAllAccess = 274.00;

    const pricePerTicket = ticketType === "oneDay" ? priceOneDay : priceAllAccess;
    const subtotal = numOfTicket * pricePerTicket;
    const tax = 0.13 * subtotal;
    const total = subtotal + tax;

    const afterPayment = document.getElementById("afterPayment");

    afterPayment.innerHTML += " <h2>Order Summary</h2> "; 

    if (ticketType === "oneDay") {
        afterPayment.innerHTML += "<p> Your selected ticket type is One Day Pass. </p>";
    } 
    
    else {
        afterPayment.innerHTML += "<p> Your selected ticket type is All Access Pass. </p>";
    } 


    afterPayment. innerHTML += "Your name on the ticket: " + firstName + " " + lastName + "</p>";



    afterPayment.innerHTML += "<p>Number of tickets: " + numOfTicket + " </p>" ;
    afterPayment.innerHTML += "<p>Price per ticket: $ " + pricePerTicket.toFixed(2) + " </p>" ;
    afterPayment.innerHTML += "<p>Subtotal: $ " + subtotal.toFixed(2) + " </p>" ;
    afterPayment.innerHTML += "<p>Tax (13%): $ " + tax.toFixed(2) + " </p>" ;
    afterPayment.innerHTML += "<p>Final Price: $ " + total.toFixed(2) + " </p>" ;


 }

document.querySelector("button").addEventListener("click", buttonPressed)

