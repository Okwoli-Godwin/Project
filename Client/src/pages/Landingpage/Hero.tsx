import React from 'react'
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import group from "../../assets/group.jpeg"
import maiden from "../../assets/maiden.jpeg"
import { NavLink } from "react-router-dom";

const Hero = () => {

    function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 800,
		autoplaySpeed: 5000,
		cssEase: "linear",
		nextArrow: <SampleNextArrow />,
      	prevArrow: <SamplePrevArrow />
	};


  return (
      <>
          <Container>

			<Boxhold>
				<Wrapper>
				
				<Slider {...settings}>
					<Card>
						<Top>Centre for Undergraduate Research and University of Abuja</Top>
						<Pe><p>Promoting National Development through Research, Tapping Talents, Fostering Research Culture and Creating Opportunities.</p></Pe>

						<Buttonhold>
                    <NavLink to="/contact" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                        <NavLink to="/contact" style={{textDecoration: "none"}}>
							<Button2>Contact us</Button2>
						</NavLink>
                    </NavLink>
                </Buttonhold>
					</Card>
					<Card2>
						<Boshold>
							<Top2>Call for paper Volume 1 Issue 1 June 2023 maiden edition</Top2>
						{/* <Pe>Promoting National Development through Research, Tapping Talents, Fostering Research Culture, Creating Opportunities.</Pe> */}
						<Buttonhold>
                    <NavLink to="/contact" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                        <Button><Up>Deadline</Up><Down>30/04/2023</Down></Button>
                    </NavLink>
                </Buttonhold>
						</Boshold>
					</Card2>
					{/* <SliderCard bg='coral' bi={images} name="Makan"/> */}
					{/* <SliderCard bg='#ff8ea6' bi={images} name=""/> */}
					{/* <SliderCard bg='#9ad9fd' bi={images} name=""/>
					<SliderCard bg='silver' bi={images} name=""/>
					<SliderCard bg='#5bf8c1' bi={images} name=""/>
					<SliderCard bg='#E0F1EB' bi={images} name=""/>
					<SliderCard bg='#E0F1EB' bi={images} name=""/> */}
					{/* <SliderCard bg='#E0F1EB' bi={images} name=""/> */}
				</Slider>
			</Wrapper>
			</Boxhold>
		</Container>
      </>
  )
}

export default Hero

const Down = styled.div`
	color: #fff;
`
const Up = styled.div`
	color: #fff;
`
const Button2 = styled.div`
    height: 50px;
    width: 150px;
    background-color:  #00A85A;
    display: flex;
	/* flex-direction: column; */
	justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    transition: all 350ms;
    font-weight: bold;
	color: white;
    /* :hover{
        transform: scale(0.9);
        background-color: #F5F5F5;
        color: #00A85A;
        border: 1px solid #00A85A;
    }; */
`;
const Button = styled.div`
    height: 50px;
    width: 150px;
    background-color:  #00A85A;
    display: flex;
	flex-direction: column;
    align-items: center;
    border-radius: 10px;
    /* cursor: pointer; */
    transition: all 350ms;
    font-weight: bold;
	color: white;
    /* :hover{
        transform: scale(0.9);
        background-color: #F5F5F5;
        color: #00A85A;
        border: 1px solid #00A85A;
    }; */
`;
const Buttonhold = styled.div`
    width: 100%;
    display: flex;
    margin-top: 70px;
	/* background-color: red; */
	justify-content: center;
`
const Pe = styled.div`
    color: white;
    margin-top: 25px;
	text-align: center;
	@media screen and (max-width: 425px) {
		font-size: 14px;
	}
`
const Boshold = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 170px;
    padding-bottom: 170px;
    background-color: rgba(0, 0, 0, 0.5);
`
const Boxhold = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* padding-top: 70px;
	padding-bottom: 70px; */
    background-color: rgba(0, 0, 0, 0.5);
`
const Top2 = styled.div`
    width: 70%;
	display: flex;
	justify-content: center;
	color: white;
	font-size: 30px;
    background-color: red;
    border-radius: 7px;
	text-align: center;
	/* line-height: 2.5rem; */
	font-weight: 500;
	@media screen and (max-width: 425px) {
        font-size: 28px;
		font-weight: 500;
    }
    h1{
        font-size: 40px;
        font-weight: 700;
        line-height: 2.5rem;
        color: #fff;
        margin: 0;
        
        /* font-family: "Avenir", sans-serif; */
        @media screen and (max-width: 768px) {
        font-size: 18px;
    }

	@media screen and (max-width: 425px) {
        font-size: 12px;
		font-weight: 500;
    }
        
    }
    @media screen and (max-width: 874px) {
        width: 100%;
    }
`
const Top = styled.div`
    width: 100%;
	display: flex;
	justify-content: center;
	color: white;
	font-size: 30px;
	text-align: center;
	/* line-height: 2.5rem; */
	font-weight: 500;
	@media screen and (max-width: 425px) {
        font-size: 28px;
		font-weight: 500;
    }
    h1{
        font-size: 40px;
        font-weight: 700;
        line-height: 2.5rem;
        color: #fff;
        margin: 0;
        /* font-family: "Avenir", sans-serif; */
        @media screen and (max-width: 768px) {
        font-size: 18px;
    }

	@media screen and (max-width: 425px) {
        font-size: 12px;
		font-weight: 500;
    }
        
    }
    @media screen and (max-width: 874px) {
        width: 100%;
    }
`
const Card = styled.div`
	width: 90%;
	height: 100%;
	/* background-color: red; */
	padding-top: 140px;
    padding-bottom: 140px;
	flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Card2 = styled.div`
	width: 90%;
	height: 100%;
	/* background-color: red; */
	background-image: url(${maiden});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	/* padding-top: 170px; */
    /* padding-bottom: 170px; */
	flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 60px;
	background-image: url(${group});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	h1 {
		text-align: center;
		font-size: 40px;
	}
`;
const Wrapper = styled.div`
	width: 100%;
	overflow: hidden;
`;