import { useState } from 'react'

import styles from './Comment.module.css'

import { Avatar } from '../../Avatar/Avatar'

import { ThumbsUp, Trash } from 'phosphor-react'

interface CommentProps {
    content: string
    onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    const [ likeCount, setLikeCount ] = useState(0)
    function handleSetLike() {
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar Border={false} src="https://avatars.githubusercontent.com/u/113308366?v=4"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jonathan</strong>
                            <time title='11 de maio as 08:13' dateTime='2022-11-02'>Cerca de 2h</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleSetLike}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}