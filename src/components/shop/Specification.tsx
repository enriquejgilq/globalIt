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
function Specification(props: Props) {
    const { groups } = props;
    if(groups.length === 0) {
        return null
    }
    return (
        <div className="spec">
            {groups?.map((group:any, groupIndex:any) => (
                <div  className="spec__row">
                <div className="spec__name"> <b>  {group.competitor_name}</b>  {group.competitor_code}   </div>
            </div>
            ))}
            {/** <div className="spec__disclaimer">
                <FormattedMessage id="TEXT_PRODUCT_DISCLAIMER" />
                </div>*/}
        </div>
    );
}

export default Specification;
