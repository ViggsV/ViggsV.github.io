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

// This function generates a content layout with the header text
// centered at the top, wrapped in a div element with a class "content-wrapper"
function generateContent(headerText) {
    return `
      <div class="content-wrapper">
        <h1 class="content-header">${headerText}</h1>
      </div>
    `;
  }
 //Add a function copyToClipboard to your JavaScript file:
  function copyToClipboard(text) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  }


// Update event listeners for nav buttons to use the `generateContent` function
// This will ensure that the header of each section is consistent in appearance
groundsBtn.addEventListener('click', function() {
    // Generate a content layout without the header "Grounds" and append the section content
    updateMainContent(`
      <div id="grounds-content">
        <p>New content for the Grounds section</p>
        <div class="grounds-buttons">
          <button id="html-btn" class="small-button">HTML</button>
          <button class="small-button">CSS</button>
          <button class="small-button">JS</button>
          <button class="small-button">TS</button>
          <button class="small-button">Phaser</button>
        </div>
      </div>
    `);
  
    // Add event listener for the "HTML" button
    const htmlBtn = document.getElementById('html-btn');
    htmlBtn.addEventListener('click', function() {
      const groundsContent = document.getElementById('grounds-content');
      groundsContent.innerHTML = `
        <h2>HTML</h2>
        <p>HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications.</p>
        <p>It uses a system of tags and attributes to define the structure and content of a web page.</p>
        <p>Some common HTML tags include: <span style="color: #C75A5A;">(Click to copy definition)</span></p>
        <ul>
          <li class="tooltip" onclick="copyToClipboard('&lt;p&gt; - Defines a paragraph.')">&lt;p&gt;<span class="tooltiptext">Defines a paragraph.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;a&gt; - Defines an anchor (link).')">&lt;a&gt;<span class="tooltiptext">Defines an anchor (link).</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;img&gt; - Defines an image.')">&lt;img&gt;<span class="tooltiptext">Defines an image.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;h1&gt; to &lt;h6&gt; - Defines headings (from level 1 to 6).')">&lt;h1&gt; to &lt;h6&gt;<span class="tooltiptext">Defines headings (from level 1 to 6).</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;ul&gt; - Defines an unordered list.')">&lt;ul&gt;<span class="tooltiptext">Defines an unordered list.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;ol&gt; - Defines an ordered list.')">&lt;ol&gt;<span class="tooltiptext">Defines an ordered list.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;li&gt; - Defines a list item.')">&lt;li&gt;<span class="tooltiptext">Defines a list item.</span></li>
        </ul>
        <p>HTML uses various symbols, such as:</p>
        <ul>
          <li class="tooltip" onclick="copyToClipboard('() - Parentheses are used to group expressions and indicate function calls in JavaScript.')">()<span class="tooltiptext">Parentheses are used to group expressions and indicate function calls in JavaScript.</span></li>
          <li class="tooltip" onclick="copyToClipboard('{} - Curly braces are used to define a block of code in JavaScript, such as functions and control structures (if, for, etc.).')">{<span class="tooltiptext
          <li class="tooltip" onclick="copyToClipboard('{} - Curly braces are used to define a block of code in JavaScript, such as functions and control structures (if, for, etc.).')">{<span class="tooltiptext">Curly braces are used to define a block of code in JavaScript, such as functions and control structures (if, for, etc).</span>}</li>
          <li class="tooltip" onclick="copyToClipboard('[] - Square brackets are used to define arrays and access array elements in JavaScript.')">[]<span class="tooltiptext">Square brackets are used to define arrays and access array elements in JavaScript.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;&gt; - Angle brackets are used to define HTML tags.')">&lt;&gt;<span class="tooltiptext">Angle brackets are used to define HTML tags.</span></li>
        </ul>
      `;
    });
  
  });
    
  
  // Generate a content layout with the header "Grounds" and append the section content

journeyBtn.addEventListener('click', function() {
  updateMainContent(generateContent('Journey') + '<p>New content for the Journey section</p>');
});

studiesBtn.addEventListener('click', function() {
  updateMainContent(generateContent('Studies') + '<p>New content for the Studies section</p>');
});

journalBtn.addEventListener('click', function() {
  updateMainContent(generateContent('Journal') + '<p>New content for the Journal section</p>');
});

galleryBtn.addEventListener('click', function() {
  updateMainContent(generateContent('Gallery') + '<div id="gallery-container" data-page="1"></div><nav id="gallery-nav"><button id="previous">Previous</button><button id="page-select">Select Page</button><button id="next">Next</button></nav>');
  displayGalleryPage(1);




  
  //buttons
  const previousBtn = document.getElementById('previous');
  const pageSelectBtn = document.getElementById('page-select');
  const nextBtn = document.getElementById('next');
  
  previousBtn.addEventListener('click', function() {
      // Calculate the current page number
      const currentPageNum = getCurrentPageNum();
      // Display the previous page

        // Check if the current page number is greater than 1
  if (currentPageNum > 1) {
    // Display the previous page
    displayGalleryPage(currentPageNum - 1);
  }
      
  });
  
  pageSelectBtn.addEventListener('click', function() {
      // Display a prompt asking the user to enter a page number
      const pageNum = prompt("Enter a page number:");
      // Display the selected page
      displayGalleryPage(parseInt(pageNum));
  });
  
  nextBtn.addEventListener('click', function() {
      // Calculate the current page number
      const currentPageNum = getCurrentPageNum();
      // Display the next page
      displayGalleryPage(currentPageNum + 1);
  });
  
  function getCurrentPageNum() {
      // Retrieve the current page number from the "gallery-container" element's data-page attribute
      const galleryContainer = document.getElementById('gallery-container');
      return parseInt(galleryContainer.dataset.page);
  }

});
  

sourcesBtn.addEventListener('click', function() {
    updateMainContent(generateContent('Sources') + '<p>New content for the Sources section</p>');
  });
  
  profileBtn.addEventListener('click', function() {
    updateMainContent(generateContent('Profile') + '<p>New content for the Profile section</p>');
  });
  
  //gallery images
  const images = [
    'images/1.jpeg',
    'images/2.jpeg',
    'images/3.jpeg',
    'images/4.jpeg',
    'images/5.jpeg',
    'images/6.jpeg',
    'images/7.jpeg',
    'images/8.jpeg',
    'images/9.jpeg',
    'images/10.jpeg',
    'images/11.jpeg',
    'images/12.jpeg',
  ];
//gallery page
function displayGalleryPage(pageNum) {
    const galleryContainer = document.getElementById('gallery-container');
  
    // Add this line to update the data-page attribute
    galleryContainer.dataset.page = pageNum;
  
    const imagesPerPage = 10; // set the number of images to display per page
    const startIndex = (pageNum - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
  
    // Remove this line
    // galleryContainer.innerHTML = '';
  
    // Add these lines to create a container for the images
    const imageContainer = document.createElement('div');
    imageContainer.id = 'image-container';
    imageContainer.style.display = 'flex';
    imageContainer.style.flexWrap = 'wrap';
    imageContainer.style.justifyContent = 'center';
    imageContainer.style.gap = '10px';
  
    for (let i = startIndex; i < endIndex && i < images.length; i++) {
      const img = document.createElement('img');
      img.src = images[i];
      imageContainer.appendChild(img);
    }
  
    // Replace the previous image container with the new one
    const previousImageContainer = document.getElementById('image-container');
    if (previousImageContainer) {
      galleryContainer.replaceChild(imageContainer, previousImageContainer);
    } else {
      galleryContainer.appendChild(imageContainer);
    }
  }
//gallery page end


//buttons end