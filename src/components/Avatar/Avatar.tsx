import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface Avatar extends ImgHTMLAttributes<HTMLImageElement>{
    Border: boolean
}

export function Avatar({ Border, ...props}: Avatar) {
    return (
        <img className={Border ? styles.avatarWithBorder : styles.avatar} {...props}/>
    )
}