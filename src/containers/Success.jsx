import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import '../styles/components/Success.css';

const Success = () => {
    const {state} = useContext(AppContext);
    const {buyer} = state;
    return (
        <div className="Success">
            <div className="Success-content">
                <h2>{`${buyer.name}, Gracias por su compra`}</h2>
                <span>Su pedido llegará en 3 días habiles a su dirección.</span>
                <div className="Success-map">
                    <Map />
                </div>
            </div>
        </div>
    );
}

export default Success;