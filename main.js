let conBut = document.querySelector(".con");
let xhr = new XMLHttpRequest();
xhr.open('GET', 'assets/data.json', true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            // Successful response
            let data = JSON.parse(xhr.responseText);
            image1 = data[0].icon;
            image2 = data[1].icon;
            image3 = data[2].icon;
            image4 = data[3].icon;
            let re = document.querySelector(".re .icon img")
            let mem = document.querySelector(".mem .icon img")
            let ver = document.querySelector(".ver .icon img")
            let vis = document.querySelector(".vis .icon img")
            re.src = image1;
            mem.src = image2;
            ver.src = image3;
            vis.src = image4;
            let child = document.querySelector(".Sum").children;
            for (let i = 1; i < child.length - 1; i++) {
                let ratio = child[i].querySelector(".ratio span");
                ratio.innerHTML = data[i - 1].score;
                ratio.style.cssText = "color:black;font-size:1.5em;margin-right:10px;"
            }
            let circle = document.querySelector(".cir span");
            console.log(calcAvg(data));
            circle.innerHTML = calcAvg(data);

            console.log("Data retrieved successfully:", data);
        } else {
            // Error handling for failed request
            console.error("Error fetching data:", xhr.status);
            let errorText = document.createTextNode("The file that retrieves the data is not found, please come back later.");
            let errorDiv = document.createElement("div");
            errorDiv.appendChild(errorText);
            errorDiv.style.cssText = "background-color: hsl(0, 100%, 67%, 0.05); border-radius: 20px; color: hsl(0, 100%, 67%); margin-top: 10px;";
            conBut.after(errorDiv);
        }
    }
};
xhr.send();
function calcAvg(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i].score;
    }

    return Math.round((sum * 100) / 400);
}
// const button = document.getElementById('.con');
// button.addEventListener('mouseenter', function () {
//     this.classList.add('animated');
// });

// button.addEventListener('mouseleave', function () {
//     this.classList.remove('animated');
// });
/*
Fetch Call: Start with the fetch() function to initiate a network request.

Response Handling: Use .then() to process the response once it's received. Check response.ok to ensure the request was successful (status code 200-299). If not, throw an error to trigger the .catch() block.

JSON Parsing: If the response is successful (response.ok is true), parse the JSON response using response.json().

Success Handling: Inside the next .then() block, handle the parsed data as needed (e.g., logging to console, updating UI).

Error Handling: Use .catch() at the end of the chain to catch any errors that occur during the Fetch request or subsequent .then() blocks. Log the error (console.error) or handle it appropriately (e.g., displaying an error message to the user).

Notes:
Single Error Handling: Ensure that error handling is centralized in one .catch() block after the chain of .then() calls. This prevents multiple error messages from appearing for the same error.

Consistent Logging: Use console.error() for logging errors to distinguish them clearly from regular console.log() messages.

Additional Handling: Depending on your application's requirements, you might need additional error handling such as displaying error messages to users or retrying the request.

By structuring your Fetch API code in this way, you maintain clarity and control over error handling, ensuring that each error is logged or handled appropriately without duplication.

*/


/*
let conBut = document.querySelector(".con");
let xhr = new XMLHttpRequest();
xhr.open('GET', 'assets/data.json', true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);

    }
    else {
        console.log("There were error in the data we couldn't take the data");
        let errorText = document.createTextNode("The File that retrieves the data is not found ,please come back letter");
        let errordiv = document.createElement("div")
        errordiv.appendChild(errorText);
        errordiv.style.cssText = "background-color:hsl(0, 100%, 67%, 0.05);border-radius:20px;color:hsl(0, 100%, 67%);margin-top:10px;"
        conBut.after(errordiv);
    }
};
xhr.send();*/ 