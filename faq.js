import './faq.scss';

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
  
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
  
      question.addEventListener('click', () => {

        answer.classList.toggle('active');
        

        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.querySelector('.faq-answer').classList.remove('active');
          }
        });
      });
    });
  });
  