export const displayData = () => {

    const url = 'https://test-api.codingbootcamp.cz/api/a0f7802f/events'

    const featuredEventImage = document.querySelector('.event__main__image img') // Featured IMAGE
    const featuredEventTitle = document.querySelector('.event__main__text_title') // Featured TITLE
    const featuredEventText = document.querySelector('.event__main__text_description') // Featured TEXT
    // const featuredEventButton = document.querySelector('.event__main__regbutton') // Featured BUTTON

    const subEventSection = document.querySelector('.sub_events_all') // Whole sub section
    // const subEventTitle = document.querySelector('.sub-headline') // Sub TITLE


    fetch(url).then(r => r.json()).then(data => {
        // console.log(data); // logging what we recieve, thankfully it is already an array
        
        data.forEach(object => { //forEach loop for the "data" array
            // console.log(object.id); // logging each object in array
            const eventTitle = object.name // setting eventTitle
            const eventDescription = object.description // setting eventDecription
            const eventDate = object.date
            const eventImage = object.image_url // setting eventImage

            const divMaker = document.createElement('div') // Make a div
            divMaker.className = "rendered_div" // gave it class name
            divMaker.innerHTML = `
        <div class="sub-event" id="${object.id}">
        <h2 class="sub-headline">${eventTitle}</h2>
        <button class="btn">More</button>
        </div>` // set innerHTML to be what Tuyen wrote in HTML and deleted the HTML in body
            subEventSection.appendChild(divMaker) // Appending each event to section in HTML

            featuredEventTitle.textContent = eventTitle
            featuredEventText.textContent = eventDescription + " Date: " +eventDate
            featuredEventImage.src = eventImage
        });


        const subEventButtons = document.querySelectorAll('.btn') // ALL Sub BUTTONS

        // console.log(subEventButtons); // Logging NodeList of ALL Sub buttons


        subEventButtons.forEach(element => {
            element.addEventListener('click', (event) => {
                // console.log(event.target.parentNode.id);
                console.log(data);
                
                const subEventID = event.target.parentNode.id
                // console.log(subEventID);

                data.forEach(element => {
                    console.log(element);
                    // console.log(element.id);
                    const elementsID = element.id

                    if (elementsID == subEventID) {
                        console.log(element.name);
                        featuredEventTitle.textContent = element.name
                        featuredEventText.textContent = element.description + " Date: " + element.date
                        featuredEventImage.src = element.image_url
                    }

                });
            })
        });

    })
}

