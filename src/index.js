window.onscroll = function() {
    const scrollToTopButton = document.getElementById("scrollToTop");
    if (document.documentElement.scrollTop > 100) {
        scrollToTopButton.classList.add("show");
        scrollToTopButton.classList.remove("hide");
    } else {
        scrollToTopButton.classList.add("hide");
        scrollToTopButton.classList.remove("show");
    }
};

document.getElementById("scrollToTop").onclick = function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0});
};

document.getElementById("langues").onclick = function() {
    showRectangle("rectangle", "langues");
};

document.getElementById("softskill").onclick = function() {
    showRectangle("rectangle2", "softskill");
};

document.getElementById("passion").onclick = function() {
    showRectangle("rectangle3", "passion");
};

function showRectangle(rectangleId, buttonId) {
    const rectangles = ["rectangle", "rectangle2", "rectangle3"];
    const buttons = ["langues", "softskill", "passion"];

    rectangles.forEach(id => document.getElementById(id).classList.remove("show"));
    buttons.forEach(id => document.getElementById(id).classList.remove("show"));

    document.getElementById(rectangleId).classList.add("show");
    document.getElementById(buttonId).classList.add("show");
}

document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth > 800) {
      var flipContainers = document.querySelectorAll(".flip-container");
      for (i = 0; i < flipContainers.length; i++) {
        flipContainers[i].classList.remove("hover");
      }
    }
    window.addEventListener("resize", function() {
      if (window.innerWidth > 800) {
        var flipContainers = document.querySelectorAll(".flip-container");
        for (i = 0; i < flipContainers.length; i++) {
          flipContainers[i].classList.remove("hover");
        }
      } else if (window.innerWidth <= 800) {
        var flipContainers = document.querySelectorAll(".flip-container");
        for (i = 0; i < flipContainers.length; i++) {
          flipContainers[i].classList.add("hover");
        }
      }
    });
    setTimeout(function() {
      var sheet = document.querySelector(".card-sheet");
      sheet.classList.toggle("card-slide");
    }, 500);
    nanoModal.customShow = function(defaultShow, modalAPI) {
      defaultShow();
      modalAPI.overlay.el.style.opacity = 0.5;
      modalAPI.modal.el.style.opacity = 1;
    };
    nanoModal.customHide = function(defaultHide, modalAPI) {
      modalAPI.overlay.el.style = opacity = 0;
      modalAPI.modal.el.style.opacity = 0;
      if (document.body.style.transition !== undefined) {
        setTimeout(defaultHide, 500);
      } else {
        defaultHide;
      }
    };
    var whoButton = document.getElementById("who-button");
    var whoModal = nanoModal(document.getElementById('who-modal'), {
      buttons: [],
      overlayClose: true
    });
    whoButton.addEventListener("click", function() {
      whoModal.show();
    });
    var skillButton = document.getElementById("skill-button");
    var skillModal = nanoModal(document.getElementById('skill-modal'), {
      buttons: [],
      overlayClose: true
    });
    skillButton.addEventListener("click", function() {
      skillModal.show();
    });
    var workButton = document.getElementById("work-button");
    var workModal = nanoModal(document.getElementById('work-modal'), {
      buttons: [],
      overlayClose: true
    });
    workButton.addEventListener("click", function() {
      workModal.show();
    });
    var contactButton = document.getElementById("contact-button");
    var contactModal = nanoModal(document.getElementById('contact-modal'), {
      buttons: [],
      overlayClose: true
    });
    contactButton.addEventListener("click", function() {
      contactModal.show();
    });
  
  });

  var cards = document.querySelectorAll(".card");
