import React from "react";
import diabetesImg from "../assets/diabetes.jpeg";
import dataInfoImg from "../assets/dataInfo.jpeg";
import predictionImg from "../assets/prediction.jpeg";
import visualizationImg from "../assets/Visualization.jpeg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <div
        className="flex flex-col items-center justify-center h-screen w-full"
        style={{
          backgroundImage: `url(${diabetesImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(0,0,0,0.4)",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="p-8 text-center">
         
          <motion.h1
  initial={{ opacity: 0, y: -150 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 1,
    type: "spring",
    stiffness: 100,
    delay: 0.5,
  }}
  className="diabetes-predictor-header"
  style={{
    position: 'absolute',
    width: '90%', /* Use percentage for width to make it responsive */
    maxWidth: '1150px', /* Set a maximum width for larger screens */
    height: 'auto', /* Let the height adjust based on content */
    left: '-10%', /* Center horizontally */
    transform: 'translateX(-50%)', /* Center horizontally */
    top: '47%', /* Adjust based on your layout */
    fontFamily: "'Abhaya Libre ExtraBold'",
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: 'clamp(30px, 5vw, 50px)', /* Responsive font size using clamp */
    lineHeight: '1.5', /* Adjust line height based on font size */
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center', /* Center text horizontally */
    color: '#FFFFFF',
    textAlign: 'center', /* Center text horizontally */
  }}
>
  Welcome to the Diabetes Predictor!
</motion.h1>

          
<motion.p
  initial={{ opacity: 0, y: 150 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.8,
    type: "spring",
    stiffness: 100,
    delay: 1,
  }}
  style={{
    position: 'absolute',
    width: '90%', /* Use percentage for width to make it responsive */
    maxWidth: '444px', /* Set a maximum width for larger screens */
    height: 'auto', /* Let the height adjust based on content */
    left: '-0.3%', /* Center horizontally */
    transform: 'translateX(-50%)', /* Center horizontally */
    top: '58.5%', /* Adjust based on your layout */
    fontFamily: "'Abhaya Libre ExtraBold', serif",
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: 'clamp(20px, 4vw, 40px)', /* Responsive font size using clamp */
    lineHeight: '1.5', /* Adjust line height based on font size */
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center', /* Center text horizontally */
    color: '#FFFFFF',
    textAlign: 'center', /* Center text horizontally */
  }}
>
  Know your risk
</motion.p>



<motion.p
  initial={{ opacity: 0, y: 150 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.8,
    type: "spring",
    stiffness: 100,
    delay: 1.2, // Slightly delay the second text for a staggered effect
  }}
  style={{
    position: 'absolute',
    width: '90%', /* Use percentage for width to make it responsive */
    maxWidth: '771px', /* Set a maximum width for larger screens */
    height: 'auto', /* Let the height adjust based on content */
    left: '-5.2%', /* Center horizontally */
    transform: 'translateX(-50%)', /* Center horizontally */
    top: '63%', /* Adjust based on your layout */
    fontFamily: "'Abhaya Libre ExtraBold', serif",
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: 'clamp(20px, 4vw, 40px)', /* Responsive font size using clamp */
    lineHeight: '1.5', /* Adjust line height based on font size */
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center', /* Center text horizontally */
    color: '#FFFFFF',
    textAlign: 'center', /* Center text horizontally */
  }}
>
  take control of your health.
</motion.p>

<motion.div
  initial={{ opacity: 0, y: 150 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.8,
    type: "spring",
    stiffness: 100,
    delay: 1.2,
  }}
  style={{
    position: 'absolute',
    width: '90%', /* Use percentage for width to make it responsive */
    maxWidth: '250px', /* Set a maximum width for larger screens */
    height: '8%', 
    left: '5.4%', /* Center horizontally */
    transform: 'translateX(-50%)', /* Center horizontally */
    top: '73%', /* Adjust based on your layout */
    background: '#FF9900',
    border: '0.7px solid #5C3200',
    borderRadius: '10px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <Link
    to="/prediction"
    style={{
      width: '100%', /* Fill the entire width of the div */
      height: '100%', /* Fill the entire height of the div */
      fontFamily: "'Abhaya Libre ExtraBold', serif",
      fontStyle: 'normal',
      fontWeight: 800,
      fontSize: 'clamp(14px, 3vw, 23px)', /* Responsive font size using clamp */
      color: '#FFFFFF',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent', // Ensures link background is transparent
      textDecoration: 'none', // Remove underline from the link
    }}
  >
    GET STARTED 
  </Link>
</motion.div>


        </div>
      </div>

      <div className="container mx-auto my-8 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.3,
          }}
          className="text-3xl font-bold mb-8 text-purple-800 text-center"
        >
          Features
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-10 bg-purple-100 justify-around items-center mb-8 md:mx-10 border p-4 rounded-md">
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
              delay: 0.5,
            }}
            className="md:w-2/5 mb-4 md:mb-0"
          >
            <img
              src={dataInfoImg}
              alt="Data Info"
              className="w-full h-53 object-cover rounded-md"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
              delay: 0.5,
            }}
            className="md:w-2/3 md:pl-8 bg-purple-100 p-4 rounded-md"
          >
            <h3 className="text-xl font-bold mb-2 text-purple-800">
              Data Info
            </h3>
            <p className="text-gray-700 mb-4">
              Explore and understand the data used for diabetes prediction. Get
              insights into the various features and their impact on the
              prediction model.
            </p>
            <Link
              to="/data-info"
              className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-col gap-10 md:flex-row-reverse justify-around bg-purple-100 items-center mb-8 md:mx-10 border p-4 rounded-md">
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
              delay: 0.5,
            }}
            className="md:w-2/5 mb-4 md:mb-0"
          >
            <img
              src={predictionImg}
              alt="Prediction"
              className="w-full h-53 object-cover rounded-md"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
              delay: 0.5,
            }}
            className="md:w-1/2 md:pr-8 bg-purple-100 p-4 rounded-md"
          >
            <h3 className="text-xl font-bold mb-2 text-purple-800">
              Prediction
            </h3>
            <p className="text-gray-700 mb-4">
              Predict your likelihood of developing diabetes using our advanced
              algorithm. Enter your health data and get an accurate prediction.
            </p>
            <Link
              to="/prediction"
              className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              Get Prediction
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 justify-around bg-purple-100 items-center mb-8 md:mx-10 border p-4 rounded-md">
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
              delay: 0.5,
            }}
            className="md:w-2/5 mb-4 md:mb-0"
          >
            <img
              src={visualizationImg}
              alt="Visualization"
              className="w-full rounded-md h-53 object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
              delay: 0.5,
            }}
            className="md:w-1/2 md:pl-8 bg-purple-100 p-4 rounded-md"
          >
            <h3 className="text-xl font-bold mb-2 text-purple-800">
              Visualization
            </h3>
            <p className="text-gray-700 mb-4">
              Visualize the data and predictions with interactive charts and
              graphs. Gain deeper insights into the relationship between various
              features and diabetes.
            </p>
            <Link
              to="/visualization"
              className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              Visualize Data
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
