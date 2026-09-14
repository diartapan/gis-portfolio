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

        const navLinks =
            document.querySelectorAll(
                ".nav-link"
            );

        const currentPage =
            window.location.pathname
                .split("/")
                .pop();

        navLinks.forEach(
            (link) => {

                const href =
                    link.getAttribute("href");

                if (
                    href === currentPage
                ) {
                    link.classList.add(
                        "active"
                    );
                }

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
