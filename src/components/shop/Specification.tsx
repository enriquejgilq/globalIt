// react
import React from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import { IProductAttributeGroup } from '~/interfaces/product';
import { globalIntl } from '~/services/i18n/global-intl';

interface Props {
    groups: any;
}
const textCode = globalIntl()?.formatMessage(
    { id: 'TEXT_CODE' },
)
console.log(textCode)
function Specification(props: Props) {
    const { groups } = props;

    return (
        <div className="spec">
            {groups?.map((group:any, groupIndex:any) => (
                <div key={groupIndex} className="spec__section">
                    <h4 className="spec__section-title">{group.code}</h4>
                        <div  className="spec__row">
                            <div className="spec__name"> <b>{textCode}</b> </div>
                            <div className="spec__value">
                            {group.competitor_code}
                            </div>
                        </div>
                        <div  className="spec__row">
                            <div className="spec__name"> Nombre del competidor:</div>
                            <div className="spec__value">
                            {group.competitor_name}
                            </div>
                        </div>
                </div>
            ))}
            {/** <div className="spec__disclaimer">
                <FormattedMessage id="TEXT_PRODUCT_DISCLAIMER" />
                </div>*/}
        </div>
    );
}

export default Specification;
