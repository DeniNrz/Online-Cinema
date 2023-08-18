import React from 'react'
import { AppProps } from 'next/app'

import { MainProvider } from '../app/providers/MainProvider'
import { TypeComponentAuthFields } from '../app/shared/types/auth.types'

import '../app/assets/styles/globals.scss'
import '../app/assets/styles/react-select.scss'

type TypeAppProps = AppProps & TypeComponentAuthFields

const MyApp = ({ Component, pageProps }: TypeAppProps) => {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}

export default MyApp
