import { useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([]);
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDAteFormatted = format(publishedAt, "d 'of' LLLL 'at' HH:mm'h'");

    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        addSuffix: true,
    });

    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleCreateNewComment() {
        event.preventDefault();

        setComments([...comments, newCommentText]);

        setNewCommentText('');
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('This field is mandatory.');
    }

    function onDeleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        });

        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar 
                        src={author.avatarUrl}
                    />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDAteFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p> 
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Leave your feedback</strong>

                <textarea 
                    name="comment"
                    placeholder='Leave a comment'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty} >Comment</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={onDeleteComment} />
                })}
            </div>
        </article>
    );
}