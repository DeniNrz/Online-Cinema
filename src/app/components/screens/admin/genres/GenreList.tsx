import { FC } from 'react'

import { Meta } from '../../../../utils/meta/Meta'
import { AdminNavigation } from '../../../ui/admin-navigation/AdminNavigation'
import { Heading } from '../../../ui/heading/Heading'
import { useGenres } from './useGenres'
import { AdminHeader } from '../../../ui/admin-table/AdminHeader/AdminHeader'
import { AdminTable } from '../../../ui/admin-table/AdminTable/AdminTable'

export const GenreList: FC = () => {
	const {
		handleSearch,
		isLoading,
		searchTerm,
		data,
		deleteAsync,
		createAsync,
	} = useGenres()

	return (
		<Meta title="Genres">
			<AdminNavigation />
			<Heading title="Genres" />
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Name', 'Slug']}
				tableItems={data || []}
			/>
		</Meta>
	)
}
