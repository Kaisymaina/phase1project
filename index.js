
// const apiUrl = "https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime"
// fetch(apiUrl)
// .then(res => res.json())
// .then(data =>console.log(data))


// const button = document.getElementById('button');



// button.addEventListener('click', function() {
//  alert('Getting the lyrics');
// });

// ///////////////////////////////////////////////////////////////////

// const artistInput = document.getElementById('artist');
// const songInput = document.getElementById('song');
// const lyricsContainer = document.querySelector("#lyrics-container")
// ////////////////////////////////////////////////////////////////////
// artistInput.addEventListener('change', handleInputChange);
// songInput.addEventListener('change', handleInputChange);


// function handleInputChange(event) {
   
//     console.log(`${event.target.id} changed: ${event.target.value}`);
// }
// //////////////////////////////////////////////////////////////////////


// artistInput.addEventListener('input', handleInput);
// songInput.addEventListener('input', handleInput);



// function handleInput(event) {
    
//     console.log(`${event.target.id} input: ${event.target.value}`);
// }

// ///////////////////////////////////////////////////////////////////////////////////////////////




// button.addEventListener("click", () => {

//   const artist = artistInput.value.trim();

//   const song = songInput.value.trim();


//   if (artist && song) {

//     fetchLyrics(artist, song).then(lyrics => {

//       if (lyrics) {

//         lyricsContainer.textContent = JSON.stringify(lyrics)
      
//       } else {

//         console.log("Failed to fetch lyrics.");

       

//       }

//     });

//   } else {

//     console.log("Please enter both the artist and song name.");

  

//   }

// });


// /////////////////////////////////////////////////////////////////////


// const fetchLyrics = async (artist, song) => {

//   try {

//     const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);

//     const data = await response.json();

//     return data.lyrics;

//   } catch (error) {

//     console.error("Error fetching lyrics:", error);

//     return null;

//   }

// };





const apiUrl = "https://api.lyrics.ovh/v1/";
const lyricsContainer = document.querySelector("#lyrics-container");
const artistInput = document.getElementById('artist');
const songInput = document.getElementById('song');
const lyricsInput = document.getElementById('lyricsInput');
const button = document.getElementById('button');
const updateButton = document.getElementById('updateButton');
const deleteButton = document.getElementById('deleteButton');
const saveButton = document.getElementById('saveButton');

button.addEventListener("click", () => {
    const artist = artistInput.value.trim();
    const song = songInput.value.trim();
    const lyrics = lyricsInput.value.trim();
    if ((artist && song) || lyrics) {
        if (artist && song) {
            fetchLyrics(artist, song).then(fetchedLyrics => {
                if (fetchedLyrics) {
                    lyricsContainer.textContent = fetchedLyrics;
                } else {
                    lyricsContainer.textContent = "Failed to fetch lyrics.";
                }
            });
        } else {
            lyricsContainer.textContent = lyrics;
        }
    } else {
        lyricsContainer.textContent = "Please enter both the artist and song name, or write your own lyrics.";
    }
});

updateButton.addEventListener("click", () => {
    // Implement update functionality
    // This could involve sending updated lyrics to the server
    // Show the save button after updating
    saveButton.style.display = "inline";
});

saveButton.addEventListener("click", () => {
    const artist = artistInput.value.trim();
    const song = songInput.value.trim();
    const updatedLyrics = lyricsInput.value.trim();
    if (artist && song && updatedLyrics) {
        saveLyrics(artist, song, updatedLyrics);
        // Hide the save button after saving
        saveButton.style.display = "none";
    } else {
        alert("Please enter both the artist, song name, and updated lyrics to save.");
    }
});

deleteButton.addEventListener("click", () => {
    // Implement delete functionality
    // This could involve sending a delete request to the server
});

async function fetchLyrics(artist, song) {
    try {
        const response = await fetch(`${apiUrl}${artist}/${song}`);
        const data = await response.json();
        return data.lyrics;
    } catch (error) {
        console.error("Error fetching lyrics:", error);
        return null;
    }
}

function saveLyrics(artist, song, lyrics) {
    // Implement save functionality
    // This function should send a request to the server to save lyrics
}