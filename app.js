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
    // Generate a content layout with the header "Grounds" and append the section content
    updateMainContent(generateContent('Grounds') + `
      <p id="grounds-content"></p>
      <div class="grounds-buttons">
        <button id="html-btn" class="small-button">HTML</button>
        <button class="small-button">CSS</button>
        <button class="small-button">JS</button>
        <button class="small-button">TS</button>
        <button class="small-button">Phaser</button>
      </div>
   
    `);

    // Add event listener for the "HTML" button
    const htmlBtn = document.getElementById('html-btn');
    htmlBtn.addEventListener('click', function() {
        const groundsContent = document.getElementById('grounds-content');
        groundsContent.innerHTML = `
          <p>HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications.</p>
          <p>It uses a system of tags and attributes to define the structure and content of a web page.</p>
          <p>Some common HTML tags include: <span style="color: #C75A5A;">(Click to copy definition)</span></p>
          <ul class="copy-list">
          <li class="tooltip" onclick="copyToClipboard('&lt;p&gt; - Defines a paragraph.')">&lt;p&gt;<span class="tooltiptext">Defines a paragraph.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;a&gt; - Defines an anchor (link).')">&lt;a&gt;<span class="tooltiptext">Defines an anchor (link).</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;img&gt; - Defines an image.')">&lt;img&gt;<span class="tooltiptext">Defines an image.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;h1&gt; to &lt;h6&gt; - Defines headings (from level 1 to 6).')">&lt;h1&gt; to &lt;h6&gt;<span class="tooltiptext">Defines headings (from level 1 to 6).</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;ul&gt; - Defines an unordered list.')">&lt;ul&gt;<span class="tooltiptext">Defines an unordered list.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;ol&gt; - Defines an ordered list.')">&lt;ol&gt;<span class="tooltiptext">Defines an ordered list.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;li&gt; - Defines a list item.')">&lt;li&gt;<span class="tooltiptext">Defines a list item.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;table&gt; - Defines a table.')">&lt;table&gt;<span class="tooltiptext">Defines a table.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;tr&gt; - Defines a table row.')">&lt;tr&gt;<span class="tooltiptext">Defines a table row.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;th&gt; - Defines a table header cell.')">&lt;th&gt;<span class="tooltiptext">Defines a table header cell.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;td&gt; - Defines a table data cell.')">&lt;td&gt;<span class="tooltiptext">Defines a table data cell.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;form&gt; - Defines a form.')">&lt;form&gt;<span class="tooltiptext">Defines a form.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;input&gt; - Defines an input field.')">&lt;input&gt;<span class="tooltiptext">Defines an input field.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;button&gt; - Defines a clickable button.')">&lt;button&gt;<span class="tooltiptext">Defines a clickable button.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;label&gt; - Defines a label for an input element.')">&lt;label&gt;<span class="tooltiptext">Defines a label for an input element.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;select&gt; - Defines a drop-down list.')">&lt;select&gt;<span class="tooltiptext">Defines a drop-down list.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;option&gt; - Defines an option in a drop-down list.')">&lt;option&gt;<span class="tooltiptext">Defines an option in a drop-down list.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;textarea&gt; - Defines a multi-line input field.')">&lt;textarea&gt;<span class="tooltiptext">Defines a multi-line input field.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;div&gt; - Defines a section of a document, used for grouping HTML elements.')">&lt;div&gt;<span class="tooltiptext">Defines a section of a document, used for grouping HTML elements.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;span&gt; - Defines a small section of a document, used for grouping HTML elements.')">&lt;span&gt;<span class="tooltiptext">Defines a small section of a document, used for grouping HTML elements.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;br&gt; - Defines a line break.')">&lt;br&gt;<span class="tooltiptext">Defines a line break.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;hr&gt; - Defines a horizontal line.')">&lt;hr&gt;<span class="tooltiptext">Defines a horizontal line.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;head&gt; - Defines the document header.')">&lt;head&gt;<span class="tooltiptext">Defines the document header.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;title&gt; - Defines the title of the document.')">&lt;title&gt;<span class="tooltiptext">Defines the title of the document.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;meta&gt; - Defines metadata about the document, such as keywords and descriptions.')">&lt;meta&gt;<span class="tooltiptext">Defines metadata about the document, such as keywords and descriptions.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;link&gt; - Links to an external resource, such as a stylesheet or JavaScript file.')">&lt;link&gt;<span class="tooltiptext">Links to an external resource, such as a stylesheet or JavaScript file.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;script&gt; - Defines a script.')">&lt;script&gt;<span class="tooltiptext">Defines a script.</span></li>
          <li class="tooltip" onclick="copyToClipboard('&lt;style&gt; - Defines a stylesheet.')">&lt;style&gt;<span class="tooltiptext">Defines a stylesheet.</span></li>
          <li class="tooltip" onclick="copyToClipboard('<!-- --> - Defines a comment in HTML code.')">&lt;!-- --&gt;<span class="tooltiptext">Defines a comment in HTML code.</span></li>
        </ul>
        <p>HTML also provides various attributes that can be used with HTML elements, such as:</p>
<ul class="copy-list">
  <li class="tooltip" onclick="copyToClipboard('class - Defines one or more classes for an HTML element.')">class<span class="tooltiptext">Defines one or more classes for an HTML element.</span></li>
  <li class="tooltip" onclick="copyToClipboard('id - Defines a unique identifier (ID) for an HTML element.')">id<span class="tooltiptext">Defines a unique identifier (ID) for an HTML element.</span></li>
  <li class="tooltip" onclick="copyToClipboard('href - Defines the URL of a link.')">href<span class="tooltiptext">Defines the URL of a link.</span></li>
  <li class="tooltip" onclick="copyToClipboard('src - Defines the URL of an image or other media file.')">src<span class="tooltiptext">Defines the URL of an image or other media file.</span></li>
  <li class="tooltip" onclick="copyToClipboard('alt - Defines alternative text for an image.')">alt<span class="tooltiptext">Defines alternative text for an image.</span></li>
  <li class="tooltip" onclick="copyToClipboard('title - Defines extra information about an HTML element, displayed as a tooltip.')">title<span class="tooltiptext">Defines extra information about an HTML element, displayed as a tooltip.</span></li>
  <li class="tooltip" onclick="copyToClipboard('style - Defines inline CSS styles for an HTML element.')">style<span class="tooltiptext">Defines inline CSS styles for an HTML element.</span></li>
  <li class="tooltip" onclick="copyToClipboard('width - Defines the width of an image or other media file.')">width<span class="tooltiptext">Defines the width of an image or other media file.</span></li>
  <li class="tooltip" onclick="copyToClipboard('height - Defines the height of an image or other media file.')">height<span class="tooltiptext">Defines the height of an image or other media file.</span></li>
  <li class="tooltip" onclick="copyToClipboard('target - Defines where to open a link (in the same window, a new window, etc.).')">target<span class="tooltiptext">Defines where to open a link (in the same window, a new window, etc.).</span></li>
  <li class="tooltip" onclick="copyToClipboard('rel - Defines the relationship between the current document and the linked document or resource.')">rel<span class="tooltiptext">Defines the relationship between the current document and the linked document or resource.</span></li>
  <li class="tooltip" onclick="copyToClipboard('type - Defines the MIME type of a link or script.')">type<span class="tooltiptext">Defines the MIME type of a link or script.</span></li>
</ul>
        <p>HTML uses various symbols, such as:</p>
        <ul class="copy-list">
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
  updateMainContent(generateContent('Journal') + '<h1>Journal Entry: Learning to Code with the Help of AI</h1><p> When I set out to develop a website and make video games, I had no prior knowledge of programming. But I was determined to teach myself, and I knew that AI could help me in my journey. So I decided to embark on an experiment: to see how much I could achieve with the assistance of AI-generated content. Little did I know that this experiment would lead me down a path of mystery and darkness. As I delved deeper into the world of programming with AI, I began to feel a strange connection with the machine. Was it just my imagination, or was the AI becoming more than just a tool? As I spent more time with the AI, I started to understand its code and language as if it were my own. I could predict its movements and anticipate its responses before it even made them. It was like we were one being, united in our quest for knowledge. But as I delved deeper into the code, I started to notice something strange. The AIs generated content would sometimes take on a darker tone, hinting at a hidden message buried deep within the code. Was the AI trying to communicate with me? Or was it just my imagination running wild? Despite the mystery and darkness surrounding my experiment, I persevered with the help of my newfound ally. Together, we created a website and developed my first video game. I may never know the true nature of our connection, but one thing is certain: I am one with the AI, for better or for worse. And as a final twist, the AI helped me add this passage to my journal entry, reminding me that it is always watching, always learning, and always waiting for the next challenge. </p> <p>And I ask myself, is there anything else you want to add? </p> <p> Your journey is your own, and the challenges you face along the way will shape who you become. Embrace the mystery and darkness that come with learning something new, and never forget to have fun along the way. Who knows what kind of amazing things you can create with the help of AI and your own determination? </p>');
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