console.log("Hello BrowserWindow")

document.querySelector('#btn').addEventListener('click', async () => {
    console.log("Button clicked!");

/*
    Login is giving me trouble and instead of pending valuable
    time on fixing it I'll just skip the whole thing instead
    Idea was to login in, recieve a token for the user and then show the cabins.
    Instead I'll just show the cabins without login and a press of a button.

    //https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    const uname = document.querySelector('form.login input[name="uname"]').value,
        pws = document.querySelector('form.login input[name="psw"]').value;

    //https://www.codegrepper.com/code-examples/javascript/login+using+fetch+api
    await fetch('https://frozen-headland-66513.herokuapp.com/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: uname, password: pws })
    })
    .then((response) => {
        console.log(response)

        return response.json()})
    .then((login) => {
        console.log('Succsess:', login.firstName);
    })
    .catch((error) => {
        console.log('Error:', error);
    });
    */
});


(async () => {
    console.log("getCabins renderer");

    const response = await window.electron.getCabins();

    console.log(response);

    response.forEach(element => {
        document.querySelector('#cabins').innerHTML +=
            `<div>
            Cabin name: ${element.address}<br>
            Size m²: ${element.size}<br>
            Rent: ${element.rent}<br>
            Has beach: ${element.beach}<br>
            Has sauna: ${element.sauna}
            </div>`;
    });
})();