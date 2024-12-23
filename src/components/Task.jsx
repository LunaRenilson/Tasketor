import styles from './Task.module.css'

const Task = ({ name, priority, time }) => {
     return (
          <div className={styles.taskContainer}>
               <div className={styles.prioTime}>
                    <p className={styles.priority}>{priority}</p>
                    <p className={styles.time}>{time}m</p>
               </div>

               <p className={styles.name}>{name}</p>
          </div>
     )
}

export default Task