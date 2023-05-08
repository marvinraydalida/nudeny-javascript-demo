const form = document.getElementById("nudeny-form");
const result = document.getElementById('result');
const image = document.getElementById('image');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const URL = 'http://ec2-18-136-200-224.ap-southeast-1.compute.amazonaws.com/classify/'

    fetch(URL, {
        method: "POST",
        body: formData,
    })
        .then((response) => response.json())
        .then((data) => {
            result.textContent = data.Prediction[0].class;
            console.log(data);
        })
        .catch((error) => console.log(error));
});

