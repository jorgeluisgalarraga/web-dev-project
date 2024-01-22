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
document.addEventListener('DOMContentLoaded', () => {
    const artistsContainer = document.getElementById('artistsContainer');

    const renderArtists = () => {
        artists.forEach((artist) => {
            const artistItem = document.createElement('div');
            artistItem.className = 'artist';
            artistItem.innerHTML = `
                <img src=${artist.photo} alt="Harm&Ease" > 
                <h3>${artist.name}</h3>
                <p>${artist.time}</p>
                <p>${artist.genre}</p>
                <p>${artist.popularTune}</p>
                `;

            const addButton = document.createElement('button');
            addButton.textContent = 'Buy Ticket';
            artistItem.appendChild(addButton);
            artistsContainer.appendChild(artistItem);
        })
    };

renderArtists();

});