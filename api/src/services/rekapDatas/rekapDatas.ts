import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const rekapDatas: QueryResolvers['rekapDatas'] = () => {
  return db.rekapData.findMany()
}

export const rekapData: QueryResolvers['rekapData'] = ({ id }) => {
  return db.rekapData.findUnique({
    where: { id },
  })
}

export const createRekapData: MutationResolvers['createRekapData'] = ({
  input,
}) => {
  return db.rekapData.create({
    data: input,
  })
}

export const updateRekapData: MutationResolvers['updateRekapData'] = ({
  id,
  input,
}) => {
  return db.rekapData.update({
    data: input,
    where: { id },
  })
}

export const deleteRekapData: MutationResolvers['deleteRekapData'] = ({
  id,
}) => {
  return db.rekapData.delete({
    where: { id },
  })
}
