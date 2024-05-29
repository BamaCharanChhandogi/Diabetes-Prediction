import React, { useEffect, useState } from "react";
import heatmapImage from "../assets/plots/heatmap.png";
import agePlot from "../assets/plots/age_plot.png";
import BMIPlot from "../assets/plots/BMI_plot.png";
import BloodPressurePlot from "../assets/plots/bp_plot.png";
import CF from "../assets/plots/cf.png";
import DPF from "../assets/plots/dpf_plot.png";
import glucose from "../assets/plots/glucose_plot.png";
import insulin from "../assets/plots/insulin.png";
import pregnancies from "../assets/plots/pregnancies.png";
import skin from "../assets/plots/skin.png";
import { IoClose } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";

const VisualizationPage = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModel = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="container mx-auto py-8 text-center">
      <motion.h1
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          delay: 0.5,
        }}
        className="text-3xl font-bold mb-6 text-indigo-600 text-center border-b-2 p-2"
      >
        Diabetes Visualization
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-indigo-600">Correlation Heatmap</h2>
          <img
            src={heatmapImage}
            alt="Correlation Heatmap"
            className="mx-auto w-full h-64 object-cover rounded-lg cursor-pointer"
            onClick={() => openModel(heatmapImage)}
          />
        </div> */}
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.5,
          }}
          className="bg-gray-100 p-4 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-4 text-indigo-600">Age Plot</h2>
          <img
            src={agePlot}
            alt="Glucose vs Blood Pressure"
            className="mx-auto w-full h-64 object-cover rounded-lg cursor-pointer"
            onClick={() => openModel(agePlot)}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.5,
          }}
          className="bg-gray-100 p-4 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-4 text-indigo-600">BMI Plot</h2>
          <img
            src={BMIPlot}
            alt="BMI vs Age"
            className="mx-auto w-full h-64 object-cover rounded-lg cursor-pointer"
            onClick={() => openModel(BMIPlot)}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.5,
          }}
          className="bg-gray-100 p-4 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-4 text-indigo-600">
            Blood Pressure Plot
          </h2>
          <img
            src={BloodPressurePlot}
            alt="Feature Importance"
            className="mx-auto w-full h-64 object-cover rounded-lg cursor-pointer"
            onClick={() => openModel(BloodPressurePlot)}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.5,
          }}
          className="bg-gray-100 p-4 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-4 text-indigo-600">
            Cystic Fibrosis Plot
          </h2>
          <img
            src={CF}
            alt="Residual Plot"
            className="mx-auto w-full h-64 object-cover rounded-lg cursor-pointer"
            onClick={() => openModel(CF)}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.5,
          }}
          className="bg-gray-100 p-4 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-4 text-indigo-600">
            Diabetes Pedigree Function Plot
          </h2>
          <img
            src={DPF}
            alt="Residual Plot"
            className="mx-auto w-full h-64 object-cover rounded-lg cursor-pointer"
            onClick={() => openModel(DPF)}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.5,
          }}
          className="bg-gray-100 p-4 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-4 text-indigo-600">
            Glucose Plot
          </h2>
          <img
            src={glucose}
            alt="Residual Plot"
            className="mx-auto w-full h-64 object-cover rounded-lg cursor-pointer"
            onClick={() => openModel(glucose)}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.5,
          }}
          className="bg-gray-100 p-4 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-4 text-indigo-600">
            Insulin Plot
          </h2>
          <img
            src={insulin}
            alt="Residual Plot"
            className="mx-auto w-full h-64 object-cover rounded-lg cursor-pointer"
            onClick={() => openModel(insulin)}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.5,
          }}
          className="bg-gray-100 p-4 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-4 text-indigo-600">
            Pregnancies Plot
          </h2>
          <img
            src={pregnancies}
            alt="Residual Plot"
            className="mx-auto w-full h-64 object-cover rounded-lg cursor-pointer"
            onClick={() => openModel(pregnancies)}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.5,
          }}
          className="bg-gray-100 p-4 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-4 text-indigo-600">Skin Plot</h2>
          <img
            src={skin}
            alt="Residual Plot"
            className="mx-auto w-full h-64 object-cover rounded-lg cursor-pointer"
            onClick={() => openModel(skin)}
          />
        </motion.div>
      </div>
      {modalImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col">
            <div className="flex justify-end items-center">
              <a href={modalImage} download>
                <button className="p-2 bg-transparent text-red-500 hover:text-gray-800 focus:outline-none">
                  <FaDownload className="w-7 h-6" />
                </button>
              </a>
              <button
                className="p-2 bg-transparent text-red-500 hover:text-gray-800 focus:outline-none"
                onClick={closeModal}
              >
                <IoClose className="w-9 h-9" />
              </button>
            </div>
            <img
              src={modalImage}
              alt="Correlation Heatmap"
              className="mx-auto w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VisualizationPage;
