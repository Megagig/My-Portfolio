const deskEl = document.querySelector('.desktop-menu');
const humbergerIcon = document.querySelector('.humberger');
const closeIcon = document.querySelector('.close');
const navListEl = document.querySelectorAll('.nav-list');

humbergerIcon.addEventListener('click', () => {
  deskEl.classList.toggle('active');
  humbergerIcon.classList.toggle('hide');
  closeIcon.classList.toggle('show');
});

closeIcon.addEventListener('click', () => {
  deskEl.classList.toggle('active');
  humbergerIcon.classList.toggle('hide');
  closeIcon.classList.toggle('show');
});

navListEl.forEach((element) => {
  element.addEventListener('click', () => {
    deskEl.classList.toggle('active');
    humbergerIcon.classList.toggle('hide');
    closeIcon.classList.toggle('show');
  });
});

const projects = [
  {
    name: 'Tonic',
    des: ['Canopy', 'backend', '2015'],
    img: 'images/mobile1.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desc1:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologies1: ['github', 'ruby', 'Bootstrap'],
    liveVersion: 'https://megagig.github.io/My-Portfolio/ ',
    sourceCode: 'https://github.com/Megagig/My-Portfolio',
  },
  {
    name: 'Multi-Post Stories',
    des: ['Canopy', 'backend', '2015'],
    img: 'images/mobile2.png',
    description:
      'Experimental content creation feature that allows users to add an existing story over the course of a day without spamming their friends.',
    desc1:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologies1: ['github', 'ruby', 'Bootstap'],
    liveVersion: 'https://megagig.github.io/My-Portfolio/ ',
    sourceCode: 'https://github.com/Megagig/My-Portfolio',
  },
  {
    name: 'Facebook 360',
    des: ['Canopy', 'backend', '2015'],
    img: 'images/mobile3.png',
    description:
      'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos pn Gear VR.',
    desc1:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologies1: ['github', 'ruby', 'Bootstrap'],
    liveVersion: 'https://megagig.github.io/My-Portfolio/ ',
    sourceCode: 'https://github.com/Megagig/My-Portfolio',
  },
  {
    name: 'Uber Navigation',
    des: ['Canopy', 'backend', '2015'],
    img: 'images/mobile4.png',
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    desc1:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologies1: ['github', 'ruby', 'Bootsrap'],
    liveVersion: 'https://megagig.github.io/My-Portfolio/',
    sourceCode: 'https://github.com/Megagig/My-Portfolio',
  },
];

const workpage = document.querySelector('#workpage');
for (let i = 0; i < projects.length; i += 1) {
  workpage.innerHTML += `
  <div class="card-proj">
  <img src="${projects[i].img}" alt="project card image" />
  <div class="project-card-iterms flex column">
    <h2 class="card-title">${projects[i].name}</h2>
    <div class="card-lists">
      <p class="canopy">${projects[i].des[0]}</p>
      <div class="round"></div>
      <p>${projects[i].des[1]}</p>
      <div class="round"></div>
      <p>${projects[i].des[2]}</p>
    </div>
    <div class="card-note">
      <p>
      ${projects[i].description}
      </p>
    </div>
    <div class="card-tag">
      <ul class="card-skills flex">
        <li>${projects[i].technologies[0]}</li>
        <li>${projects[i].technologies[1]}</li>
        <li>${projects[i].technologies[2]}</li>
      </ul>
    </div>
    <button type="button" id="btn-${i}">See Project</button>
  </div>
  </div>
  `;
}

const modal = document.getElementById('modal1');

