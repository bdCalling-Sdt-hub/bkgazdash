import React from 'react';
import { Modal as AntdModal, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const OrderTransactionModal = ({ isModalVisible, setIsModalVisible, setSelectedTransaction, selectedTransaction }) => {
  const navigate = useNavigate();

  const handleDownload = () => {
    if (selectedTransaction) {
        const element = document.createElement("a");
        const file = new Blob(
            [JSON.stringify(selectedTransaction, null, 2)],
            { type: "text/plain" }
        );
        element.href = URL.createObjectURL(file);
        element.download = `transaction_${selectedTransaction.taxId}.txt`;
        document.body.appendChild(element);
        element.click();
    }
};

const handlePrint = () => {
    if (selectedTransaction) {
        const printContent = document.getElementById("print-section").innerHTML;
        const originalContent = document.body.innerHTML;
        document.body.innerHTML = printContent;
        window.print();
        document.body.innerHTML = originalContent;
    }
};

  
  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedTransaction(null);
};


  return (
    <AntdModal
      title="Appointment Details"
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
       
                <Button key="download" onClick={handleDownload}>
                    Download
                </Button>,
                <Button key="print" onClick={handlePrint}>
                    Print
                </Button>,
       
        </div>
      }
      className="text-center custom-modal"
    >
      {selectedTransaction && (
        <div id="print-section">
             <p className="transaction-detail">
            <strong>Order Id:</strong> {selectedTransaction.orderId}
          </p>
             <p className="transaction-detail">
            <strong>Package Item:</strong> {selectedTransaction.package}
          </p>
          <p className="transaction-detail">
            <strong>Date & Time:</strong> {selectedTransaction.date_time}
          </p>
          <p className="transaction-detail">
            <strong>Payment Type:</strong> {selectedTransaction.paymentType}
          </p>
         
          
          <p className="transaction-detail">
            <strong>Status:</strong> {selectedTransaction.status}
          </p>
          {/* <p className="transaction-detail">
            <strong>Date:</strong> {selectedTransaction.date}
          </p> */}
        </div>
      )}
    </AntdModal>
  );
};

export default OrderTransactionModal;
