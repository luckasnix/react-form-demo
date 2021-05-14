import { useState, useCallback, FormEvent, ChangeEvent } from 'react'

export default function ControlledForm() {
  const [ name, setName ] = useState<string>('')
  const handleNameChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value)
  }, [name])

  const handleSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    console.log({  name })
  }, [name])

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name-input'>Nome:</label>
        <input
          type='text'
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <button type='submit'>Enviar</button>
    </form>
  )
}
