import { DebounceInput } from "react-debounce-input";

const Input = ({ title, placeholder, defaultValue, setInputValue }) => {
  return (
    <div className="input-container">
      <h4>{title}</h4>
      <DebounceInput
        minLength={5}
        defaultValue={defaultValue}
        placeholder={placeholder}
        debounceTimeout={300}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </div>
  );
};

export default Input;
