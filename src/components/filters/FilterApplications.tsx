import React, { useEffect, useState,useReducer } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import { API_SHOP, PUBLIC_LOGIN } from "~/api/constantsApi";
import { Input, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem  } from "reactstrap";
import styles from './filter.module.scss'
import {
    getFilterMakeAxios,
    getFilterMakeLoader,
    getFilterModelAxios,
    getFilterModelLoader,
    getFilterEngineAxios,
    getFilterEngineLoader,
    clearApplications,
} from '~/store/filterApplications/filterApplicationsActions';
import { getCatalogProducts, getCatalogProductsPrivate } from '~/store/catalogProducts/catalogProductsActions';
import { isAuth } from '~/store/login/loginHooks';

interface Props {
    value: any
}
function FilterApplications(props: Props) {
    const {
        value
    } = props;
    const dispatch = useDispatch()
    const intl = useIntl();
    const is_auth = isAuth()

    const [state, setState] = React.useState(true)
    const [year, setYear] = useState('')
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [path, setPath] = useState('')
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const onSelectYear = (e: any) => {
        if (e.target.value === '' || e.target.value === undefined) {
            toast.error(intl.formatMessage({ id: 'TEXT_TOAST_SELECT_YEAR' }));
        } else {
            dispatch(clearApplications())
            dispatch(getFilterMakeLoader())
            dispatch(getFilterMakeAxios(e.currentTarget.value))
            setYear(e.currentTarget.value)
        }

    }
    const onSelectMake = (e: any) => {
        if (e.target.value === '' || e.target.value === undefined) {
            toast.error(intl.formatMessage({ id: 'TEXT_TOAST_SELECT_BRAND' }));
        } else {
            setMake(e.currentTarget.value)
            dispatch(getFilterModelLoader())
            dispatch(getFilterModelAxios(year + '/' + e.currentTarget.value))
        }
    }

    const onSelectModel = (e: any) => {
        if (e.target.value === '' || e.target.value === undefined) {
            toast.error(intl.formatMessage({ id: 'TEXT_TOAST_SELECT_MODEL' }));
        } else {
            dispatch(getFilterEngineLoader())
            dispatch(getFilterEngineAxios(year + '/' + make + '/' + e.currentTarget.value))
        }
    }
    const onSelectEngine = (e: any) => {
        if (e.target.value === '' || e.target.value === undefined) {
            toast.error(intl.formatMessage({ id: 'TEXT_TOAST_SELECT_ENGINE' }));
        } else {
            if (is_auth === true) {
                dispatch(getCatalogProductsPrivate(API_SHOP + "products-application/" + e.target.value + "/"))
                localStorage.setItem('path', API_SHOP + "products-application/" + e.target.value + "/")
                localStorage.setItem('search', JSON.stringify( API_SHOP + "products-application/" + e.target.value + "/"))


            } else {
                dispatch(getCatalogProducts(API_SHOP + PUBLIC_LOGIN + "products-application/" + e.target.value + "/"))
                localStorage.setItem('path', API_SHOP + PUBLIC_LOGIN + "products-application/" + e.target.value + "/")
                localStorage.setItem('search', JSON.stringify(  API_SHOP + PUBLIC_LOGIN + "products-application/" + e.target.value + "/"))

            }
            setModel(e.currentTarget.value)
        }
    }
   const toggle = () => {
    setDropdownOpen(!dropdownOpen);
      }
    useEffect(() => {
        forceUpdate();
    }, [year]);
    return (
        <div className={styles.filterApplications}>
            <Input type={"select"}    onChange={(e) => onSelectYear(e)}>
                <option value={''}> {intl.formatMessage({ id: 'TEXT_TOAST_SELECT_YEAR' })} </option>
                {value?.years.map((item: any) => (
                    <>
                        <option value={item.year}>{item.year}</option>
                    </>
                ))}
            </Input>
            <Input type={"select"} onChange={(e) => onSelectMake(e)}>
                <option value={''}> {intl.formatMessage({ id: 'TEXT_TOAST_SELECT_BRAND' })}</option>
                {value.make === undefined ? (
                    <option value={''}>{''}</option>) : (<>
                        {value.make?.map((item: any) => (
                            <> <option value={item.brand}>{item.brand}</option> </>))}
                    </>)}
            </Input>
            <Input
                type={"select"} onChange={(e) => onSelectModel(e)}>
                <option value={''}>{intl.formatMessage({ id: 'TEXT_TOAST_SELECT_MODEL' })}</option>
                {value.model === undefined ? (
                    <option value={''}>{''}</option>) : (<>
                        {value.model?.map((item: any) => (
                            <> <option value={item.model}>{item.model}</option> </>))}
                    </>)}
            </Input>
            <Input type={"select"} onChange={(e) => onSelectEngine(e)}>
                <option value={''}>{intl.formatMessage({ id: 'TEXT_TOAST_SELECT_ENGINE' })}</option>
                {value.engine === undefined ? (
                    <option value={''}>{''}</option>) : (<>
                        {value.engine?.map((item: any) => (
                            <> <option value={item.id}>{item.engine}</option> </>))}
                    </>)}
            </Input>
        </div>

    )
}

export default FilterApplications