// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const cardContainer = document.querySelector('.cards-container')
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) =>{
        console.log(response.data.articles)
        for (const article in response.data.articles){
            const topic = article;
            response.data.articles[article].forEach((card) =>{
                cardContainer.appendChild(createArticle(card, topic));
            })
        }
    })
    .catch((errorResponse) =>{
    console.log(errorResponse);
    });
function createArticle(article, topicName) {
    
    // create elements
    const ce = document.createElement.bind(document);
    const card = ce('div');
    const headline = ce('div');
    const author = ce('div');
    const imgContainer = ce('div');
    const authorImg = ce('img');
    const authorName = ce('span');
    
    // Append elements
    imgContainer.appendChild(authorImg);
    author.appendChild(imgContainer);
    author.appendChild(authorName);
    card.appendChild(headline);
    card.appendChild(author);

    // Adding classes
    card.classList.add('card');
    card.classList.add(topicName);
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    // Adding Content
    headline.textContent = article.headline;
    authorImg.src = article.authorPhoto;
    authorName.textContent = article.authorName;

    // Add onclick  
    card.addEventListener('click', () =>{
        console.log(headline.textContent);
    });

    return card;
}