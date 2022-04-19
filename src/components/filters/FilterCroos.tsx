import React from 'react'
import { globalIntl } from '~/services/i18n/global-intl';
import { Input, Button } from "reactstrap";
import styles from './filter.module.scss'

interface Props {
    value: any
}
function FilterCroos(props: Props) {
    const {
        value
    } = props;
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
    return (
        <div className={styles.filterApplications}>
           <p> filter croos </p>
        </div>

    )
}

export default FilterCroos