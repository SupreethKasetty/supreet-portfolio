document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();

    const grid = document.querySelector('.grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = lightbox.querySelector('.lightbox-content');
    const closeBtn = document.querySelector('.close');

    // Smooth fade-in on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Filtering
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            document.querySelectorAll('.card').forEach(card => {
                if (filter === 'all' || card.dataset.type === filter) {
                    card.classList.remove('hidden');
                    observer.observe(card);
                } else {
                    card.classList.add('hidden');
                    observer.unobserve(card);
                }
            });
        });
    });

    // Lightbox
    grid.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (!card) return;
        const type = card.dataset.type;
        const src = card.dataset.src;

        lightboxContent.innerHTML = type === 'image'
            ? `<img src="${src}" alt="Full view" loading="lazy">`
            : `<iframe src="${src}" allow="autoplay; fullscreen" allowfullscreen></iframe>`;

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        setTimeout(() => { lightboxContent.innerHTML = ''; }, 250);
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => e.target === lightbox && closeLightbox());
    document.addEventListener('keydown', (e) => e.key === 'Escape' && lightbox.classList.contains('active') && closeLightbox());

    // Contact Form (Formspree)
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            status.textContent = '';
            status.className = '';

            try {
                const res = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: { 'Accept': 'application/json' }
                });
                if (res.ok) {
                    status.textContent = '✅ Message sent successfully!';
                    status.className = 'status-success';
                    form.reset();
                } else {
                    status.textContent = '❌ Failed to send. Try again.';
                    status.className = 'status-error';
                }
            } catch (err) {
                status.textContent = '❌ Network error. Check connection.';
                status.className = 'status-error';
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }
        });
    }
});