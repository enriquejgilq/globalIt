import React from 'react'
import { useDispatch } from 'react-redux';
import { API_SHOP, PUBLIC_LOGIN } from "~/api/constantsApi";
import { toast } from 'react-toastify';
import { isAuth } from '~/store/login/loginHooks';
import { useIntl } from 'react-intl';

import { Button, Input } from 'reactstrap'
import { getCatalogProducts, getCatalogProductsPrivate } from '~/store/catalogProducts/catalogProductsActions';

type Props = {}

const FilterCrossReferents = (props: Props) => {
    const [findShop, setFindShop] = React.useState('')
    const dispatch = useDispatch()
    const is_auth = isAuth()
    const intl = useIntl();
 
    const onFind = () => {
        if (findShop === '' || findShop === undefined) {
            toast.error(intl.formatMessage({ id: 'TEXT_TOAST_REFERENCE_EMPTY' }));
        } else {
            if (is_auth === true) {
                dispatch(getCatalogProductsPrivate(API_SHOP + "cross-references/?search=" + findShop ))
                localStorage.setItem('path', API_SHOP + "cross-references/?search=" + findShop )

            } else {
                dispatch(getCatalogProducts(API_SHOP + PUBLIC_LOGIN + "cross-references/?search=" + findShop ))
                localStorage.setItem('path', API_SHOP + PUBLIC_LOGIN + "cross-references/?search=" + findShop )
            }
        }
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
            <Input type='text'
                onChange={(e) => {
                    setFindShop(e.currentTarget.value);
                }}>

            </Input>
            <Button onClick={onFind}> Buscar</Button>
        </div>
    )
}

export default FilterCrossReferents