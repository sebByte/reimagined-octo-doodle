console.log("Hello BrowserWindow")

document.querySelector('#btn').addEventListener('click', async () => {
    console.log("Button clicked!")

    const reply = await window.electron.btnClicked("Yeet")
    console.log(reply)
});

    (async () => {
        console.log("getCabins renderer")

        const response = await window.electron.getCabins()

        console.log(response)

        response.forEach(element => {
            document.querySelector('#cabins').innerHTML += `<div>${element.text}</div>`
        })
    })();