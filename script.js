const image = document.getElementById('image'); // The image we want to classify
const input = document.getElementById('inp');
const result = document.getElementById('result'); // The result tag in the HTML
const probability = document.getElementById('probability'); // The probability tag in the HTML
image.style.display = 'none'
input.onchange = function () {
    const [file] = input.files
    if (file) {
        image.style.display = 'block'
        image.src = URL.createObjectURL(file)
        ml5.imageClassifier('MobileNet')
            .then(classifier => classifier.classify(image))
            .then(results => {
                console.log(results);
                result.innerText = results[0].label.split(',')[0];
                probability.innerText = results[0].confidence.toFixed(2) + '%';
            });
    }
}


