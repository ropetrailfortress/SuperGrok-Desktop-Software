class Playlist {
    constructor() {
        this.songs = [];
    }

    addSong(title, artist, duration) {
        this.songs.push({
            title,
            artist,
            duration
        });
    }

    totalDuration() {
        return this.songs.reduce((sum, song) => sum + song.duration, 0);
    }

    print() {
        console.log("Playlist");
        console.log("========");

        for (const song of this.songs) {
            console.log(`${song.title} | ${song.artist} | ${song.duration} sec`);
        }

        console.log("========");
        console.log(`Total Duration: ${this.totalDuration()} sec`);
    }
}

const playlist = new Playlist();

playlist.addSong("Northern Lights", "Aurora", 210);
playlist.addSong("City Dreams", "Skyline", 185);
playlist.addSong("Ocean Waves", "Blue Horizon", 242);
playlist.addSong("Morning Sun", "Golden Fields", 198);

playlist.print();