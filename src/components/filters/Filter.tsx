import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { globalIntl } from '~/services/i18n/global-intl';

import { ArrowRoundedDown12x7Svg } from '~/svg';
import FilterCategory from '~/components/filters/FilterCategory';
import FilterVehicle from '~/components/filters/FilterVehicle';
import { getFilterValue, isDefaultFilterValue, serializeFilterValue } from '~/services/filters';
import FilterRange from '~/components/filters/FilterRange';
import FilterCheck from '~/components/filters/FilterCheck';
import FilterRadio from '~/components/filters/FilterRadio';
import FilterRating from '~/components/filters/FilterRating';
import FilterColor from '~/components/filters/FilterColor';
import FilterContainer from '~/components/filters/FilterContainer';
import Collapse, { ICollapseRenderFn } from '~/components/shared/Collapse';
import { IFilter } from '~/interfaces/filter';
import { useShopSetFilterValueThunk } from '~/store/shop/shopHooks';
import { getCategoryProducts } from '~/store/categoryProducts/categoryProductsHooks';
import { getCategoryProductsParents, getCategoryLoading } from '~/store/categoryProducts/categoryProductsActions';
import {
    getCategoryProductsChildren,
    clearCategoryChildren, getCategoryProductsChildrenPrivate
} from '~/store/categoryProducts/categoryProductsChildren/categoryProductsChildrenAction';
import { getCategoryProductsChildrenState } from '~/store/categoryProducts/categoryProductsChildren/categoryProductsChildrenHooks';
import { getlogin, isAuth } from '~/store/login/loginHooks'
import { useCart } from '~/store/cart/cartHooks';
import { Button } from 'reactstrap';


type RenderFilterFn = ICollapseRenderFn<HTMLDivElement, HTMLDivElement>;

interface ChangeValueEvent {
    filter: IFilter;
    // value: IFilter['value'];
}

interface Props {
    //  filter: IFilter;
    title: string;
    dataFilTers: any;
    // value: string;
}

function Filter(props: Props) {
    const {// filter,
        title,
        dataFilTers,
        //   value 
    } = props;
    const dispatch = useDispatch()
    const is_auth = isAuth()
    const cart = useCart();

    const shopSetFilterValue = useShopSetFilterValueThunk();
    const categoryProductsParents = getCategoryProducts();
    const categoryProductsChildren = getCategoryProductsChildrenState();
    const [value, setValue] = React.useState<any>();

    /* const handleValueChange = useCallback(({ filter, value }: ChangeValueEvent) => {
         shopSetFilterValue(
             filter.slug,
             isDefaultFilterValue(filter, value) ? null : serializeFilterValue(filter, value),
         ).then();
     }, [shopSetFilterValue]);*/
    const nameCategoryProducts = globalIntl()?.formatMessage(
        { id: 'TEXT_CATEGORY' },
    )
    const nameContainer = globalIntl()?.formatMessage(
        { id: 'TEXT_CONTAINER' },
    )
    useEffect(() => {
        dispatch(getCategoryLoading());
        dispatch(getCategoryProductsParents())
    }, [])

    useEffect(() => {
        const ft: any = cart.items.map((item: any) =>
            ((item.product.long * item.product.weight * item.product.width) / 1.728) * item.quantity
        )
        const reducer = (accumulator: any, curr: any) => accumulator + curr;
        if (ft.length > 0) {
            setValue(ft?.reduce(reducer))
        }
        else {
            setValue(0)
        }
    }, [cart])

    const selectCategoryChildren = (parent: any) => {
        if (is_auth) {
            dispatch(getCategoryProductsChildrenPrivate(parent))
        } else {
            dispatch(getCategoryProductsChildren(parent))
        }
    }

    const onClearCategoryChildren = () => {
        dispatch(clearCategoryChildren())
    }
    const renderFn: RenderFilterFn = ({ toggle, setItemRef, setContentRef }) => (
        <div className="filter filter--opened" ref={setItemRef}>
            <button type="button" className="filter__title" onClick={toggle}>
                {title}
                <span className="filter__arrow">
                    <ArrowRoundedDown12x7Svg />
                </span>
            </button>
            <div className="filter__body" ref={setContentRef}>
                <div className="filter__container">
                    {title === nameCategoryProducts &&
                        <FilterCategory
                            categoryProductsParents={categoryProductsParents}
                            categoryProductsChildren={categoryProductsChildren}
                            selectCategoryChildren={selectCategoryChildren}
                            onClearCategoryChildren={onClearCategoryChildren}
                            is_auth={is_auth}
                        />
                    }
                    {title === nameContainer && <FilterContainer value={value} />}


                    {/** 

                            {filter.type === 'range' && (
                                <FilterRange
                                    options={filter}
                                    value={getFilterValue(filter, value)}
                                    onChangeValue={handleValueChange}
                                />
                            )}

                            {filter.type === 'check' && (
                                <FilterCheck
                                    options={filter}
                                    value={getFilterValue(filter, value)}
                                    onChangeValue={handleValueChange}
                                />
                            )}

                            {filter.type === 'radio' && (
                                <FilterRadio
                                    options={filter}
                                    value={getFilterValue(filter, value)}
                                    onChangeValue={handleValueChange}
                                />
                            )}

                            {filter.type === 'rating' && (
                                <FilterRating
                                    options={filter}
                                    value={getFilterValue(filter, value)}
                                    onChangeValue={handleValueChange}
                                />
                            )}

                            {filter.type === 'color' && (
                                <FilterColor
                                    options={filter}
                                    value={getFilterValue(filter, value)}
                                    onChangeValue={handleValueChange}
                                />
                            )} */}
                </div>
            </div>
        </div>
    );

    return (
        <div className="widget-filters__item">
            <Collapse toggleClass="filter--opened" render={renderFn} />
        </div>
    );
}

export default React.memo(Filter);
