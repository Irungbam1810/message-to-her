document.getElementById('no').onclick = function() {
    // Change the page content
    document.getElementById('messageContainer').innerHTML = `
        <img src="rose-image.jpg" alt="Big Rose" class="rose-img">
        <h1 style="color: #9e1b1b;">Why are you ignoring me? 😢</h1>
        <p style="font-size: 20px; color: #555;">It really hurts...</p>
        <p style="color: #333; font-size: 18px;">But I still care about you...</p>
    `;
    
    // Add background color change for a more emotional feel
    document.body.style.backgroundColor = "#f1c7c7";
    
    // Disable the buttons
    document.querySelectorAll('.button').forEach(button => button.style.display = 'none');
    
    return false;  // Prevents the page from redirecting
};
