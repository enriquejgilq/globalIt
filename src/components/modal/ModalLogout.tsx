import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useIntl } from 'react-intl';


interface Props {
  open: any;
  onChange?: () => void;
}

function ModalLogout(props: Props) {
  const { open, onChange } = props;
  const intl = useIntl();

  return (
    <div>
      <Modal funk={true} isOpen={open} toggle={onChange}>
        <ModalHeader toggle={onChange}>{intl.formatMessage({ id: 'TEXT_SESSION_EXPIRED_TITLE' })}</ModalHeader>
        <ModalBody>
          {intl.formatMessage({ id: 'TEXT_SESSION_EXPIRED' })}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onChange}>{intl.formatMessage({ id: 'BUTTON_ACEPT' })}</Button>
        </ModalFooter>
      </Modal>



    </div>
  )
}

export default ModalLogout