type ButtonProps = {
    title: string
    url: string
    addClasses?: string
}
import "app/styles/button.css"
import Link from "next/link";
export default function Button(props: ButtonProps) {
    const title = props.title;
    const url = props.url;
    const classes = props.addClasses ? 'btn ' + props.addClasses : 'btn'
    return (
        <Link href={url}>
            <button className={classes} >{title}</button>
        </Link>
    );
}