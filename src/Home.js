import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
        <div className="home_container">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" className="home_image"/>

            <div className="home_row">
                {/* Product */}
                <Product title="The lean startup" price={250} image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY327_FMwebp_QL65_.jpg" rating={5} />
                <Product title="iQOO 7 5G (Storm Black, 8GB RAM, 128GB Storage)|Upto 6 Months NCEMI| 3GB Extended RAM" price={43000} image="https://images-na.ssl-images-amazon.com/images/I/51OvvRTnJTS._SL1200_.jpg" rating={4} />
               
             {/* Product */}
            </div>
            <div className="home_row">
                {/* Product */}
             {/* Product */}
             <Product title="Adidas
Men's Adifloss M Running Shoe" price={1900} image="https://www.amazon.in/deal/f5607403/ref=gbps_img_m20_b106_f5607403?smid=AT95IG9ONZD7S&pf_rd_p=f851891f-86d6-4fe1-806e-061ce324b106&pf_rd_s=merchandised-search-20&pf_rd_t=101&pf_rd_i=15325111031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_r=GN3QVHVA4YF2CP9K75PT" rating={4} />
                <Product title="3M Littmann Classic III Monitoring Stethoscope, Black Tube, 27 inch, 5620
Brand: 3M" price={7,438} image="https://www.amazon.in/Littmann-Classic-Stethoscope-Black-5620/dp/B00QESFJ94?ref_=Oct_s9_apbd_obs_hd_bw_b6yp9fD&pf_rd_r=Y41FAA8RCZE9ANCAW5YD&pf_rd_p=d59de4eb-d22f-53ff-b554-5694db3dcd76&pf_rd_s=merchandised-search-10&pf_rd_t=BROWSE&pf_rd_i=6395569031" rating={5} />
              
                <Product title="3M IA260166383 Auto Specialty Tyre Dresser (500 ml)" price={448} image="https://www.amazon.in/3M-IA260166383-Auto-Specialty-Dresser/dp/B00MINN5UY?ref_=Oct_s9_apbd_oup_hd_bw_b5jnut5&pf_rd_r=GDZ2B1C0X0MS55RSD8YN&pf_rd_p=316bc307-2d8b-5262-9f37-76793f032c41&pf_rd_s=merchandised-search-10&pf_rd_t=BROWSE&pf_rd_i=5257496031" rating={5} />
             {/* Product */}
            </div>
            
        <div className="home_row"> 
        {/* Product */}
        <Product title="Raida RainPro Bike Cover for Benelli 302R (Navy Blue)" price={889} image="https://images-na.ssl-images-amazon.com/images/I/41fjoS%2BIoTL.jpg" rating={3} />
                
            </div>
           
        </div>
      
            
        </div>
        

    )
}

export default Home
