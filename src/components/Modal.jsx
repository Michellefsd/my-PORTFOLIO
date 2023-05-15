import './Modal.css'
import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function Modal({ p1, p2, className}) {
    useEffect(()=> {
        document.body.classList.add('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden');
        }
    }, [])
// // Para evitar que hayan errores y este componente pueda usarse en cualquier 
// // caso se agregara un hijo directo de html en el documento htmlque sea un 
return ReactDOM.createPortal(
        <div>
            <div className={className}>
                <div className="modal">
                    <p>{p1}</p><br/>
                    <p>{p2}</p>
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')
    );  
}

export default Modal;