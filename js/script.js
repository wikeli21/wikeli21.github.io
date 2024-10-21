// Desplazamiento suave entre secciones
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validación simple del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Formulario enviado correctamente');
});

//Código de las habilidades

// Esperamos a que el DOM esté cargado completamente
document.addEventListener('DOMContentLoaded', function () {

    // Animaciones de gráficos al cargar desde 0 hasta el porcentaje definido
    const animationOptions = {
        duration: 2000, // Duración de la animación en milisegundos (2 segundos)
        easing: 'easeOutBounce' // Efecto de animación
    };

    // Desarrollo Web
    const ctxWeb = document.getElementById('skillWebDevelopment').getContext('2d');
    new Chart(ctxWeb, {
        type: 'doughnut',
        data: {
            labels: ['Competencia', ''],
            datasets: [{
                label: 'Nivel de competencia',
                data: [80, 20], // 80% de competencia
                backgroundColor: ['#007bff', '#e9ecef'],
                borderWidth: 0
            }]
        },
        options: {
            cutout: '70%',
            responsive: true,
            animation: animationOptions,
            plugins: {
                legend: {
                    display: false // Ocultamos la leyenda
                }
            }
        }
    });

    // Diseño Gráfico
    const ctxGraphic = document.getElementById('skillGraphicDesign').getContext('2d');
    new Chart(ctxGraphic, {
        type: 'doughnut',
        data: {
            labels: ['Competencia', ''],
            datasets: [{
                label: 'Nivel de competencia',
                data: [70, 30], // 70% de competencia
                backgroundColor: ['#28a745', '#e9ecef'],
                borderWidth: 0
            }]
        },
        options: {
            cutout: '70%',
            responsive: true,
            animation: animationOptions,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Gestión de Proyectos
    const ctxProject = document.getElementById('skillProjectManagement').getContext('2d');
    new Chart(ctxProject, {
        type: 'doughnut',
        data: {
            labels: ['Competencia', ''],
            datasets: [{
                label: 'Nivel de competencia',
                data: [90, 10], // 90% de competencia
                backgroundColor: ['#ffc107', '#e9ecef'],
                borderWidth: 0
            }]
        },
        options: {
            cutout: '70%',
            responsive: true,
            animation: animationOptions,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

});


//Actualización de script.js usando Intersection Observer
document.addEventListener('DOMContentLoaded', function () {

    // Función para inicializar gráficos
    function createChart(ctx, data, backgroundColor) {
        return new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Competencia', ''],
                datasets: [{
                    label: 'Nivel de competencia',
                    data: data,
                    backgroundColor: backgroundColor,
                    borderWidth: 0
                }]
            },
            options: {
                cutout: '70%',
                responsive: true,
                animation: {
                    duration: 2000,
                    easing: 'easeOutBounce'
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    // Observador de intersección
    const observerOptions = {
        root: null,
        threshold: 0.2 // Se activará cuando el 20% del gráfico sea visible
    };

    // Callback del observador, activa el gráfico cuando entra en vista
    function onIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const ctx = entry.target.getContext('2d');
                const skillType = entry.target.getAttribute('data-skill');
                switch (skillType) {
                    case 'web':
                        createChart(ctx, [80, 20], ['#007bff', '#e9ecef']);
                        break;
                    case 'graphic':
                        createChart(ctx, [70, 30], ['#28a745', '#e9ecef']);
                        break;
                    case 'project':
                        createChart(ctx, [90, 10], ['#ffc107', '#e9ecef']);
                        break;
                }
                observer.unobserve(entry.target); // Deja de observar una vez que el gráfico se ha cargado
            }
        });
    }

    // Crear el observador
    const observer = new IntersectionObserver(onIntersection, observerOptions);

    // Seleccionar todos los elementos canvas
    const canvases = document.querySelectorAll('canvas');
    canvases.forEach(canvas => {
        observer.observe(canvas); // Observar cada gráfico
    });

});


// Detectar el desplazamiento para la barra de progreso
window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // Posición de scroll
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Altura total de la página
    const scrollPercentage = (scrollTop / scrollHeight) * 100; // Porcentaje de scroll

    // Actualizar el ancho de la barra de progreso
    document.getElementById('progress-bar').style.width = scrollPercentage + '%';
});


// Intersection Observer para revelar los elementos al hacer scroll
document.addEventListener('DOMContentLoaded', function() {

    const revealElements = document.querySelectorAll('.reveal'); // Seleccionamos todos los elementos con la clase "reveal"

    const revealObserverOptions = {
        threshold: 0.1 // El 10% del elemento debe ser visible antes de que se active
    };

    // Callback para el observador
    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible'); // Añade la clase visible
                observer.unobserve(entry.target); // Deja de observar una vez que el elemento ha sido revelado
            }
        });
    };

    // Creamos el observador
    const revealObserver = new IntersectionObserver(revealOnScroll, revealObserverOptions);

    // Observamos cada elemento a revelar
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

});

