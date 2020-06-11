const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testDB', { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
	name: String,
	rating: Number,
	reviews: String,
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
	name: 'Apple',
	rating: 8,
	reviews: 'Delicious',
});
// fruit.save();

const threeSchema = new mongoose.Schema({
	name: String,
	longThree: Number,
	reviews: String,
});

const Three = mongoose.model('Three', threeSchema);

const three = new Three({
    name: 'Ananas',
    longThree: 12,
    reviews: 'Great three'
});
// three.save();

Three.find((err, threes)=>{
    // Console log all document if there is no err
    err ? console.log(err) : console.log(threes);
    // Console log each document name
    threes.forEach(three => console.log(three.name))
});

Three.updateOne({name: 'Ananas'}, {longThree: 25}, (err, result) => {
    err ? console.log(err) : console.log(result);
});

Three.findOneAndDelete({name: 'Ananas'},(err, result) => {
    err ? console.log(err) : console.log(result);
});