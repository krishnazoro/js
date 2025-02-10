const video = {
    title: 'a',
    languages: ['tamil','english'],
    play() {
        console.log(this);
    },
    channel() {
        console.log(this.languages);
    },
    show() {
        this.languages.forEach(function(title, language) {
            console.log(this.title, language);
        }, this);
    }
 };
 video.show();
  
 ``
