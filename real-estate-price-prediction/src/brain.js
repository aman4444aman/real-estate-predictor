import * as brain from 'brain.js';
import data from "./data/real_estate_dataset.json";

const net = new brain.NeuralNetwork();

export const trainModel = () => {
  const trainingData = data.map((item) => ({
    input: {
      area: item.area / 5000,
      bedrooms: item.bedrooms / 5,
      bathrooms: item.bathrooms / 5,
      location: item.location / 10,
      age: item.age / 100,
    },
    output: { price: item.price / 1000000 },
  }));

  net.train(trainingData, { iterations: 2000 });
};

export const predictPrice = (inputData) => {
  const normalizedInput = {
    area: inputData.area / 5000,
    bedrooms: inputData.bedrooms / 5,
    bathrooms: inputData.bathrooms / 5,
    location: inputData.location / 10,
    age: inputData.age / 100,
  };
  const output = net.run(normalizedInput);
  return output.price * 1000000;
};

export const saveModel = () => {
  localStorage.setItem("trainedModel", JSON.stringify(net.toJSON()));
};

export const loadModel = () => {
  const storedModel = localStorage.getItem("trainedModel");
  if (storedModel) {
    net.fromJSON(JSON.parse(storedModel));
  }
};