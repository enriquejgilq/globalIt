import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { globalIntl } from '~/services/i18n/global-intl';
import { Input, Button } from "reactstrap";
import styles from './filter.module.scss'
import { getFilterYearsAxios, getFilterYearsLoader, getFilterMakeAxios, getFilterMakeLoader } from '~/store/filterApplications/filterApplicationsActions';

interface Props {
    value: any
}
function FilterApplications(props: Props) {
    const {
        value
    } = props;
    const dispatch = useDispatch()

    const [state, setState] = React.useState(true)
    //data de prueba, consumir api y traer los datos 
    const data: any = [{
        label: '1',
        value: '1',
        disabled: false,
        placeholder: 'hola'
    },
    {
        label: '1',
        value: '1',
        disabled: false,
        placeholder: 'hola'
    },
    {
        label: '1',
        value: '1',
        disabled: false,
        placeholder: 'hola'

    },


    ]
    const options: any = [
        { option: '1', label: '1' },
        { option: '2', label: '2' },
        { option: '3', label: '3' },
    ]
    const onSelectYear = (e: any) => {
        dispatch(getFilterMakeLoader())
        dispatch(getFilterMakeAxios(e.currentTarget.value))
    }

    return (
        <div className={styles.filterApplications}>
            <Input type={"select"}
                onChange={(e) => onSelectYear(e)}>
                {value?.years.map((item: any) => (
                    <>
                    <option value={item.year}>{item.year}</option>
                    </>
                ))}
            </Input>
            <Input type={"select"}>
                {value.make === undefined ? (
                    <option value={''}>{''}</option>) : (
                    <>
                    {value.make?.map((item: any) => (
                    <>
                     <option value={item.brand}>{item.brand}</option>
                    </>
                    ))}
                    </>
                    )}
            </Input>
            <Input
                type={"select"}>
                <option value="" hidden></option>
                <option value={"option1"}>Option 1</option>
                <option value={"option2"}>Option 2</option>
            </Input>
            <Input
                type={"select"}>
                <option value="" hidden></option>
                <option value={"option1"}>Option 1</option>
                <option value={"option2"}>Option 2</option>
            </Input>
        </div>

    )
}

export default FilterApplications