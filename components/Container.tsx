import classNames from 'classnames'
import React, { PropsWithChildren } from 'react'

interface Props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Container = (props: PropsWithChildren<Props>) => {
  const { className, ...divProps } = props
  return (
    <div
      {...divProps}
      className={classNames('w-full max-w-2xl mx-auto py-4 px-6 lg:px-0', className)}
    />
  )
}

export default Container
