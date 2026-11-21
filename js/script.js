const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((clickedButton) => {
  clickedButton.addEventListener("click", () => {
    const filter = clickedButton.dataset.filter;

    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");

      const show = filter === "all" || categories.includes(filter);

      card.style.display = show ? "" : "none";
    });

    filterButtons.forEach((button) => {
      const isActive = button === clickedButton;

      button.classList.toggle("bg-primary", isActive);
      button.classList.toggle("text-on-primary", isActive);

      button.classList.toggle("text-content-muted", !isActive);
      button.classList.toggle("hover:text-content", !isActive);

      button.setAttribute("aria-pressed", String(isActive));
    });
  });
});
