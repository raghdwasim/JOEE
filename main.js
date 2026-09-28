document.addEventListener('DOMContentLoaded', function() {
    // 1. Mobile Menu Toggle
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mainNav = document.getElementById('mainNav');
    const navOverlay = document.getElementById('navOverlay');

    function toggleMobileMenu() {
        if (hamburgerBtn && mainNav && navOverlay) {
            hamburgerBtn.classList.toggle('active');
            mainNav.classList.toggle('active');
            navOverlay.classList.toggle('active');
        }
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleMobileMenu);
    }
    if (navOverlay) {
        navOverlay.addEventListener('click', toggleMobileMenu);
    }

    // 2. Dynamic Copyright Year
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // 3. Populate Contact & Location Information from ACADEMY object
    const whatsappFloat = document.getElementById('whatsappFloat');
    const heroWhatsappBtn = document.getElementById('heroWhatsappBtn');
    const bannerWhatsappBtn = document.getElementById('bannerWhatsappBtn');
    const kidsWhatsappBtn = document.getElementById('kidsWhatsappBtn');
    const adultsWhatsappBtn = document.getElementById('adultsWhatsappBtn');
    const privateWhatsappBtn = document.getElementById('privateWhatsappBtn');
    const competitiveWhatsappBtn = document.getElementById('competitiveWhatsappBtn');
    
    const generalWaLink = getWhatsAppLink("Hello, I would like to book a swimming trial at Elite Swim Academy.");
    const kidsWaLink = getWhatsAppLink("Hello, I would like to ask about kids swimming classes at Air Force Club Heliopolis.");
    const adultsWaLink = getWhatsAppLink("Hello, I would like to ask about adult swimming classes.");
    const privateWaLink = getWhatsAppLink("Hello, I would like to ask about private swimming training.");
    const competitiveWaLink = getWhatsAppLink("Hello, I would like to ask about competitive swimming training.");

    if (whatsappFloat) whatsappFloat.href = generalWaLink;
    if (heroWhatsappBtn) heroWhatsappBtn.href = generalWaLink;
    if (bannerWhatsappBtn) bannerWhatsappBtn.href = generalWaLink;
    if (kidsWhatsappBtn) kidsWhatsappBtn.href = kidsWaLink;
    if (adultsWhatsappBtn) adultsWhatsappBtn.href = adultsWaLink;
    if (privateWhatsappBtn) privateWhatsappBtn.href = privateWaLink;
    if (competitiveWhatsappBtn) competitiveWhatsappBtn.href = competitiveWaLink;

    // Maps buttons
    const mapsBtns = ['mapsBtn', 'mapsCardBtn', 'contactMapsBtn'];
    mapsBtns.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.href = ACADEMY.mapsUrl;
    });

    // Footer contact info
    const footerPhoneLink = document.getElementById('footerPhoneLink');
    const footerWhatsappLink = document.getElementById('footerWhatsappLink');
    const footerLocationText = document.getElementById('footerLocationText');
    const contactPhoneLink = document.getElementById('contactPhoneLink');
    const contactWhatsappLink = document.getElementById('contactWhatsappLink');
    const contactLocationText = document.getElementById('contactLocationText');

    if (footerPhoneLink) { footerPhoneLink.href = `tel:${ACADEMY.phone}`; footerPhoneLink.textContent = ACADEMY.phone; }
    if (footerWhatsappLink) { footerWhatsappLink.href = generalWaLink; footerWhatsappLink.textContent = ACADEMY.whatsapp; }
    if (footerLocationText) footerLocationText.textContent = ACADEMY.location;
    if (contactPhoneLink) { contactPhoneLink.href = `tel:${ACADEMY.phone}`; contactPhoneLink.textContent = ACADEMY.phone; }
    if (contactWhatsappLink) { contactWhatsappLink.href = generalWaLink; contactWhatsappLink.textContent = ACADEMY.whatsapp; }
    if (contactLocationText) contactLocationText.textContent = ACADEMY.location;

    // Footer social links
    const footerSocialLinks = document.getElementById('footerSocialLinks');
    if (footerSocialLinks) {
        footerSocialLinks.innerHTML = `
            <a href="${ACADEMY.facebook}" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="${ACADEMY.instagram}" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="${ACADEMY.tiktok}" target="_blank" rel="noopener" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
        `;
    }

    // 4. Populate Quick Trust Section (Home)
    const quickTrustGrid = document.getElementById('quickTrustGrid');
    if (quickTrustGrid && typeof QUICK_TRUST !== 'undefined') {
        quickTrustGrid.innerHTML = QUICK_TRUST.map(item => `
            <div class="trust-card">
                <div class="t-icon"><i class="fa-solid ${item.icon}"></i></div>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        `).join('');
    }

    // 5. Populate Home Programs Grid
    const homeProgramsGrid = document.getElementById('homeProgramsGrid');
    if (homeProgramsGrid && typeof PROGRAMS !== 'undefined') {
        homeProgramsGrid.innerHTML = PROGRAMS.slice(0, 3).map(p => `
            <div class="program-card">
                <div class="program-img-wrap">
                    <img src="${p.image}" alt="${p.title}" loading="lazy">
                    <div class="program-icon-badge"><i class="fa-solid ${p.icon}"></i></div>
                </div>
                <div class="program-body">
                    <div class="program-meta"><i class="fa-solid fa-users"></i> ${p.suitable}</div>
                    <h3>${p.title}</h3>
                    <p>${p.desc}</p>
                    <div class="program-card-footer">
                        <a href="${p.link}" class="btn btn-outline-primary">Learn More</a>
                        <a href="contact.html#booking-form" class="btn btn-primary">Book Trial</a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Populate All Programs Grid (programs.html)
    const allProgramsGrid = document.getElementById('allProgramsGrid');
    if (allProgramsGrid && typeof PROGRAMS !== 'undefined') {
        allProgramsGrid.innerHTML = PROGRAMS.map(p => `
            <div class="program-card">
                <div class="program-img-wrap">
                    <img src="${p.image}" alt="${p.title}" loading="lazy">
                    <div class="program-icon-badge"><i class="fa-solid ${p.icon}"></i></div>
                </div>
                <div class="program-body">
                    <div class="program-meta"><i class="fa-solid fa-users"></i> ${p.suitable}</div>
                    <h3>${p.title}</h3>
                    <p>${p.desc}</p>
                    <div class="program-card-footer">
                        <a href="${p.link}" class="btn btn-outline-primary">Learn More</a>
                        <a href="contact.html#booking-form" class="btn btn-primary">Book Trial</a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // 6. Populate Swimming Levels
    const homeLevelsContainer = document.getElementById('homeLevelsContainer');
    const allLevelsContainer = document.getElementById('allLevelsContainer');
    const levelsMarkup = typeof SWIMMING_LEVELS !== 'undefined' ? SWIMMING_LEVELS.map(l => `
        <div class="level-card">
            <span class="level-number-badge">${l.level}</span>
            <h3>${l.title}</h3>
            <p>${l.desc}</p>
        </div>
    `).join('') : '';

    if (homeLevelsContainer) homeLevelsContainer.innerHTML = levelsMarkup;
    if (allLevelsContainer) allLevelsContainer.innerHTML = levelsMarkup;

    // 7. Populate Packages & Pricing
    const homePackagesGrid = document.getElementById('homePackagesGrid');
    const allPackagesGrid = document.getElementById('allPackagesGrid');
    const packagesMarkup = typeof PACKAGES !== 'undefined' ? PACKAGES.map(pkg => `
        <div class="package-card ${pkg.featured ? 'featured' : ''}">
            ${pkg.badge ? `<div class="package-badge">${pkg.badge}</div>` : ''}
            <div class="package-header">
                <h3>${pkg.name}</h3>
                <div class="package-price">${pkg.price} <span>EGP</span></div>
                <div style="font-size:0.85rem; color:var(--text-muted); margin-top:5px;">${pkg.sessions}</div>
            </div>
            <ul class="package-features">
                ${pkg.features.map(f => `<li><i class="fa-solid fa-check"></i> ${f}</li>`).join('')}
            </ul>
            <a href="contact.html#booking-form" class="btn ${pkg.featured ? 'btn-accent' : 'btn-primary'} w-full">Book Package</a>
        </div>
    `).join('') : '';

    if (homePackagesGrid) homePackagesGrid.innerHTML = packagesMarkup;
    if (allPackagesGrid) allPackagesGrid.innerHTML = packagesMarkup;

    // 8. Populate Offers
    const homeOffersGrid = document.getElementById('homeOffersGrid');
    const allOffersGrid = document.getElementById('allOffersGrid');
    const offersMarkup = typeof OFFERS !== 'undefined' ? OFFERS.slice(0, 3).map(o => `
        <div class="offer-card">
            <h3><i class="fa-solid fa-tag"></i> ${o.title}</h3>
            <p>${o.desc}</p>
            <a href="contact.html#booking-form" class="btn btn-outline-white btn-sm">Claim Offer</a>
        </div>
    `).join('') : '';

    const allOffersMarkup = typeof OFFERS !== 'undefined' ? OFFERS.map(o => `
        <div class="offer-card" style="background:var(--primary); color:var(--white);">
            <h3><i class="fa-solid fa-tag" style="color:var(--accent);"></i> ${o.title}</h3>
            <p style="color:var(--light);">${o.desc}</p>
            <a href="contact.html#booking-form" class="btn btn-accent btn-sm mt-3">Claim Offer</a>
        </div>
    `).join('') : '';

    if (homeOffersGrid) homeOffersGrid.innerHTML = offersMarkup;
    if (allOffersGrid) allOffersGrid.innerHTML = allOffersMarkup;

    // 9. Populate Coaches Grid (coaches.html)
    const allCoachesGrid = document.getElementById('allCoachesGrid');
    if (allCoachesGrid && typeof COACHES !== 'undefined') {
        allCoachesGrid.innerHTML = COACHES.map(c => `
            <div class="program-card">
                <div class="program-img-wrap" style="height:280px;">
                    <img src="${c.image}" alt="${c.name}" loading="lazy">
                </div>
                <div class="program-body">
                    <span class="coach-title-badge">${c.title}</span>
                    <h3>${c.name}</h3>
                    <p style="margin-bottom:0.75rem;"><strong>Specialty:</strong> ${c.specialty}</p>
                    <p style="font-size:0.85rem; color:var(--text-muted);">${c.qualifications}</p>
                </div>
            </div>
        `).join('');
    }

    // 10. Testimonials Slider
    const testimonialsTrack = document.getElementById('testimonialsTrack');
    const prevTestimonial = document.getElementById('prevTestimonial');
    const nextTestimonial = document.getElementById('nextTestimonial');
    const testimonialDots = document.getElementById('testimonialDots');

    if (testimonialsTrack && typeof TESTIMONIALS !== 'undefined') {
        testimonialsTrack.innerHTML = TESTIMONIALS.map(t => `
            <div class="testimonial-card">
                <p>"${t.text}"</p>
                <div class="testimonial-author">${t.author}</div>
                <div class="testimonial-program">${t.program}</div>
            </div>
        `).join('');

        let currentSlide = 0;
        const totalSlides = TESTIMONIALS.length;

        // Create dots
        testimonialDots.innerHTML = TESTIMONIALS.map((_, i) => `
            <div class="t-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>
        `).join('');

        const dots = testimonialDots.querySelectorAll('.t-dot');

        function updateSlider(index) {
            currentSlide = (index + totalSlides) % totalSlides;
            testimonialsTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentSlide);
            });
        }

        if (prevTestimonial) prevTestimonial.addEventListener('click', () => updateSlider(currentSlide - 1));
        if (nextTestimonial) nextTestimonial.addEventListener('click', () => updateSlider(currentSlide + 1));

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const idx = parseInt(e.target.getAttribute('data-index'));
                updateSlider(idx);
            });
        });

        // Auto slide
        setInterval(() => {
            updateSlider(currentSlide + 1);
        }, 6000);
    }

    // 11. FAQ Accordion
    function setupAccordion(containerId) {
        const container = document.getElementById(containerId);
        if (!container || typeof FAQ === 'undefined') return;

        container.innerHTML = FAQ.map((item, index) => `
            <div class="faq-item ${index === 0 ? 'active' : ''}">
                <button class="faq-question">
                    <span>${item.question}</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div class="faq-answer" style="${index === 0 ? 'max-height:300px; padding-bottom:1.25rem;' : ''}">
                    <p>${item.answer}</p>
                </div>
            </div>
        `).join('');

        const faqItems = container.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const btn = item.querySelector('.faq-question');
            btn.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                faqItems.forEach(i => {
                    i.classList.remove('active');
                    i.querySelector('.faq-answer').style.maxHeight = null;
                    i.querySelector('.faq-answer').style.paddingBottom = 0;
                });
                if (!isActive) {
                    item.classList.add('active');
                    const answer = item.querySelector('.faq-answer');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    answer.style.paddingBottom = '1.25rem';
                }
            });
        });
    }

    setupAccordion('homeFaqAccordion');
    setupAccordion('allFaqAccordion');

    // 12. Gallery Filtering & Lightbox (gallery.html)
    const galleryGrid = document.getElementById('galleryGrid');
    const galleryFilters = document.getElementById('galleryFilters');

    if (galleryGrid && typeof GALLERY !== 'undefined') {
        function renderGallery(filter) {
            const filtered = filter === 'all' ? GALLERY : GALLERY.filter(g => g.category === filter);
            galleryGrid.innerHTML = filtered.map((item, index) => `
                <div class="gallery-item" data-index="${index}" data-category="${item.category}">
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                    <div class="gallery-overlay">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                        <h4>${item.title}</h4>
                        <p>${item.desc}</p>
                    </div>
                </div>
            `).join('');

            attachLightboxEvents(filtered);
        }

        renderGallery('all');

        if (galleryFilters) {
            const filterBtns = galleryFilters.querySelectorAll('.filter-btn');
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    const filter = btn.getAttribute('data-filter');
                    renderGallery(filter);
                });
            });
        }
    }

    // Lightbox Logic
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    let currentLightboxIndex = 0;
    let activeGalleryList = [];

    function attachLightboxEvents(list) {
        activeGalleryList = list;
        const items = galleryGrid.querySelectorAll('.gallery-item');
        items.forEach(item => {
            item.addEventListener('click', () => {
                const idx = parseInt(item.getAttribute('data-index'));
                openLightbox(idx);
            });
        });
    }

    function openLightbox(index) {
        if (!lightboxModal) return;
        currentLightboxIndex = index;
        const item = activeGalleryList[currentLightboxIndex];
        if (lightboxImg) lightboxImg.src = item.image;
        if (lightboxCaption) lightboxCaption.textContent = `${item.title} — ${item.desc}`;
        lightboxModal.classList.add('active');
    }

    function closeLightbox() {
        if (lightboxModal) lightboxModal.classList.remove('active');
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) closeLightbox();
        });
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', () => {
            currentLightboxIndex = (currentLightboxIndex - 1 + activeGalleryList.length) % activeGalleryList.length;
            openLightbox(currentLightboxIndex);
        });
    }

    if (lightboxNext) {
        lightboxNext.addEventListener('click', () => {
            currentLightboxIndex = (currentLightboxIndex + 1) % activeGalleryList.length;
            openLightbox(currentLightboxIndex);
        });
    }

    // Keyboard support for Lightbox
    document.addEventListener('keydown', (e) => {
        if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft' && lightboxPrev) lightboxPrev.click();
        if (e.key === 'ArrowRight' && lightboxNext) lightboxNext.click();
    });
});











