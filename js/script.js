let currentId = -1

class Song{
    constructor(name,imgUrl,songUrl){
        currentId++
        this.name = name
        this.imgUrl = imgUrl
        this.songUrl = songUrl
        this.button = document.createElement("button")
        this.button.setAttribute("id", `btnOuvir-${currentId}`)
        this.button.textContent = "Ouvir"
        this.newDiv = document.createElement("div")
        this.newDiv.classList.add("song")
        this.newImg = document.createElement("img")
        this.newImg.src = this.imgUrl
        this.newP = document.createElement("p")
        this.newP.innerHTML = this.name
        this.newDiv.append(this.newImg, this.newP, this.button)
    }
}

class SongArray{
    constructor(){
        this.songs = []
    }

    addSong(name,imgUrl,songUrl){
        let oSong = new Song(name,imgUrl,songUrl)
        this.songs.push(oSong)
        return oSong
    }

    addSongsToHtml(){
        let songsContainer = document.getElementById("songs")
        this.songs.forEach(song => {
            songsContainer.append(song.newDiv)
            song.button.addEventListener("click", updateModal)
        });
    }
}

let oSongArray = new SongArray()
oSongArray.addSong("Sphere", "./assets/img/sphere.jpg", "./assets/audio/Creo - Sphere.mp3")
oSongArray.addSong("Carnivores", "./assets/img/carnivores.jpg", "./assets/audio/Creo - Carnivores.mp3")
oSongArray.addSong("Crazy", "./assets/img/crazy.jpg", "./assets/audio/Creo - Crazy.mp3")
oSongArray.addSong("Dark Tides", "./assets/img/darktides.jpg", "./assets/audio/Creo - Dark Tides.mp3")
oSongArray.addSong("Dimension", "./assets/img/dimension.jpg", "./assets/audio/Creo - Dimension.mp3")
oSongArray.addSong("Epilogue", "./assets/img/epilogue.jpg", "./assets/audio/Creo - Epilogue.mp3")
oSongArray.addSong("Exosphere", "./assets/img/exosphere.jpg", "./assets/audio/Creo - Exosphere.mp3")
oSongArray.addSong("Idolize", "./assets/img/idolize.jpg", "./assets/audio/Creo - Idolize.mp3")
oSongArray.addSong("In Circles", "./assets/img/incircles.jpg", "./assets/audio/Creo - In Circles.webm")
oSongArray.addSong("Shiawase (VIP)", "./assets/img/shiwase.jpg", "./assets/audio/Shiawase (VIP).webm")
oSongArray.addSong("Click", "./assets/img/click.jpg", "./assets/audio/click.mp3")

function updateModal(event){
    let modalContainer = document.getElementById("modal")
    let songsContainer = document.getElementById("songs")
    let modalSongImg = document.getElementById("modalSongImg")
    let modalSongName = document.getElementById("modalSongName")
    let modalSongUrl = document.getElementById("modalSongUrl")
    let eventId = event.target.id.split("-").pop()

    if(event.target.id != "btnSair"){
        modalContainer.style.display = "flex"
        songsContainer.style.display = "none"
    }
    else{
        modalContainer.style.display = "none" 
        songsContainer.style.display = "flex"
    }
    modalSongImg.src = oSongArray.songs[eventId].imgUrl
    modalSongName.innerHTML = oSongArray.songs[eventId].name
    modalSongUrl.src = oSongArray.songs[eventId].songUrl


}

let btnSair = document.getElementById("btnSair")
btnSair.addEventListener("click", updateModal)

oSongArray.addSongsToHtml()