 // Testimonial Slider
    document.addEventListener('DOMContentLoaded', function() {
        const slides = document.querySelectorAll('.testimonial-slide');
        const dots = document.querySelectorAll('.dot');
        
        if (slides.length > 0 && dots.length > 0) {
            function showSlide(index) {
                slides.forEach(slide => slide.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                
                slides[index].classList.add('active');
                dots[index].classList.add('active');
            }

            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => showSlide(index));
            });
        }
    });

    // Button handlers
    document.querySelectorAll('#bookbtn, #bookbtn1, .center-content .btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Redirecting to registration...');
            // Add actual registration URL here
            // window.location.href = 'your-registration-url';
        });
    });
