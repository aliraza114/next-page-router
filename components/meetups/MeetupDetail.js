
import classes from './MeetupDetail.module.css';

export function MeetupDetail(props) {
    return <section className={classes.detail}>
        <img src={props.src}>  </img>
            <h1> {props.title} </h1>
            <address>{props.address} </address>
            <p> {props.description} </p>
    </section>
}