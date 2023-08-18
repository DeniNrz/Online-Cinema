import { FC } from 'react'

import { Logo } from './Logo'
import { MenuContainer } from './MenuContainer/MenuContainer'

import slyles from './Navigation.module.scss'

export const Navigation: FC = () => {
	return (
		<div className={slyles.navigation}>
			<Logo />
			<MenuContainer />
		</div>
	)
}
