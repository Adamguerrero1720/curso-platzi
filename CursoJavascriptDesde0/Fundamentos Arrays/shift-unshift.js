//Metodo que modifica el array origina (Mutabilidad)

//Shift()

const colors = ['Blue','Yellow','Red']
const removedColors = colors.shift()

console.log(colors)
console.log(removedColors)

//Unshift

const newColors = colors.unshift('Green')
console.log(colors)
console.log(newColors)


//Exercise

function appMusica (playlist, newSong) {
    playlist.shift()
    playlist.unshift(newSong)
    return playlist
}

const initialPlaylist = ['24/7','Ferxxo', 'Por Amar a Ciegas']

const updatedPlaylist = appMusica(initialPlaylist, 'Dakiti')
console.log('New Song to add: ' + appMusica)
console.log('Updated playlist', updatedPlaylist)
