import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom';
import "../styles/loginScreen.css"
import { dataClient } from '../assets/data';

export const LoginScreen = () => {

  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = formValues => {
    if(formValues.document === "30861536" && formValues.password === "abc123") {
      console.log(formValues)
      sessionStorage.setItem('dni', formValues.document);
      sessionStorage.setItem('password', formValues.password);
      sessionStorage.setItem('data', 0);
      history.push('/menu');
      
    } else {
        alert("Datos incorrectos");
      }
     
  }

  return (
    <div>
      <div className="bg-white w-2/3 sm:w-1/3 mx-auto mt-8 mb-4 shadow-md rounded px-8 pt-6 pb-8 place-content-center">
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2" >
                DNI
              </label>
              <input 
                  id="document"
                  name="document"
                  type="number"
                  defaultValue="30861536"
                  placeholder="Ingrese su DNI"
                  ref={register({ required: true })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  autoComplete="off"  
              />
              {errors.document?.type === 'required' && 
                <p className="text-red-500" >Debe ingresar su DNI</p>
              }
            </div>
            <div className="mb-6">
              <label className="block text-grey-darker text-sm font-bold mb-2" >
                Contraseña
              </label>
              <input 
                  id="password"
                  name="password"
                  type="password"
                  defaultValue="abc123"
                  placeholder="Ingrese la contraseña"
                  ref={register({ required: true })}
                  className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" 
              />
              {errors.order?.type === 'required' && 
                <p className="text-red-500" >Debe ingresar una contraseña</p>
              }
            </div>
            <div className="flex items-center">
              <button 
                  type="submit"
                  className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded flex-auto"
              >
                Entrar
              </button>
            </div>
          </form>
      </div>
    </div>
  )
}
