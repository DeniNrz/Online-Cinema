import { FC } from 'react'

import { MenuItem } from '../MenuItem'
import LogoutButton from './LogoutButton/LogoutButton'
import { getAdminHomeUrl } from '../../../../../config/url.config'
import { useUser } from '../../../../../hooks/useUser'

const AuthItems: FC = () => {
	const { user } = useUser()

	return (
		<>
			{user ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Profile',
						}}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem item={{ icon: 'MdLogin', link: '/auth', title: 'Login' }} />
			)}

			{user?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: getAdminHomeUrl(),
						title: 'Admin panel',
					}}
				/>
			)}
		</>
	)
}

export default AuthItems