// Efecto Parallax para la sección Hero
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset; // Obtener el desplazamiento vertical
    const heroSection = document.querySelector('.hero');

    // Modificar la posición del fondo de la sección Hero
    heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Función para el menú desplegable en pantallas móviles
document.getElementById('menu-icon').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    const menuIcon = document.getElementById('menu-icon');
    const overlay = document.getElementById('overlay');
    
    menu.classList.toggle('show'); // Mostrar/ocultar el menú
    menuIcon.classList.toggle('active'); // Cambiar el ícono del menú a una X
    overlay.classList.toggle('active'); // Mostrar/ocultar el fondo oscuro
});

// Cerrar el menú y el fondo oscuro al hacer clic en los enlaces
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function() {
        const menu = document.getElementById('menu');
        const menuIcon = document.getElementById('menu-icon');
        const overlay = document.getElementById('overlay');
        
        menu.classList.remove('show');
        menuIcon.classList.remove('active');
        overlay.classList.remove('active'); // Ocultamos el overlay
    });
});

// Cerrar el menú y el fondo oscuro al hacer clic en el overlay
document.getElementById('overlay').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    const menuIcon = document.getElementById('menu-icon');
    const overlay = document.getElementById('overlay');
    
    menu.classList.remove('show');
    menuIcon.classList.remove('active');
    overlay.classList.remove('active'); // Ocultamos el overlay
});


// Intersection Observer para revelar los elementos de la línea de tiempo
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observerOptions = {
        threshold: 0.4 // Se activará cuando el 10% del elemento sea visible
    };

    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal'); // Añadir clase para activar la animación
                observer.unobserve(entry.target); // Deja de observar una vez que el elemento ha sido revelado
            }
        });
    };

    const observer = new IntersectionObserver(revealOnScroll, observerOptions);

    // Observar cada elemento de la línea de tiempo
    timelineItems.forEach(item => {
        observer.observe(item);
    });
});


// Mostrar el botón cuando el usuario ha hecho scroll hacia abajo
window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('backToTop');

    if (window.scrollY > 300) { // Mostrar después de 300px de desplazamiento
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Desplazamiento suave hacia la parte superior
document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
});


// Función para abrir y cerrar el modal


