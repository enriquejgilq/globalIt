// react
import React from 'react';
// application
import AppImage from '~/components/shared/AppImage';
import BlockReviews from '~/components/blocks/BlockReviews';
import BlockSpace from '~/components/blocks/BlockSpace';
import BlockTeammates from '~/components/blocks/BlockTeammates';
import Decor from '~/components/shared/Decor';
import PageTitle from '~/components/shared/PageTitle';
import { baseUrl } from '~/services/utils';

function Page() {
    return (
        <React.Fragment>
            <PageTitle>
                About Us
            </PageTitle>

            <div className="about">
                <div className="about__body">
                    <div className="about__image">
                        <div
                            className="about__image-bg"
                            style={{
                                backgroundImage: `url(${baseUrl('/images/BannerAbout.jpg')})`,
                                width:'1200px', height:'392px', display:'block', margin:'0 auto'}}
                        />
                        <Decor className="about__image-decor" type="bottom" />
                    </div>

                    <div className="about__card">
                        <div className="about__card-title">About Us</div>
                        <div className="about__card-text">
                            <p> 
                              Global Air is a world leader in the automotive air conditioning industry. Our people design and develop climate control products for every major vehicle on the road today. Based in Miami Gardens, Florida USA, we are minutes away from Miami and Fort Lauderdale airports.
                               Global Air has earned a reputation for premium quality products and world-class customer service through years of hard work and commitment to excellence. These factors coupled with competitive pricing, on-time delivery, and a strong engineering department, make Global Air the right choice for your automotive air conditioning component needs.
                            </p>
                        </div>
                        
                    </div>
                   

                    {/* <div className="about__indicators">
                        <div className="about__indicators-body">
                            <div className="about__indicators-item">
                                <div className="about__indicators-item-value">350</div>
                                <div className="about__indicators-item-title">Stores around the world</div>
                            </div>
                            <div className="about__indicators-item">
                                <div className="about__indicators-item-value">80 000</div>
                                <div className="about__indicators-item-title">Original auto parts</div>
                            </div>
                            <div className="about__indicators-item">
                                <div className="about__indicators-item-value">5 000</div>
                                <div className="about__indicators-item-title">Satisfied customers</div>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </div>

            <BlockSpace layout="divider-xl" />

          {/**  <BlockTeammates /> */}

            <BlockSpace layout="divider-xl" />

            <BlockReviews />

            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default Page;
