import React from 'react';
// import PropTypes from 'prop-types';
// import ToDoItem from './ToDoItem'
// import { Link } from 'react-router-dom'

function CategoryDetail(props) { 
  let categoryId = props.match.params.categoryId
  let category = props.categoryList[categoryId]

  return (
    <div>
      <h1>category D'tail</h1>
        {/* <h1>{category.name}</h1>
        <Link to={`/${category.name}/${categoryId}/new-to-do`}>New Todo</Link>
        <ol>
            {Object.keys(props.todoList).map((todoId)=> {
                let todo = props.todoList[todoId]
                console.log(todoId);
                if (todo.categoryId === categoryId){
                
                return <ToDoItem task={todo.task} key={todoId} id={todo.id} dueDate={todo.dueDate} isComplete={todo.isComplete}/>
            }})}
        </ol> */}
    </div>
  );
}


export default CategoryDetail;

// CategoryDetail.propTypes = {
//   categoryList: PropTypes.object,
// }
