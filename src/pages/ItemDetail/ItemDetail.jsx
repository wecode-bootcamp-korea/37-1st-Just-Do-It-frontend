import React, { useEffect, useState } from 'react';
import './ItemDetail.scss';
import ShoesSize from './components/ShoesSize/ShoesSize';
import DetailImgs from './components/DetailImgs/DetailImgs';
import Counter from './components/Counter/Counter';
import Modal from './components/Modal/Modal';
import ShoesColor from './components/ShoesColor/ShoesColor';
import ShoesModal from './components/ShoesModal/ShoesModal';
import Review from './components/Review/Review';
import { useParams } from 'react-router-dom';
// import ShoesModal from './components/ShoesModal/ShoesModal';
/* eslint-disable */

function ItemDetail() {
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState({});
  const [shooseSize, setShooseSize] = useState('');
  const [shoesModal, setShoesModal] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [quantity, setquantity] = useState(1);

  const params = useParams();
  console.log(params);
  // const [discount, setDiscount] = useState('');

  const openModal = () => {
    setModal(prev => !prev);
    document.body.style.overflow = 'hidden';
    window.scroll(0, 15);
  };
  const closeModal = () => {
    setModal(prev => !prev);
    document.body.style.overflow = 'unset';
  };

  const openShoesModal = () => {
    setShoesModal(prev => !prev);
    document.body.style.overflow = 'hidden';
  };
  const closeShoesModal = () => {
    setShoesModal(prev => !prev);
    document.body.style.overflow = 'unset';
  };

  const openReview = () => {
    setReviewOpen(prev => !prev);
  };

  const onIncrease = () => {
    setquantity(prevquantity => prevquantity + 1);
  };
  const onDecrease = () => {
    setquantity(prevquantity => prevquantity - 1);
  };

  // const params = usePrams();
  // const userId = params.id;

  // const [user, setUser] = useState();

  useEffect(() => {
    fetch('./data/Mock.json')
      .then(res => res.json())
      .then(data => setProduct(...data));
  }, []);

  return (
    <section className="ItemDetail">
      <Modal
        closeModal={closeModal}
        modal={modal}
        product={product}
        getThumbnail={product.getThumbnail}
        shooseSize={shooseSize}
        quantity={quantity}
      />
      <ShoesModal
        closeShoesModal={closeShoesModal}
        shoesModal={shoesModal}
        imageUrl={product.imageUrl}
      />

      <article className="detailSection">
        <div className="detailContent">
          <DetailImgs
            imageUrl={product.imageUrl}
            openShoesModal={openShoesModal}
          />
        </div>
        <span>{params.id}</span>
        <div className="detailInfo">
          <div className="detailOption">
            <div
              className={`detailName ${
                product.discountPrice === '' ? 'price0' : ''
              }`}
            >
              <div className="namePrice">
                <div>{product.brandName}</div>
                <div className="discounted">
                  {Number(product.retailPrice)}원
                </div>
              </div>
              <div>
                <div className="discountPrice">
                  {Number(product.discountPrice)}원
                </div>
              </div>
              <div className="discountPercent">
                {Math.floor(
                  (1 -
                    Number(product.discountPrice) /
                      Number(product.retailPrice)) *
                    100
                )}
                % off
              </div>
              <div className="shoesName">{product.productName}</div>
            </div>
            <div>
              <ShoesColor getThumbnail={product.getThumbnail} />
            </div>

            <div className="shoesSizes">
              <div className="sizetype">
                <div className="sizeSelect">사이즈 선택</div>
                <div className="sizeGuide">
                  <a>
                    <button>사이즈 가이드</button>
                  </a>
                </div>
              </div>
              <ShoesSize
                footSize={product.productOptions}
                setShooseSize={setShooseSize}
                stock={product.productOptions}
              />
            </div>
            <p>
              <button className="itemNotify">NOTIFY ME 입고 알림 신청</button>
            </p>
            <div className="itemCount">
              <span>수량</span>
              <span>
                <Counter
                  quantity={quantity}
                  onIncrease={onIncrease}
                  onDecrease={onDecrease}
                  stock={product.productOptions}
                />
              </span>
            </div>
            <div className="itemPurchaseWrap">
              <button className="itemPurchase">바로구매</button>
              <div className="itemBasketWish">
                <button onClick={openModal} className="btn-modal">
                  장바구니
                </button>

                <button className="itemWish">위시리스트</button>
              </div>
            </div>
            <div className="itemPickUp">
              <div className="itemService">
                매장 픽업 서비스가 한시적으로 중단됩니다.
              </div>
              <div>
                <button className="focus">자세히 보기</button>
              </div>
            </div>
            <div className="shoesInfo">
              <p className="shoesDescription">{product.description}</p>
              <div className="shoesStyle">
                <div>현재 컬러 : {product.color}</div>
                <div>스타일 : {product.styleCode}</div>
              </div>
              <div>
                <button className="shoesMoreInfo">더 보기</button>
              </div>
            </div>
            <div className="itemSide">
              고객안내
              <img src="/image/open.png" alt="open" className="open" />
            </div>
            <div className="itemSideReview">
              <div className="review">
                리뷰
                <button onClick={openReview}>
                  <img src="/image/open.png" alt="open" className="open" />
                </button>
              </div>
              <div className="reviewContents">
                {reviewOpen && (
                  <Review product={product.review} styleCode={product} />
                )}
              </div>
            </div>

            <div className="itemSide">
              <span>배송</span>
              <span className="itemShip">일반배송/오늘도착</span>
              <img src="/image/open.png" alt="open" className="open" />
            </div>
            <div className="itemSide">
              <span>반품/AS</span>
              <span className="itemShip">온라인 접수/매장 접수</span>
              <img src="/image/open.png" alt="open" className="open" />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ItemDetail;
