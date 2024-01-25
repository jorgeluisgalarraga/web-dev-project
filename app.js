const artists = [
    {
        name: "Harm & Ease",
        time:"7:30 pm",
        genre: "Rock & Roll",
        popularTune: "Push & Shove",
        youtube: "https://www.youtube.com/embed/E6GuzgwgDAs?si=HN_zwEQX-RkvwDuu"
    },
    {
        name: "Cory Hotline",
        time:"8:30 pm",
        genre: "Funk, Rock & Disco",
        popularTune: "Work It Out",
        youtube: "https://www.youtube.com/embed/qHA5fQ5BPFg?si=7_UUr7D9OAzq0J6s"
    },
    {
        name: "SPOONS",
        time:"9:30 pm",
        genre: "New Wave, Synth-Pop",
        popularTune: "Nova Heart",
        youtube: "https://www.youtube.com/embed/KA5CEUZH1AA"

    },
    {
        name: "DERAPS",
        time:"10:30 pm",
        genre: "New Wave, Synth-Pop",
        popularTune: "On My Mind",
        youtube: "https://www.youtube.com/embed/t-r0AWDRrE8?si=_4t2zqt8wNhF4ebg"
    }
]

const renderArtists = () => {
    const artistsContainer = document.getElementById('artistsContainer');
    artists.forEach((artist, index) => {
        const artistItem = document.createElement('div');
        artistItem.className = 'artist';
        artistItem.innerHTML = `
            <div>
                <iframe width="560" height="315" src=${artist.youtube}></iframe>
            </video> 
            </div>
            <div class="about">
                <h1>${artist.name}</h1>
                <p>Performance starts at <strong> ${artist.time}</strong></p>
                <p>Genre - <strong>${artist.genre}</strong></p>
                <p>Popular song - <strong>${artist.popularTune}</strong></p>
                <a href="ticketindex.html">
                    <button class="purchase">Buy Ticket</button>
                </a>
            </div>
            `;

        artistsContainer.appendChild(artistItem);
    })
};


document.addEventListener('DOMContentLoaded', () => {
    renderArtists();
});