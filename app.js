const books_ul = document.getElementById("list_of_books");
const indexIdentification = document.getElementById("Home-btn");
if (indexIdentification.classList.contains("active")) {
  let book_array = [];
  for (let i = 1; i <= 8; i++) {
    document.getElementById(`book${i}`).addEventListener("click", function () {
      book_array.push(this.dataset.book);
      sessionStorage.setItem(`book${i}`, this.dataset.book);
    });
  }
}

const cart_btn = document.getElementById("cart-btn");
if (cart_btn) {
  if (cart_btn.classList.contains("active")) {
    // book_array.forEach((i) => {
    //   console.log(i);
    // });
    const book_array = [];
    for (let i = 0; i < 8; i++) {
      if (sessionStorage.getItem(`book${i}`)) {
        const newLi = document.createElement("li");
        newLi.innerText = sessionStorage.getItem(`book${i}`);
        books_ul.append(newLi);
      }
    }
  }
}
gsap.registerPlugin(ScrollTrigger);
gsap.to("#first-half-row-books", {
  x: "100vw",
  duration: 3,
  scrollTrigger: {
    start: "bottom center",
    trigger: "#collection-trigger",
    toggleActions: "play none none none",
  },
});
gsap.to("#second-half-row-books", {
  x: "-100vw",
  duration: 3,
  scrollTrigger: {
    start: "bottom center",
    trigger: "#collection-trigger",
    toggleActions: "play none none none",
  },
});
const hamburger = document.getElementById("hamburger-icon");
const mobile_nav = document.getElementById("mobile-nav");
const navbar = document.getElementById("navbar");
const navbar2 = document.getElementById("mobile-ul");
if (hamburger) {
  hamburger.addEventListener("click", function () {
    if (hamburger.classList.contains("expanded")) {
      mobile_nav.style.top = "-100vh";
      navbar2.style.top = "-100vh";
      hamburger.classList.remove("expanded");
    } else {
      mobile_nav.style.top = "0";
      navbar2.style.top = "10vh";
      hamburger.classList.add("expanded");
    }
  });
}
