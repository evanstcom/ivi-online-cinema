import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../comments.module.sass'
import like from '../icons/like.svg'
import { MainButton } from '../../button/MainBtn/MainButton'
import { IComments } from '@/components/screens/film/film.data'
import { NewComment } from '../NewComment/NewComment'

interface IProps {
    item: IComments
}

export const CommentsItem: React.FC<IProps> = ({ item }) => {
    const [toAnswer, setToAnswer] = useState(false);
    return (
        <li className={styles.comments__item}>
            <h3 className={styles.comments__name}>{item.userName}</h3>
            <p className={styles.comments__text}>
                {item.value}
            </p>
            <div className={styles.comments__bottomBlock}>
                <div className={styles.comments__toAnswer} onClick={() => setToAnswer(!toAnswer)}>{
                    toAnswer ? 'Закрыть' : 'Ответить'
                }</div>
                <div className={styles.comments__likes}>
                    <Image src={like} alt='actor' width={15} height={15} />16</div>
            </div>
            {
                toAnswer ? <NewComment title={`Ответить на комментарий ${item.userName}`} parentId={item.parentId} /> : null
            }
            {
                item.childComments.length > 0 ? item.childComments.map(item => <CommentsItem key={item.commentId} item={item} />)  : null
            }

            
        </li>
    )
}
