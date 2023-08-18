import { FC } from 'react'

import { PopularMovie } from './PopularMovie'
import { CountUsers } from './CountUsers'

import styles from '../Admin.module.scss'

export const Statistics: FC = () => {
  return (
    <div className={styles.statistics}>
      <CountUsers />
      <PopularMovie />
    </div>
  )
}
