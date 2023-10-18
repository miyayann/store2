import React from 'react'
import {parseISO, format} from "date-fns"
import { ja } from 'date-fns/locale'

const ConvertDate = ({ dateISO }: { dateISO: string }) => {
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), "yyyy年-MM月-dd日", {
        locale: ja,
      })}
    </time>
  )
}

export default ConvertDate
