// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    // Creating elements
    const header = document.createElement('div');
    const date = document.createElement('span');
    const hOne = document.createElement('h1');
    const temp = document.createElement('span');
    
    // creating classes
    header.classList.add('header');
    date.classList.add('date');
    hOne.classList.add('temp');

    // adding content
    date.textContent = "March 28, 2020";
    hOne.textContent = "Lambda Times";
    temp.textContent = "98°"

    // Appending elements to div
    header.appendChild(date);
    header.appendChild(hOne);
    header.appendChild(temp);

    return header;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());
