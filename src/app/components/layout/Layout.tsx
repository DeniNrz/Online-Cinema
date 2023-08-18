import { FC, ReactNode } from 'react'

import slyles from './Layout.module.scss'
import { Navigation } from './Navigation/Navigation'
import { Sibebar } from './Sidebar/Sibebar'

interface LayoutProps {
	children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className={slyles.layout}>
			<Navigation />
			<div className={slyles.center}>{children}</div>
			<Sibebar />
		</div>
	)
}
