import * as React from 'react'

import { Block, ExtendedRecordMap } from 'notion-types'

import { PageSocial } from './PageSocial'

export const PageAside: React.FC<{
  block: Block
  recordMap: ExtendedRecordMap
  isBlogPost: boolean
}> = ({ block, recordMap, isBlogPost }) => {
  if (!block) {
    return null
  }

  return <PageSocial />
}
