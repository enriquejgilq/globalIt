import React from 'react'
import { Progress } from 'reactstrap'




interface Props {
  value:any
}
function FilterContainer(props: Props) {
  const { 
    value
} = props;
  return (
    <div style={{ display: 'flex', flex: '1', justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
      <Progress value={value}
      color={
        value === 20 ? 'success' : 'danger'
      }
      
      
      
      
      >
      </Progress>
      <img style={{ width: '220px' }} src="/images/container.jpg" />
    </div>

  )
}

export default FilterContainer