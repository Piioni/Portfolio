// Typing effect
const typingText = document.querySelector(".typing-text");
const words = ["a developer", "Piioni"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  const currentChar = isDeleting
    ? currentWord.substring(0, charIndex - 1)
    : currentWord.substring(0, charIndex + 1);

  typingText.textContent = currentChar;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(type, 150);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 100);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(type, 1200);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1000);
});

// Technology filter functionality
const techOptionBtns = document.querySelectorAll(".tech-option-btn");
const techItems = document.querySelectorAll(".tech-item");

techOptionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");

    techOptionBtns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");

    techItems.forEach((item) => {
      if (category === "all") {
        item.style.display = "block";
      } else {
        item.style.display = item
          .getAttribute("data-category")
          .includes(category)
          ? "block"
          : "none";
      }
    });
  });
});
