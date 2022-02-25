import React from 'react'
import { Progress, ButtonGroup, Button } from 'reactstrap'




interface Props {
  value: any
}
function FilterContainer(props: Props) {
  const {
    value
  } = props;
  const [state, setState] = React.useState(true)
  const onChange = (e: any) => {
    if (state === false) {
      setState(true)
    } else {
      setState(false)
    }

  }
  return (
    <div style={{ display: 'flex', flex: '1', justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
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
          <img style={{ width: '220px' }} src="/images/container.jpg" />
        </>:
        <>
          <img style={{ width: '220px' }} src="/images/pallet.jpg" />
        </>
      }
    </div>

  )
}

export default FilterContainer