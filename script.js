const formPages = document.querySelectorAll('.page');
const steps = document.querySelectorAll('.step');
const progressBar = document.querySelector('.progress-bar');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

let currentStep = 1;

const handleNextBtn = () => {
  currentStep++;
  checkDisabledBtn(currentStep);
  if(currentStep > steps.length){
    currentStep = steps.length;
  }
  handleProgressBar();
}

const handlePrevBtn = () => {
  currentStep--;
  checkDisabledBtn(currentStep);
  if(currentStep < 1){
    currentStep = 1
  }
  handleProgressBar();
}

const handleProgressBar = () => {
  steps.forEach((step, index) => {
    if(index < currentStep){
      step.classList.add('active-step')
    } else {
      step.classList.remove('active-step')
    }
  })

  const activeSteps = document.querySelectorAll('.active-step');
  progressBar.style.width = (activeSteps.length - 1) / (steps.length - 1) * 100 + '%';

}

const checkDisabledBtn = check => {
  if(check > 1){
    prevBtn.removeAttribute('disabled', false);
  } else {
    prevBtn.setAttribute('disabled', true);
  }

  if(check >= 5) {
    nextBtn.setAttribute('disabled', true);
  } else {
    nextBtn.removeAttribute('disabled', false);
  }
}


nextBtn.addEventListener('click', handleNextBtn);
prevBtn.addEventListener('click', handlePrevBtn);