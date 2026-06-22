export class AudioController {
    constructor() {
        this.currentAudio = new Audio();
        this.weatherType = null
        this.value = 1;
    }

    setVolume(value) {
        this.volume = value;
        this.currentAudio.volume = value;
    };

    setSound(weatherType) {
        this.weatherType = weatherType
        this.currentAudio.src = `./assets/sounds/${weatherType}.mp3`
        this.currentAudio.preload = 'auto'
    }

    play(weatherType) {
        if (weatherType !== this.weatherType) {
            this.setSound(weatherType)
        }

        this.currentAudio.paused ? this.currentAudio.play() : this.currentAudio.pause()
    }
};