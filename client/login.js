import React from 'react'

const Login = (props) => {
  return (
    <div className='h100 w100 flex column align-items-center justify-center'>
      <div>
        <h1>Let's Loggin'!</h1>
      </div>
      <div className='flex w50'>
        <img src='/loggin.png' />
        <form className='grow1'>
          <div className='flex column'>
            <div className='flex column m1'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' className='input' />
            </div>
            <div className='flex column m1'>
              <label htmlFor='email'>Password</label>
              <input type='password' name='password' className='input' />
            </div>
            <div className='m1'>
              <button type='submit' className='btn bg-blue white p1'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
