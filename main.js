window.onload = init;
const secret = "over here";
function init() {
  console.log(aboutMe);
  let collectionOfBlocks = document.getElementsByClassName("block");

  for (let i = 0; i < collectionOfBlocks.length; i++) {
    collectionOfBlocks[i].addEventListener("click", selector);
  }
}
function selector(event) {
  event.preventDefault();

  const key = event.target.innerText.toLowerCase();
  console.log(key);
  //key is now accessible for both html and objects;
  const sectionUl = document.querySelector(`#${key}`);
  console.log(sectionUl);

  if (Array.isArray(aboutMe[key])) {
    const newLi2 = aboutMe[key];
    console.log(newLi2);
    newLi2.forEach(function(data) {
      const createLi = document.createElement("li");
      createLi.innerText = data;
      sectionUl.appendChild(createLi);
    });
    return newLi2;
  } else {
    const newLi = Object.values(aboutMe[key]);
    newLi.forEach(function(data) {
      const createLi = document.createElement("li");
      createLi.innerText = data;
      sectionUl.appendChild(createLi);
    });
    return newLi;
  }
}
