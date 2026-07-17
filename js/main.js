/* =========================================================
   CENTRO STUDI DANZA VOGHERA — main.js
   ========================================================= */
(function () {
    "use strict";

    /* ---------- Year in footer ---------- */
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---------- Populate gallery (36 images) ---------- */
    var gallery = document.getElementById("galleria-grid");
    if (gallery && gallery.children.length === 0) {
        var frag = document.createDocumentFragment();
        for (var i = 1; i <= 36; i++) {
            var img = document.createElement("img");
            img.src = "immagini-csd-sito/" + i + ".jpg";
            img.alt = "Fotografia della scuola — scatto " + i;
            img.loading = "lazy";
            img.decoding = "async";
            frag.appendChild(img);
        }
        gallery.appendChild(frag);
    }

    /* ---------- Mobile nav toggle ---------- */
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("primary-nav");
    if (toggle && nav) {
        toggle.addEventListener("click", function () {
            var open = nav.classList.toggle("open");
            toggle.setAttribute("aria-expanded", open ? "true" : "false");
        });
        nav.addEventListener("click", function (e) {
            if (e.target.tagName === "A") {
                nav.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    /* ---------- Lightbox ---------- */
    var modal = document.getElementById("modal-galleria");
    if (modal) {
        var modalImg = document.getElementById("modal-img");
        var closeBtn = modal.querySelector(".close-btn");
        var prevBtn = modal.querySelector(".modal-prev");
        var nextBtn = modal.querySelector(".modal-next");

        var clickable = document.querySelectorAll(
            ".grid-galleria img, #logo, .insegnante img, .header-icona, .sala-immagini img"
        );
        var galleryImgs = Array.prototype.slice.call(
            document.querySelectorAll(".grid-galleria img")
        );
        var currentIndex = -1;

        function openModal(src, alt, index) {
            modalImg.src = src;
            modalImg.alt = alt || "";
            modal.hidden = false;
            currentIndex = typeof index === "number" ? index : -1;
            document.body.style.overflow = "hidden";
            closeBtn.focus();
            var showNav = currentIndex >= 0;
            prevBtn.style.display = showNav ? "" : "none";
            nextBtn.style.display = showNav ? "" : "none";
        }
        function closeModal() {
            modal.hidden = true;
            modalImg.src = "";
            document.body.style.overflow = "";
        }
        function navigate(delta) {
            if (currentIndex < 0 || !galleryImgs.length) return;
            currentIndex = (currentIndex + delta + galleryImgs.length) % galleryImgs.length;
            var img = galleryImgs[currentIndex];
            modalImg.src = img.src;
            modalImg.alt = img.alt || "";
        }

        clickable.forEach(function (img) {
            img.addEventListener("click", function () {
                var idx = galleryImgs.indexOf(img);
                openModal(img.src, img.alt, idx);
            });
        });
        closeBtn.addEventListener("click", closeModal);
        prevBtn.addEventListener("click", function () { navigate(-1); });
        nextBtn.addEventListener("click", function () { navigate(1); });
        modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
        document.addEventListener("keydown", function (e) {
            if (modal.hidden) return;
            if (e.key === "Escape") closeModal();
            if (e.key === "ArrowLeft") navigate(-1);
            if (e.key === "ArrowRight") navigate(1);
        });
    }

    /* ---------- Reveal-on-scroll (insegnanti) ---------- */
    if ("IntersectionObserver" in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        document.querySelectorAll(".insegnante").forEach(function (el) { io.observe(el); });
    } else {
        document.querySelectorAll(".insegnante").forEach(function (el) { el.classList.add("in-view"); });
    }

})();

