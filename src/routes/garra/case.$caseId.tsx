import { getPageInfo } from '@/app/garra/menu-app'
import { createFileRoute } from '@tanstack/react-router'
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger
} from '../../components/ui/stepper'
import { Input } from '@shadcn/input'
import { cn } from '@/lib/utils'
import { atom, useAtom } from 'jotai'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@shadcn/accordion'
import DniFlow from '@/app/garra/pages/flows/DniFlow'

export const Route = createFileRoute('/garra/case/$caseId')({
  loader: ({ context: { queryClient }, params: { caseId } }) => {
    return { pageInfo: getPageInfo('new-case') }
  },
  component: RouteComponent
})

const steps = [
  {
    step: 1,
    title: 'DNI Client',
    description: 'Select dni of client',
    content: {
      title: 'Select DNI',
      children: <DniFlow />
    }
  },
  {
    step: 2,
    title: '',
    description: 'Desc for step two',
    content: {
      title: 'Select of Product',
      children: <Input />
    }
  }
]
//https://originui.com/stepper

const stepSelected = atom(1)

function RouteComponent() {
  const [currentStep, setCurrentStep] = useAtom(stepSelected)
  return (
    <div className='flex w-full flex-col p-4'>
      <Stepper value={currentStep} onValueChange={setCurrentStep} orientation='vertical'>
        {steps.map(({ step, title, description, content }) => (
          <StepperItemFlow step={step} title={title} description={description} content={content} />
        ))}
      </Stepper>
    </div>
  )
}

interface StepperItemProps {
  step: number
  title: string
  description: string
  content: {
    title: string
    children: React.ReactNode
  }
}

function StepperItemFlow({ step, title, description, content }: StepperItemProps) {
  return (
    <StepperItem key={step} step={step} className='relative w-full items-start not-last:flex-1'>
      <StepperTrigger className='items-start rounded pb-6 last:pb-0' asChild>
        <div className={cn('flex w-full flex-row items-start')}>
          <StepperIndicator />
          <div className='mt-0.5 space-y-0.5 px-2 text-left'>
            <StepperTitle>{title}</StepperTitle>
            <StepperDescription>{description}</StepperDescription>
          </div>
          <ContainerStepper title={content.title}>{content.children}</ContainerStepper>
        </div>
      </StepperTrigger>
      {step < steps.length && (
        <StepperSeparator className='absolute inset-y-0 top-[calc(1.5rem+0.125rem)] left-3 -order-1 m-0 -translate-x-1/2 group-data-[orientation=horizontal]/stepper:w-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=horizontal]/stepper:flex-none group-data-[orientation=vertical]/stepper:h-[calc(100%-1.5rem-0.25rem)]' />
      )}
    </StepperItem>
  )
}

function ContainerStepper({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger className='cursor-pointer'>{title}</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
