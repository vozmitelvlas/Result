export default class WeatherUI {
    constructor(audioController) {
        this.audioController = audioController;
        this.widgets = document.querySelectorAll('.widget');
        this.weatherType = null;
        this.bindEvents();
    };

    bindEvents() {
        this.widgets.forEach((widget) =>
            widget.addEventListener('click', () =>
                this.handleClick(widget)
            )
        );

        const volumeSLider = document.querySelector('#volume-slider');
        volumeSLider?.addEventListener('input', () => {
            this.handleVolumeChange(volumeSLider.value);
        });
    };

    handleClick(weatherWidget) {
        document.querySelector(`[data-weather="${this.weatherType}"]`)?.classList.remove('clicked');
        this.weatherType = weatherWidget.dataset.weather;
        document.body.className = `${this.weatherType}-bg`;
        weatherWidget.classList.add('clicked');
        this.audioController.play(this.weatherType);
    };

    handleVolumeChange(value) {
        this.audioController.setVolume(parseFloat(value));
    };
};