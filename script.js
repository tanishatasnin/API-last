// _________________ error __________ 
document.getElementById('error-message').style.display = 'none';
document.getElementById('spinner').style.display = 'none';






const searchDrinks=()=>{
               const searchfield=document.getElementById('search-feild')
               const searchText=searchfield.value;
               //console.log(searchText);
               searchfield.value="";
// ___error __________ 
if (searchText == '') {
    // please write something to display
    displayError();
}
else {
    // Display Spinner
    document.getElementById('spinner').style.display = 'block';
    // Hide error
    document.getElementById('error-message').style.display = 'none';
    // Clear Team Details
    document.getElementById('drink-details').textContent = '';
    // Clear Search Result
    document.getElementById('search-result').textContent ='';
    // load data
    const url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
//console.log(url)

fetch(url)
.then(res=>res.json())
.then(data=>displayDrinksResult(data.drinks));
}
const displayError = () => {
    document.getElementById('error-message').style.display = 'block';
    document.getElementById('spinner').style.display = 'none';
    // document.getElementById('team-numbers').textContent = '';
    document.getElementById('drink-details').textContent = '';

}

//                const url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
// //console.log(url)

// fetch(url)
// .then(res=>res.json())
// .then(data=>displayDrinksResult(data.drinks));

}

const displayDrinksResult=(drinks)=>{
const searchResult =document.getElementById('search-result');
searchResult.textContent='';
drinks.forEach(drink => {
               console.log(drink);
               //searchResult.value="";
               const div=document.createElement('div');
               div.classList.add('col');
               div.innerHTML=`
               <div onclick="lodeDrinksDItails(${drink.idDrink})" class="card">
                   <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                   <div class="card-body">
                     <h5 class="card-title">${drink.strDrink}</h5>
                     <p class="card-text">${drink.strInstructions.slice(0,100)}</p>
                   </div>
               `;

               searchResult.appendChild(div);
               
});
}
const lodeDrinksDItails=idDrink=>{

console.log(idDrink);
const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
fetch(url)
.then(res=>res.json())
.then(data=>displayDrinksDItails(data.drinks[0]));

}

const displayDrinksDItails= drink=>{
console.log(drink);
const drinkDitails=document.getElementById('drink-details');
drinkDitails.textContent="";
const div = document.createElement('div');
div.classList.add('card');
div.innerHTML=`
<img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${drink.strMeal}</h5>
        <p class="card-text">${drink.strInstructions.slice(0, 150)}</p>
        <a href="${drink.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
                              `;
                              drinkDitails.appendChild(div);

}




