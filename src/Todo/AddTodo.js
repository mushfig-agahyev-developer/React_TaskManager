import React, { useState } from "react";
import PropTypes from "prop-types";

function useInputValue(defaultValue = '')
{
    const [value, setValue] = useState(''); //React.useState
    return {
       bindme:{
        value,
        onChange: event => setValue(event.target.value)
       },

       clear:()=> setValue(''),
       value: () => value
    }
}

function AddTodo({ onCreate }) {
    // 1variant /const [value, setValue] = useState(''); //React.useState
    const input = useInputValue('');
  function submitHandler(event) {
    event.preventDefault();
    if (input.value().trim()) {
      onCreate(input.value());
    //   setValue("");
    input.clear();
    }
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      {/*1variant/ <input value={value} onChange ={event => setValue(event.target.value)} /> */}
     <input {...input.bindme}/>
      <button type="submit">Add Todo</button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
export default AddTodo;
