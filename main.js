
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});





// الحصول على جميع المربعات
const testimonialBoxes = document.querySelectorAll('.testimonial-box');

// إضافة أحداث hover لكل مربع
testimonialBoxes.forEach((box) => {
  box.addEventListener('mouseover', () => {
    box.style.backgroundColor = '#6274ba'; // تغيير الخلفية عند التمرير
    box.style.transform = 'scale(1.1)'; // تكبير المربع
    box.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)'; // إضافة ظل
  });

  box.addEventListener('mouseout', () => {
    box.style.backgroundColor = '#fff'; // إعادة اللون الأصلي
    box.style.transform = 'scale(1)'; // إعادة الحجم الطبيعي
    box.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // إعادة الظل الأصلي
  });
});


document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    alert('Thank you for contacting us! We will get back to you soon.');
});


const fadeIns = document.querySelectorAll('.fade-in');

const options = {
    threshold: 0.5,
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
    });
}, options);

fadeIns.forEach(fadeIn => {
    appearOnScroll.observe(fadeIn);
});






const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});





// Select all the sections you want to animate
const sections = document.querySelectorAll('section, .testimonial-box, .menu-item, .projects , .blog');

// Function to add the 'show' class when elements are in view
const revealSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Stop observing once it's shown
        }
    });
};

// Create an Intersection Observer
const observer = new IntersectionObserver(revealSection, {
    root: null, // Use viewport as root
    threshold: 0.1, // Trigger when 10% of the section is visible
});

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});


