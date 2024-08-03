function sendMail() {

	const name = document.getElementById("yourName");
	const email = document.getElementById("yourEmail");
	const message = document.getElementById("message") || 'No Input Message';
	const phoneNumber = document.getElementById("phone-number") || '0';
	const yourSubject = document.getElementById("yourSubject") || '0';

	let ebody = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <dityle="background-color: #yellow; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 123, 255, 0.1);">
                <h2 style="color: #007bff;">Inquiry Details Received from the Website filled by the user: ${email.value}</h2>
                <p style="margin: 10px 0;"><b style="color: #007bff;">Name:</b> <span style="color: #333;">${name.value}</span></p>
                <p style="margin: 10px 0;"><b style="color: #007bff;">Email:</b> <span style="color: #333;">${email.value}</span></p>
                <p style="margin: 10px 0;"><b style="color: #007bff;">Description:</b> <span style="color: #333;">${message.value}</span></p>
                <p style="margin: 10px 0;"><b style="color: #007bff;">Phone Number if any:</b> <span style="color: #333;">${phoneNumber.value}</span></p>
                <p style="margin: 10px 0;"><b style="color: #007bff;">Phone Number if any:</b> <span style="color: #333;">${yourSubject.value}</span></p>
            </div>
            <div style="margin-top: 20px; text-align: center; color: #777;">
                <p>&copy; 2024 Prosiksha Guider. All rights reserved.</p>
            </div>
        </div>
    `

	let options = {
		SecureToken: "33229a7d-b51f-41bc-8673-875d198f7cbd",
		To: "proshikshaguider@gmail.com",
		From: "proshikshaguider@gmail.com",
		Subject: "Mail From Website",
		Body: ebody
	}

	Email.send(options)
		.then(
			message => {
				console.log(message);
				if (message == 'OK') {
					alert('Thanks for submitting details.We will contact you soon.');
				}
				else {
					console.error(message);
					alert('Error submitting form.')
				}
			}
		);
}