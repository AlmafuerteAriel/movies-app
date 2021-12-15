import styles from "./About.module.css";

export function About() {
  return <div className={styles.aboutContainer}>
    <h1>Hello!</h1>
    <h2>Mi name is Ariel Romero.</h2>
    <p className={styles.aboutText}>I am a graduate of HENRY, where I have acquired knowledge about HTML, CSS, JavaScript, ReactJS, Redux, NodeJS, Express, Sequalize and Postgres among other technologies.</p>
    <p className={styles.aboutText}>This is a project where I have used part of what I have learned.</p>
    <p className={styles.aboutText}>Thanks for your visit, have a great day!</p>
  </div> 
}