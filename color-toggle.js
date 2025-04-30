AFRAME.registerComponent('color-toggle', {
    init: function () {
        let el = this.el;

        this.OgColor = el.getAttribute('color');
        this.isRed = false;


        this.toggleColor =  () => {
            if (this.isRed){
                el.setAttribute('color', this.OgColor);
                this.isRed = false;
            }
            else {
                el.setAttribute('color', 'red');
                this.isRed = true;
            }
            
        }
        this.el.addEventListener('click', this.toggleColor);
    },
    remove: function () {
        this.el.removeEventListener('click', this.toggleColor);
    }});