document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('portfolioModal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTechnologies = document.getElementById('modal-technologies');
    const modalLink = document.getElementById('modal-link');
    const closeModal = document.querySelector('.modal .close');
    const carouselImages = document.getElementById('carousel-images');
    const carouselIndicator = document.getElementById('carousel-indicator');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const zoomModal = document.getElementById('zoomModal');
    const zoomedImage = document.getElementById('zoomedImage');
    const closeZoom = document.querySelector('.close-zoom');
    
    const projects = {
        project1: {
            title: 'Proyecto 1',
            description: 'Este es un proyecto de desarrollo web que utiliza HTML, CSS, y JavaScript.',
            technologies: 'HTML, CSS, JavaScript',
            link: 'https://example.com',
            // images: ['project1-1.jpg', 'project1-2.jpg', 'project1-3.jpg']
            images: ['https://images.unsplash.com/photo-1489486501123-5c1af10d0be6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
        },
        project2: {
            title: 'Proyecto 2',
            description: 'Este proyecto está construido con React.js y Node.js.',
            technologies: 'React.js, Node.js',
            link: 'https://example.com',
            images: ['project2-1.jpg', 'project2-2.jpg']
        }
    };

    let currentIndex = 0;
    let totalImages = 0;

    // Abrir modal con los detalles del proyecto
    document.querySelectorAll('.open-modal').forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const project = projects[projectId];

            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modalTechnologies.textContent = `Tecnologías: ${project.technologies}`;
            modalLink.href = project.link;

            // Insertar imágenes del carrusel
            carouselImages.innerHTML = '';
            project.images.forEach((image, index) => {
                const imgElement = document.createElement('img');
                imgElement.src = image;
                imgElement.dataset.image = image;
                if (index !== 0) imgElement.style.transform = `translateX(100%)`;
                carouselImages.appendChild(imgElement);
            });

            currentIndex = 0;
            totalImages = project.images.length;
            updateCarouselIndicator();

            modal.style.display = 'flex'; // Mostrar el modal
        });
    });

    // Cerrar el modal al hacer clic en la 'X'
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Cerrar el modal si se hace clic fuera del contenido
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Función para actualizar el indicador del carrusel
    function updateCarouselIndicator() {
        carouselIndicator.textContent = `${currentIndex + 1} / ${totalImages}`;
    }

    // Función para mostrar la imagen anterior en el carrusel
    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            const images = carouselImages.querySelectorAll('img');
            images[currentIndex].style.transform = 'translateX(100%)';
            currentIndex--;
            images[currentIndex].style.transform = 'translateX(0)';
            updateCarouselIndicator();
        }
    });

    // Función para mostrar la imagen siguiente en el carrusel
    nextButton.addEventListener('click', function() {
        if (currentIndex < totalImages - 1) {
            const images = carouselImages.querySelectorAll('img');
            images[currentIndex].style.transform = 'translateX(-100%)';
            currentIndex++;
            images[currentIndex].style.transform = 'translateX(0)';
            updateCarouselIndicator();
        }
    });

    // Abrir el zoom cuando se hace clic en una imagen del carrusel
    carouselImages.addEventListener('click', function(event) {
        if (event.target.tagName === 'IMG') {
            zoomedImage.src = event.target.dataset.image;
            zoomModal.style.display = 'flex'; // Mostrar el zoom
        }
    });

    // Cerrar el zoom al hacer clic en la 'X'
    closeZoom.addEventListener('click', function() {
        zoomModal.style.display = 'none';
    });

    // Cerrar el zoom si se hace clic fuera de la imagen
    window.addEventListener('click', function(event) {
        if (event.target == zoomModal) {
            zoomModal.style.display = 'none';
        }
    });
});


/******************************************************************/
/*JavaScript para animar las barras de progreso*/
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress');

    // Opciones para el Intersection Observer
    const options = {
        threshold: 0.3 // Se activa cuando el 30% del elemento es visible
    };

    // Función que llena la barra de progreso
    const fillBar = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const percentage = bar.getAttribute('data-percentage');
                bar.style.width = percentage + '%'; // Establecer el ancho según el porcentaje
                observer.unobserve(bar); // Dejar de observar la barra una vez que se ha llenado
            }
        });
    };

    // Crear el observador
    const observer = new IntersectionObserver(fillBar, options);

    // Observar todas las barras de progreso
    progressBars.forEach(bar => {
        observer.observe(bar);
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');

    // Función que se ejecuta al hacer scroll
    function toggleHeaderBackground() {
        if (window.scrollY > 50) { // Cambia a tu valor deseado
            header.classList.add('scrolled');
            header.classList.remove('transparent');
        } else {
            header.classList.add('transparent');
            header.classList.remove('scrolled');
        }
    }

    // Ejecutar la función al cargar la página y al hacer scroll
    window.addEventListener('scroll', toggleHeaderBackground);

    // Asegurarse de que el header es transparente al cargar la página
    toggleHeaderBackground();
});

