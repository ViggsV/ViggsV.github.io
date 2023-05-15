// bug - radio buttons stop responding sometimes.
// made background rotate and scale slightly
// removed user select on all elements
/* 
added this by accident made everything rotate, kinda cool 
body {
  font-family: sans-serif;
  background: url('/images/space1.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: white;
  animation: rotateBackground 30s linear infinite;
}

@keyframes rotateBackground {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
*/
let lastTransformStates = new Map()
let scenes = document.querySelectorAll('.scene');
let currentClass = '';
const backgroundElement = document.querySelector("body::before");

function changeSide(cube, radioGroup) {
  let checkedRadio = radioGroup.querySelector(':checked');
  let showClass = 'show-' + checkedRadio.value;
  if (currentClass) {
    cube.classList.remove(currentClass);
  }
  cube.classList.add(showClass);
  currentClass = showClass;
}

// (Cube radios) Loop over each scene
scenes.forEach(function(scene) {
  // Select the cube and the radio group in this scene
  let cube = scene.querySelector('.cube');
  let radioGroup = scene.querySelector('.radio-group')

  // Set the initial side for this cube
  changeSide(cube, radioGroup);

  // Add an event listener to this group of radio buttons
  radioGroup.addEventListener('change', function() {
    changeSide(cube, radioGroup);
  });
});


// (Cube on-hover transition) Loop over each scene
scenes.forEach(function(scene) {
  // Select the cube and the hover div in this scene
  let cubeFaces = scene.querySelectorAll('.cube__face');
  let cubeHover = scene.querySelector('.cube__hover');

  cubeHover.addEventListener('mouseover', function() {
    cubeFaces.forEach(function(face) {
      
      face.style.opacity = '1';
    });
  });

  cubeHover.addEventListener('mouseout', function() {
    cubeFaces.forEach(function(face) {
      
      face.style.opacity = '0.5';
    });
  });
});


