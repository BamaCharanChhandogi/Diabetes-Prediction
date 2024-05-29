import React, { useState } from "react";

const FAQ = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-gradient-to-b from-indigo-100 to-white py-20 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
            FAQ
          </span>
          <h2 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">
            Any Questions? Look Here
          </h2>
          <p className="mx-auto max-w-3xl text-gray-500 dark:text-gray-300">
            Some of the frequently asked questions
          </p>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What is this Project?"
              text="Our Diabetes Prediction Website offers a user-friendly platform for individuals to assess their risk of developing diabetes. By inputting demographic and health data, users receive personalized predictions generated through advanced machine learning algorithms."
            />
            <AccordionItem
              header="What is BMI (Body Mass Index)?"
              text="Body mass index (BMI) is a person's weight in kilograms divided by the square of height in meters. BMI is an inexpensive and easy screening method for weight category—underweight, healthy weight, overweight, and obesity."
            />
            <AccordionItem
              header="How to calculate BMI?"
              text="With the metric system, the formula for BMI is weight in kilograms (kg) divided by height in meters (m) squared. Since height is commonly measured in centimeters (cm), an alternate formula can be used—divide weight in kg by height in cm squared, and multiply the result by 10,000."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What is DPF (Diabetes Pedigree Function)?"
              text="DPF stands for Diabetes Pedigree Function. It is a feature commonly used in medical research and datasets, such as the Pima Indians Diabetes Dataset, to assess the genetic predisposition of an individual to diabetes based on their family history."
            />
            <AccordionItem
              header="What is Skin Thickness Parameter?"
              text="SkinThickness parameter refers to the measurement of the skinfold thickness of the triceps. This measurement is typically expressed in millimeters (mm) and is used as an indirect way to estimate the amount of subcutaneous fat present in the body."
            />
            <AccordionItem
              header="What is Blood Pressure?"
              text="Blood pressure is the amount of force your blood uses to get through your arteries. When your heart pumps, it uses force to push oxygen-rich blood out to your arteries. They bring it to your body's cells and tissues"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default FAQ;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-md dark:bg-gray-700 sm:p-8">
      <button
        className={`faq-btn flex w-full items-center justify-between rounded-md p-4 text-left transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-600 ${
          active ? "bg-indigo-100 dark:bg-gray-600" : ""
        }`}
        onClick={handleToggle}
      >
        <div className="flex items-center">
          <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
            <svg
              className={`fill-current duration-300 ease-in-out ${
                active ? "rotate-180 transform" : ""
              }`}
              width="17"
              height="10"
              viewBox="0 0 17 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                fill=""
                stroke=""
              />
            </svg>
          </div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-12 mt-4 text-gray-600 dark:text-gray-300 ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="text-base leading-relaxed">{text}</p>
      </div>
    </div>
  );
};
