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

// CREATES TABLE FOR PLAYLIST
const displaySongs = document.querySelector("#displaySongs");
let out = "";

for (let i = 0; i < allSongs.length; i++) {
  let song = allSongs[i];
  out += `
  <tr data-index=${i}>
    <td><button data-index=${i} class="playButton"></button></td>
    <td>${song.title}</td>
    <td>${song.artist}</td>
    <td>${song.duration}</td>	          
  </tr>
  `;
}

displaySongs.innerHTML = out;

const audio = new Audio();
let currentSongIndex = 0;
const displayCurrentSong = document.querySelector("#currentlyPlaying");
const songsNumber = document.querySelector("#songsNumber");
const playButton = document.querySelectorAll(".playButton");
const playAll = document.querySelector(".playAll");
const next = document.getElementById("next");
const shuffle = document.getElementById("shuffle");

function playSong(index) {
  const song = allSongs[index];

  // PLAYS NEXT SONG WHEN CURRENT SONG IS OVER

  if (index < allSongs.length - 1) {
    audio.src = song.src;
    audio.play();
    audio.addEventListener("ended", () => {
      index++;
      playSong(index);
    });
  }
}

// UPDATE PLAYLIST INFO

songsNumber.innerText = `${allSongs.length} songs`;

//SUM DURATION

let sum = 0;
for (let i = 0; allSongs.duration; i++) {
  sum += allSongs.duration[i];
}

//PLAYS SONG

for (const button of playButton) {
  button.addEventListener("click", () => {
    console.log("hello");
    let index = button.dataset.index;
    let song = allSongs[index];

    if (audio.src !== song.src) {
      audio.src = song.src;
    }

    updateRow(index);

    //RESETS PAUSE BUTTON INTO INITIAL STATE

    for (const b of playButton) {
      b.classList.remove("pauseButton");
    }

    //PAUSES SONG

    if (audio.paused) {
      audio.play();
      button.classList.add("pauseButton");
    } else {
      audio.pause();
    }
  });
}

// SHOWS CURRENTLY PLAYING SONG

const updateCurrentlyPlaying = (index) => {
  displayCurrentSong.innerHTML = `<img src="./images/currently_playing.png" width="20">${allSongs[index].title} <p style="color:black;">${allSongs[index].artist}<p>`;
};

// PLAYS THE ENTIRE PLAYLIST

playAll.addEventListener("click", () => {
  if (audio.paused) {
    playSong(currentSongIndex);
    updateRow(currentSongIndex);
    updateCurrentlyPlaying(currentSongIndex);
  } else {
    audio.pause();
  }

  playAll.classList.toggle("pauseAll");
});

//SKIPS BACK AND FORWARD

previous.addEventListener("click", () => {
  currentSongIndex--;
  playSong(currentSongIndex);
  updateRow(currentSongIndex);
  updateCurrentlyPlaying(currentSongIndex);
});

next.addEventListener("click", () => {
  currentSongIndex++;
  playSong(currentSongIndex);
  updateRow(currentSongIndex);
  updateCurrentlyPlaying(currentSongIndex);
});

function updateRow(index) {
  let currentRow = document.querySelector(`tr[data-index="${index}"]`);
  let rows = document.querySelectorAll("tr");

  // HIGHLIGHTS CURRENT SONG

  for (let tr of rows) {
    tr.style.backgroundColor = "transparent";
  }

  currentRow.style.backgroundColor = "white";
}

// SHUFFLE
const shufflebtn = () => {
  currentSongIndex = Math.floor(Math.random() * allSongs.length);
  console.log(currentSongIndex);
  playSong(currentSongIndex);
  updateRow(currentSongIndex);
  updateCurrentlyPlaying(currentSongIndex);
};

 shuffle.addEventListener("click", shufflebtn);
