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
import Collapse, { ICollapseRenderFn } from '~/components/shared/Collapse';
import { IFilter } from '~/interfaces/filter';
import { useShopSetFilterValueThunk } from '~/store/shop/shopHooks';
import { getCategoryProducts } from '~/store/categoryProducts/categoryProductsHooks';
import { getCategoryProductsParents, getCategoryLoading } from '~/store/categoryProducts/categoryProductsActions';
import { getCategoryProductsChildren,
        clearCategoryChildren
  } from '~/store/categoryProducts/categoryProductsChildren/categoryProductsChildrenAction';
import { getCategoryProductsChildrenState } from '~/store/categoryProducts/categoryProductsChildren/categoryProductsChildrenHooks';

type RenderFilterFn = ICollapseRenderFn<HTMLDivElement, HTMLDivElement>;

interface ChangeValueEvent {
    filter: IFilter;
    value: IFilter['value'];
}

interface Props {
    //  filter: IFilter;
    dataFilTers:any;
    value: string;
}

function Filter(props: Props) {
    const {// filter,
        dataFilTers,
         value } = props;
    const dispatch = useDispatch()

    const shopSetFilterValue = useShopSetFilterValueThunk();
    const categoryProductsParents = getCategoryProducts();
    const categoryProductsChildren = getCategoryProductsChildrenState();

    const handleValueChange = useCallback(({ filter, value }: ChangeValueEvent) => {
        shopSetFilterValue(
            filter.slug,
            isDefaultFilterValue(filter, value) ? null : serializeFilterValue(filter, value),
        ).then();
    }, [shopSetFilterValue]);
    const nameCategoryProducts = globalIntl()?.formatMessage(
        { id: 'TEXT_CATEGORY' },
    )
    
    useEffect(() => {
        dispatch(getCategoryLoading());
        dispatch(getCategoryProductsParents())
    }, [])
   
    const selectCategoryChildren = (parent:any) => {
        dispatch(getCategoryProductsChildren(parent))
    }
    const onClearCategoryChildren = () => {
        dispatch(clearCategoryChildren())
    }

    const renderFn: RenderFilterFn = ({ toggle, setItemRef, setContentRef }) => (

        <div className="filter filter--opened" ref={setItemRef}>
            {dataFilTers.map((item: any, index: any) => (
                <>
                <button type="button" className="filter__title" onClick={toggle} key={index}>
                    {item.name}
                    <span className="filter__arrow">
                        <ArrowRoundedDown12x7Svg />
                    </span>
                </button>
                <div className="filter__body" ref={setContentRef}>
                        <div className="filter__container">
                            <FilterCategory
                                categoryProductsParents={categoryProductsParents} 
                                categoryProductsChildren={categoryProductsChildren}
                                selectCategoryChildren={selectCategoryChildren}
                                onClearCategoryChildren={onClearCategoryChildren}
                                />
                            {/** 
                             * 
                             * data fake from template!!!!!!  
                      {filter.type === 'vehicle' && (
                                <FilterVehicle
                                    options={filter}
                                    value={getFilterValue(filter, value)}
                                    onChangeValue={handleValueChange}
                                />
                            )}

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
                </>

            ))}
        </div>
    );

    return (
        <div className="widget-filters__item">
            <Collapse toggleClass="filter--opened" render={renderFn} />
        </div>
    );
}

export default React.memo(Filter);
