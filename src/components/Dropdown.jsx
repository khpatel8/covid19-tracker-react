import React from "react";
import { Select, MenuItem, FormControl } from "@material-ui/core";
import { states } from "../api";

function Dropdown(props) {
  return (
    <div className="select-div">
      <FormControl>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          variant="outlined"
          value={props.stateCode}
          onChange={props.onChange}
        >
          <MenuItem key="US" value="US">
            United States
          </MenuItem>
          {states.map((state) => (
            <MenuItem key={state.name} value={state.abbreviation}>
              {state.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Dropdown;

/*{states.map((state) => (
            <option key={state.name} value={state.abbreviation}>
              {state.name}
            </option>
          ))}
          {states.map((state) => (
            <MenuItem key={state.name} value={state.abbreviation}>
              {state.name}aa
            </MenuItem>
          ))}
          */
