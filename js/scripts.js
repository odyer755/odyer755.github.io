// scrollMonitor = require('scrollMonitor');

const goalsObj = [{
    id: 1,
    main: "Professional",
    sub: "I love to make modern, professional looking sites",
    icon: "fas fa-user-tie",
  },
  {
    id: 2,
    main: "Easy to Use",
    sub: "Simple layouts that give a great user experience",
    icon: "fas fa-heart",
  },
  {
    id: 3,
    main: "Responsive",
    sub: "My sites are made using the latest technologies so they will look great on screens big or small",
    icon: "fas fa-laptop-house"
  },
  {
    id: 4,
    main: "Clean",
    sub: "I don't use any unecessary code or plugins, saving on page loading times",
    icon: "fas fa-bolt"
  }
];

const projectsObj = [{
    id: 1,
    title: 'Budget Calculator',
    skills: 'JavaScript',
    bgImg: 'budgeCalc1',
    info: {
      desc: 'The Budget Calculator helps to calculate your income and expenditures over the period of a month. You select whether the item you are adding is an income or expenditure, write a small description of what that item is, enter the value of the item and then add it. Then a each item you\'ve entered will be added to the list of either incomes or expenditures. In the top section of the app you will see the total of your budget, with a break down of total costs and expenditures - the expenditures. This was made using JavaScript, CSS and HTML',
      imgs: ['budgeCalc1', 'budgeCalc2', 'budgeCalc3', 'budgeCalc4']
    }
  },
  {
    id: 2,
    title: 'Keep Note',
    skills: 'ReactJS',
    bgImg: 'keepNote1',
    info: {
      desc: 'KeepNote is an app that allows you to keep track of things you have to do, you can add items to your todo list and tap them to cross them off when you are done. It was built using react and styled with CSS.',
      imgs: ['keepNote1', 'keepNote2', 'keepNote3', 'keepNote3']
    }
  },
  {
    id: 3,
    title: 'Dice Game',
    skills: 'JavaScript',
    bgImg: 'js_diceGame2',
    info: {
      desc: 'The Dice Game is a two player game. Each player takes it in turns to roll the dice, once the dice has been rolled the player can decide to keep their score or roll again but if the player rolls 2 ones they lose their score for that round. The winner is the first player to get to 100. It is built using JavaScript and styled with CSS.',
      imgs: ['js_diceGame', 'js_diceGame1', 'js_diceGame2', 'js_diceGame2']
    }
  },
  {
    id: 4,
    title: 'Whack-A-Mole Game',
    skills: 'JavaScript',
    bgImg: 'whackMole1',
    info: {
      desc: 'The Whack-A-Mole game was built using JavaScript and styled with CSS. The player has 1 minute to hit the mole that has popped up from behind the mound of dirt. To register a \'hit\' you have to click on the image of the mole.',
      imgs: ['whackMole1', 'whackMole2', 'whackMole1', 'whackMole2']
    }
  },
  // {
  //   id: 5,
  //   title: 'Sound App',
  //   skills: 'ReactJS',
  //   bgImg: 'soundApp1',
  //   info: {
  //     desc: 'The sound app plays ambient sounds to help you sleep, concentrate or just generally relax. It is built using react and styled with CSS.',
  //     imgs: ['soundApp1', 'soundApp2', 'soundApp1', 'soundApp2']
  //   }
  // },
  {
    id: 6,
    title: 'Nicola Evans Fine Art',
    skills: 'JavaScript/SASS',
    bgImg: 'nefa_1',
    info: {
      desc: 'This is a site a made for a friend to advertise her art work. Making this site was a lot of fun because it allowed me to use SASS, the CSS grid system and JavaScript to dynamically create the content. I also learned alot to do with the SEO side of things and setting up the web hosting, domain name and redirects from her old site to this new one. It is fully optimized for mobile and looks great!',
      imgs: ['nefa_1', 'nefa_2', 'nefa_3', 'nefa_4', 'nefa_5']
    }
  }
];

