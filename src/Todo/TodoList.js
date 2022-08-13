import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

function Todolist(props) {
    const styles = {
        ul: {
            listStyle: "none",
            margin: 0,
            padding: 0
        }
    }
    return (
        <ul style={
            styles.ul
        }>
         { props.todos.map((item, index) => 
         {
             return <TodoItem todo={item} key={item.id} index={index} clikevent={props.onToggle}/>
         }
         )}
        </ul>
    )
}
Todolist.propTypes = {
    todos:PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle : PropTypes.func.isRequired
}
export default Todolist;
