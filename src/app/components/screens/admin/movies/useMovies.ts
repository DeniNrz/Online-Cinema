import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { useRouter } from 'next/router'

import { useDebounce } from '../../../../hooks/useDebounce'
import { MovieService } from '../../../../services/movie.service'
import { ITableItem } from '../../../ui/admin-table/AdminTable/admin-table.interface'
import { getAdminUrl } from '../../../../config/url.config'
import { toastError } from '../../../../utils/toast-error'
import { getGenresList } from '../../../../utils/movie/getGenresList'

export const useMovies = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['movie list', debouncedSearch],
		() => MovieService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(movie): ITableItem => ({
						_id: movie._id || '',
						editUrl: getAdminUrl(`movie/edit/${movie._id}`),
						items: [
							movie.title || '',
							movie.genres ? getGenresList(movie.genres) : '',
							String(movie.rating),
						],
					})
				),
			onError: (error) => {
				toastError(error, 'Movie list')
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { push } = useRouter()

	const { mutateAsync: createAsync } = useMutation(
		'create movie',
		() => MovieService.create(),
		{
			onError: (error) => {
				toastError(error, 'Delete movie')
			},
			onSuccess: ({ data: _id }) => {
				toastr.success('Delete movie', 'create was successful')
				push(getAdminUrl(`movie/edit/${_id}`))
			},
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete movie',
		(movieId: string) => MovieService.delete(movieId),
		{
			onError: (error) => {
				toastError(error, 'Delete movie')
			},
			onSuccess: () => {
				toastr.success('Delete movie', 'delete was successful')
				queryData.refetch()
			},
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
			createAsync,
		}),
		[queryData, searchTerm, deleteAsync, createAsync]
	)
}
