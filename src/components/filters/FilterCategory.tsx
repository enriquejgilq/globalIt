// react
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { API } from '~/api/constantsApi';

// third-party
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
// application
import AppLink from '~/components/shared/AppLink';
import url from '~/services/url';
import { ArrowRoundedLeft6x9Svg } from '~/svg';
import { getCategoryParents } from '~/services/utils';
import { ICategoryFilter } from '~/interfaces/filter';
import { globalIntl } from '~/services/i18n/global-intl';
import { getCategoryProducts } from '~/store/categoryProducts/categoryProductsHooks';
import { getCategoryProductsChildrenState } from '~/store/categoryProducts/categoryProductsChildren/categoryProductsChildrenHooks';
import { getCatalogProducts, getCatalogProductsPrivate } from '~/store/catalogProducts/catalogProductsActions';
import { Button, Input } from 'reactstrap';

interface Props {
    //  options: ICategoryFilter;
    categoryProductsParents: any;
    categoryProductsChildren: any;
    selectCategoryChildren?: (parent: any) => void,
    onClearCategoryChildren?: () => void,
    is_auth: boolean,
}

function FilterCategory(props: Props) {
    const { categoryProductsParents,
        categoryProductsChildren,
        selectCategoryChildren,
        onClearCategoryChildren,
        is_auth
    } = props;
    const dispatch = useDispatch()
    const [categoryParents, setCategoryParents] = useState("all");
    const [categoryChildren, setCategoryChildren] = useState("all");
    const [findShop, setFindShop] = useState('')

    const categoryProducts = getCategoryProducts();
    const childrenProducts = getCategoryProductsChildrenState();
    const nameCategoryProducts: any = globalIntl()?.formatMessage(
        { id: 'SLUG_NAME' },
    );

    const slugCategoryProducts: any = globalIntl()?.formatMessage(
        { id: 'SLUG_CATEGORY_NAME' },
    );

    const translate: any = globalIntl()?.formatMessage(
        { id: 'TEXT_TRANSLATE' },
    );
    const apiCatalogProducts = globalIntl()?.formatMessage(
        { id: 'API_GET_CATALOG_PRODUCTS' },
    )
    const apiCatalogProductsPrivate = globalIntl()?.formatMessage(
        { id: 'API_GET_CATALOG_PRODUCTS_PRIVATE' },
    )

    const clear = () => {
        onClearCategoryChildren
    }
    const onFind = () => {
        if (is_auth=== false) {
         dispatch(getCatalogProducts(API + apiCatalogProducts + categoryParents+'/'+categoryChildren+'/?limit=16&search='+findShop))
        }else {
            dispatch(getCatalogProductsPrivate(API + apiCatalogProducts + categoryParents+'/'+categoryChildren+'/?limit=16&search='+findShop))
        }

    }

    const result = categoryProductsChildren.results.map((id: any) => id.parent_category[nameCategoryProducts]);
    return (
        <div className="filter-category">
            <ul className="filter-category__list">
                {categoryProductsChildren.results != 0 && (<>
                    <li className="filter-category__item filter-category__item--parent">
                        <span className="filter-category__arrow">
                            <ArrowRoundedLeft6x9Svg />
                        </span>

                        <button type="button"
                            className={classNames('section-header__groups-button', {
                                'section-header__groups-button--active': '',
                            })}
                            onClick={onClearCategoryChildren}>
                            <FormattedMessage id="LINK_ALL_PRODUCTS" />
                        </button>
                    </li>
                    <p><b>{result[0]}</b></p>
                    {categoryProductsChildren.results?.map((item: any) => (
                        <> <li>
                            <button type="button" className={classNames('section-header__groups-button', {
                                'section-header__groups-button--active': '',
                            })}
                                onClick={() => {
                                    setCategoryChildren(item.child_category[slugCategoryProducts])
                                    if (is_auth) {
                                        dispatch(getCatalogProductsPrivate(API + apiCatalogProductsPrivate + item.parent_category[slugCategoryProducts] + '/' + item.child_category[slugCategoryProducts] + '/?limit=16'))

                                    } else {
                                        dispatch(getCatalogProducts(API + apiCatalogProducts + item.parent_category[slugCategoryProducts] + '/' + item.child_category[slugCategoryProducts] + '/?limit=16'))
                                    }
                                }
                                }>
                                {item.child_category[nameCategoryProducts] === null ? translate : item.child_category[nameCategoryProducts]}
                            </button>
                        </li>
                        </>))}
                </>
                )}
                {categoryProductsChildren.results >= 0 && (<>
                    {categoryProductsParents.results.map((item: any) => (
                        <React.Fragment key={item.id}>
                            <button type="button"
                                className={classNames('section-header__groups-button', {
                                    'section-header__groups-button--active': '',
                                })}
                                onClick={() => {
                                    selectCategoryChildren ? selectCategoryChildren(item[slugCategoryProducts]) : null
                                    setCategoryParents(item[slugCategoryProducts])
                                }}>
                                {item[nameCategoryProducts]}
                            </button>
                        </React.Fragment>
                    ))}
                </>)}
                <li>
                    <Input type='text'
                     value={findShop}
                     onChange={(e) => {
                         setFindShop(e.currentTarget.value);
                     }}
                    > </Input>

                    <Button color="primary" size="sm" type='button' onClick={onFind}> 
                    <FormattedMessage id="BUTTON_BLOCK_FINDER_SEARCH" /> 
                    </Button>

                </li>

            </ul>
        </div>
    );
}

export default FilterCategory;
