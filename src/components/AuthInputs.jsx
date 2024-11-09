import { useState } from 'react';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const labelStyle = 'mb-2 font-bold uppercase text-xs text-gray-600';
  const inputStyle = 'w-full p-3 border rounded border-transparent leading-6 bg-slate-300 shadow';
  const invalidLabelStyle = 'text-red-500';
  const invalidInputStyle = 'border-red-500 bg-red-100';
  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div className='p-2 md:p-8 m-auto w-full' id="auth-inputs">
      <div className="flex flex-col mb-6 gap-2">
        <p>
          <label className={labelStyle + (emailNotValid ? ` ${invalidLabelStyle}` : '')}>Email</label>
          <input
            type="email"
            className={inputStyle + (emailNotValid ? ` ${invalidInputStyle}` : '')}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <label className={labelStyle + (passwordNotValid ? ` ${invalidLabelStyle}` : '')}>Password</label>
          <input
            type="password"
            className={inputStyle + (passwordNotValid ? ` ${invalidInputStyle}` : '')}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </div>
      <div className="flex justify-center md:justify-end gap-2 md:gap-4">
        <button className='text-xs md:text-base font-semibold rounded border-none px-4 py-2 uppercase text-stone-900 bg-amber-400 hover:bg-amber-500' type="button" >
          Create a new account
        </button>
        <button className='text-xs md:text-base font-semibold rounded border-none px-4 py-2 uppercase text-stone-900 bg-amber-400 hover:bg-amber-500' onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
