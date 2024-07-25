document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.typing-text');
    const cursor = document.querySelector('.cursor');
    const fullText = textElement.innerText;
    textElement.innerHTML = '';
    cursor.style.display = 'inline';
    let index = 0;

    function type() {
        if (index < fullText.length) {
            textElement.innerHTML = fullText.substring(0, index + 1) + '<span class="cursor">|</span>';
            index++;
            setTimeout(type, 50); // Adjust typing speed here
        } else {
            cursor.style.display = 'inline'; // Keep cursor visible after typing is complete
        }
    }

    type();
});
