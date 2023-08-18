import { FC } from 'react'

import { Meta } from '../../../../utils/meta/Meta'
import { AdminNavigation } from '../../../ui/admin-navigation/AdminNavigation'
import { Heading } from '../../../ui/heading/Heading'
import { useMovies } from './useMovies'
import { AdminHeader } from '../../../ui/admin-table/AdminHeader/AdminHeader'
import { AdminTable } from '../../../ui/admin-table/AdminTable/AdminTable'

export const MovieList: FC = () => {
	const {
		handleSearch,
		isLoading,
		searchTerm,
		data,
		deleteAsync,
		createAsync,
	} = useMovies()

	return (
		<Meta title="Movies">
			<AdminNavigation />
			<Heading title="Movies" />
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Title', 'Genre', 'Rating']}
				tableItems={data || []}
			/>
		</Meta>
	)
}
