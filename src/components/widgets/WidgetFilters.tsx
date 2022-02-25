// react
import React from 'react';
import { globalIntl } from '~/services/i18n/global-intl';

// third-party
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
// application
import { useShopFilters, useShopFilterValues, useShopResetFiltersThunk } from '~/store/shop/shopHooks';
import { IShopPageOffCanvasSidebar } from '~/interfaces/pages';
import Filter from '~/components/filters/Filter';

interface Props {
    offcanvasSidebar: IShopPageOffCanvasSidebar;
}

function WidgetFilters(props: Props) {
    const { offcanvasSidebar } = props;
    const filters = useShopFilters();
    const values = useShopFilterValues();
    const shopResetFilters = useShopResetFiltersThunk();

    const rootClasses = classNames('widget', 'widget-filters', `widget-filters--offcanvas--${offcanvasSidebar}`);
    const nameCategoryProducts = globalIntl()?.formatMessage(
        { id: 'TEXT_CATEGORY' },
    )
    const nameContainer = globalIntl()?.formatMessage(
        { id: 'TEXT_CONTAINER' },
    )

    const nameSearch = globalIntl()?.formatMessage(
        { id: 'TEXT_SEARCH' },
    )
    const dataFilTers: any = [
        {
            name: nameCategoryProducts,
        },
        {
            name: nameContainer,
        },
    ]
    
    return (
        <div className={rootClasses}>
            <div className="widget__header widget-filters__header">
                <h4>
                    <FormattedMessage id="HEADER_FILTERS" />
                </h4>
            </div>

            <div className="widget-filters__list">
               {dataFilTers.map((filter:any, index:any) => (
                    <Filter
                        key={index}
                        dataFilTers={dataFilTers}
                        title={filter.name}
                        
                    />
                ))} 
            </div>

            <div className="widget-filters__actions d-flex">
                <button type="button" className="btn btn-secondary btn-sm" onClick={shopResetFilters}>
                    <FormattedMessage id="BUTTON_RESET" />
                </button>
            </div>
        </div>
    );
}

export default React.memo(WidgetFilters);
