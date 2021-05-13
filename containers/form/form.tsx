import { useForm } from 'react-hook-form'
import styles from './form.module.scss'

interface Inputs {
  email: string
  password: string,
  age: number,
  gender: string,
  integrity: boolean
}

export default function Form() {
  const { register, formState: { errors }, handleSubmit } = useForm<Inputs>()
  const handleSignIn = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSignIn}>
        <div>
          <label htmlFor='email-input'>Email:</label>
          <input
            id='email-input'
            type='text'
            autoComplete='off'
            {...register(
              'email',
              {
                required: 'O email é obrigatório',
                maxLength: {
                  value: 30,
                  message: 'O email deve conter no máximo 30 caracteres'
                },
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: 'O email não é válido'
                }
              }
            )}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor='password-input'>Senha:</label>
          <input
            id='password-input'
            type='password'
            autoComplete='off'
            {...register(
              'password',
              {
                required: 'A senha é obrigatória',
                minLength: {
                  value: 8,
                  message: 'A senha deve conter no mínimo 8 caracteres'
                }
              }
            )}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div>
          <label htmlFor='age-input'>Idade:</label>
          <input
            id='age-input'
            type='number'
            {...register('age', { valueAsNumber: true })}
          />
        </div>
        <div>
          <label htmlFor='gender-select'>Gênero:</label>
          <select
            id='gender-select'
            {...register('gender', { required: true })}
          >
            <option value=''>Escolha um gênero</option>
            <option value='female'>Feminino</option>
            <option value='male'>Masculino</option>
            <option value='other'>Outro</option>
          </select>
        </div>
        <div>
          <input
            id='integrity-checkbox'
            type='checkbox'
            {...register('integrity')}
          />
          <label htmlFor='integrity-checkbox'>Não sou robô</label>
        </div>
        <input type='submit' value='Cadastrar'/>
      </form>
    </div>
  )
}
