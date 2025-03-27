/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Manejo del formulario de registro
    document.getElementById('contactForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validar campos
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        let isValid = true;
        
        // Validación individual de campos
        if (!name) {
            document.getElementById('name').classList.add('is-invalid');
            isValid = false;
        }
        
        if (!email || !email.includes('@')) {
            document.getElementById('email').classList.add('is-invalid');
            isValid = false;
        }
        
        if (!phone) {
            document.getElementById('phone').classList.add('is-invalid');
            isValid = false;
        }
        
        if (!message) {
            document.getElementById('message').classList.add('is-invalid');
            isValid = false;
        }
        
        if (isValid) {
            // Mostrar mensaje de éxito
            document.getElementById('successMessage').style.display = 'block';
            
            // Ocultar formulario
            document.getElementById('contactForm').style.display = 'none';
            
            // Desplazarse al mensaje de éxito
            document.getElementById('successMessage').scrollIntoView({ behavior: 'smooth' });
            
            // Opcional: Guardar los datos en localStorage
            const userData = {
                name,
                email,
                phone,
                message,
                registeredAt: new Date().toISOString()
            };
            localStorage.setItem('userRegistration', JSON.stringify(userData));
        }
    });

    // Quitar clases de invalid cuando el usuario escribe
    document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(input => {
        input.addEventListener('input', function() {
            this.classList.remove('is-invalid');
        });
    });
});