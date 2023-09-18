// write your code here
/***Events */
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()
    //grab input img
    const img = document.querySelector("#new-image")
    //grab the div where the images are
    const ramenMenuContainer = document.querySelector('#ramen-menu')
    //create a new image element
    const newImage = document.createElement('img')
    //add the value of the image input to the img src
    newImage.src = img.value
    //append new image to the ramen menu container
    ramenMenuContainer.appendChild(newImage)
})
/***Render to DOM */
const displayRamen = ({id, name, restaurant, image, rating, comment}) => {
    const ramenMenuContainer = document.querySelector('#ramen-menu')
    const img = document.createElement('img')
    img.src = image
    ramenMenuContainer.appendChild(img)
    /***Event */
    img.addEventListener('click', ()=>{
        const ramenDetailContainer = document.querySelector('#ramen-detail')
        const imgDetail = document.querySelector("#ramen-detail > img")
        const ramenName = document.querySelector("#ramen-detail > h2")
        const ramenRestaurant = document.querySelector("#ramen-detail > h2")
        const ramenRatings = document.querySelector("#rating-display")
        const ramenComments = document.querySelector("#comment-display")
        imgDetail.src = image
        ramenName.textContent = name
        ramenRestaurant.textContent = restaurant
        ramenRatings.textContent = rating
        ramenComments.textContent = comment
    })
}
/***Fetch Request */
const fetchRamen = () => {
    fetch(' http://localhost:3000/ramens')
    .then(res => res.json())
    .then(ramenList => ramenList.forEach(ramen => displayRamen(ramen)))
}
/***Initialize */
function init(){
    fetchRamen()
}
init()