document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.accordion-content').forEach(content => {
        content.style.maxHeight = '0';
    });

    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const parent = header.parentElement;
            parent.classList.toggle('active');
            content.style.maxHeight = parent.classList.contains('active') 
                ? content.scrollHeight + 'px' 
                : '0';
        });
    });
});
