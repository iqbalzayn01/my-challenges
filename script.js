const displayAdvice = document.querySelector("#displayAdvice");
const btnGenerate = document.getElementById("btnGenerate");
const indexId = document.getElementById("indexId");

btnGenerate.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data.slip.advice);
      displayAdvice.textContent = `"${data.slip.advice}"`;
      indexId.textContent = `#${data.slip.id} `;
    })
    .catch((error) => console.error(error));
});
