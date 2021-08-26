const form = document.getElementById('form')
const search = document.getElementById('search')
const results = document.getElementById('results')

const apiURL = "https://api.lyrics.ovh";

// add event listner

form.addEventListener('submit', e=>{
    e.preventDefault();
    searchValue = search.value.trim();

    // check search value
    if(!searchValue){
        alert('No Mood')
    }else{
        searchSong(searchValue)
        alert(searchValue)
    }
})

// song search
async function searchSong(searchValue){
    const searchResults = await fetch(`${apiURL}/suggest/${searchValue}`)
    const data = await searchResults.json();

    // update dom
    function showData(data){
        results.innerHTML = 
        <ul class='song-list'>
        ${data.data.map(song=> <li>
                             <div>
                                  <strong>
                                  ${song.artist.name}
                                  </strong> -${song.title}
                             </div>
                             <span data-artist="${song.artist.name}" 
                                    get lyrics
                                 </span>  
                                 </li>
                             
                )}
        </ul>
    }
    result.inn

}


