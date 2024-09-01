
function sendDataToGsheet() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzzOCv3nl7Hi5vco7QmRDrshpZFkjpX0YMmuuGwlpL7Y764UovpOMKB0CIFePS7kh7s/exec';
    const form = document.forms['contact-form'];
    
    form.addEventListener( 'submit', e=>{
        e.preventDefault()
        fetch( scriptURL, { method: 'POST', body: new FormData(form) } )
        .then( response => alert( "Thank you! Your form is submitted successfully." ) )
        .then( () => { window.location.reload(); } )
        .catch( error => console.error( 'Error!', error.message ) )
    } )
}