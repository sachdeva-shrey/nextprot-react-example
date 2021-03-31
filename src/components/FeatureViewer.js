import { useEffect, useState } from "react";

import { DEFAULT_SEQUENCE } from "../utils/data";
import { viewerData } from "../utils/data";
import Input from "./Input";

const FeatureViewer = () => {
  const [inputValue, setInputValue] = useState(DEFAULT_SEQUENCE);
  const addFeature = (fv, data, name, color, className, type, filter, height) =>
    fv.addFeature({
      data,
      name,
      className,
      color,
      type,
      filter,
      height,
    });

  useEffect(() => {
    document.getElementById("fv1").innerHTML = "";

    const fv = new window.FeatureViewer(inputValue, "#fv1", {
      showAxis: true,
      showSequence: true,
      brushActive: true,
      toolbar: true,
      bubbleHelp: true,
      zoomMax: 20,
    });

    viewerData.map((v) => {
      addFeature(fv, v.data, v.name, v.color, v.className, v.type);
    });
  }, [inputValue]);

  return (
    <div className="viewer-container">
      <Input
        title="Enter any sequence"
        placeholder={DEFAULT_SEQUENCE}
        defaultValue={DEFAULT_SEQUENCE}
        setInputValue={setInputValue}
      />
      <div id="fv1" />
    </div>
  );
};

export default FeatureViewer;