scenes.forEach(function(scene) {
  let cube = scene.querySelector('.cube');
  let labels = scene.querySelectorAll('label');
  let labelDelay = 0; // Initialize label delay
  let timeouts = [];

  // Generate a random rotation angle between -20 and 20 for each axis
  let randomX = Math.floor(Math.random() * 41) - 20;
  let randomY = Math.floor(Math.random() * 41) - 20;
  let randomZ = Math.floor(Math.random() * 41) - 20;
  let randomZZ = Math.floor(Math.random() * (512 + 1)) + -2000; 
  let randomYY = Math.floor(Math.random() * (1024 + 1)) - 512; 

  // Generate a random direction (1 or -1) for each axis
  let directionX = Math.round(Math.random()) * 2 - 1;
  let directionY = Math.round(Math.random()) * 2 - 1;
  let directionZ = Math.round(Math.random()) * 2 - 1;

  // Set the cube's initial rotation
  cube.style.transform = `translateZ(${randomZZ}px) translateY(${randomYY}px) rotateX(${randomX}deg) rotateY(${randomY}deg) rotateZ(${randomZ}deg)`;

  // Create a unique animation name for this cube
  let animationName = 'rotate' + Math.random().toString(36).substring(2);

  // Create a new style element
  let style = document.createElement('style');
  // Set the content of the style element to the @keyframes rule
  style.innerHTML = `
    @keyframes ${animationName} {

      0% {
        transform: translateZ(${randomZZ}px) translateY(${randomYY}px) rotateX(${randomX}deg) rotateY(${randomY}deg) rotateZ(${randomZ}deg);
      }
      50% {
        transform: translateZ(-512px) translateY(0px) rotateX(${randomX + directionX * 180}deg) rotateY(${randomY + directionY * 180}deg) rotateZ(${randomZ + directionZ * 180}deg);
      }
      100% {
        transform: translateZ(${randomZZ}px) translateY(${randomYY}px) rotateX(${randomX + directionX * 360}deg) rotateY(${randomY + directionY * 360}deg) rotateZ(${randomZ + directionZ * 360}deg);
      }
    }
  `;
  // Append the style element to the document head
  document.head.appendChild(style);

  // Apply the animation to the cube
  cube.style.animation = `${animationName} 60s infinite linear`;


  // Select the .cube__hover element
  let cubeHover = scene.querySelector('.cube__hover');
  
  let isTransitioning = false;  // Flag to indicate if a transition is happening

  cube.addEventListener('transitionend', function() {
    // When the transition ends, set isTransitioning to false
    isTransitioning = false;
  });
  
  cubeHover.addEventListener('click', function() {
    // Only allow changes if no transition is happening
    if (!isTransitioning) {
      if (cube.classList.contains('paused')) {
        // If the cube is paused, resume the animation
        this.parentNode.classList.remove('hovered');
        cube.classList.remove('paused');
        let lastTransformState = lastTransformStates.get(cube);
        cube.style.transform = lastTransformState;
        console.log(lastTransformState)
               // Clear all timeouts
               for (let i = 0; i < timeouts.length; i++) {
                clearTimeout(timeouts[i]);
              }
              timeouts = []; // Reset the timeouts array
        labels.forEach(function(label) {  // Loop over each label and update its opacity
          label.style.opacity = "0";
          
        });
        
        
        
        // Generate a random rotation angle between -20 and 20 for each axis
        let randomX = Math.floor(Math.random() * 41) - 20;
        let randomY = Math.floor(Math.random() * 41) - 20;
        let randomZ = Math.floor(Math.random() * 41) - 20;
        let randomZZ = Math.floor(Math.random() * (512 + 1)) + -2000; 
        let randomYY = Math.floor(Math.random() * (1024 + 1)) - 512; 
        // Generate a random direction (1 or -1) for each axis
        let directionX = Math.round(Math.random()) * 2 - 1;
        let directionY = Math.round(Math.random()) * 2 - 1;
        let directionZ = Math.round(Math.random()) * 2 - 1;
        
  
        // Create a unique animation name for this cube
        let animationName = 'rotate' + Math.random().toString(36).substring(2);
 
        // Create a new style element
        let style = document.createElement('style');
        // Set the content of the style element to the @keyframes rule
        style.innerHTML = `
        @keyframes ${animationName} {
          0% {
            transform: ${lastTransformState};
          }
          50% {
            transform: translateZ(${randomZZ}px) translateY(${randomYY}px) rotateX(${randomX + directionX * 360}deg) rotateY(${randomY + directionY * 360}deg) rotateZ(${randomZ + directionZ * 360}deg);
          }
          100% {transform: ${lastTransformState};}
        }
      `;
        // Append the style element to the document head
        document.head.appendChild(style);
  
        // Apply the new animation to the cube
        cube.style.animation = `${animationName} 60s 2s infinite ease-in-out`;
      } else {
        // If the cube is not paused, stop the animation and revert to the original state
        cube.classList.add('paused');
        let computedStyle = window.getComputedStyle(cube);
        let lastTransformState = computedStyle.transform;  // Store the current state
        lastTransformStates.set(cube, lastTransformState);  // Store the last state of this cube
        cube.style.animation = 'none';
        cube.style.transform = lastTransformState;
        isTransitioning = true;  // A transition is about to start
        setTimeout(() => {
          
          cube.style.transform = 'translateZ(-512px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)'
          cube.style.transform = null;
        }, 100);
        this.parentNode.classList.add('hovered');
        let labelDelay = 600;  // Reset the label delay to its initial value
        labels.forEach(function(label) {
          let timeoutId = setTimeout(function() {
            label.style.opacity = "1";
          }, labelDelay);
          timeouts.push(timeoutId);
          labelDelay += 600; 
        });
      }
    }
  });
  
});

/* 
        // Apply the new animation to the cube
        cube.style.animation = `${animationName} 60s 2s infinite ease-in-out`;
      } else {
        // If the cube is not paused, stop the animation and revert to the original state
        cube.classList.add('paused');
        let computedStyle = window.getComputedStyle(cube);
        lastTransformState = computedStyle.transform;  // Store the current state
        cube.style.animation = 'none';
        cube.style.transform = lastTransformState;
        isTransitioning = true;  // A transition is about to start
        setTimeout(() => {
          cube.style.transform = 'translateZ(-512px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
        }, 100);
      }
    }
  });
});
*/