import { FC } from 'react'

import { Search } from './Search/Search'
import styles from './Sidebar.module.scss'
import { MoviesContainer } from './MoviesContainer/MoviesContainer'

export const Sibebar:FC = () => {
  return (
    <div className={styles.sidebar}>
      <Search />
      <MoviesContainer />
    </div>
  )
}
