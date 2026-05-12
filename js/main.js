document.addEventListener('DOMContentLoaded', () => {
    const year = document.getElementById('year');
    const dynamicText = document.getElementById('dynamic-text');
    const featuredGrid = document.getElementById('featured-grid');
    const galleryGrid = document.getElementById('gallery');
    const skillPills = document.getElementById('skill-pills');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = lightbox.querySelector('.lightbox-content');
    const closeBtn = document.querySelector('.close');
    const grid = galleryGrid || featuredGrid || document.querySelector('.grid');

    year.textContent = new Date().getFullYear();

    const typedWords = [
        'AI-driven VFX',
        'Procedural Motion Design',
        'Immersive CGI Worlds',
        'Storytelling with Neural Art'
    ];

    let typeIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const typeEffect = () => {
        if (!dynamicText) return;
        const current = typedWords[typeIndex];
        dynamicText.textContent = deleting
            ? current.substring(0, charIndex--)
            : current.substring(0, charIndex++);

        if (!deleting && charIndex === current.length + 1) {
            deleting = true;
            setTimeout(typeEffect, 1600);
            return;
        }

        if (deleting && charIndex === 0) {
            deleting = false;
            typeIndex = (typeIndex + 1) % typedWords.length;
        }

        setTimeout(typeEffect, deleting ? 50 : 90);
    };

    typeEffect();

    const featuredItems = [
        { type: 'image', title: 'Car Lighting', src: 'images/Car_Lighting.webp', thumb: 'images/Car_Lighting.webp' },
        { type: 'image', title: 'Product Render', src: 'images/Product.webp', thumb: 'images/Product.webp' },
        { type: 'image', title: 'Office Space', src: 'images/Office_Space_Render.webp', thumb: 'images/Office_Space_Render.webp' },
        { type: 'video', title: 'VFX Showcase 1', src: 'https://www.youtube.com/embed/PTtdEXsEbjA?autoplay=1&mute=1&rel=0', thumb: 'images/img.webp' },
        { type: 'video', title: 'VFX Showcase 2', src: 'https://www.youtube.com/embed/H1Y6crXG6xs?autoplay=1&mute=1&rel=0', thumb: 'images/img.webp' },
        { type: 'video', title: 'VFX Showcase 3', src: 'https://www.youtube.com/embed/8R_kzwme0h8?autoplay=1&mute=1&rel=0', thumb: 'images/img.webp' }
    ];

    const galleryItems = [
        { type: 'image', title: 'Car Lighting', src: 'images/Car_Lighting.webp', thumb: 'images/Car_Lighting.webp' },
        { type: 'image', title: 'City Render', src: 'images/City.webp', thumb: 'images/City.webp' },
        { type: 'image', title: 'Coffee Shop', src: 'images/coffee_shop.webp', thumb: 'images/coffee_shop.webp' },
        { type: 'image', title: 'Project Render', src: 'images/img.webp', thumb: 'images/img.webp' },
        { type: 'image', title: 'Render', src: 'images/IMG-20240921-WA0002.webp', thumb: 'images/IMG-20240921-WA0002.webp' },
        { type: 'image', title: 'Render', src: 'images/IMG-20240921-WA0003.webp', thumb: 'images/IMG-20240921-WA0003.webp' },
        { type: 'image', title: 'Render', src: 'images/IMG-20240921-WA0010.webp', thumb: 'images/IMG-20240921-WA0010.webp' },
        { type: 'image', title: 'Character', src: 'images/IMG-20240921-WA0012.webp', thumb: 'images/IMG-20240921-WA0012.webp' },
        { type: 'image', title: 'Ship', src: 'images/IMG-20240921-WA0016.webp', thumb: 'images/IMG-20240921-WA0016.webp' },
        { type: 'image', title: 'Ship', src: 'images/IMG-20240921-WA0017.webp', thumb: 'images/IMG-20240921-WA0017.webp' },
        { type: 'image', title: 'Watch', src: 'images/IMG-20240921-WA0028.webp', thumb: 'images/IMG-20240921-WA0028.webp' },
        { type: 'image', title: 'Watch', src: 'images/IMG-20240921-WA0029.webp', thumb: 'images/IMG-20240921-WA0029.webp' },
        { type: 'image', title: 'Watch', src: 'images/IMG-20240921-WA0030.webp', thumb: 'images/IMG-20240921-WA0030.webp' },
        { type: 'image', title: 'Product Render', src: 'images/IMG-20250625-WA0007.webp', thumb: 'images/IMG-20250625-WA0007.webp' },
        { type: 'image', title: 'Product Render', src: 'images/IMG-20250625-WA0008.webp', thumb: 'images/IMG-20250625-WA0008.webp' },
        { type: 'image', title: 'Product Render', src: 'images/IMG-20250625-WA0009.webp', thumb: 'images/IMG-20250625-WA0009.webp' },
        { type: 'image', title: 'Product Render', src: 'images/IMG-20250625-WA0010.webp', thumb: 'images/IMG-20250625-WA0010.webp' },
        { type: 'image', title: 'Office Space Render', src: 'images/Office_Space_Render.webp', thumb: 'images/Office_Space_Render.webp' },
        { type: 'image', title: 'Product', src: 'images/Product.webp', thumb: 'images/Product.webp' },
        { type: 'image', title: 'Perfume Bottle', src: 'images/Purfume_bottel.webp', thumb: 'images/Purfume_bottel.webp' },
        { type: 'image', title: 'Studio House Render', src: 'images/Studio House(Render).webp', thumb: 'images/Studio House(Render).webp' },
        { type: 'video', title: 'YouTube Showreel', src: 'https://www.youtube.com/embed/ndNfLKiobcU?autoplay=1&mute=1&rel=0', thumb: 'images/img.webp' },
        { type: 'video', title: 'VFX Project 1', src: 'https://www.youtube.com/embed/PTtdEXsEbjA?autoplay=1&mute=1&rel=0', thumb: 'images/img.webp' },
        { type: 'video', title: 'VFX Project 2', src: 'https://www.youtube.com/embed/H1Y6crXG6xs?autoplay=1&mute=1&rel=0', thumb: 'images/img.webp' },
        { type: 'video', title: 'VFX Project 3', src: 'https://www.youtube.com/embed/8R_kzwme0h8?autoplay=1&mute=1&rel=0', thumb: 'images/img.webp' },
        { type: 'video', title: 'VFX Project 4', src: 'https://www.youtube.com/embed/pn0WHprJ49M?autoplay=1&mute=1&rel=0', thumb: 'images/img.webp' },
        { type: 'video', title: 'VFX Project 5', src: 'https://www.youtube.com/embed/XpMlDlQ5ajE?autoplay=1&mute=1&rel=0', thumb: 'images/img.webp' }
    ];

    const skills = [
        'Blender & Cinema 4D',
        'AI-assisted Lighting',
        'Procedural FX',
        'Motion Graphics',
        'Neural Stylization',
        'Interactive Storytelling'
    ];

    const createCard = (item) => {
        if (item.type === 'image') {
            return `
                <div class="card fade-in" data-type="image" data-src="${item.src}">
                    <img src="${item.thumb}" alt="${item.title}" loading="lazy" decoding="async">
                    <div class="overlay">
                        <h3>${item.title}</h3>
                    </div>
                </div>`;
        }

        return `
            <div class="card fade-in" data-type="video" data-src="${item.src}">
                <div class="video-placeholder">
                    <span>▶</span>
                    <p>${item.title}</p>
                </div>
                <div class="overlay">
                    <h3>${item.title}</h3>
                </div>
            </div>`;
    };

    const renderGrid = (container, items) => {
        if (!container) return;
        container.innerHTML = items.map(createCard).join('');
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    renderGrid(featuredGrid, featuredItems);
    renderGrid(galleryGrid, galleryItems);
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    if (skillPills) {
        skillPills.innerHTML = skills.map(skill => `<span class="pill">${skill}</span>`).join('');
    }

    if (filterBtns.length) {
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
    }

    if (grid) {
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
    }

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        setTimeout(() => { lightboxContent.innerHTML = ''; }, 250);
        document.body.style.overflow = '';
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    if (lightbox) {
        lightbox.addEventListener('click', (e) => e.target === lightbox && closeLightbox());
    }

    document.addEventListener('keydown', (e) => e.key === 'Escape' && lightbox.classList.contains('active') && closeLightbox());

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
