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

function ItemDetail() {
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState({});
  const [result, setResult] = useState([]);
  const [shooseSize, setShooseSize] = useState('');
  const [shoesModal, setShoesModal] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [quantity, setquantity] = useState(1);
  const [productOptionId, setProductOptionId] = useState();
  const [isWished, setIsWished] = useState(product.isWished);

  const iswished = product.isWished;
  const token = localStorage.getItem('token');
  const [accessToken, setAccessToken] = useState(token);

  const [selectedId, setSelectedId] = useState('');
  const { stock } = product;
  useEffect(() => {
    fetch(`http://192.168.243.200:8000/product/${productId}`, {
      method: 'GET',
      headers: {
        authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setIsWished(data.isWished);
        console.log(data);
        setProduct(data);
      });
    // .then(result => console.log(result));
  }, []);

  const params = useParams();
  const { productId } = params;

  console.log('quantity : ', quantity);
  console.log('productOptionId : ', productOptionId);

  const orderSubmit = () => {
    fetch(`http://192.168.243.200:8000/orders`, {
      method: 'POST',
      headers: {
        authorization: localStorage.getItem('token'),
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        productOptionId: productOptionId,
        quantity: quantity,
      }),
    })
      .then(response => response.json())
      .then(result => alert(result.message));
  };

  const openModal = () => {
    if (accessToken === null) {
      alert('??????????????????');
    } else if (selectedId == '') {
      alert('size??? ???????????????');
    } else {
      setModal(prev => !prev);
      document.body.style.overflow = 'hidden';
      window.scroll(0, 165);
      fetch('http://192.168.243.200:8000/carts', {
        method: 'POST',
        headers: {
          authorization: accessToken,
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          productOptionId: selectedId,
          quantity: quantity,
        }),
      }).then(response => response.json());
    }
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
    let selectdSizesStock = 0;

    product.productOptions.map(item => {
      if (Number(item.size) === Number(shooseSize)) {
        selectdSizesStock = item.stock;
        setProductOptionId(item.productOptionId);
      }
    });

    if (quantity < selectdSizesStock) {
      setquantity(prevquantity => prevquantity + 1);
    } else {
      alert('?????? ?????? ????????? 5??? ?????????.');
    }
  };
  const onDecrease = () => {
    setquantity(prevquantity => prevquantity - 1);
  };

  const wishSubmit = event => {
    fetch(`http://192.168.243.200:8000/wishlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: accessToken,
      },
      body: JSON.stringify({
        productId: productId,
      }),
    })
      .then(response => response.json())
      .then(result => {
        result.message === 'ALREADY_EXIST'
          ? alert('?????? wishList??? ?????? ???????????????.')
          : setIsWished(true);
      });
  };

  return (
    <section className="itemDetail">
      {modal && <Modal closeModal={closeModal} />}
      <ShoesModal
        closeShoesModal={closeShoesModal}
        shoesModal={shoesModal}
        imageUrl={product.imageURL}
      />

      <article className="detailSection">
        <div className="detailContent">
          <DetailImgs
            imageUrl={product.imageURL}
            openShoesModal={openShoesModal}
          />
        </div>

        <div className="detailInfo">
          <div className="detailOption">
            <div
              className={`detailName ${
                product.discountPrice === null ? 'price0' : ''
              }`}
            >
              <div className="namePrice">
                <div>{product.brandName}</div>
                <div className="discounted">
                  {Number(product.retailPrice).toLocaleString()}???
                </div>
              </div>
              <div>
                <div className="discountPrice">
                  {Number(product.discountPrice).toLocaleString()}???
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
                <div className="sizeSelect">????????? ??????</div>
                <div className="sizeGuide">
                  <a>
                    <button>????????? ?????????</button>
                  </a>
                </div>
              </div>
              <ShoesSize
                footSize={product.productOptions}
                setShooseSize={setShooseSize}
                stock={product.productOptions}
                setSelectedId={setSelectedId}
                setProductOptionId={setProductOptionId}
                product={product}
              />
            </div>
            <p>
              <button className="itemNotify">NOTIFY ME ?????? ?????? ??????</button>
            </p>
            <div className="itemCount">
              <span>??????</span>
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
              <button className="itemPurchase" onClick={orderSubmit}>
                ????????????
              </button>
              <div className="itemBasketWish">
                <button onClick={openModal} className="btn-modal">
                  ????????????
                </button>

                <button className="itemWish" onClick={wishSubmit}>
                  <div className="text">???????????????</div>
                  {accessToken && (
                    <div className="heart">
                      {isWished === true ? '??????' : '???'}
                    </div>
                  )}
                </button>
              </div>
            </div>
            <div className="itemPickUp">
              <div className="itemService">
                ?????? ?????? ???????????? ??????????????? ???????????????.
              </div>
              <div>
                <button className="focus">????????? ??????</button>
              </div>
            </div>
            <div className="shoesInfo">
              <p className="shoesDescription">{product.description}</p>
              <div className="shoesStyle">
                <div>?????? ?????? : {product.color}</div>
                <div>????????? : {product.styleCode}</div>
              </div>
              <div>
                <button className="shoesMoreInfo">??? ??????</button>
              </div>
            </div>
            <div className="itemSide">
              ????????????
              <img src="/image/open.png" alt="open" className="open" />
            </div>
            <div className="itemSideReview">
              <div className="review">
                ??????
                <button onClick={openReview}>
                  <img src="/image/open.png" alt="open" className="open" />
                </button>
              </div>
              <div className="reviewContents">
                {reviewOpen && (
                  <Review
                    review={product.review}
                    styleCode={product.styleCode}
                  />
                )}
              </div>
            </div>

            <div className="itemSide">
              <div>??????</div>
              <div className="itemdetailRight">
                <div className="itemShip">????????????/????????????</div>

                <img src="/image/open.png" alt="open" className="open" />
              </div>
            </div>
            <div className="itemSide">
              <span>??????/AS</span>
              <div className="itemdetailRight">
                <span className="itemShip">????????? ??????/?????? ??????</span>
                <img src="/image/open.png" alt="open" className="open" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ItemDetail;
