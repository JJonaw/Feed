import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'

import { Avatar } from '../Avatar/Avatar'
import { Comment } from './Comment/Comment'

import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface Author {
    name: string
    role: string
    avatarUrl: string
}

interface Content {
    type: 'paragraph' | 'link'
    content: string
}

interface PostProps {
    author: Author
    publishedAt: Date
    content: Array<Content>
}

export function Post({ author, content, publishedAt }:PostProps) {
    // Date for comment
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {locale: ptBr,})
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBr,addSuffix: true,})

    // comment

    const [ newCommentText, setNewCommentText ] = useState('')
    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    const [ comments, setNewComments ] = useState<Array<string>>([])
    function handleCreateNewComment (event: FormEvent) {
        event.preventDefault()
        setNewComments([...comments, newCommentText])

        setNewCommentText('')
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setNewComments(commentsWithoutDeleteOne)
    }

    function handleCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Escreve direito noia!')
    }
    //

    const commentIsEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar Border={true} src={author.avatarUrl}/>
                    <div className={styles.authorinfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(vetor => {
                    if(vetor.type === 'paragraph'){
                        return <p key={vetor.content}>{vetor.content}</p>
                    }else if (vetor.type === 'link') {
                        return <a key={vetor.content} href="#">{vetor.content}</a>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>

                <textarea
                    onInvalid={handleCommentInvalid} 
                    required 
                    value={newCommentText} 
                    onChange={handleNewCommentChange} 
                    placeholder='Escreva um comentário...'
                />
                <footer>
                    <button type='submit' disabled={commentIsEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}