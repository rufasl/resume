import styles from './About.module.scss'

export default function About(props) {
    const {name} = props;
    return (
        <div>
            <div className={styles.txt}>{name}</div>
        </div>

    )
}
