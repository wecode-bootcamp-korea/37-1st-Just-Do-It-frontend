import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <div className="footerWrapper">
      <div className="footerTop">
        <div>
          <Link to="/item-list" className="footerTextWhite">
            매장안내
          </Link>
          <Link to="/item-list" className="footerTextWhite">
            나이키 저널
          </Link>
          <Link to="/login" className="footerTextWhite">
            로그인
          </Link>
          <Link to="/sign-in" className="footerTextWhite">
            멤버 가입
          </Link>
        </div>
        <div>
          <Link to="/item-list" className="footerTextWhite">
            고객센터
          </Link>
          <Link to="/item-list" className="footerTextGrey">
            080-022-0182
          </Link>
          <Link to="/item-list" className="footerTextGrey">
            주문/결제
          </Link>
          <Link to="/item-list" className="footerTextGrey">
            배송
          </Link>
          <Link to="/item-list" className="footerTextGrey">
            주문배송조회
          </Link>
          <Link to="/item-list" className="footerTextGrey">
            멤버쉽 혜택/서비스
          </Link>
          <Link to="/item-list" className="footerTextGrey">
            공지사항
          </Link>
          <Link to="/item-list" className="footerTextGrey">
            1:1 채팅 문의
          </Link>
          <Link to="/item-list" className="footerTextGrey">
            이용약관
          </Link>
          <Link to="/item-list" className="footerTextGrey">
            개인정보처리방침
          </Link>
        </div>
        <div>
          <Link to="/item-list" className="footerTextWhite">
            ABOUT NIKE
          </Link>
          <Link to="/item-list" className="footerTextGrey">
            나이키에 대하여
          </Link>
        </div>
        <div>
          <Link to="/item-list" className="footerTextWhite">
            SOCIAL
          </Link>
          <div className="footerTopIconBox">
            <a href="https://twitter.com/nike">
              <i className="fa-brands fa-twitter" />
            </a>
            <a href="https://ko-kr.facebook.com/nike/">
              <i className="fa-brands fa-square-facebook" />
            </a>
            <a href="https://www.youtube.com/user/koreanike/videos?app=desktop">
              <i className="fa-brands fa-youtube" />
            </a>
            <a href="https://www.instagram.com/nike/">
              <i className="fa-brands fa-square-instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="footerCenter">
        <div className="footerCenterBox">
          <Link to="item-list" className="footerTextWhite">
            대한민국
          </Link>
          <p className="footerTextGrey">
            ⓒ 2022 Nike, Inc. All Rights Reserved
          </p>
        </div>
        <div className="footerCenterBox">
          <p className="footerTextGrey">이용약관</p>
          <p className="footerTextGrey">개인정보처리방침</p>
        </div>
      </div>
      <div className="footerBottom">
        <div className="footerBottomBox">
          <p className="footerBottomTextGrey">
            (유)나이키코리아 대표 : Kimberlee Lynn Chang Mendes, 킴벌리 린 창
            멘데스 | 서울 강남구 테헤란로 152 강남파이낸스센터 30층
          </p>
          <p className="footerBottomTextGrey">
            통신판매업신고번호 : 2011-서울강남-03461 | 등록번호 : 220-88-09068
            <Link
              to="/item-list"
              className="footerBottomTextWhite"
              href="www.naver.com"
            >
              사업자정보확인
            </Link>
          </p>
          <p className="footerBottomTextGrey">
            고객센터 전화문의
            <a className="footerBottomTextWhite" href="tel:080-022-0182">
              080-022-0182
            </a>
          </p>
          <p className="footerBottomTextGrey">
            FAX: 02-6744-5880 | E-mail : asdf@asdf.com | 호스팅서비스사업자:
            (유)나이키코리아
          </p>
        </div>
        <div className="footerBottomBox">
          <p className="footerBottomTextGrey">
            안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한 KG
            이니시스의 구매안전 서비스 (채무지급보증)을 이용하실 수 있습니다.
          </p>
          <p className="footerBottomTextGrey">
            온라인디지털콘텐츠사업발전법에 의한
            <Link
              to="/item-list"
              className="footerBottomTextWhite footerBottomTextWhiteMargin"
            >
              콘텐츠보호안내 자세히 보기
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
