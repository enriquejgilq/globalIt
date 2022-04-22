// react
import React, { useState, useEffect } from 'react';
import { globalIntl } from '~/services/i18n/global-intl';
import { useDispatch } from 'react-redux';

// third-party
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
// application
import { useShopFilters, useShopFilterValues, useShopResetFiltersThunk } from '~/store/shop/shopHooks';
import { IShopPageOffCanvasSidebar } from '~/interfaces/pages';
import Filter from '~/components/filters/Filter';
import { isAuth } from '~/store/login/loginHooks'
import { getCategoryProductsParents, getCategoryLoading } from '~/store/categoryProducts/categoryProductsActions';
import { getFilterYearsAxios, getFilterYearsLoader } from '~/store/filterApplications/filterApplicationsActions';

interface Props {
    offcanvasSidebar: IShopPageOffCanvasSidebar;
}

function WidgetFilters(props: Props) {
    const { offcanvasSidebar } = props;
    const dispatch = useDispatch()
    const is_auth = isAuth()
    const filters = useShopFilters();
    const values = useShopFilterValues();
    const [datas, setDatas] = useState<any>();
    const shopResetFilters = useShopResetFiltersThunk();

    const rootClasses = classNames('widget', 'widget-filters', `widget-filters--offcanvas--${offcanvasSidebar}`);
    const nameCategoryProducts = globalIntl()?.formatMessage(
        { id: 'TEXT_CATEGORY' },
    )
    const nameContainer = globalIntl()?.formatMessage(
        { id: 'TEXT_CONTAINER' },
    )
    const nameApplicacions = globalIntl()?.formatMessage(
        { id: 'TEXT_APP' },
    )
    const nameCross = globalIntl()?.formatMessage(
        { id: 'TEXT_CROSS_REFERENT' },
    )
    //const nameSearch = globalIntl()?.formatMessage(
    //    { id: 'TEXT_SEARCH' },
    //  )
    //name container 

    useEffect(() => {
        if (is_auth === true) {
            setDatas([
                {
                    name: nameCategoryProducts,
                },
                {
                    name: nameApplicacions,
                },
                {
                    name: nameCross,
                },
            ])
        } else {
            setDatas([
                {
                    name: nameCategoryProducts,
                },
                {
                    name: nameApplicacions,
                },
                {
                    name: nameCross,
                },
            ])
        }
    }, [])
    useEffect(() => {
        setTimeout(() => {
            dispatch(getCategoryLoading());
            dispatch(getCategoryProductsParents())
            dispatch(getFilterYearsLoader())
            dispatch(getFilterYearsAxios())
        }, 2000);

    }, [])
    return (
        <div className={rootClasses}>
            <div className="widget__header widget-filters__header">
                <h4>
                    <FormattedMessage id="HEADER_FILTERS" />
                </h4>
            </div>

            <div className="widget-filters__list">
                {datas?.map((filter: any, index: any) => (
                    <Filter
                        key={index}
                        dataFilTers={datas}
                        title={filter.name}

                    />
                ))}
            </div>

            <div className="widget-filters__actions d-flex">
                <button type="button" className="btn btn-secondary btn-sm" onClick={() => {
                    localStorage.setItem('find', '');
                    localStorage.setItem('search', '');
                    location.reload();
                }}>
                    <FormattedMessage id="BUTTON_RESET" />
                </button>
            </div>
        </div>
    );
}

export default React.memo(WidgetFilters);
//    