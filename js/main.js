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
        'Unreal Engine 5',
        'Product Design',
        'Visual Design',
        'UX/UI Design',
        '3D Visualization',
        'Cinematic Animation',
        'Motion Graphics',
        'Visual Storytelling',
        'Interactive Experiences',
        'Real-time Rendering',
        'Environment Design',
        'Hard Surface Modeling',
        'Procedural FX',
        'AI-assisted Design',
        'Creative Direction',
        'AR Experience Design',
        'Spatial Design',
        'Generative Visuals',
        'Digital Sculpting',
        'Look Development',
        'Experience Design',
        'Design Systems',
        'Interface Animation',
        'Virtual Production',
        'Immersive Media'
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
        { type: 'video', title: 'Immersive Media Teaser', description: 'A cinematic teaser for the homepage, blending 3D motion with immersive storytelling.', src: 'https://www.youtube.com/embed/Tth5IKDqm2w?autoplay=1&mute=1&rel=0', thumb: 'https://img.youtube.com/vi/Tth5IKDqm2w/hqdefault.jpg' },
        { type: 'video', title: 'AR Experience Visual', description: 'A compact showcase of interactive AR design and spatial storytelling.', src: 'https://www.youtube.com/embed/lTwkq2GlQuo?autoplay=1&mute=1&rel=0', thumb: 'https://img.youtube.com/vi/lTwkq2GlQuo/hqdefault.jpg' },
        { type: 'video', title: 'Generative Visuals Clip', description: 'A motion-led concept clip highlighting generative visuals and procedural FX.', src: 'https://www.youtube.com/embed/COKWY0otPhI?autoplay=1&mute=1&rel=0', thumb: 'https://img.youtube.com/vi/COKWY0otPhI/hqdefault.jpg' }
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
        { type: 'video', title: 'Full Showreel', description: 'A full cinematic showreel highlighting VFX, animation, and design craft.', src: 'https://www.youtube.com/embed/ndNfLKiobcU?autoplay=1&mute=1&rel=0', thumb: 'https://img.youtube.com/vi/ndNfLKiobcU/hqdefault.jpg' },
        { type: 'video', title: 'Product Lighting Reel', description: 'A compact reel focused on product lighting, reflections, and mood.', src: 'https://www.youtube.com/embed/PTtdEXsEbjA?autoplay=1&mute=1&rel=0', thumb: 'https://img.youtube.com/vi/PTtdEXsEbjA/hqdefault.jpg' },
        { type: 'video', title: 'Cityscape VFX Sequence', description: 'A cinematic VFX sequence for detailed city environments.', src: 'https://www.youtube.com/embed/H1Y6crXG6xs?autoplay=1&mute=1&rel=0', thumb: 'https://img.youtube.com/vi/H1Y6crXG6xs/hqdefault.jpg' },
        { type: 'video', title: 'Character Motion Study', description: 'A motion-driven character and storytelling study.', src: 'https://www.youtube.com/embed/8R_kzwme0h8?autoplay=1&mute=1&rel=0', thumb: 'https://img.youtube.com/vi/8R_kzwme0h8/hqdefault.jpg' },
        { type: 'video', title: 'VFX Breakdown Clip', description: 'A short breakdown clip demonstrating compositing and FX polish.', src: 'https://www.youtube.com/embed/pn0WHprJ49M?autoplay=1&mute=1&rel=0', thumb: 'https://img.youtube.com/vi/pn0WHprJ49M/hqdefault.jpg' },
        { type: 'video', title: 'Motion Graphics Reel', description: 'A sleek motion graphics reel with rapid transitions and impact.', src: 'https://www.youtube.com/embed/XpMlDlQ5ajE?autoplay=1&mute=1&rel=0', thumb: 'https://img.youtube.com/vi/XpMlDlQ5ajE/hqdefault.jpg' },
        { type: 'video', title: 'Spatial Design Motion', description: 'A brief motion piece showcasing spatial design and immersive environments.', src: 'https://www.youtube.com/embed/-483q6MwXtc?autoplay=1&mute=1&rel=0', thumb: 'https://img.youtube.com/vi/-483q6MwXtc/hqdefault.jpg' },
        { type: 'video', title: 'Real-time Rendering Demo', description: 'A fast-paced demo of real-time rendering workflows and engine-driven visuals.', src: 'https://www.youtube.com/embed/l9lITD8up1g?autoplay=1&mute=1&rel=0', thumb: 'https://img.youtube.com/vi/l9lITD8up1g/hqdefault.jpg' },
        { type: 'video', title: 'Virtual Production Short', description: 'A short highlight of virtual production techniques and cinematic staging.', src: 'https://www.youtube.com/embed/umGfRS5m4_Y?autoplay=1&mute=1&rel=0', thumb: 'https://img.youtube.com/vi/umGfRS5m4_Y/hqdefault.jpg' },
        { type: 'video', title: 'Cinematic Animation Scene', description: 'A cinematic scene emphasizing animation, camera movement, and storytelling.', src: 'https://www.youtube.com/embed/HB2a4guXeik?autoplay=1&mute=1&rel=0', thumb: 'https://img.youtube.com/vi/HB2a4guXeik/hqdefault.jpg' },
        { type: 'video', title: 'Interactive Experiences Preview', description: 'A preview of interactive experience design with engaging motion and visual cues.', src: 'https://www.youtube.com/embed/ODO3ws1gvY4?autoplay=1&mute=1&rel=0', thumb: 'https://img.youtube.com/vi/ODO3ws1gvY4/hqdefault.jpg' },
        { type: 'video', title: 'Digital Sculpting Process', description: 'A behind-the-scenes look at digital sculpting and form development.', src: 'https://www.youtube.com/embed/pfu0t38RFM8?autoplay=1&mute=1&rel=0', thumb: 'https://img.youtube.com/vi/pfu0t38RFM8/hqdefault.jpg' },
        { type: 'video', title: 'Design Motion Study', description: 'A motion-driven study for interface animation and visual systems.', src: 'https://www.youtube.com/embed/W8Owi0UNLT0?autoplay=1&mute=1&rel=0', thumb: 'https://img.youtube.com/vi/W8Owi0UNLT0/hqdefault.jpg' },
        { type: 'video', title: 'Augmented Reality Preview', description: 'A short conceptual clip for AR experience design and spatial interaction.', src: 'https://www.youtube.com/embed/SuUzOUsRFqM?autoplay=1&mute=1&rel=0', thumb: 'https://img.youtube.com/vi/SuUzOUsRFqM/hqdefault.jpg' },
        { type: 'video', title: 'Experience Design Snapshot', description: 'A snapshot of modern experience design with cinematic and digital references.', src: 'https://www.youtube.com/embed/8_1iQsVpdoI?autoplay=1&mute=1&rel=0', thumb: 'https://img.youtube.com/vi/8_1iQsVpdoI/hqdefault.jpg' }
    ];

    const skills = [
        'Unreal Engine 5',
        'Product Design',
        'Visual Design',
        'UX/UI Design',
        '3D Visualization',
        'Cinematic Animation',
        'Motion Graphics',
        'Visual Storytelling',
        'Interactive Experiences',
        'Real-time Rendering',
        'Environment Design',
        'Hard Surface Modeling',
        'Procedural FX',
        'AI-assisted Design',
        'Creative Direction',
        'AR Experience Design',
        'Spatial Design',
        'Generative Visuals',
        'Digital Sculpting',
        'Look Development',
        'Experience Design',
        'Design Systems',
        'Interface Animation',
        'Virtual Production',
        'Immersive Media'
    ];

    const createCard = (item) => {
        return `
            <div class="card fade-in" data-type="${item.type}" data-src="${item.src}">
                <img src="${item.thumb}" alt="${item.title}" loading="lazy" decoding="async">
                ${item.type === 'video' ? `
                <div class="video-placeholder">
                    <span>▶</span>
                    <p>${item.title}</p>
                </div>` : ''}
                <div class="overlay">
                    <h3>${item.title}</h3>
                    ${item.description ? `<p>${item.description}</p>` : ''}
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
