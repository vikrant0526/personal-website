let interval: number | null = null;

export default function setupTestimonialsSlider() {
  const slider = document.getElementById("testimonials");

  if (!slider) return;

  const slides = Array.from(slider.children) as HTMLDivElement[];

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}%)`;
    setTimeout(() => {
      slide.classList.add(
        "transition-transform",
        "duration-500",
        "ease-in-out",
      );
    }, 1000);
  });

  let currentSlide = 0;
  function showSlides() {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
      if (currentSlide === index) {
      }
    });
    updateDots();
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlides();
  }

  const dotsContainer = document.getElementById("testimonial-dots");
  if (!dotsContainer) return;

  dotsContainer.classList.add(
    "flex",
    "gap-2",
    "justify-center",
    "items-center",
    "p-4",
  );

  function updateDots() {
    if (!dotsContainer) return;
    const dots = dotsContainer.children;
    for (let i = 0; i < dots.length; i++) {
      const dot = dots[i] as HTMLButtonElement;
      if (i === currentSlide) dot.classList.replace("bg-white/50", "bg-white");
      else dot.classList.replace("bg-white", "bg-white/50");
    }
  }

  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.classList.add("dot", "w-2", "h-2", "rounded-full");
    if (index === 0) dot.classList.add("bg-white");
    else dot.classList.add("bg-white/50");
    dot.addEventListener("click", () => {
      currentSlide = index;
      showSlides();
    });
    dotsContainer.appendChild(dot);
  });

  interval = setInterval(nextSlide, 5000);
  slider.addEventListener("mouseenter", () => {
    if (interval) clearInterval(interval);
  });
  slider.addEventListener("mouseleave", () => {
    interval = setInterval(nextSlide, 5000);
  });
}