/* =========================================================
   JOE SWIM ACADEMY - STORE FUNCTIONALITY
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       PRODUCT FILTER
       ===================================================== */

    const filterButtons = document.querySelectorAll(
        ".store-categories .filter-btn"
    );

    const productCards = document.querySelectorAll(
        ".store-catalog .product-card"
    );

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedFilter = this.getAttribute("data-filter");

            /* Active button */
            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            /* Filter products */
            productCards.forEach(function (card) {

                const category = card.getAttribute("data-category");

                if (
                    selectedFilter === "all" ||
                    category === selectedFilter
                ) {

                    card.style.display = "flex";

                    /* Small animation */
                    card.style.opacity = "0";

                    setTimeout(function () {
                        card.style.opacity = "1";
                    }, 30);

                } else {

                    card.style.display = "none";

                }

            });

        });

    });


    /* =====================================================
       PRODUCT QUICK VIEW / EYE
       ===================================================== */

    const quickViewButtons = document.querySelectorAll(
        ".product-quick-view"
    );

    quickViewButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            const productCard = this.closest(".product-card");

            if (!productCard) return;

            const image = productCard.querySelector(
                ".product-img-wrap img"
            );

            const title = productCard.querySelector("h3");

            const description = productCard.querySelector(
                ".product-desc"
            );

            const price = productCard.querySelector(
                ".product-price"
            );

            if (!image || !title) return;

            openProductQuickView({
                image: image.src,
                title: title.textContent.trim(),
                description: description
                    ? description.textContent.trim()
                    : "",
                price: price
                    ? price.textContent.trim()
                    : ""
            });

        });

    });


    /* =====================================================
       CREATE QUICK VIEW MODAL
       ===================================================== */

    function openProductQuickView(product) {

        /* Remove existing modal */
        const existingModal = document.querySelector(
            ".store-product-modal"
        );

        if (existingModal) {
            existingModal.remove();
        }

        const modal = document.createElement("div");

        modal.className = "store-product-modal";

        modal.innerHTML = `
            <div class="store-modal-backdrop"></div>

            <div class="store-modal-content">

                <button
                    class="store-modal-close"
                    aria-label="Close product preview">
                    <i class="fa-solid fa-xmark"></i>
                </button>

                <div class="store-modal-image">
                    <img
                        src="${product.image}"
                        alt="${product.title}">
                </div>

                <div class="store-modal-info">

                    <span class="store-modal-label">
                        JOE SWIM ACADEMY
                    </span>

                    <h2>${product.title}</h2>

                    <p>${product.description}</p>

                    <div class="store-modal-bottom">

                        <span class="store-modal-price">
                            ${product.price}
                        </span>

                        <a
                            href="contact.html#booking-form"
                            class="btn btn-primary">
                            <i class="fa-solid fa-cart-shopping"></i>
                            Order Now
                        </a>

                    </div>

                </div>

            </div>
        `;

        document.body.appendChild(modal);

        /* Prevent page scrolling */
        document.body.style.overflow = "hidden";

        /* Show animation */
        requestAnimationFrame(function () {
            modal.classList.add("active");
        });


        /* Close button */

        const closeButton = modal.querySelector(
            ".store-modal-close"
        );

        closeButton.addEventListener("click", closeProductModal);


        /* Click outside */

        const backdrop = modal.querySelector(
            ".store-modal-backdrop"
        );

        backdrop.addEventListener("click", closeProductModal);


        /* ESC key */

        document.addEventListener(
            "keydown",
            handleModalEscape
        );


        function closeProductModal() {

            modal.classList.remove("active");

            setTimeout(function () {

                modal.remove();

                document.body.style.overflow = "";

                document.removeEventListener(
                    "keydown",
                    handleModalEscape
                );

            }, 250);

        }


        function handleModalEscape(event) {

            if (event.key === "Escape") {
                closeProductModal();
            }

        }

    }

});