for (let j = 0; j < projects.length; j += 1) {
  const seeBtn = document.querySelectorAll(`[id=btn-${j}]`);
  seeBtn.forEach((bt) => {
    bt.addEventListener('click', () => {
      modal.style.display = 'block';
      modal.innerHTML = `
      <div class="popup-container block-popup">
      <div id="popup-modal" class="pop-content">
        <div class="headline-popup">
          <h1>${projects[j].name}</h1>
          <a href="#" role="button" onclick="closePopup()">
            <div class="popup-clsbtn">x</div>
          </a>
        </div>
      </div>
      <ul class="small-tags">
        <li class="canopy-sm-tag">${projects[j].des[0]}</li>
        <li>
          <div class="round-popup"></div>
        </li>
        <li class="second-sm-tag">${projects[j].des[1]}</li>
        <li>
          <div class="round-popup"></div>
        </li>
        <li class="second-sm-tag">${projects[j].des[2]}</li>
      </ul>
      <div class="popup-image-container">
        <img src="${projects[j].img}" alt="pop-image" />
      </div>
      <div class="buttom-content-container">
        <div class="paragraph-description">
          <p class="paragraph-description-desktop">
            ${projects[j].desc1}
          </p>
        </div>
        <div class="action-content">
          <div class="popup-tags">
            <ul class="first">
            <li>${projects[j].technologies[0]}</li>
            <li>${projects[j].technologies[1]}</li>
            <li>${projects[j].technologies[2]}</li>
            </ul>
            <ul class="second">
            <li>${projects[j].technologies1[0]}</li>
            <li>${projects[j].technologies1[1]}</li>
            <li>${projects[j].technologies1[2]}</li>
            </ul>
          </div>
          <div class="divider-popup">
            <img src="images/Vector 4.png" alt="Divider popup" />
          </div>
          <div class="popup-button-action">
            <button type="submit">
              <div class="source-code">
                <a href="" class"okeke">See live </a>
              </div>
              <div class="deploy-icon">
                <img src="images/Icon.png" alt="deployment icon" class="deploy-icon-popup" />
              </div>
            </button>
            <button class="submit-github">
              <div class="live-version">
                <a href="" class"okeke">See Source </a>
              </div>
              <div class="github-img">
                <img src="images/Vector.png" alt="github icon" class="github-icon-popup" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
      `;

      const closeBtn = document.querySelector('.popup-clsbtn');
      closeBtn.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        modal.style.display = 'none';
      });
    });
  });
}

// Contact form validation
// Get the submit button, name, email, message input elements and form
const submitButton = document.querySelector('.submit-button');
const fullNameInput = document.querySelector('#fullName');
const messageInput = document.querySelector('#message');
const emailInput = document.querySelector('#email');
const form = document.querySelector('#form');

// Get the error elements for name,email and message fields
const fullNameError = document.querySelector('#fullNameError');
const emailError = document.querySelector('#emailError');
const messageError = document.querySelector('#messageError');

// Add an event listener to the submit button
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  // validate the name field
  if (fullNameInput.value === '') {
    fullNameError.textContent = 'Name must not be empty';
    fullNameError.classList.add('show');
    fullNameInput.focus();
    return false;
  }
  fullNameError.classList.remove('show');

  // validate the email field
  if (emailInput.value === '') {
    emailError.textContent = 'Email must not be empty';
    emailError.classList.add('show');
    emailInput.focus();
    return false;
  }
  if (
    !emailInput.value.includes('@') ||
    !emailInput.value.includes('.') ||
    emailInput.value !== emailInput.value.toLowerCase()
  ) {
    emailError.textContent = 'Enter a valid email in Lowercase';
    emailError.classList.add('show');
    emailInput.focus();
    return false;
  }

  // validate the message field
  if (messageInput.value === '') {
    messageError.textContent = 'message is required';
    messageError.classList.add('show');
    messageInput.focus();
    return false;
  }
  if (messageInput.value.length > 255) {
    messageError.textContent = 'message cannot be more than 255 characters';
    messageError.classList.add('show');
    messageInput.focus();
    return false;
  }
  messageError.classList.remove('show');

  // submit the form
  form.submit();
  fullNameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
  return false;
});

// USE LOCAL STORAGE TO STORE USER INPUT
// Define a function to save user data to local storage
function saveUserData() {
  const userData = {
    username: fullNameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  //Store user data in local storage
  localStorage.setItem('userData', JSON.stringify(userData));
}
// Add event listeners to input fields to trigger save function on focus out

fullNameInput.addEventListener('focusout', saveUserData);
emailInput.addEventListener('focusout', saveUserData);
messageInput.addEventListener('focusout', saveUserData);

// Retrieve user data from local storage and populate input fields
const data = JSON.parse(localStorage.getItem('userData')) || {};
fullNameInput.value = data.username || '';
emailInput.value = data.email || '';
messageInput.value = data.message || '';