const knowledgeAreas = [{
    id: 1,
    area: 'HTML',
    score: 99
  },
  {
    id: 2,
    area: 'CSS',
    score: 99
  },
  {
    id: 3,
    area: 'SASS',
    score: 99
  },
  {
    id: 4,
    area: 'jQuery',
    score: 90
  },
  {
    id: 5,
    area: 'JavaScript',
    score: 90
  },
  {
    id: 6,
    area: 'React',
    score: 85
  },
  {
    id: 7,
    area: 'PHP',
    score: 55
  },
  {
    id: 8,
    area: 'Smarty PHP',
    score: 65
  },
  {
    id: 9,
    area: 'Vue (2, 3)',
    score: 75
  },
  {
    id: 10,
    area: 'Nuxt (2, 3)',
    score: 68
  }
]

window.addEventListener('scroll',function(e){
  const headerHeight = document.querySelector('.header').offsetHeight;
  const scrollPos = window.scrollY;
  const nav = document.querySelector('.header__nav');
  // const headings = document.querySelectorAll('.heading--2');
  nav.style.position = scrollPos > headerHeight ? 'fixed' : 'static';

  // headings.forEach((heading) => {
  //   if(heading.offsetTop)
  // });



});


function startCountDown(id, score) {
  let counter = 0;
  let increaser = document.getElementById('increaseMe' + id);
  let scoreArea = document.getElementById('final' + id);
  setTimeout(function(){
    let countInterval = setInterval(function() {
      counter++;
      increaser.style.width = counter + '%';
      scoreArea.innerHTML = counter + '%';
      counter === score ? clearInterval(countInterval) : '';
    }, 50);
  },200);
}

$(document).ready(function() {

    const formInput = document.querySelectorAll('.connect__form--text');

    console.log(formInput);

    formInput.forEach((input, id) => {
      input.addEventListener('focusout', checkVal);
    });

    function checkVal(){
      if(this.value != ''){
        this.classList.add('input-filled');
      }
    }

  const currYear = new Date().getFullYear();

  document.getElementById('currYear').innerHTML = currYear;

  $(function() {
    let kaHTML = '';
    knowledgeAreas.map((info, index) => {
      kaHTML += '<div id="aboutSkills_' + info.id + '" class="about__skills--skills">';
      kaHTML += '<span class="about__skills__skill">' + info.area + '</span>';
      kaHTML += '<span id="increaseMe' + info.id + '" class="about__skills__score"></span>';
      kaHTML += '<span id="final' + info.id + '" class="about__skills__final">'+info.score+'%</span>';
      kaHTML += '</div>';
    });
    document.getElementById('skills').innerHTML = kaHTML;
    // knowledgeAreas.map((info, index) => {
    //   startCountDown(info.id, info.score);
    // });
  });

document.getElementById('skills').addEventListener('animationend', function(){
  knowledgeAreas.map((info, index) => {
    startCountDown(info.id, info.score);
  });
});

  $(function() {
    const projects = projectsObj;
    const projectsCont = document.getElementById('skillsArea');
    // const lastProj = projects.slice(-1)[0]['id'];
    let projClass = 'projects__projects__ind';
    let projectContent = '<div class="projects__projects">';
    projects.map((project, id) => {
      projectContent += '<div id="project_' + id + '" class="animate projects__projects__ind" style="background-image:url()">';
      projectContent +=     '<div style="height: 100%; width: 100%">';
      projectContent +=         '<img src="images/projects/' + project.bgImg + '.PNG" style="height: 100%; width: 100%; object-fit: cover;"/>';
      projectContent +=         '<div class="projects__projects__title">';
      projectContent +=           '<span>' + project.title + '</span>';
      projectContent +=           '<div class="projects__projects__desc">';
      projectContent +=               '<span>' + project.skills + '</span>';
      projectContent +=           '</div>';
      projectContent +=         '</div>';
      projectContent +=         '<div class="projects__projects__learn">';
      projectContent +=           '<div class="button button__primary--outline" onClick=showModal(' + id + ')>LEARN MORE</div>';
      projectContent +=         '</div>';
      projectContent +=         '<div class="projects__overlay"></div>';
      projectContent +=     '</div>';
      projectContent += '</div>';
    });

    projectContent += '</div>'
    // console.log(projectContent);

    projectsCont.innerHTML = projectContent;
    // console.log(projectsCont);
  });


  //event listener for modalclose
  const closeModal = document.querySelector('.projects__modal__carousel--close');

  closeModal.addEventListener('click', () => {
    const modal = document.querySelector('.projects__modal');
    modal.classList.remove('active');
  });

});
(function(d){
  formInputs = d.getElementsByClassName('connect__form--input');
  //formInputs is not an array. It is HTMLCollection and it does not have forEach method.
  //You can convert it to the array first using spread operator
  [...formInputs].forEach(function(input, id){
    input.addEventListener('focus',activeInput);
  });

  function activeInput(){
    console.log(this.sibling);
    this.classList.add('active');
  }

  // const links = document.querySelectorAll(".nav__btn");
  //
  // for (const link of links) {
  //   link.addEventListener("click", clickHandler);
  // }
  //
  // function clickHandler(e) {
  //   e.preventDefault();
  //   const href = this.getAttribute("href");
  //   const offsetTop = document.querySelector(href).offsetTop;
  //
  //   scroll({
  //     top: offsetTop,
  //     behavior: "smooth"
  //   });
  // }

}(document));
// !(function(d){
// Variables to target our base class,  get carousel items, count how many carousel items there are, set the slide to 0 (which is the number that tells us the frame we're on), and set motion to true which disables interactivity.
var itemClassName = "carousel__photo";
d = document;
items = d.getElementsByClassName(itemClassName),
  totalItems = items.length,
  slide = 0,
  moving = true;

