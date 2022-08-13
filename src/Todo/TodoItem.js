import React,{useContext} from "react";
import PropTypes from "prop-types";
import Context from "../context";

function TodoItem({todo, index,clikevent}) {
    const {removeTodo} = useContext(Context);

    const classes = [];
    if(todo.completed)
    {
        classes.push('done')
    }
    const styles = {
        li:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'.5rem 1rem',
        border:'1px solid #ccc',
        borderRadius:'5px',
        marginBottom:'.5rem'
        },
        input:{
            marginRight:'1rem'
        }
    }
    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input type="checkbox" style={styles.input} onChange={() => clikevent(todo.id)}/> 
                <strong>{ index + 1}</strong> &nbsp;
                {todo.title} 
                </span>
                {/*wrong way :  <button className="rm" onClick={removeTodo(todo.id)}>&times;</button> */
                // current way:  <button className="rm" onClick={() => removeTodo(todo.id)}>&times;</button>
                }
                {/*Profesional*/}
                <button className="rm" onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    clikevent: PropTypes.func.isRequired
}
export default TodoItem;
