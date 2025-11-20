var video;

window.addEventListener("load", function () {
    console.log("Good job opening the window");

    // Grab elements
    video = document.querySelector("#player1");
    const playBtn = document.querySelector("#play");
    const pauseBtn = document.querySelector("#pause");
    const slowBtn = document.querySelector("#slower");
    const fastBtn = document.querySelector("#faster");
    const skipBtn = document.querySelector("#skip");
    const muteBtn = document.querySelector("#mute");
    const slider = document.querySelector("#slider");
    const volumeDisplay = document.querySelector("#volume");
    const vintageBtn = document.querySelector("#vintage");
    const originalBtn = document.querySelector("#orig");

    // Initial settings
    video.autoplay = false;
    video.loop = false;

    // Set initial volume
    video.volume = slider.value / 100;
    volumeDisplay.textContent = slider.value + "%";

    // PLAY
    playBtn.addEventListener("click", function () {
        video.play();
        console.log("Play Video");
        volumeDisplay.textContent = Math.round(video.volume * 100) + "%";
    });

    // PAUSE
    pauseBtn.addEventListener("click", function () {
        video.pause();
        console.log("Pause Video");
    });

    // SLOW DOWN — multiply by 0.9
    slowBtn.addEventListener("click", function () {
        video.playbackRate *= 0.9;
        console.log("New speed:", video.playbackRate);
    });

    // SPEED UP — reverse = divide by 0.9
    fastBtn.addEventListener("click", function () {
        video.playbackRate /= 0.9;
        console.log("New speed:", video.playbackRate);
    });

    // SKIP AHEAD — +10 seconds, wrap if needed
    skipBtn.addEventListener("click", function () {
        if (video.currentTime + 10 >= video.duration) {
            video.currentTime = 0;
            console.log("Going back to beginning. Current time:", video.currentTime);
        } else {
            video.currentTime += 10;
            console.log("Skipped ahead. Current time:", video.currentTime);
        }
    });

    // MUTE / UNMUTE
    muteBtn.addEventListener("click", function () {
        video.muted = !video.muted;

        if (video.muted) {
            muteBtn.textContent = "Unmute";
            console.log("Muted");
        } else {
            muteBtn.textContent = "Mute";
            console.log("Unmuted");
        }
    });

    // VOLUME SLIDER
    slider.addEventListener("input", function () {
        video.volume = slider.value / 100;
        volumeDisplay.textContent = slider.value + "%";
        console.log("Volume:", video.volume);
    });

    // VINTAGE MODE
    vintageBtn.addEventListener("click", function () {
        video.classList.add("oldSchool");
        console.log("Old School mode on");
    });

    // ORIGINAL MODE
    originalBtn.addEventListener("click", function () {
        video.classList.remove("oldSchool");
        console.log("Old School mode off");
    });

});
