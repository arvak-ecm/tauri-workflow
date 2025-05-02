import { LucideProps } from 'lucide-react'

export type PageInfo = {
  title: string
  description: string
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>
}
