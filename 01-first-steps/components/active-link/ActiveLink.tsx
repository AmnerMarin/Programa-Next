import Link from "next/link";
import style from './ActiveLink.module.css'

interface Props {
    path: string;
    text: string;
}

export function ActiveLink({ path, text }: Props) {
    return (
        <Link
            className={style.link}
            href={path}>
            {text}
        </Link>
    );
}

