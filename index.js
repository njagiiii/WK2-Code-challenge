//fetch data from api

  
    fetch("http://localhost:3000/characters")
     .then(res => res.json())
     .then( data => {
       
      let selectedimage;
      let selectedvote;
      let selectedbutton ;
      let selectedreset;
      //Dom Manipulation
      
      const button = document.getElementById('btn')
      const ul = document.getElementById('list')

      button.addEventListener('click', function click(){
        const mapping = data.map(characters => {
          const li = document.createElement('li');
          li.innerText = characters.name;
          li.classList.add('animal-item');
          ul.appendChild(li);

          //stop the button from duplicating
           button.removeEventListener('click',click);
           

          //Add other remaining info
          li.addEventListener('click', () => {
            //stop image from appearing when the corresponding image is clicked
            if(selectedimage){
              selectedimage.style.display ='none';
            }
            //make vote input dissapear when corresponding image is clicked
            if(selectedvote){
              selectedvote.style.display ='none'

            }

            const animalcontainer =document.createElement('p');
            animalcontainer.classList.add('animal');
            const image = document.createElement('img');
              image.src = characters.image;
              animalcontainer.appendChild(image);
              li.appendChild(animalcontainer);
              selectedimage = image;

            //create a vote input
            const vote = document.createElement('p');
            vote.id = 'input';
            vote.innerText = `votes: ${characters.votes}`;
            animalcontainer.appendChild(vote);
            
              selectedvote = vote;

              //create vote button 
                 const voted = document.createElement('button');
                 voted.id='input'
                  voted.innerText = 'vote'
                  animalcontainer.appendChild(voted);
                  selectedbutton = voted;
                  //add event listener
                    voted.addEventListener('click', () => {
                      if (selectedbutton){
                        selectedbutton.style.display= 'none';
                      }
                      characters.votes++;
                    }); 
                        
                       
              
          });
        });
       
        
      });
     });
  
 

 


  
  








