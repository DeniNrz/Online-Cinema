import  { FC } from 'react'

import { Meta } from '../../../../utils/meta/Meta'
import { Heading } from '../../../ui/heading/Heading'
import { Statistics } from './Statistics/Statistics'
import { AdminNavigation } from '../../../ui/admin-navigation/AdminNavigation'

export const Admin: FC = () => {
  return (
    <Meta title='Admin panel'>
      <AdminNavigation />
      <Heading title='Some statistics' />
      <Statistics />
    </Meta>
  )
}
