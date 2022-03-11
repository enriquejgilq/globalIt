// react
import React from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import { IProductAttributeGroup } from '~/interfaces/product';

interface Props {
    groups: any;
}

function Specification(props: Props) {
    const { groups } = props;

    return (
        <div className="spec">
            {groups?.map((group:any, groupIndex:any) => (
                <div key={groupIndex} className="spec__section">
                    <h4 className="spec__section-title">{group.code}</h4>
                    <p> <b>Codigo: {group.competitor_code} </b></p>
                    <p> <b> Nombre del competidor:{group.competitor_name} </b></p>

                  {/**  {group?.attributes.map((attribute:any, attributeIndex:any) => (
                        <div key={attributeIndex} className="spec__row">
                            <div className="spec__name">{attribute.name}</div>
                            <div className="spec__value">
                               {attribute?.values.map((x:any) => x.name).join(', ')}
                            </div>
                        </div>
                    ))} */}
                </div>
            ))}
            {/** <div className="spec__disclaimer">
                <FormattedMessage id="TEXT_PRODUCT_DISCLAIMER" />
                </div>*/}
        </div>
    );
}

export default Specification;
