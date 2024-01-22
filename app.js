const artists = [
    {
        photo: "http://harmandease.com/wp-content/uploads/2022/09/DSC9247-1-1-scaled.jpg",
        name: "Harm&Ease",
        time:"7:30 pm",
        genre: "Rock & Roll",
        popularTune: "Push & Shove"
    },
    {
        photo: "http://harmandease.com/wp-content/uploads/2022/09/DSC9247-1-1-scaled.jpg",
        name: "Harm&Ease",
        time:"7:30 pm",
        genre: "Rock & Roll",
        popularTune: "Push & Shove"
    },
    {
        photo: "http://harmandease.com/wp-content/uploads/2022/09/DSC9247-1-1-scaled.jpg",
        name: "Harm&Ease",
        time:"7:30 pm",
        genre: "Rock & Roll",
        popularTune: "Push & Shove"
    }
]

const renderArtists = () => {
    const artistsContainer = document.getElementById('artistsContainer');
    artists.forEach((artist, index) => {
        const artistItem = document.createElement('div');
        artistItem.className = 'artist';
        artistItem.innerHTML = `
            <div className="image">
                <img src=${artist.photo} alt="Harm&Ease" > 
            </div>
            <div className="details">
                <h3>${artist.name}</h3>
                <p>Performance starts at ${artist.time}</p>
                <p>Genge - ${artist.genre}</p>
                <p>Popular song - ${artist.popularTune}</p>
                <button>Buy Ticket</button>
            </div>
            `;

        // const addButton = document.createElement('button');
        // addButton.textContent = 'Buy Ticket';
        // artistItem.appendChild(addButton);
        artistsContainer.appendChild(artistItem);
    })
};


document.addEventListener('DOMContentLoaded', () => {
    renderArtists();
});