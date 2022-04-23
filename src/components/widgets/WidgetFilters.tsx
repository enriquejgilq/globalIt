// react
import React, { useState, useEffect } from 'react';
import { globalIntl } from '~/services/i18n/global-intl';
import { useDispatch } from 'react-redux';
import { API } from '~/api/constantsApi';

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
import { Button, Input } from 'reactstrap';
import { getCatalogProducts, getCatalogProductsPrivate } from '~/store/catalogProducts/catalogProductsActions';


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
    const [findShop, setFindShop] = React.useState<any>('');
    const [categoryParents, setCategoryParents] = useState("all");
    const [categoryChildren, setCategoryChildren] = useState("all");
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
    const apiCatalogProducts = globalIntl()?.formatMessage(
        { id: 'API_GET_CATALOG_PRODUCTS' },
    )
    const apiCatalogProductsPrivate = globalIntl()?.formatMessage(
        { id: 'API_GET_CATALOG_PRODUCTS_PRIVATE' },
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
    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            shopResetFilters ? shopResetFilters() : null
            //  onFind()
        }
    }

    const onFind = () => {
        if (is_auth === false) {
            dispatch(getCatalogProducts(API + apiCatalogProducts + categoryParents + '/' + categoryChildren + '/?limit=16&search=' + findShop))
            let search = API + apiCatalogProducts + categoryParents + '/' + categoryChildren + '/?limit=16&search=' + findShop
            localStorage.setItem('search', JSON.stringify(search))
            localStorage.setItem('find', JSON.stringify(findShop))
        } else {
            dispatch(getCatalogProductsPrivate(API + apiCatalogProductsPrivate + categoryParents + '/' + categoryChildren + '/?limit=16&search=' + findShop))
            let search = API + apiCatalogProductsPrivate + categoryParents + '/' + categoryChildren + '/?limit=16&search=' + findShop
            localStorage.setItem('search', JSON.stringify(search))
            localStorage.setItem('find', JSON.stringify(findShop))

        }
    }

    return (
        <div className={rootClasses}>
            <div className="widget__header widget-filters__header">
                <h4>
                    <FormattedMessage id="HEADER_FILTERS" />
                </h4>
                <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                    <div style={{ marginBottom: '10px', width: '350px', marginLeft: '-25px', backgroundColor: 'ButtonShadow' }} />
                    <p><b> <FormattedMessage id="BUTTON_BLOCK_FINDER_SEARCH" /></b></p>
                    <Input type='text'
                        value={findShop.replace(/['"]+/g, '')}
                        onKeyPress={handleKeyPress}
                        //onKeyDown={() => {
                        //  shopResetFilters ? shopResetFilters() : null
                        // onFind()}
                        //  }
                        onChange={(e) => {
                            setFindShop(e.currentTarget.value);
                        }}>  </Input>
                    <br />
                    <Button color="primary" size="sm" type='button' onClick={() => {
                        shopResetFilters ? shopResetFilters() : null
                        onFind()
                    }}>
                        <FormattedMessage id="BUTTON_BLOCK_FINDER_SEARCH" />
                    </Button>
                </div>

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