
let searchedValue = document.querySelector("input");
let searchBtn = document.querySelector("button");
let favorite = document.querySelector("select");
function showFetch(searchedValue, favorite){
    fetch( `https://newsapi.org/v2/everything?q=${searchedValue}&from=2021-09-28&sortBy=${favorite}&apiKey=f870ea097ae84a0e97d68e1551db9b4a`)
    .then(response => response.json())
    .then(data =>showResult(data.articles));
}
searchBtn.addEventListener("click", ()=>{
    showFetch(searchedValue.value, favorite.value);
    
});
   
function showResult(article){
    let list = document.querySelector("ol");
    list.innerHTML=" ";
    for(let i = 0; i < article.length; i++){
        let item = document.createElement("li");
        list.appendChild(item);

        let titleItem = document.createElement("h1");
        titleItem.textContent=article[i].title;
        titleItem.style.fontSize = "2rem";
        titleItem.style.color="#darkgray";
        item.appendChild(titleItem);

        let description = document.createElement("p");
        description.textContent = article[i].description;
       item.appendChild(description);

        let anchor = document.createElement("a");
        anchor.href = article[i].url;
        anchor.textContent="learn More!"
       description.appendChild(anchor);

        let itemImage = document.createElement("img");
        itemImage.src = article[i].urlToImage;
        itemImage.style.width = "500px";
        itemImage.style.height = "auto";
        itemImage.style.borderRadius = "5px"
        item.appendChild(itemImage);
        
        

    }
}

