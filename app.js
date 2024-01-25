const artists = [
    {
        photo: "http://harmandease.com/wp-content/uploads/2022/09/DSC9247-1-1-scaled.jpg",
        name: "Harm&Ease",
        time:"7:30 pm",
        genre: "Rock & Roll",
        popularTune: "Push & Shove",
        youtube: "https://www.youtube.com/embed/E6GuzgwgDAs?si=HN_zwEQX-RkvwDuu"
    },
    {
        photo: "https://images.squarespace-cdn.com/content/v1/5ef41efecb87f82095e58b26/e9eda7df-a64d-486c-998d-8fe91219e11a/Cory+Hotline+Edits-6767.jpg?format=1500w",
        name: "Cory Hotline",
        time:"8:30 pm",
        genre: "Funk, Rock & Disco",
        popularTune: "Work It Out",
        youtube: "https://www.youtube.com/embed/qHA5fQ5BPFg?si=7_UUr7D9OAzq0J6s"
    },
    {
        photo: "https://ontariosmallhalls.com/wp-content/uploads/2023/05/Spoons-Pic-2-August-2022-845x1024.jpg",
        name: "SPOONS",
        time:"9:30 pm",
        genre: "New Wave, Synth-Pop",
        popularTune: "Nova Heart",
        youtube: "https://www.youtube.com/embed/KA5CEUZH1AA"

    },
    {
        photo: "https://www.vmcdn.ca/f/files/victoriatimescolonist/json/2022/03/web1_men-without-hats.jpeg",
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
                <iframe width="560" height="315"
                src=${artist.youtube}>
                </iframe>
            </video> 
            </div>
            <div class="abgitout">
                <h1>${artist.name}</h1>
                <p>Performance starts at <strong> ${artist.time}</strong></p>
                <p>Genre - <strong>${artist.genre}</strong></p>
                <p>Popular song - <strong>${artist.popularTune}</strong></p>
                <button class="purchase">Buy Ticket</button>
            </div>
            `;

        artistsContainer.appendChild(artistItem);
    })
};


document.addEventListener('DOMContentLoaded', () => {
    renderArtists();
});