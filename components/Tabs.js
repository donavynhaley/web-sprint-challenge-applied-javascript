// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const tabs = document.querySelector('.topics');
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((response) =>{
        tabs.appendChild(createTopics('All'));
        response.data.topics.forEach((topic) => {
            tabs.appendChild(createTopics(topic));
        });
    })
  .catch((errorResponse) =>{
    console.log(errorResponse);
  });

  function createTopics(topic){
      const tab = document.createElement('div');
      tab.classList.add('tab');
      tab.textContent = topic;

      //tab.addEventListener('click', showByTopic(topic))
      return tab;
  }
// Cant get it to work :(
    /*
const allTopics = document.querySelectorAll('.card');
function showByTopic(topic){
    if(topic == "all"){
        allTopics.forEach((element) =>{
            element.style.display = 'flex'
        })
    }
    else{
        allTopics.forEach((element) =>{
            element.style.display = 'none'
        })
        const topicSelected = document.querySelector(`.card.${topic}`);
        topicSelected.forEach((element) =>{
            element.style.display="flex";
        })
    }
    return;
}*/