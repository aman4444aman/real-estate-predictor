import React, { useState, useEffect } from "react";
import { trainModel, predictPrice, saveModel, loadModel } from "./brain";
import PropertyForm from "./components/PropertyForm";
import Chart from "./components/Chart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [trained, setTrained] = useState(false);
  const [predictedPrice, setPredictedPrice] = useState(null);
  console.log("hello");
  useEffect(() => {
    loadModel();
  }, []);

  const handleTrain = async () => {
    await trainModel();
    setTrained(true);
    saveModel();
  };

  const handlePredict = (inputData) => {
    const price = predictPrice(inputData);
    setPredictedPrice(price);
  };

  return (
    <div className="container">
      <h1 className="text-center">Real Estate Price Predictor</h1>
      
      <div className="card-container">
        <div className="card">
          <h2 className="text-center mb-4">Train the Model</h2>
          <button className="btn btn-primary w-100" onClick={handleTrain}>
            {trained ? "Model Trained" : "Train Model"}
          </button>
        </div> 
        
        <div className="card">
          <h2 className="text-center mb-4">Enter Property Details</h2>
          <PropertyForm onPredict={handlePredict} />
        </div>

        {predictedPrice !== null && (
          <div className="card">
            <h3 className="text-center">Predicted Price: ${predictedPrice.toFixed(2)}</h3>
          </div>
        )}
      </div>

      <div className="chart-container">
        <Chart predictedPrice={predictedPrice} />
      </div>
    </div>
  );
}

export default App;
