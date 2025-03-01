import './ImcCalc.css'
import Button from './Button'
import React from 'react'

const ImcCalc = () => {
  return (
    <div id= "calc-container">
        <h2>Calculadora IMC</h2>
        <form id="imc-form">
            <div className="form-input">
                <div className="form-control">
                    <label htmlFor="height">Altura:</label>
                    <input type="text" name='height' id="height" placeholder='Exemplo: 1.60' />
                </div>

                <div className="form-control">
                    <label htmlFor="weight">Altura:</label>
                    <input type="text" name='weight' id="weight" placeholder='Exemplo: 70.5' />
                </div>
            </div>

            <div className="action-control">
                <Button id='calc-btn' text='Calcular'/>
                <Button id='clear-btn' text='Limpar'/>
            </div>
        </form>
    </div>
  )
}

export default ImcCalc