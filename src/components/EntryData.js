import React, { useState, useEffect, useMemo } from "react";
import Select from "react-select";

import Table from "./Table";
import Input from "./Input";
import { DEFAULT_ENTRY, DEFAULT_OPTION, ENTRY_OPTIONS } from "../utils/data";

const EntryData = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Info",
        columns: [
          {
            Header: "Unique Name",
            accessor: "uniqueName",
          },
        ],
      },
      {
        Header: "Details",
        columns: [
          {
            Header: "Iso Electric Point",
            accessor: "isoelectricPointAsString",
          },
          {
            Header: "Iso Form Accession",
            accessor: "isoformAccession",
          },
          {
            Header: "Mass",
            accessor: "massAsString",
          },
          {
            Header: "md5",
            accessor: "md5",
          },
        ],
      },
    ],
    []
  );

  const [isoforms, setIsoforms] = useState([]);
  const [properties, setProperties] = useState({});
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState(DEFAULT_ENTRY);
  const [option, setOption] = useState(DEFAULT_OPTION);

  useEffect(() => {
    (async () => {
      const data = await fetch(
        `https://api.nextprot.org/entry/${inputValue}/${option}.json`
      ).then((res) => res.json());
      if (data) {
        setIsoforms(data.entry.isoforms);
        setProperties(data.entry.properties);
        setData(data);
      }
    })();
  }, [inputValue, option]);

  if (!data.entry) return <div>Loading...</div>;

  return (
    <div className="entry-data-container">
      <div className="option-container">
        <div className="select-wrapper">
          <h4>Partial entry type</h4>
          <Select
            className="option"
            value={option}
            defaultInputValue={option}
            onChange={(selectedOption) => setOption(selectedOption.value)}
            options={ENTRY_OPTIONS}
            placeholder={option}
          />
        </div>
        <Input
          title="Enter any entry"
          placeholder={DEFAULT_ENTRY}
          defaultValue={DEFAULT_ENTRY}
          setInputValue={setInputValue}
        />
      </div>
      <div className="table-container">
        <Table columns={columns} data={isoforms} />
        <div className="properties-container">
          {Object.entries(properties).map(([key, value]) => (
            <p>
              {key.toString()} : {value.toString()}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntryData;
