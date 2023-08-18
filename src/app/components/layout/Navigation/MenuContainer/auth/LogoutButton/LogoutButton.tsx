import { FC, MouseEvent } from 'react'

import { useActions } from '../../../../../../hooks/useActions'
import MaterialIcon from '../../../../../ui/MaterialIcon'

import styles from './LogoutButton.module.scss'

const LogoutButton: FC = () => {
	const { logout } = useActions()

	const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logout()
      window.location.reload()
	}

	return (
		<li className={styles.logoutButton}>
			<a onClick={handleLogout}>
				<MaterialIcon name="MdLogout" />
				<span>Logout</span>
			</a>
		</li>
	)
}

export default LogoutButton
