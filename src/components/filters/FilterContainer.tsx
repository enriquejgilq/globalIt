import React from 'react'
import { Progress, ButtonGroup, Button, Input, ButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap'
import { globalIntl } from '~/services/i18n/global-intl';

interface Props {
  value: any
}
function FilterContainer(props: Props) {
  const {
    value
  } = props;
  const [state, setState] = React.useState(true)
  const [dropdownOpen, setOpen] = React.useState(false);
  const [typeContainer, settypeContainer] = React.useState('20ft');
  const listContainers: any = globalIntl()?.formatMessage(
    { id: 'TEXT_CONTAINER_LIST' },
);
  const onChange = (e: any) => {
    if (state === false) {
      setState(true)
    } else {
      setState(false)
    }

  }

  const toggle = () => setOpen(!dropdownOpen);
  const handleChange = (code:any) => {
    settypeContainer(code)
    
}

  return (
    <div style={{ display: 'flex', flex: '1', justifyContent: 'center', alignContent: 'center', flexDirection: 'column'}}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div >
          <input onChange={onChange} type="radio" checked={state} value="valueOne" />
          Container
        </div>
        <div>
          <input onChange={onChange} type="radio" checked={!state} value="valueTwo" />
          Pallet
        </div>
      </div>
      {state ?
        <>
          <Progress value={value} color='danger'>
            <span>{value}%</span>
          </Progress>
          <div style={{ display: 'flex', flex: '1', marginTop:'10px', flexDirection: 'column', gap: '10px' }}>
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}
            >
              <DropdownToggle caret>
                {listContainers}
              </DropdownToggle>
              <DropdownMenu>
              <DropdownItem onClick={() => handleChange('20ft')} dropDownValue="20FT">20FT</DropdownItem>
              <DropdownItem onClick={() => handleChange('40fq')} dropDownValue="40FT">40FT</DropdownItem>
              <DropdownItem onClick={() => handleChange('40hq')} dropDownValue="40HQ">40HQ</DropdownItem>
              <DropdownItem onClick={() => handleChange('45ft')} dropDownValue="45FT">45FT</DropdownItem>
              <DropdownItem onClick={() => handleChange('53ft')} dropDownValue="53FT">53FT</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
          {
            typeContainer === '20ft' && 
            <img style={{ width: '250px' }} src="/images/containers/20FT.webp" />
          }
          {
            typeContainer === '40fq' && 
            <img style={{ width: '250px' }} src="/images/containers/40FT.webp" />
          }
          {
            typeContainer === '40hq' && 
            <img style={{ width: '250px' }} src="/images/containers/40HQ.webp" />
          }
          {
            typeContainer === '45ft' && 
            <img style={{ width: '250px' }} src="/images/containers/45FT.webp" />
          }
          {
            typeContainer === '53ft' && 
            <img style={{ width: '250px' }} src="/images/containers/53FT.webp" />
          }

        
        </> :
        <>
          <img style={{ width: '220px' }} src="/images/pallet.jpg" />
        </>
      }
    </div>

  )
}

export default FilterContainer