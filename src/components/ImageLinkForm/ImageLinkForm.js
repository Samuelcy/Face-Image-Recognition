import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit}) => {
  return (
    <div>
      <p className='f3'>
      {'Please put in a .jpg below to detect faces!'}
      </p>
      <div className='center'>
        <div className='form center pa2 br3 shadow-5'>
        <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} />
      <button
      className='w-30 grow f4 link ph3 pv1 dib white bg-light-blue'
      onClick={onButtonSubmit}
      >Detect</button>

        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
