document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevents the page from refereshing 
    alert('Thank you for your message, we will get back to you shortly!');
})