import { FC } from 'react'

import { useSearch } from './useSearch'
import { SearchField } from '../../../ui/search-field/SearchField'
import { SearchList } from './SearchList/SearchList'
import styles from './Search.module.scss'

export const Search: FC = () => {
  const {isSuccess, data, handleSearch, searchTerm} = useSearch()

  return (
    <div className={styles.wrapper}>
      <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
      {isSuccess && <SearchList movies={data || []} />}
    </div>
  )
}
