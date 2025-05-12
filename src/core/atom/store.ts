import { createStore } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils'
import React from 'react'

const HydrateAtoms = ({ initialValues, children }: { initialValues: any; children: React.ReactNode }) => {
  useHydrateAtoms(initialValues)
  return children
}

const globalStore = createStore()

export { globalStore, HydrateAtoms }
