// write your code here
/***Events */
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()

    //handl the inputs information and add them to the menu
    const newName = document.querySelector("#new-name")
    const newRestaurant = document.querySelector("#new-restaurant")
    const img = document.querySelector("#new-image")
    const newRating = document.querySelector("#new-rating")
    const newComment = document.querySelector("#new-comment")
    let newRamenDetails ={
        name: newName.value,
        restaurant: newRestaurant.value,
        image: img.value,
        rating: newRating.value,
        comment: newComment.value
    }
    displayRamen(newRamenDetails)
    newName.value = ''
    newRestaurant.value = ''
    img.value = ''
    newRating.value = ''
    newComment.value = ''

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
        const ramenRestaurant = document.querySelector("#ramen-detail > h3")
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