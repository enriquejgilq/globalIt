// react
import React, { useMemo,useEffect, useState } from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
// application
import StatusBadge, { IStatusBadgeType } from '~/components/shared/StatusBadge';
import { IProductStock } from '~/interfaces/product';

interface Props extends React.HTMLAttributes<HTMLElement> {
    stock: IProductStock;
    defaultValue:any
}

function StockStatusBadge(props: Props) {
    const { stock,defaultValue, className, ...rootProps } = props;
    const rootClasses = classNames(className);
    
    const typesMap: Record<IProductStock, IStatusBadgeType> = useMemo(() => ({
        'in-stock': 'success',
        'out-of-stock': 'failure',
        'on-backorder': 'warning',
    }), []);
    const textMap = useMemo(() => ({
        'in-stock': defaultValue === null ?(<FormattedMessage id="TEXT_STOCK_OUT_OF_STOCK" />) : ( <b>  <FormattedMessage id="TEXT_STOCK_IN_STOCK" />: {defaultValue}</b>),
        'out-of-stock': (<FormattedMessage id="TEXT_STOCK_OUT_OF_STOCK" />),
        'on-backorder': (<FormattedMessage id="TEXT_STOCK_ON_BACKORDER" />),
    }), [defaultValue]);
  
    return (
        <StatusBadge
            type={typesMap[stock]}
            text={textMap[stock]}
            className={rootClasses}
            {...rootProps}
        />
    );
}

export default StockStatusBadge;
