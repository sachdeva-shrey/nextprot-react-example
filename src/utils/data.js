import { getRandomData } from "../utils/helpers/getRandomData";

export const DEFAULT_SEQUENCE =
  "MTKFTILLISLLFCIAHTCSASKWQHQQDSCRKQLQGVNLTPCEKHIMEKIQGRGDDDDDDDDDNHILRTMRGRINYIRRNEGKDEDEE";

export const DEFAULT_ENTRY = "NX_P01308";

export const DEFAULT_OPTION = "cofactor";

export const ENTRY_OPTIONS = [
  { value: "absorption-max", label: "Max Absorption" },
  { value: "absorption-note", label: "Absorption Rate" },
  { value: "accession", label: "Accession" },
  { value: "active-site", label: "Active Site" },
  { value: "allergen", label: "Allergen" },
];

export const viewerData = [
  {
    name: "Test Feature 1",
    data: [
      { x: 52, y: 52 },
      { x: 92, y: 92 },
    ],
    className: "Test1",
    color: "#32331D",
    type: "rect",
  },
  {
    name: "Test Feature 2",
    data: [
      { x: 130, y: 184 },
      { x: 40, y: 142 },
      { x: 80, y: 110 },
    ],
    className: "Test2",
    color: "#B4AF91",
    type: "path",
  },
  {
    name: "Test Feature 3",
    data: getRandomData(),
    className: "Test3",
    color: "#40411E",
    type: "line",
    filter: "type2",
    height: "5",
  },
];