// To initialise the carousel we'll want to update the DOM with our own classes
function setInitialClasses() {

  // Target the last, initial, and next items and give them the relevant class.
  // This assumes there are three or more items.
  // items[totalItems - 1].classList.add("prev");
  // items[0].classList.add("active");
  // items[1].classList.add("next");
}

// Set click events to navigation buttons

function setEventListeners() {
  console.log("setting listeners");
  var next = d.getElementsByClassName('carousel__button--next')[0],
    prev = d.getElementsByClassName('carousel__button--prev')[0];

  console.log(next + ' ' + prev);

  next.addEventListener('click', moveNext);
  prev.addEventListener('click', movePrev);
}

// Disable interaction by setting 'moving' to true for the same duration as our transition (0.5s = 500ms)
function disableInteraction() {
  moving = true;

  setTimeout(function() {
    moving = false
  }, 500);
}

function moveCarouselTo(slide) {
  console.log("moving slide");
  // Check if carousel is moving, if not, allow interaction
  if (!moving) {

    console.log("moving slide 2");

    console.log(items);
    console.log(totalItems);
    // temporarily disable interactivity
    // disableInteraction();

    // Preemptively set variables for the current next and previous slide, as well as the potential next or previous slide.
    var newPrevious = slide - 1,
      newNext = slide + 1,
      oldPrevious = slide - 2,
      oldNext = slide + 2;

    // Test if carousel has more than three items
    if ((totalItems - 1) >= 3) {
      console.log("Here 1");

      // Checks if the new potential slide is out of bounds and sets slide numbers
      if (newPrevious <= 0) {
        console.log("Here 2");
        oldPrevious = (totalItems - 1);
      } else if (newNext >= (totalItems - 1)) {
        console.log("Here 3");
        oldNext = 0;
      }

      // Check if current slide is at the beginning or end and sets slide numbers
      if (slide === 0) {
        console.log("Here 4");
        newPrevious = (totalItems - 1);
        oldPrevious = (totalItems - 2);
        oldNext = (slide + 1);
      } else if (slide === (totalItems - 1)) {
        console.log("Here 5");
        newPrevious = (slide - 1);
        newNext = 0;
        oldNext = 1;
      }

      // Now we've worked out where we are and where we're going, by adding and removing classes, we'll be triggering the carousel's transitions.

      // Based on the current slide, reset to default classes.
      items[oldPrevious].className = itemClassName;
      items[oldNext].className = itemClassName;

      // Add the new classes
      items[newPrevious].className = itemClassName + " prev";
      items[slide].className = itemClassName + " active";
      items[newNext].className = itemClassName + " next";
    }
  }
}

