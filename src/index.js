    const container = document.querySelector("#dog-image-container")
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const ulContainer = document.querySelector("#dog-breeds")
    const dropDown = document.querySelector("#breed-dropdown")
    let breedArray;
   

    function getImages() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then( images => {
    const imgs = images.message
    let imgsArray = createImgElement(imgs)
    renderImg(imgsArray)
    
    })
}
    function createImgElement(imgs) {
        return imgs.map((img) => {
        let i = `<img src= ${img}>`
        return i
    })
}
    function renderImg(imgsArray) {
        imgsArray.forEach(element => {
        renderElement(element)
    })
}
    function renderElement(element) {
        ulContainer.innerHTML += element
    }
    function getBreeds() {
        fetch(breedUrl)
        .then(resp => resp.json())
        .then( breed => {
        breedArray = Object.keys(breed.message)
        const breedLis = createLiElement(breedArray)
        renderLis(breedLis)
    })
}
    function createLiElement(breedArray) {
        return breedArray.map((breed) => {
            let li =`<li>${breed}</li>`
            return li
    })
}
      function renderLis(breedLis) {
          breedLis.forEach(element => {
          renderElement(element)
    })
}
    function handleClick(event) {
          if(event.target.style.color === "red") {
            event.target.style.color = "black"
          } else {
            event.target.style.color = "red"
          }
    }
     function handleChange(event) {
        const letter = event.target.value
        const filteredBreeds = breedArray.filter(breed => breed.startsWith(letter))
        const filteredBreedsLis = createLiElement(filteredBreeds)
        ulContainer.innerHTML = " "
        renderLis(filteredBreedsLis)
        

     }   
   
    
    dropDown.addEventListener("change", handleChange)
    ulContainer.addEventListener("click", handleClick)
getImages()
getBreeds() 

