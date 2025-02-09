const video = {
    title: 'a',
    languages: ['tamil','english'],
    play() {
        console.log(this);
    },
    channel() {
        console.log(this.languages);
    },
 };
 video.channel();