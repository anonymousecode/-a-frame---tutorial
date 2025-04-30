AFRAME.registerComponent('target-marker', {
    init: function () {
        let el = this.el;

        this.addMarker = (e) => {
            let p = e.detail.intersection.point;
            let scene = document.querySelector('a-scene');

            let marker = document.createElement('a-entity');
            marker.setAttribute('geometry', 'primitive: sphere; radius: 0.05');
            marker.setAttribute('material', 'color: red; opacity: 0.5; transparent: true');
            marker.setAttribute('position', p);
            marker.setAttribute('target-marker', {});
            scene.appendChild(marker);
        }
        this.el.addEventListener('click', this.addMarker);
    },
    remove: function () {
        this.el.removeEventListener('click', this.addMarker);
    }
});