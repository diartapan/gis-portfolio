/* =========================================================
   DIARTA GIS PORTFOLIO
   INTERACTIONS
   ========================================================= */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =========================
           NAVIGATION ACTIVE STATE
           ========================= */

        const sections =
            document.querySelectorAll(
                "section[id]"
            );

        const navLinks =
            document.querySelectorAll(
                ".nav-links a"
            );


        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                navLinks.forEach(
                                    (link) => {

                                        link.classList.remove(
                                            "active"
                                        );

                                        if (
                                            link.getAttribute(
                                                "href"
                                            ) ===
                                            "#" +
                                            entry.target.id
                                        ) {

                                            link.classList.add(
                                                "active"
                                            );

                                        }

                                    }
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.55
                }
            );


        sections.forEach(
            (section) => {

                observer.observe(
                    section
                );

            }
        );


        /* =========================
           SMOOTH SCROLL
           ========================= */

        document
            .querySelectorAll(
                'a[href^="#"]'
            )
            .forEach(
                (link) => {

                    link.addEventListener(
                        "click",
                        (event) => {

                            const target =
                                document.querySelector(
                                    link.getAttribute(
                                        "href"
                                    )
                                );


                            if (!target) return;


                            event.preventDefault();


                            target.scrollIntoView(
                                {
                                    behavior:
                                        "smooth"
                                }
                            );

                        }
                    );

                }
            );

    }
);
