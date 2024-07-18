const serchFrom = document.querySelector("form");
const moviContainer = document.querySelector(".movie-container");
const inputBox = document.querySelector(".inpurbox");

const myApiKey = "http://www.omdbapi.com/?i=tt3896198&apikey=87e6fe62"
async function getMoviInfo(){
   try{
    const reponse =  await fetch(myApiKey,{
    headers:{
        Accept:"application/json",
      },
    });
    const data = await reponse.json();
    console.log(data);
    showMoviData(data);
   } catch(error){
    console.log('soory');
   }
}
const showMoviData = (data)=>{
   moviContainer.innerHTML = ''; 
const {Title,imdbRating,Genre, Released, Runtime,Actors,Director,Poster,Plot} = data;
const moviElement = document.createElement("div");
moviElement.classList.add('movi-info');
moviElement.innerHTML = `<h2>${Title}</h2>
                          <p><span>Rating:&#11088;</span>${imdbRating}</p>`
moviContainer.appendChild(moviElement)

const moviGenreElement = document.createElement('div');
moviGenreElement.classList.add('movi-henra');
Genre.split(",").forEach(element=>{
    const p = document.createElement('p');
    p.innerText = element;
    moviGenreElement.appendChild(p)
});
moviElement.appendChild(moviGenreElement);
moviElement.innerHTML += `<p><span>Released:</span>${Released}</p>
<p><span>Actors:</span>${Actors}</p>
<p><span>Director:</span>${Director}</p>
<p><span>Plot:</span>${Plot}</p>`

//poster
const moviPoster = document.createElement('div');
moviPoster.classList.add('movi-poster');
moviPoster.innerHTML = `<img src = "${Poster}"/>`
moviContainer.appendChild(moviPoster)
moviContainer.appendChild(moviElement);
}

serchFrom.addEventListener('submit',(e)=> {
   e.preventDefault();
   const moviName = inputBox.value.trim();
   if (moviName !== '') {
    getMoviInfo(moviName)
   }
});