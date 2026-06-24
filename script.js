// Año del footer
    document.getElementById("year").textContent = new Date().getFullYear();

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Entrada del título y dibujo del drive
    window.addEventListener("load", () => {
      document.querySelector(".title")?.classList.add("in");
      document.querySelector(".shot")?.classList.add("in");
    });

    // Reveals al hacer scroll
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    if (!reduceMotion) {
      // Luz de la mañana que sigue el cursor
      const sun = document.querySelector(".sun");
      let tx = -1000, ty = -1000, x = -1000, y = -1000;
      window.addEventListener("pointermove", (e) => { tx = e.clientX; ty = e.clientY; });
      (function loop() {
        x += (tx - x) * 0.12;
        y += (ty - y) * 0.12;
        if (sun) sun.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        requestAnimationFrame(loop);
      })();

      // Botones magnéticos
      document.querySelectorAll(".magnetic").forEach((btn) => {
        btn.addEventListener("pointermove", (e) => {
          const r = btn.getBoundingClientRect();
          const mx = e.clientX - r.left - r.width / 2;
          const my = e.clientY - r.top - r.height / 2;
          btn.style.transform = `translate(${mx * 0.18}px, ${my * 0.25}px)`;
        });
        btn.addEventListener("pointerleave", () => { btn.style.transform = ""; });
      });
    }
