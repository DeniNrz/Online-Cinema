import * as MaterialIcons from 'react-icons/md'
import { MdDragIndicator } from 'react-icons/md'
import { FC } from 'react'

import { TypeMaterialIconName } from '../../shared/types/icon.types'
import { useRenderClient } from '../../hooks/useRenderClient'

const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
	const { isRenderClient } = useRenderClient()

	const IconComponent = MaterialIcons[name] || MdDragIndicator

	if (isRenderClient) return <IconComponent />
	else return null
}

export default MaterialIcon
