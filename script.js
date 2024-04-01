const allSongs = [
  {
    id: 0,
    title: "Scratching The Surface",
    artist: "Quincy Larson",
    duration: "4:25",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/scratching-the-surface.mp3",
  },
  {
    id: 1,
    title: "Can't Stay Down",
    artist: "Quincy Larson",
    duration: "4:15",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stay-down.mp3",
  },
  {
    id: 2,
    title: "Still Learning",
    artist: "Quincy Larson",
    duration: "3:51",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/still-learning.mp3",
  },
  {
    id: 3,
    title: "Cruising for a Musing",
    artist: "Quincy Larson",
    duration: "3:34",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cruising-for-a-musing.mp3",
  },
  {
    id: 4,
    title: "Never Not Favored",
    artist: "Quincy Larson",
    duration: "3:35",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/never-not-favored.mp3",
  },
  {
    id: 5,
    title: "From the Ground Up",
    artist: "Quincy Larson",
    duration: "3:12",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/from-the-ground-up.mp3",
  },
  {
    id: 6,
    title: "Walking on Air",
    artist: "Quincy Larson",
    duration: "3:25",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/walking-on-air.mp3",
  },
  {
    id: 7,
    title: "Can't Stop Me. Can't Even Slow Me Down.",
    artist: "Quincy Larson",
    duration: "3:52",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stop-me-cant-even-slow-me-down.mp3",
  },
  {
    id: 8,
    title: "The Surest Way Out is Through",
    artist: "Quincy Larson",
    duration: "3:10",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/the-surest-way-out-is-through.mp3",
  },
  {
    id: 9,
    title: "Chasing That Feeling",
    artist: "Quincy Larson",
    duration: "2:43",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/chasing-that-feeling.mp3",
  },
];

displaySongs = document.querySelector("#displaySongs");
let out = "";

for (let i = 0; i < allSongs.length; i++) {
  let song = allSongs[i];
  out += `
	         <tr>
	            <td><button data-index=${i} class="playButton"></button></td>
	            <td>${song.title}</td>
	            <td>${song.artist}</td>
	            <td>${song.duration}</td>
	          
	         </tr>
           `;
}

displaySongs.innerHTML = out;

// UPDATE PLAYLIST INFO

const songsNumber = document.querySelector("#songsNumber");
songsNumber.innerText = `${allSongs.length} songs`;

//SUM DURATION

let sum = 0;
for (let i = 0; allSongs.duration; i++) {
  sum += allSongs.duration[i];
}
console.log(sum);

//PLAY SONG
const audio = new Audio();
const playButton = document.querySelectorAll(".playButton");

for (const button of playButton) {
  button.addEventListener("click", () => {
    const song = allSongs[button.dataset.index];

    if (audio.src !== song.src) {
      audio.src = song.src;
    }

    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }

    button.classList.toggle("pauseButton");
  });
}
