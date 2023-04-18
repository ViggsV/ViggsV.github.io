function updateMainContent(newContent) {
    const main = document.querySelector('.main');
    main.innerHTML = newContent;
  }

const groundsBtn = document.getElementById('grounds-btn');
const journeyBtn = document.getElementById('journey-btn');
const studiesBtn = document.getElementById('studies-btn');
const journalBtn = document.getElementById('journal-btn');
const galleryBtn = document.getElementById('gallery-btn');
const sourcesBtn = document.getElementById('sources-btn');
const profileBtn = document.getElementById('profile-btn');


  groundsBtn.addEventListener('click', function() {
    updateMainContent('<h1>Grounds</h1><p>New content for the Grounds section</p>');
  });
  
  journeyBtn.addEventListener('click', function() {
    updateMainContent('<h1>Journey</h1><p>New content for the Journey section</p>');
  });
  
  studiesBtn.addEventListener('click', function() {
    updateMainContent('<h1>Studies</h1><p>New content for the Studies section</p>');
  });

  journalBtn.addEventListener('click', function() {
    updateMainContent('<h1>Journal</h1><p>New content for the Journal section</p>');
  });

  galleryBtn.addEventListener('click', function() {
    updateMainContent('<h1>Gallery</h1><div id="gallery-container"></div><nav id="gallery-nav"><button id="previous">Previous</button><button id="page-select">Select Page</button><button id="next">Next</button></nav>');
    displayGalleryPage(1);
  });
  

  sourcesBtn.addEventListener('click', function() {
    updateMainContent('<h1>Sources</h1><p>New content for the Sources section</p>');
  });

  profileBtn.addEventListener('click', function() {
    updateMainContent('<h1>Profile</h1><p>New content for the Profile section</p>');
  });
  
  const images = [
    'images/grace.jpeg',
    'images/viggs.jpeg',
    'images/girl.jpeg',
    'images/death.jpeg',
    'images/child.jpeg',
    'images/girl2.jpeg',
  ];

  function displayGalleryPage(pageNum) {
    const galleryContainer = document.getElementById('gallery-container');
    galleryContainer.innerHTML = '';
  
    const imagesPerPage = 5; // set the number of images to display per page
    const startIndex = (pageNum - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
  
    for (let i = startIndex; i < endIndex && i < images.length; i++) {
      const img = document.createElement('img');
      img.src = images[i];
      galleryContainer.appendChild(img);
    }
  }

