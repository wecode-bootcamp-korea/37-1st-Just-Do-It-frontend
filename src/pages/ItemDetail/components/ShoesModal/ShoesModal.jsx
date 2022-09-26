import React from 'react';
import './ShoesModal.scss';
import ShoesImgs from '../ShoesImgs/ShoesImgs';
function ShoesModal({ closeShoesModal, shoesModal, imageUrl }) {
  return (
    <div>
      {shoesModal && (
        <div className="ShoesModal">
          <div onClick={closeShoesModal} className="overlayWrap">
            <ShoesImgs imageUrl={imageUrl} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoesModal;
