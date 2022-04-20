import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import { API } from "~/api/constantsApi";
import { Input, Button } from "reactstrap";
import styles from './filter.module.scss'
import {
    getFilterMakeAxios,
    getFilterMakeLoader,
    getFilterModelAxios,
    getFilterModelLoader,
    getFilterEngineAxios,
    getFilterEngineLoader
} from '~/store/filterApplications/filterApplicationsActions';
import { getCatalogProducts } from '~/store/catalogProducts/catalogProductsActions';

interface Props {
    value: any
}
function FilterApplications(props: Props) {
    const {
        value
    } = props;
    const dispatch = useDispatch()
    const intl = useIntl();

    const [state, setState] = React.useState(true)
    const [year, setYear] = useState('')
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')


    const onSelectYear = (e: any) => {
        if (e.target.value === '' || e.target.value === undefined) {
            toast.error(intl.formatMessage({ id: 'TEXT_TOAST_SELECT_YEAR' }));
        } else {
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
            dispatch(getCatalogProducts(API + "inventory/public-products-application/" + e.target.value + "/"))
            setModel(e.currentTarget.value)
        }
    }

    return (
        <div className={styles.filterApplications}>
            <Input type={"select"} onChange={(e) => onSelectYear(e)}>
                <option value={''}>{''}</option>
                {value?.years.map((item: any) => (
                    <>
                        <option value={item.year}>{item.year}</option>
                    </>
                ))}
            </Input>
            <Input type={"select"} onChange={(e) => onSelectMake(e)}>
                <option value={''}></option>
                {value.make === undefined ? (
                    <option value={''}>{''}</option>) : (<>
                        {value.make?.map((item: any) => (
                            <> <option value={item.brand}>{item.brand}</option> </>))}
                    </>)}
            </Input>
            <Input
                type={"select"} onChange={(e) => onSelectModel(e)}>
                <option value={''}>{''}</option>
                {value.model === undefined ? (
                    <option value={''}>{''}</option>) : (<>
                        {value.model?.map((item: any) => (
                            <> <option value={item.model}>{item.model}</option> </>))}
                    </>)}
            </Input>
            <Input type={"select"} onChange={(e) => onSelectEngine(e)}>
                <option value={''}>{''}</option>
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