// Next navigation handler
function moveNext() {
  console.log("Moving");
  // Check if moving
  if (!moving) {
    console.log("here");
    // If it's the last slide, reset to 0, else +1
    if (slide === (totalItems - 1)) {
      slide = 0;
    } else {
      slide++;
    }

    // Move carousel to updated slide
    moveCarouselTo(slide);
  }
}

// Previous navigation handler
function movePrev() {
  console.log("Moving");
  // Check if moving
  if (!moving) {

    // If it's the first slide, set as the last slide, else -1
    if (slide === 0) {
      slide = (totalItems - 1);
    } else {
      slide--;
    }

    // Move carousel to updated slide
    moveCarouselTo(slide);
  }
}

// }(document));

function showModal(id) {
  const modal = document.querySelector('.projects__modal');
  const modalDesc = document.getElementById('modalInfo');
  let modalContent = '';
  let imgCount = 1;
  let runInit = false;

  //Description
  modalDesc.innerHTML = projectsObj[id].info.desc;
  //images
  const totalImgs = projectsObj[id].info.imgs.length;
  totalItems = totalImgs;
  projectsObj[id].info.imgs.map((image, id) => {

    if (totalImgs === imgCount) {
      runInit = true;
    } else {
      console.log('not ready');
    }

    if (id === 0) {
      showClass = 'initial active';
    } else if (id === 1) {
      showClass = 'next';
    } else if (imgCount === totalImgs) {
      showClass = 'prev';
    } else {
      showClass = 'other';
    }

    modalContent += '<img id="slide-' + 1 + '" class="carousel__photo ' + showClass + ' " data-position="' + id + '" src="images/projects/' + image + '.PNG" alt="Oliver Dyer Developer Project Image" style="height:100%;"/>'
    imgCount++;
  });

  // if(runInit){
  //   console.log('initialise');
  //   // make it rain
  initCarousel();
  // }else{
  //   console.log("Not Running");
  // }

  document.getElementById('carousel').innerHTML = modalContent;
  modal.classList.add('active');
  // setInitialClasses();
}

// Initialise carousel
function initCarousel() {
  console.log("setting initial");
  // setInitialClasses();
  setEventListeners();

  // Set moving to false now that the carousel is ready
  moving = false;
}

//AJAX form
window.addEventListener("DOMContentLoaded", function() {

  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  var button = document.getElementById("my-form-button");
  var status = document.getElementById("my-form-status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    button.style = "display: none ";
    status.innerHTML = "Thanks. your details have been submitted, I will get back to you soon.";
  }

  function error() {
    status.innerHTML = "It looks like there is a problem, please make sure your details are correct and try again. If the problem persists please email olivertdyer@gmail.com.";
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

const options = {
	root: null, // use the document's viewport as the container
	rootMargin: '0px', // % or px - offsets added to each side of the intersection
	threshold: 0.5 // percentage of the target element which is visible
}

let callback = (entries) => {
  console.log("here enteries ");
  console.log(entries);
	entries.forEach(entry => {

		// If entry (box) is visible - according with the params set in `options`
		// then adds `isVisible` class to box
		// otherwise removes `isVisible` class
		if(entry.isIntersecting) {
			entry.target.classList.add('isVisible');
		// } else {
		// 	entry.target.classList.remove('isVisible');
  }


	});
}

// Create the intersection observer instance by calling its constructor and passing it a
// callback function to be run whenever a threshold is crossed in one direction or the other:
let observer = new IntersectionObserver(callback, options);

// Get all the `.box` from DOM and attach the observer to these
document.querySelectorAll('.animate').forEach(box => { observer.observe(box) });
