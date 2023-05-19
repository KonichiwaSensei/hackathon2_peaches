export const submitRegistrationData = () => {

    const url = `https://test-api.codingbootcamp.cz/api/a0f7802f/events/1/registrations`
    
    const firstName = document.querySelector('#fname')
    const lastName = document.querySelector('#lname')
    const userEmail = document.querySelector('#email')
    const userPhone = document.querySelector('#pnumber')
    const dateOfBirth = document.querySelector('#dateb')
    // const submitButtonRequest = document.querySelector('#subbtn')
    const registrationForm = document.querySelector('#registration')

    // console.log(submitButtonRequest);


    registrationForm.addEventListener('submit', async (e) => {
        e.preventDefault()
        // console.log({
        //     "First Name": firstName.value,
        //     "Last Name": lastName.value,
        //     "email": userEmail.value,
        //     "Phone Number": userPhone.value,
        //     "Date Of Birth": dateOfBirth.value
        //   });
        // console.log("boo");
        const myDataObject = {
            "First Name": firstName.value,
            "Last Name": lastName.value,
            "email": userEmail.value,
            "Phone Number": userPhone.value,
            "Date Of Birth": dateOfBirth.value
          }

          const myResponse = await fetch(url, {
            "method": "POST",
            "body": JSON.stringify(myDataObject),
            "headers": {
              'Content-Type': 'application/json'
            }
          })

          console.log(myResponse);
          const myUsableResponse = await myResponse.json()
          console.log(myUsableResponse)

    })




    }