import * as React from "react";
import Papa, { ParseResult } from "papaparse";

type Data = {
  Date: string;
  sp_return: number;
  strategy: number;
};

type Values = {
  data: Data[];
};

const useReadCSV = () => {
  const [values, setValues] = React.useState<Values | undefined>();

  const getCSV = () => {
    Papa.parse("../data/output.csv", {
      header: true,
      download: true,
      skipEmptyLines: true,
      delimiter: ",",
      complete: (results: ParseResult<Data>) => {
        setValues(results);
      },
    });
  };

  React.useEffect(() => {
    getCSV();
    console.log(getCSV());
  }, []);

  return values;
};
export default useReadCSV;
