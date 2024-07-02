const video = document.createElement('video');
video.src =  'https://youtu.be/0AHNSaeBe_o';
video.poster = 'https://human-consult-128.webflow.io/about-us#';

video.autoplay = false;
video.controls = true;
video.muted = false;
video.height = 240;
video.width = 320;

const box = document.getElementById('box');
box.appendChild(video);
