import { useRef, useCallback, FormEvent } from 'react'

export default function UncontrolledComponent() {
  const nameInputRef = useRef<HTMLInputElement>(null)
  const handleSubmit = useCallback((evt: FormEvent) => {
    evt.preventDefault()
    console.log(nameInputRef.current.value)
    nameInputRef.current.value = ''
  }, [nameInputRef])

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name-input'>Digite o seu nome:</label>
        <input id='name-input' type='text' ref={nameInputRef} autoComplete='off'/>
      </div>
      <button type='submit'>Enviar</button>
    </form>
  )
}
