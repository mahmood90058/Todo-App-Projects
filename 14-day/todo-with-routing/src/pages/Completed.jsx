import styles from "./Completed.module.css";
function Completed({ todos }) {
  const completedTodos = todos.filter((todo) => todo.completed);
  return (
    <div>
      {completedTodos.map((todo) => (
        <div key={todo.id}>
          <h2 className={styles.todo} >{todo.title}</h2>
        </div>
      ))}
      <p className={styles.para}>Task Completed</p>
    </div>
  );
}
export default Completed;
