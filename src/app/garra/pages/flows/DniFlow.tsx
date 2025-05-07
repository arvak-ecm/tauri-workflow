import React from 'react'
import InputDni from '@/components/customizer/InputDni'

interface Props {
  data?: {
    dni: string
    name: string
    lastName: string
    email: string
    phone: string
  }
}

const DniFlow: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {data ? (
        <section id='info-user'>
          <h1 className='text-2xl font-bold'>Información del usuario</h1>
          <div className='flex flex-col gap-4'>
            <p>
              <strong>DNI:</strong> {data.dni}
            </p>
            <p>
              <strong>Nombre:</strong> {data.name}
            </p>
            <p>
              <strong>Apellido:</strong> {data.lastName}
            </p>
            <p>
              <strong>Email:</strong> {data.email}
            </p>
            <p>
              <strong>Teléfono:</strong> {data.phone}
            </p>
          </div>
        </section>
      ) : (
        <InputDni />
      )}
    </div>
  )
}

DniFlow.displayName = 'DniFlow'
export default DniFlow
