type ButtonProps = {
    title: string
    url: string
}
import Link from "next/link";
export default function Button(props: ButtonProps) {
    const title = props.title;
    const url = props.url;
    return (
        <Link href={url}>
            <button >{title}</button>
        </Link>
    );
}