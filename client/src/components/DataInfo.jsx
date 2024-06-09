import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import * as Papa from "papaparse";
import _ from "lodash";
import Loader from "./Loader"; // Import the Loader component

function DataInfo() {
  const [data, setData] = useState([]);
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/diabetes.csv");
        const csvData = await response.text();
        Papa.parse(csvData, {
          header: true,
          dynamicTyping: true,
          complete: (results) => {
            setData(results.data);
          },
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSort = (columnName) => {
    if (sortedColumn === columnName) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortedColumn(columnName);
      setSortDirection("asc");
    }
  };

  const sortedData = _.orderBy(data, sortedColumn, sortDirection);

  return (
    <div className="container mx-auto my-8">
      <motion.h1
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          delay: 0.5,
        }}
        className="text-3xl font-bold mb-4 text-purple-800 text-center p-2 border-b-2"
      >
        Data Information
      </motion.h1>
      {data.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.5,
          }}
          className="overflow-x-auto overflow-y-auto rounded-lg shadow-lg mx-10"
          style={{ maxHeight: "420px" }}
        >
          <div className="">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {Object.keys(data[0]).map((header, index) => (
                    <th
                      key={index}
                      onClick={() => handleSort(header)}
                      className="px-4 py-2 bg-purple-100 text-purple-800 sticky top-0 font-bold border cursor-pointer relative"
                    >
                      {header}
                      <span className="absolute right-0 top-1/2 transform -translate-y-1/2">
                        {sortedColumn === header
                          ? sortDirection === "asc"
                            ? " ▲"
                            : " ▼"
                          : "▼"}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sortedData.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((value, index) => (
                      <td key={index} className="px-4 py-2 border">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      ) : (
        <Loader /> // Display the loader while data is being fetched
      )}
    </div>
  );
}

export default DataInfo;
