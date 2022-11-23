let map;
DG.then(function () {
    map = DG.map('map', {
        center: [42.879732, 74.586222], zoom: 30
    });
    let myIcon = DG.icon({
        iconUrl: 'https://media-exp1.licdn.com/dms/image/C4E0BAQEfBVJr-GXqaA/company-logo_200_200/0/1658584490181?e=2147483647&v=beta&t=EJmkvjbzReg-4jB7MnZ27h8GJD8lXvBXF7Vde8zJ1lY',
        iconSize: [50, 30],

    });

    DG.marker([42.879732, 74.586222], {icon: myIcon}).addTo(map).bindPopup('MOTION WEB').bindLabel('MOTION WEB IT  КУРСЫ!', {static: false});
});