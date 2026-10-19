'use Client';

import{ Button, Modal } from "antd";
;

export default function ConfirmDelete({ openModal, serie, confirmLoading, onConfirm, onCancel }) {
    return(
        <Modal 
            open={openModal}
            title="confirmar Exclusão"
            centered
            onCancel={onCancel}
            footer={null}
            destroyOnHidden>
                <p>Tem certeza que deseja excluir a série "{serie?.title}"?</p>
                <Button danger type="primary" loading={confirmLoading} onClick={onConfirm}>
                    Excluir
                </Button>
        </Modal>
    )
}