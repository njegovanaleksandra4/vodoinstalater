const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        
        // Menjamo izgled ikonice iz hamburgera u X i obrnuto
        if (nav.classList.contains('active')) {
            menuToggle.innerHTML = '✕';
            document.body.style.overflow = 'hidden'; // zaključaj skrolovanje pozadine
        } else {
            menuToggle.innerHTML = '☰';
            document.body.style.overflow = ''; // vrati skrolovanje
        }
    });
    
    // Opciono: Ako klikneš na link, zatvori meni
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuToggle.innerHTML = '☰';
            document.body.style.overflow = '';
        });
    });