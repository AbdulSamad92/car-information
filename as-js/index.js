function carUpload () {
const carName = document.getElementById('enterName').value
const carModel = document.getElementById('enterModel').value
const carMilage = document.getElementById('enterMilage').value
const carColor = document.getElementById('enterColor').value
const carAverage = document.getElementById('enterAverage').value

document.getElementById('car_name').innerText = carName
document.getElementById('car_model').innerText = carModel
document.getElementById('car_milage').innerText = carMilage
document.getElementById('car_color').innerText = carColor
document.getElementById('car_average').innerText = carAverage

document.getElementById('enterName').value = ''
document.getElementById('enterModel').value = ''
document.getElementById('enterMilage').value = ''
document.getElementById('enterColor').value = ''
document.getElementById('enterAverage').value = ''
}
