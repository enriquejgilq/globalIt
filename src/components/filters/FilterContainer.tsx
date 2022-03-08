import React from 'react'
import { Progress, ButtonGroup, Button, Input, ButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap'

interface Props {
  value: any
}
function FilterContainer(props: Props) {
  const {
    value
  } = props;
  const [state, setState] = React.useState(true)
  const [dropdownOpen, setOpen] = React.useState(false);
  const [typeContainer, settypeContainer] = React.useState();
  const typeContainerImage: any = [
    { value: '20ft', name: '20FT' },
    { value: '40fq', name: '40FT' },
    { value: '40hq', name: '40HQ' },
    { value: '45ft', name: '45FT' },
    { value: '53ft', name: '53FT' },
  ]
  const onChange = (e: any) => {
    if (state === false) {
      setState(true)
    } else {
      setState(false)
    }

  }

  const toggle = () => setOpen(!dropdownOpen);
  const onSelectContainer =()=>{
    console.log()
  }

  return (
    <div style={{ display: 'flex', flex: '1', justifyContent: 'center', alignContent: 'center', flexDirection: 'column', height:'350px'}}>
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
          </Progress>
          <div style={{ display: 'flex', flex: '1', justifyContent: 'center', alignContent: 'center', flexDirection: 'column', gap: '10px' }}>
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}
            >
              <DropdownToggle caret>
                Lista de containers
              </DropdownToggle>


              <DropdownMenu>
                {typeContainerImage.map((item: any) => (
                  <>
                    <DropdownItem value={item.value} onClick={(e)=>console.log(e)} >
                      {item.name}
                    </DropdownItem>
                    <DropdownItem divider />
                  </>
                ))}

              </DropdownMenu>
            </ButtonDropdown>
          </div>

          <img style={{ width: '220px' }} src="/images/container.jpg" />
        </> :
        <>
          <img style={{ width: '220px' }} src="/images/pallet.jpg" />
        </>
      }
    </div>

  )
}

export default FilterContainer