document.addEventListener('DOMContentLoaded', function() {
    // Project data - you can expand this with more projects
    const projectsData = {
        1: {
            title: "Personal Portfolio V2.0",
            description: "A responsive portfolio website showcasing my skills, projects, Certificates, Experience and Contact built with modern web technologies. This is the second iteration of my portfolio with improved design, performance, and user experience.",
            image: "Images/projects/V2.0.png",
            techStack: ["HTML5", "CSS3", "Java Script", "Bootstrap"],
            demoUrl: "https://mostafa-zahran.netlify.app",
            codeUrl: "https://github.com/Mostafa-Zhran/V2.0-Portfolio"
        },
        2: {
            title: "Sales Management Desktop App",
            description: "A desktop-based system designed to manage products, categories, customers, sales, and orders efficiently. With features like inventory tracking, detailed sales and customer management, the app simplifies daily operations and helps businesses stay organized. Its user-friendly interface makes it easy to navigate between products, groups, sales, and orders , ensuring smooth workflow and better decision-making.",
            image: "Images/projects/Sales App.png",
            techStack: ["C#", "Windows Form",".Net Core", "SQL Server", "ADO.net", "Dapper"],
            codeUrl: "https://github.com/Mostafa-Zhran/Sales-Management-System-Desktop-app.git"
        },
        3: {
            title: "Breast Cancer Prediction System",
            description: "Our Breast Cancer Prediction System uses validated machine-learning models to analyze clinical and imaging data and provide clear risk scores and explanations to support early detection and care decisions. It’s designed as a clinical decision-support tool — not a replacement for professional diagnosis and screening.",
            image: "Images/projects/Cancer detection.png",
            techStack: ["Flask", "Python", "4ML Algorithms" ,"HTML5","CSS3", "Java Script"],
            demoUrl: "https://breast-cancer-predection.netlify.app",
            codeUrl: "https://github.com/Mostafa-Zhran/ML-Project-Deployment.git"
        },
        4: {
            title: "Personal Portfolio V1.0",
            description: "A clean and modern portfolio showcasing my projects, skills, and achievements. Designed with simplicity and usability in mind, it highlights my work in a professional way while offering an easy and engaging experience for visitors",
            image: "Images/projects/V1.0.png",
            techStack: ["HTML5", "CSS3", "Java Script", "Bootstrap"],
            demoUrl: "https://mostafazahran.netlify.app/",
            codeUrl: "https://github.com/Mostafa-Zhran/My_Protofolio"  
          }
    };

    // DOM Elements
    const carousel = document.querySelector('.projects-carousel');
    const prevBtn = document.querySelector('.carousel-arrow-prev');
    const nextBtn = document.querySelector('.carousel-arrow-next');
    const modal = document.getElementById('projectModal');
    const modalBody = document.querySelector('.project-modal-body');
    const closeModal = document.querySelector('.project-modal-close');
    const modalOverlay = document.querySelector('.project-modal-overlay');

    // Initialize carousel
    function initCarousel() {
        if (!carousel) return;
        
        // Set initial scroll position
        carousel.scrollLeft = 0;
        
        // Update arrow visibility
        updateArrowVisibility();
        
        // Add scroll event listener
        carousel.addEventListener('scroll', updateArrowVisibility);
        
        // Add keyboard navigation
        document.addEventListener('keydown', handleKeyDown);
        
        // Add click event listeners for navigation arrows
        const prevBtn = document.querySelector('#projects .carousel-arrow-prev');
        const nextBtn = document.querySelector('#projects .carousel-arrow-next');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => scrollCarousel('prev'));
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => scrollCarousel('next'));
        }
    }

    // Update arrow visibility based on scroll position
    function updateArrowVisibility() {
        if (!carousel) return;
        
        const scrollLeft = carousel.scrollLeft;
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        
        // Previous button state
        if (scrollLeft <= 10) {
            prevBtn.style.opacity = '0.5';
            prevBtn.style.cursor = 'not-allowed';
            prevBtn.disabled = true;
        } else {
            prevBtn.style.opacity = '1';
            prevBtn.style.cursor = 'pointer';
            prevBtn.disabled = false;
        }
        
        // Next button state
        if (scrollLeft >= maxScroll - 10) {
            nextBtn.style.opacity = '0.5';
            nextBtn.style.cursor = 'not-allowed';
            nextBtn.disabled = true;
        } else {
            nextBtn.style.opacity = '1';
            nextBtn.style.cursor = 'pointer';
            nextBtn.disabled = false;
        }
    }

    // Handle keyboard navigation
    function handleKeyDown(e) {
        if (modal.classList.contains('show')) {
            // Close modal on Escape key
            if (e.key === 'Escape') {
                closeModal.click();
            }
        } else {
            // Navigate carousel with arrow keys
            if (e.key === 'ArrowLeft') {
                scrollCarousel('prev');
            } else if (e.key === 'ArrowRight') {
                scrollCarousel('next');
            }
        }
    }

    // Scroll carousel
    function scrollCarousel(direction) {
        if (!carousel) return;
        
        const card = carousel.querySelector('.project-slide');
        if (!card) return;
        
        const cardWidth = card.offsetWidth + 24; // 24px gap
        const scrollAmount = direction === 'prev' ? -cardWidth : cardWidth;
        
        // Calculate new scroll position
        let newScrollLeft = carousel.scrollLeft + scrollAmount;
        
        // Ensure we don't scroll past the boundaries
        newScrollLeft = Math.max(0, Math.min(newScrollLeft, carousel.scrollWidth - carousel.clientWidth));
        
        // Smooth scroll to the new position
        carousel.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth'
        });
        
        // Update arrow visibility after a short delay to account for smooth scrolling
        setTimeout(updateArrowVisibility, 300);
    }

    // Open project modal
    function openModal(projectId) {
        const project = projectsData[projectId];
        if (!project) return;
        
        // Create modal content
        const modalContent = `
            <div class="row">
                <div class="col-lg-6">
                    <img src="${project.image}" alt="${project.title}" class="modal-project-image">
                </div>
                <div class="col-lg-6">
                    <h2 class="modal-project-title">${project.title}</h2>
                    <p class="modal-project-description">${project.description}</p>
                    
                    <div class="modal-project-tech">
                        ${project.techStack.map(tech => `<span class="modal-tech-tag">${tech}</span>`).join('')}
                    </div>
                    
                    <div class="modal-project-links">
                        ${project.demoUrl ? `
                            <a href="${project.demoUrl}" target="_blank" class="btn-demo" aria-label="View live demo">
                                <i data-lucide="eye" style="width: 16px; height: 16px;"></i>
                                Live Demo
                            </a>
                        ` : ''}
                        
                        ${project.codeUrl ? `
                            <a href="${project.codeUrl}" target="_blank" class="btn-code" aria-label="View source code">
                                <i data-lucide="github" style="width: 16px; height: 16px;"></i>
                                View Code
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
        
        // Update modal content and show
        modalBody.innerHTML = modalContent;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        
        // Initialize Lucide icons
        lucide.createIcons();

        // Certificates Carousel Functionality
        const certCarousel = document.querySelector('.certificates-carousel');
        const certPrevBtn = document.querySelector('#certificates .carousel-arrow-prev');
        const certNextBtn = document.querySelector('#certificates .carousel-arrow-next');
        const certSlides = document.querySelectorAll('.certificate-slide');

        if (certCarousel && certPrevBtn && certNextBtn) {
            let currentCertSlide = 0;
            const certSlideWidth = 350; // Match this with your CSS width
            const certGap = 25; // Match this with your CSS gap

            function updateCertButtons() {
                certPrevBtn.style.visibility = currentCertSlide === 0 ? 'hidden' : 'visible';
                certNextBtn.style.visibility = currentCertSlide >= certSlides.length - 3 ? 'hidden' : 'visible';
            }

            function scrollCertCarousel(direction) {
                const containerWidth = certCarousel.offsetWidth;
                const scrollAmount = containerWidth / 2; // Scroll half the container width
                
                if (direction === 'prev' && currentCertSlide > 0) {
                    currentCertSlide--;
                    certCarousel.scrollLeft -= scrollAmount;
                } else if (direction === 'next' && currentCertSlide < certSlides.length - 1) {
                    currentCertSlide++;
                    certCarousel.scrollLeft += scrollAmount;
                }

                updateCertButtons();
            }

            // Event listeners for certificate carousel
            certPrevBtn.addEventListener('click', () => scrollCertCarousel('prev'));
            certNextBtn.addEventListener('click', () => scrollCertCarousel('next'));

            // Initialize buttons
            updateCertButtons();
            
            // Hide next button if all slides are visible
            const checkSlides = () => {
                const containerWidth = certCarousel.offsetWidth;
                const totalSlidesWidth = certSlides.length * (certSlideWidth + certGap) - certGap;
                
                if (containerWidth >= totalSlidesWidth) {
                    certNextBtn.style.display = 'none';
                    certPrevBtn.style.display = 'none';
                } else {
                    certNextBtn.style.display = 'flex';
                    updateCertButtons();
                }
            };

            // Check on load and resize
            window.addEventListener('load', checkSlides);
            window.addEventListener('resize', checkSlides);
        }
        
        // Focus on close button for better keyboard navigation
        setTimeout(() => {
            closeModal.focus();
        }, 100);
    }

    // Close modal
    function closeModalFunc() {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Re-enable scrolling
    }

    // Event listeners are now in initCarousel()
    
    // Close modal when clicking outside content
    modalOverlay.addEventListener('click', closeModalFunc);
    closeModal.addEventListener('click', closeModalFunc);
    
    // Close modal with Escape key is handled in handleKeyDown
    
    // Handle clicks on project cards
    document.addEventListener('click', (e) => {
        // Handle view details button click
        if (e.target.closest('.view-project-details')) {
            e.preventDefault();
            const button = e.target.closest('.view-project-details');
            const projectId = button.getAttribute('data-project-id');
            
            // Add loading state
            button.classList.add('btn-loading');
            button.setAttribute('disabled', 'disabled');
            
            // Simulate loading (you can remove the setTimeout in production)
            setTimeout(() => {
                openModal(projectId);
                // Remove loading state
                button.classList.remove('btn-loading');
                button.removeAttribute('disabled');
            }, 800); // 0.8s delay to show the loading effect
        }
        
        // Handle demo button clicks in modal
        if (e.target.closest('.btn-demo, .btn-code')) {
            e.preventDefault();
            const button = e.target.closest('.btn-demo, .btn-code');
            const url = button.getAttribute('href');
            
            if (!url || url === '#') return;
            
            // Add loading state
            const originalText = button.innerHTML;
            button.innerHTML = '';
            button.classList.add('btn-loading');
            button.style.width = button.offsetWidth + 'px';
            
            // Simulate loading (in a real app, this would be your actual action)
            setTimeout(() => {
                window.open(url, '_blank');
                // Remove loading state after a short delay
                setTimeout(() => {
                    button.classList.remove('btn-loading');
                    button.innerHTML = originalText;
                    button.style.width = '';
                }, 500);
            }, 1000);
        }
        
        // Handle clicks on project cards (if you want the whole card to be clickable)
        if (e.target.closest('.project-card') && !e.target.closest('.project-actions')) {
            e.preventDefault();
            const projectId = e.target.closest('.project-slide').getAttribute('data-project-id');
            openModal(projectId);
        }
    });

    // Initialize carousel
    initCarousel();

    // Initialize Certificates Carousel
    const certCarousel = document.querySelector('.certificates-carousel');
    const certPrevBtn = document.querySelector('#certificates .carousel-arrow-prev');
    const certNextBtn = document.querySelector('#certificates .carousel-arrow-next');
    const certSlides = document.querySelectorAll('.certificate-slide');

    if (certCarousel && certPrevBtn && certNextBtn) {
        let currentCertSlide = 0;
        const certSlideWidth = 350; // Match this with your CSS width
        const certGap = 25; // Match this with your CSS gap

        function updateCertButtons() {
            // Previous button state
            if (currentCertSlide <= 0) {
                certPrevBtn.style.opacity = '0.5';
                certPrevBtn.style.cursor = 'not-allowed';
                certPrevBtn.disabled = true;
            } else {
                certPrevBtn.style.opacity = '1';
                certPrevBtn.style.cursor = 'pointer';
                certPrevBtn.disabled = false;
            }
            
            // Next button state
            const maxScroll = certCarousel.scrollWidth - certCarousel.clientWidth;
            if (certCarousel.scrollLeft >= maxScroll - 10) {
                certNextBtn.style.opacity = '0.5';
                certNextBtn.style.cursor = 'not-allowed';
                certNextBtn.disabled = true;
            } else {
                certNextBtn.style.opacity = '1';
                certNextBtn.style.cursor = 'pointer';
                certNextBtn.disabled = false;
            }
        }

        function scrollCertCarousel(direction) {
            const card = certCarousel.querySelector('.certificate-slide');
            if (!card) return;
            
            const cardWidth = card.offsetWidth + certGap;
            let scrollAmount = direction === 'prev' ? -cardWidth : cardWidth;
            
            // Calculate new scroll position
            let newScrollLeft = certCarousel.scrollLeft + scrollAmount;
            
            // Ensure we don't scroll past the boundaries
            newScrollLeft = Math.max(0, Math.min(newScrollLeft, certCarousel.scrollWidth - certCarousel.clientWidth));
            
            // Update current slide based on scroll position
            currentCertSlide = Math.round(newScrollLeft / cardWidth);
            
            // Smooth scroll to the new position
            certCarousel.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
            
            // Update button states after a short delay
            setTimeout(updateCertButtons, 300);
        }

        // Event listeners for certificate carousel
        certPrevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!certPrevBtn.disabled) {
                scrollCertCarousel('prev');
            }
        });
        
        certNextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!certNextBtn.disabled) {
                scrollCertCarousel('next');
            }
        });

        // Update buttons on scroll
        certCarousel.addEventListener('scroll', updateCertButtons);
        
        // Initialize buttons
        updateCertButtons();
        
        // Check on load and resize
        const handleResize = () => {
            updateCertButtons();
        };
        
        window.addEventListener('load', handleResize);
        window.addEventListener('resize', handleResize);
    }
});
