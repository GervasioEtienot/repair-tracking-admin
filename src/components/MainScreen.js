import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { CheckOutlined } from '@ant-design/icons';

import { dataClient } from '../assets/data';


export const MainScreen = () => {
  
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  
   
  const onSubmit = formValues => {
    console.log(formValues)
  }

  return (
    <div className="main-container" >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="flex-initial mr-2" >Nombre</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Ingrese el nombre "
              ref={register({ required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
            />
          </div>
          <div>
            <label className="flex-initial mr-2" >Apellido</label>
            
            <input
              id="surname"
              name="surname"
              type="text"
              placeholder="Ingrese el apellido "
              ref={register({ required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
            />
            
          </div>
          <div>
            <label className="flex-initial mr-2" >DNI</label>
            <input
              id="dni"
              name="dni"
              type="number"
              placeholder="Ingrese el DNI "
              ref={register({ required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
            />
          </div>
          <div>
            <label className="flex-initial mr-2" >N° de orden</label>
            <input
              id="orderNum"
              name="orderNum"
              type="number"
              placeholder="Ingrese el N° de orden "
              ref={register({ required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
            />
          </div>
          <div>
            <label className="flex-initial mr-2" >Fecha de ingreso</label>
            <input
              id="ingressDate"
              name="ingressDate"
              type="date"
              placeholder="Ingrese la fecha"
              ref={register({ required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
            />
          </div>
          <div>
            <label className="flex-initial mr-2" >Marca</label>
            <input
              id="brand"
              name="brand"
              type="text"
              placeholder="Ingrese la marca"
              ref={register({ required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
            />
          </div>
          <div>
            <label className="flex-initial mr-2" >Modelo</label>
            <input
              id="model"
              name="model"
              type="text"
              placeholder="Ingrese el modelo"
              ref={register({ required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
            />
          </div>
          <div>
            <label className="flex-initial mr-2" >Color</label>
            <input
              id="color"
              name="color"
              type="text"
              placeholder="Ingrese el color"
              ref={ register }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
            />
          </div>
          <div className="col-span-1 sm:col-span-2" >
            <label className="flex-initial mr-2" >Diagnóstico</label>
            <input
              id="diagnostic"
              name="diagnostic"
              type="text"
              placeholder="Ingrese el diagnóstico"
              ref={register({ required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
            />
          </div>
          <div>
            <label className="mr-2" >Observaciones</label>
            <input
              id="observations"
              name="observations"
              type="text"
              placeholder="Ingrese observaciones"
              ref={ register }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
            />
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex justify-center items-center">
          <label className="mr-2" >Estado:</label>
          <div className="relative inline-flex">
            <svg 
              className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 412 232"
              >
                <path 
                  d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" 
                  fill="#648299" 
                  fillRule="nonzero"
                />
            </svg>
            <select 
              defaultValue="Recibido"
              name="status"
              ref={ register } 
              className="fa border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
              >
              <option value="Recibido">Recibido</option>
              <option value="Reparando">Reparando</option>
              <option value="Listo">Listo</option>
            </select>
            
          </div>
        </div>
        
        <div className="flex justify-between my-4" >
          <button
              type="submit"
              className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
              >
              Guardar
          </button>
          <button
              onClick={ () => history.push('/menu') }
              className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
              >
              Cancelar
          </button>
        </div>
      </form>
      {/* <hr className="my-4" />
      <div className="text-right">
        <button 
            className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
            onClick={ () => logout() }
        >
          Salir
        </button>
      </div> */}
    </div>
  )
}
