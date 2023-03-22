console.log("Welcome to Tunify!");
//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3'); 
//let audioElement = new Audio('');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let Gif = document.getElementById('Gif');
let MasterSongName = document.getElementById('MasterSongName'); 
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Apna Bana Le", filePath: "songs/1.mp3",coverPath:"covers/apnabanale.jpg"},
    {songName: "Ranjha", filePath: "songs/2.mp3",coverPath:"covers/ranjha.jpg"},
    {songName: "Alone", filePath: "songs/3.mp3",coverPath:"covers/alone.jpg"},
    {songName: "Blank Space", filePath:"songs/4.mp3",coverPath:"covers/blankspace.jpg"},
    {songName: "Cheap Thrills", filePath: "songs/5.mp3",coverPath:"covers/cheapthrills.jpg"},
    {songName: "Dhaga Dhaga", filePath: "songs/6.mp3",coverPath:"covers/dhaga_dhaga.jpg"},
    {songName: "Dil Bechara", filePath: "songs/7.mp3",coverPath:"covers/dilbechara.jpg"},
    {songName: "Little Bit More", filePath: "songs/8.mp3",coverPath:"covers/littlebitmore.jpg"},
    {songName: "Vajle Ki Baara", filePath: "songs/9.mp3",coverPath:"covers/vajale_ki_bara.jpg"},
    {songName: "Navrai Majhi", filePath: "songs/10.mp3",coverPath:"covers/navrai_majhi.jpg"},
    {songName: "Stay", filePath:"songs/11.mp3",coverPath:"covers/Stay.png"},
    {songName: "Sukh Kalale", filePath:"songs/12.mp3",coverPath:"covers/sukh_kalele.jpg"},
    {songName: "Tola Tola", filePath: "songs/13.mp3",coverPath:"covers/tola_tola.jpg"},
    {songName: "Tu/You", filePath:"songs/14.mp3",coverPath:"covers/You.jpg"},
    {songName: "Tum Se Hi", filePath: "songs/15.mp3",coverPath:"covers/tumsehi.jpg"},
]

songItems.forEach((element,i) => {
   
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        Gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        Gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
 
})

myProgressBar.addEventListener('change',()=>{
audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause'); 
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
     console.log(e.target);
     makeAllPlays();
     
     songIndex = parseInt(e.target.id);
     e.target.classList.remove('fa-circle-play');
     e.target.classList.add('fa-circle-pause');
     audioElement.src = `songs/${songIndex+1}.mp3`;
     MasterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     Gif.style.opacity = 1;
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
    })

})

document.getElementById('Next').addEventListener('click', ()=>{
    if(songIndex>=14){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    MasterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('Previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    MasterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
