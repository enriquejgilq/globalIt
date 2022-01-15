// react
import React, { useEffect, useImperativeHandle, useState, useRef } from 'react';
// third-party
import classNames from 'classnames';
// application
import AppLink from '~/components/shared/AppLink';
import Arrow from '~/components/shared/Arrow';
import { ILink } from '~/interfaces/link';
import { globalIntl } from '~/services/i18n/global-intl';
import { useDispatch } from 'react-redux';
import { getfeaturedCat } from '~/store/featuredCategories/featuredCategoriesHooks';
import { getFeaturedCategories, categoriesLoading } from '~/store/featuredCategories/featuredCategoriesActions';

export interface ISectionHeaderGroup {
    name: string;
}

interface Props<T extends ISectionHeaderGroup> {
    sectionTitle?: React.ReactNode;
    arrows?: boolean;
    groups?: T[];
    currentGroup?: T;
    links?: ILink[];
    onNext?: () => void;
    onPrev?: () => void;
    onChangeGroup?: (group: T) => void;
    localStorage?: () => void;
    namecategoriesIdioma: any
    ref: any,
    setFilterType?: (data: any) => void,
}

function SectionHeader<T extends ISectionHeaderGroup>(props: Props<T>) {

    const {
        sectionTitle,
        arrows = false,
        groups = [],
        links = [],
        currentGroup,
        onNext,
        onPrev,
        onChangeGroup,
        localStorage,
        namecategoriesIdioma = [],
        ref,
        setFilterType

    } = props;

    const dispatch = useDispatch()
    const [allCategories, setAllCategories] = useState('')
    const nameCategories: any = globalIntl()?.formatMessage(
        { id: 'SLUG_CATEGORY_NAME' },
    );
    const all: any = globalIntl()?.formatMessage(
        { id: 'TEXT_ALL' },
    );
    useEffect(() => {
        dispatch(getFeaturedCategories())
    }, [])

    const handleRef = (i: any) => {
        var storage: any = window.localStorage;
        storage.setItem('allCategories', i);
        setAllCategories(i)

    }
    const handleRefall = (event: React.BaseSyntheticEvent) => {
        var storage: any = window.localStorage;
        storage.setItem('allCategories', event.target.innerText);
        setAllCategories(event.target.innerText)

    }
    useImperativeHandle(ref, () => ({
        getContactData: () => {
            return allCategories
        }
    }));

    return (
        <div className="section-header" ref={ref}  >
            <div className="section-header__body">
                {sectionTitle && (
                    <h2 className="section-header__title">{sectionTitle}</h2>
                )}

                <div className="section-header__spring" />

                {groups.length === 0 && links.length > 0 && (
                    <ul className="section-header__links">
                        {links.map((link, index) => (
                            <li key={index} className="section-header__links-item">
                                <AppLink href={link.url} className="section-header__links-link">
                                    {link.title}
                                </AppLink>
                            </li>
                        ))}
                    </ul>
                )}
                <button
                    type="button"
                    className={classNames('section-header__groups-button', {
                        'section-header__groups-button--active': '',
                    })}
                    onClick={() => { setFilterType ? setFilterType('all') : null }}
                >
                    {all}
                </button>
                {namecategoriesIdioma?.length > 0 && (
                    <ul className="section-header__groups">
                        {namecategoriesIdioma.map((item: any, index: any) => (
                            <li key={index} className="section-header__groups-item">
                                <button
                                    type="button"
                                    className={classNames('section-header__groups-button', {
                                        'section-header__groups-button--active': item === localStorage,
                                    })}
                                    // onClick={() => onChangeGroup && onChangeGroup(item)}
                                    onClick={() => { setFilterType ? setFilterType(item) : null }}
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}

                {arrows && (
                    <div className="section-header__arrows">
                        <Arrow
                            className="section-header__arrow section-header__arrow--prev"
                            direction="prev"
                            onClick={onPrev}
                        />
                        <Arrow
                            className="section-header__arrow section-header__arrow--next"
                            direction="next"
                            onClick={onNext}
                        />
                    </div>
                )}
                <div className="section-header__divider" />
            </div>
        </div>
    );
}

//export default React.forwardRef(SectionHeader);
export default SectionHeader;
