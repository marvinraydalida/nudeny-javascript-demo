const form = document.getElementById("nudeny-form");
const result = document.getElementById('result');
const image = document.getElementById('image');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const URL = 'http://ec2-18-136-200-224.ap-southeast-1.compute.amazonaws.com/censor/'

    fetch(URL, {
        method: "POST",
        body: formData,
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data['Prediction'][0]['url'])
            if(data['Prediction'][0]['url'] === ''){
                image.src = "https://i.ibb.co/h2Fv4q0/Desktop-1.jpg?fbclid=IwAR3dUGZmXOCnRQKVtGDd-fGADYiHIBB3_IUZF7JIAfbywN_IZ5KBFXmzV4A"
            }
            else {
                image.src = data['Prediction'][0]['url']
            }
        })
        .catch((error) => console.log(error));
});

