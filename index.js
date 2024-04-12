document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = "https://api.lyrics.ovh/v1/";
    const lyricsContainer = document.querySelector("#lyrics-container");
    const artistInput = document.getElementById('artist');
    const songInput = document.getElementById('song');
    const lyricsInput = document.getElementById('lyricsInput');

    // Function to fetch lyrics from the API
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

    // Define buttons
    const button = document.getElementById('button');
    const updateButton = document.getElementById('updateButton');
    const deleteButton = document.getElementById('deleteButton');
    const saveButton = document.getElementById('saveButton');

    // Event listener for fetching lyrics
    button.addEventListener("click", async () => {
        const artist = artistInput.value.trim();
        const song = songInput.value.trim();
        const lyrics = lyricsInput.value.trim();

        if ((artist && song) || lyrics) {
            if (artist && song) {
                const fetchedLyrics = await fetchLyrics(artist, song);
                if (fetchedLyrics) {
                    lyricsContainer.textContent = fetchedLyrics;
                } else {
                    lyricsContainer.textContent = "Failed to fetch lyrics.";
                }
            } else {
                lyricsContainer.textContent = lyrics;
            }
        } else {
            lyricsContainer.textContent = "Please enter both the artist and song name, or write your own lyrics.";
        }
    });

    // Event listener for updating lyrics
    updateButton.addEventListener("click", () => {
        const updatedLyrics = lyricsInput.value.trim();

        if (updatedLyrics) {
            lyricsContainer.textContent = updatedLyrics;
            saveButton.style.display = "inline";
        } else {
            alert("Please enter lyrics first.");
        }
    });

    // Event listener for saving lyrics
    saveButton.addEventListener("click", () => {
        const artist = artistInput.value.trim();
        const song = songInput.value.trim();
        const updatedLyrics = lyricsInput.value.trim();

        if (artist && song && updatedLyrics) {
            saveLyrics(artist, song, updatedLyrics);
            saveButton.style.display = "none";
            alert("Lyrics saved successfully!");
        } else {
            alert("Please enter both the artist, song name, and updated lyrics to save.");
        }
    });

    // Function to save lyrics to localStorage
    function saveLyrics(artist, song, lyrics) {
        const key = `${artist}_${song}`;
        localStorage.setItem(key, lyrics);
    }

    // Event listener for deleting lyrics
    deleteButton.addEventListener("click", () => {
        artistInput.value = "";
        songInput.value = "";
        lyricsInput.value = "";
        lyricsContainer.textContent = "";
        saveButton.style.display = "none";

        const key = `${artistInput.value.trim()}_${songInput.value.trim()}`;
        localStorage.removeItem(key);
    });
});




