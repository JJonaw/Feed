import styles from './SideBar.module.css'

import { Avatar } from '../Avatar/Avatar'

import { PencilLine } from 'phosphor-react'

export function SideBar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"/>
            <div className={styles.profile}>
                <Avatar Border={true} src="https://avatars.githubusercontent.com/u/113308366?v=4"/>

                <strong>Jonathan</strong>
                <span>Mobile Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}