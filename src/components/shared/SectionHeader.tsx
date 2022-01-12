// react
import React,{useEffect} from 'react';
// third-party
import classNames from 'classnames';
// application
import AppLink from '~/components/shared/AppLink';
import Arrow from '~/components/shared/Arrow';
import { ILink } from '~/interfaces/link';
import { globalIntl } from '~/services/i18n/global-intl';
import { useDispatch } from 'react-redux';
import { getfeaturedCat } from '~/store/featuredCategories/featuredCategoriesHooks';
import {getFeaturedCategories,categoriesLoading} from '~/store/featuredCategories/featuredCategoriesActions';

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
    } = props;

    const dispatch = useDispatch()
    const nameCategories:any = globalIntl()?.formatMessage(
        { id: 'SLUG_CATEGORY_NAME' },
    );
    useEffect(() => {
        dispatch(getFeaturedCategories())
    }, [])
    const getfeaturedCate = getfeaturedCat();
        const namecategoriesIdioma = getfeaturedCate.results.map( (item:any) => item[nameCategories] )

    return (
        <div className="section-header">
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

                {namecategoriesIdioma.length > 0 && (
                    <ul className="section-header__groups">
                        {namecategoriesIdioma.map((item:any, index:any) => (
                            <li key={index} className="section-header__groups-item">
                                <button
                                    type="button"
                                    className={classNames('section-header__groups-button', {
                                        'section-header__groups-button--active': item === currentGroup,
                                    })}
                                    onClick={() => onChangeGroup && onChangeGroup(item)}
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

export default SectionHeader;
