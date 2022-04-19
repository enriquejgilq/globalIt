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
 
    return (
        <div className={styles.filterApplications}>
           <p> filter croos </p>
        </div>

    )
}

export default FilterCroos