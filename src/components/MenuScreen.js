import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export const MenuScreen = () => {
  
  const history = useHistory();

  const [show, setShow] = useState(false);

  const logout = () => {
    sessionStorage.removeItem('dni');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('data');
    history.push('/')
  }

  
  return (
    <div className="main-container sm:w-1/2 text-center">
      <button 
          onClick={ () => history.push('/main') }
          className="bg-black hover:bg-gray-800 h-12 w-4/5 rounded-xl my-4 font-extrabold" 
      >
        Nueva orden
      </button>
      <button 
          onClick={ () => setShow(true) }
          className="bg-black hover:bg-gray-800 h-12 w-4/5 rounded-xl my-4 font-extrabold"
      >
        Modificar orden
      </button>
      {
        show && <div className="bg-gray-700 rounded-lg w-64 mx-auto p-4" >
          <label className="mr-4">N° de orden</label>
          <input 
              type="number"
              className="w-16 mb-4" />
          <div className="flex justify-between" >
            <button 
                className=" bg-green-700 hover:bg-green-500 rounded-lg p-2 font-bold"
                >
                Confirmar
            </button>
            <button 
                className=" bg-red-700 hover:bg-red-500 rounded-lg p-2 font-bold"
                onClick={ () => setShow(false) }
                >
                Cancelar
            </button>
          </div>
        </div>
      }
      <button 
          className="bg-black hover:bg-gray-800 h-12 w-4/5 rounded-xl my-4 font-extrabold"
          onClick={ logout }
      >
        Salir
      </button>
    </div>
  )
}
