document.addEventListener('DOMContentLoaded', (event) => {
    // Функция для анимации разделов
    function toggleSection(section) {
        const content = section.querySelector('p');
        if (content.style.maxHeight) {
            // Раздел закрыт
            content.style.maxHeight = null;
            section.style.border = '1px solid #303030';
        } else {
            // Раздел открыт
            content.style.maxHeight = content.scrollHeight + 'px';
            section.style.border = '2px solid #00e6e6';
        }
    }

    // Прикрепляем событие клика к каждому разделу
    document.querySelectorAll('section').forEach((section) => {
        section.addEventListener('click', () => {
            toggleSection(section);
        });
    });

    // Эффект "неоновой" подсветки при наведении мыши
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.onmouseenter = () => link.style.textShadow = '0 0 5px #00e6e6, 0 0 15px #00e6e6';
        link.onmouseleave = () => link.style.textShadow = '';
    });
});