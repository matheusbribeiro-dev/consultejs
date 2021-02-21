/*Navegação por tabs*/
function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });

      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((element, index) => {
      element.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

/*Navegação por accordion*/
function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

/*Scrool suave para links internos*/
function smoothScroll() {
  const internalLinks = document.querySelectorAll(".js .js-menu a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    //Forma alternativa
    // const top = section.offsetTop;
    // window.scrollTo({
    //   top: top,
    //   behavior: 'smooth'
    // });
  }

  internalLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
smoothScroll();

function initAnimationScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowHeightPart = window.innerHeight * 0.6;

    function scrollAnimation() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowHeightPart < 0;

        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    }

    //scrollAnimation();

    window.addEventListener("scroll", scrollAnimation);
  }
}
initAnimationScroll();
