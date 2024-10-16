let faqItemEls = document.querySelectorAll(".faq__item");

faqItemEls.forEach(faqItem => {
  faqItem.addEventListener("click", function() {
    let faqAnswerEl = faqItem.querySelector(".faq__answer");
    let faqIconEl = faqItem.querySelector(".faq__svg");
    faqItem.classList.toggle("active");
    faqAnswerEl.classList.toggle("active");
    faqIconEl.classList.toggle("active");
  });
});


const teamMembers = document.querySelectorAll('.team__member');
const firstCard = teamMembers[0];

firstCard.classList.add('is-active'); // Keep this class enabled by default

teamMembers.forEach((member, index) => {
    member.addEventListener('mouseover', () => {
        if (index !== 0) {
            firstCard.classList.remove('is-active'); 
        }
    });

    member.addEventListener('mouseout', () => {
        if (index !== 0) {
            firstCard.classList.add('is-active'); // Re-add class when not hovering over other members
        }
    });
});


