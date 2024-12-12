document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.accordion .accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const accordion = header.closest('.accordion');
            const content = header.nextElementSibling;
            const isCurrentlyActive = accordion.classList.contains('active');

            // Close all accordion contents
            document.querySelectorAll('.accordion').forEach(acc => {
                const accContent = acc.querySelector('.accordion-content');
                acc.classList.remove('active');
                accContent.style.maxHeight = '0';
            });

            // If it wasn't already active, open this one
            if (!isCurrentlyActive) {
                accordion.classList.add('active');
                content.style.maxHeight = `${content.scrollHeight}px`;
            }
        });
    });
});