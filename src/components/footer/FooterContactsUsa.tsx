// react
import React, { FunctionComponent } from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// data
import theme from '~/data/theme';

const FooterContactsUsa: FunctionComponent<React.HTMLAttributes<HTMLElement>> = () => (
    <div className="footer-contacts">
        <h5 className="footer-contacts__title">
            <FormattedMessage id="HEADER_CONTACT_US" />
        </h5>
        <h3 className="footer-contacts__title">USA</h3>

        {/* <div className="footer-contacts__text">
            <FormattedMessage id="TEXT_CONTACT_US_MESSAGE" />
        </div> */}

        <address className="footer-contacts__contacts">
            <dl>
                <dt>
                    <FormattedMessage id="TEXT_EMAIL_ADDRESS" />
                </dt>
                {theme.contacts_usa.email.map((item, index) => (
                    <dd key={index}>{item}</dd>
                ))}
            </dl>
            <dl>
                <dt>
                    <FormattedMessage id="TEXT_PHONE_NUMBER" />
                </dt>
                {theme.contacts_usa.phone.map((item, index) => (
                    <dd key={index}>{item}</dd>
                ))}
            </dl>
            <dl>
                <dt>
                    <FormattedMessage id="TEXT_OUR_LOCATION" />
                </dt>
                {theme.contacts_usa.address.map((item, index) => (
                    <dd key={index}>{item}</dd>
                ))}
            </dl>
            <dl>
                <dt>
                    <FormattedMessage id="TEXT_WORKING_HOURS" />
                </dt>
                {theme.contacts_usa.hours.map((item, index) => (
                    <dd key={index}>
                        <FormattedMessage id="TEXT_DAYS_WORKING_HOURS" />
                        {item}
                    </dd>
                ))}
            </dl>
        </address>
    </div>
);

export default FooterContactsUsa;
