export const submitRegistrationData = async () => {

    const url = `https://test-api.codingbootcamp.cz/api/a0f7802f/events/1/registrations`
  
    const myDataObject = {
      "First Name": "Rex",
      "Last Name": "Goodboi",
      "Phone Number": "42069",
      "email": "matthew.shenar@gmail.com",
      "breed": "german shepherd"
    }
    const myResponse = await fetch(url, {
      "method": "POST",
      "body": JSON.stringify(myDataObject),
      "headers": {
        'Content-Type': 'application/json'
      }
    })
    const myUsableResponse = await myResponse.json()
    console.log(myUsableResponse)
  }