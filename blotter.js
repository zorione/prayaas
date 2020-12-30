container = document.getElementById("blotter_main");

var text = new Blotter.Text("PraYaaS", {
    family: 'Langar',
    size: 150,
    fill: "#fff",
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 80,
    paddingBottom: 80

});

var material = new Blotter.FliesMaterial();
material.uniforms.uPointCellWidth.value = 0.01;
material.uniforms.uPointRadius.value = 0.6;
material.uniforms.uSpeed.value = 5;

var blotter = new Blotter(material, {
    texts: text
});

var scope = blotter.forText(text);
scope.appendTo(container);

// CONTAINER 1

container1 = document.getElementById("bl");

var text1 = new Blotter.Text("Liquid", {
    family: "serif",
    size: 150,
    fill: "#fff",
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 80,
    paddingBottom: 80
});


let material1 = new Blotter.LiquidDistortMaterial();

material1.uniforms.uSpeed.value = 0.3;
material1.uniforms.uVolatility.value = 0.1;
material1.uniforms.uSeed.value = 0.1;

let blotter1 = new Blotter(material1, {
    texts: text1
});

let scope1 = blotter1.forText(text1);

scope1.appendTo(container1);

// CONTAINER 2

let Size = 0.001;

function increaseSize() {
    var elem = document.getElementById("bdist");
    var text2 = new Blotter.Text("OFFBEAT", {
        family: "Monument Extended",
        weight: 100,
        size: 180,
        fill: "purple"
    });

    var material2 = new Blotter.RollingDistortMaterial();

    material2.uniforms.uSineDistortAmplitude.value = 0.04;

    var blotter = new Blotter(material2, {
        texts: text2
    });

    var scope2 = blotter.forText(text2);

    scope2.appendTo(elem);

    Size += 0.001;
}

increaseSize();

// CONTAINER 3
container3 = document.getElementById("brgb");

var text3 = new Blotter.Text("RGB", {
    family: "serif",
    size: 150,
    fill: "#000",
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 80,
    paddingBottom: 80
})

var material3 = new Blotter.ChannelSplitMaterial();
material3.uniforms.uOffset.value = 0.05;
material3.uniforms.uRotation.value = 50;
material3.uniforms.uApplyBlur.value = 1;
material3.uniforms.uAnimateNoise.value = 0.3;

var blotter3 = new Blotter(material3, {
    texts: text3
})

var scope3 = blotter3.forText(text3);

scope3.appendTo(container3);

// Add mousemove effect

// document.onmousemove = moveIt;

// function moveIt(event) {
//     material3.uniforms.uRotation.value = (event.clientX * .1);
//     material3.uniforms.uOffset.value = (event.clientX * 0.0001);
// }
scope3.on("mousemove", function (mousePosition) {
    var angle = angleBetweenPointsInDegrees(
        0.5,
        0.5,
        mousePosition.x,
        mousePosition.y
    );
    var blur = Math.min(
        0.3,
        distanceBetweenPoints(0.5, 0.5, mousePosition.x, mousePosition.y)
    );

    material3.uniforms.uRotation.value = angle;
    material3.uniforms.uOffset.value = blur;
});

function angleBetweenPointsInDegrees(x1, y1, x2, y2) {
    var angle = Math.atan2(y2 - y1, x2 - x1) * 180.0 / Math.PI;

    angle = 180 + angle;

    return angle;
}

function distanceBetweenPoints(x1, y1, x2, y2) {
    var a = x1 - x2;
    var b = y1 - y2;

    return Math.sqrt(a * a + b * b);
}

// $(document).ready(function () {
//     var styleProperties = {
//         family: "serif",
//         size: 200,
//         fill: "#171717",
//         paddingLeft: 100,
//         paddingRight: 100,
//         paddingTop: 80,
//         paddingBottom: 80
//     };

//     var text3 = new Blotter.Text("TAJ", styleProperties);

//     var material3 = new Blotter.ChannelSplitMaterial();

//     var blotter3 = new Blotter(material3, {
//         texts: text3
//     });

//     var myScope = blotter3.forText(text3);

//     blotter3.on("ready", function () {
//         myScope.appendTo(document.getElementById("brgb"));
//     });


// });