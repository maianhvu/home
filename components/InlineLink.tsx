import classNames from 'classnames'
import Link, { LinkProps } from 'next/link'
import React, { PropsWithChildren } from 'react'

interface Props
  extends Omit<LinkProps, 'passHref'>,
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {}

const InlineLink = (props: PropsWithChildren<Props>) => {
  const { href, as, replace, scroll, shallow, prefetch, locale, className, ...spanProps } = props
  return (
    <Link {...{ href, as, replace, scroll, shallow, prefetch, locale }} passHref>
      <span
        {...spanProps}
        className={classNames(
          'border-b border-b-gray-200 dark:border-b-gray-800 cursor-pointer transition-colors',
          className
        )}
      />
    </Link>
  )
}

export default InlineLink