var modals = {
    "space-clicker": document.getElementById("space-modal"),
    "parcoursup": document.getElementById("parcoursup-modal"),
    "jeu-echec": document.getElementById("echec-modal"),
    "serveur-mc": document.getElementById("serveur-modal"),
    "ecovoit": document.getElementById("ecovoit-modal"),
    "planetgame": document.getElementById("planet-modal"),
    "lineconf": document.getElementById("line-modal"),
    "sncf": document.getElementById("sncf-modal"),
    "portfolio": document.getElementById("portfolio-modal"),
    "appli-classifier": document.getElementById("classifier-modal") 
};
emailjs.init("nGyQtCexZeur0aijl");
cards.forEach(function(card) {
    card.onclick = function(event) {
        var targetId = event.currentTarget.querySelector(".card-image").id;
        var modal = modals[targetId];
        const scrollToTopButton = document.getElementById("scrollToTop");
        if (modal) {
          scrollToTopButton.classList.add("hide");
          scrollToTopButton.classList.remove("show");
            modal.style.display = "block";
        }
    };
});

var closeButtons = document.querySelectorAll(".close");
closeButtons.forEach(function(closeButton) {
  const scrollToTopButton = document.getElementById("scrollToTop");
    closeButton.onclick = function(event) {
      scrollToTopButton.classList.add("show");
      scrollToTopButton.classList.remove("hide");
      event.target.closest(".modal").style.display = "none";
    };
});

window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
      const scrollToTopButton = document.getElementById("scrollToTop");
      scrollToTopButton.classList.add("show");
      scrollToTopButton.classList.remove("hide");
        event.target.style.display = "none";
    }
};

const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});
sections.forEach(section => {
  observer.observe(section);
});

const circles = document.querySelectorAll(".circle");
const timelineContents = document.querySelectorAll(".timeline-content");

timelineContents.forEach(content => {
  content.addEventListener("mouseenter", () => {
    const timelineItem = content.closest(".timeline-item");
    const circle = timelineItem.querySelector(".circle");

    if (circle) {
      circle.classList.add("scale-up");
      content.classList.add("scale-up-content");
    }
  });

  content.addEventListener("mouseleave", () => {
    const timelineItem = content.closest(".timeline-item");
    const circle = timelineItem.querySelector(".circle");

    if (circle) {
      circle.classList.remove("scale-up");
      content.classList.remove("scale-up-content");
    }
  });
});

circles.forEach(circle => {
  circle.addEventListener("mouseenter", () => {
    const timelineItem = circle.closest(".timeline-item");
    const content = timelineItem.querySelector(".timeline-content");

    if (content) {
      circle.classList.add("scale-up");
      content.classList.add("scale-up-content");
    }
  });

  circle.addEventListener("mouseleave", () => {
    const timelineItem = circle.closest(".timeline-item");
    const content = timelineItem.querySelector(".timeline-content");

    if (content) {
      circle.classList.remove("scale-up");
      content.classList.remove("scale-up-content");
    }
  });
});

document.querySelectorAll('.nav-center a').forEach(link => {
  link.addEventListener('click', () => {
      document.querySelector('.menu-toggle').checked = false;
  });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  emailjs.send("service_78ljdte", "template_rxnmsc8", templateParams);

    document.getElementById("contact-form").style.display="none";
    document.getElementById("confirm-submit").style.display = "block";
});

cards.forEach(function(card) {
  card.onclick = function(event) {
      var targetId = event.currentTarget.querySelector(".card-image").id;
      var modal = modals[targetId];
      const scrollToTopButton = document.getElementById("scrollToTop");
      if (modal) {
          scrollToTopButton.classList.add("hide");
          scrollToTopButton.classList.remove("show");
          modal.style.display = "block";
          document.body.classList.add("no-scroll"); // Désactiver le scroll
      }
  };
});

closeButtons.forEach(function(closeButton) {
  closeButton.onclick = function(event) {
      const scrollToTopButton = document.getElementById("scrollToTop");
      scrollToTopButton.classList.add("show");
      scrollToTopButton.classList.remove("hide");
      event.target.closest(".modal").style.display = "none";
      document.body.classList.remove("no-scroll"); // Réactiver le scroll
  };
});

window.onclick = function(event) {
  if (event.target.classList.contains("modal")) {
      const scrollToTopButton = document.getElementById("scrollToTop");
      scrollToTopButton.classList.add("show");
      scrollToTopButton.classList.remove("hide");
      event.target.style.display = "none";
      document.body.classList.remove("no-scroll"); // Réactiver le scroll
  }
};