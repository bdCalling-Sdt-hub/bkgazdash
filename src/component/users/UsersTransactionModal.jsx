import React from 'react';
import { Modal as AntdModal, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';

const UsersTransactionModal = ({ isModalVisible, setIsModalVisible, setSelectedTransaction, selectedTransaction }) => {
  const navigate = useNavigate();
 

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedTransaction(null);
  };

  return (
    <AntdModal
      title="Users Details"
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={
        <div style={{ display: "flex", justifyContent: 'center', gap: "10px", padding: "20px" }}>
          
        </div>
      }
      className="text-center custom-modal"
    >
      {selectedTransaction && (
        <div id="print-section">
          <p className="transaction-detail">
            <strong>User Name:</strong> {selectedTransaction.fullName}
          </p>
          <p className="transaction-detail">
            <strong>Email:</strong> {selectedTransaction.email}
          </p>
          <p className="transaction-detail">
            <strong>Subscription Package:</strong> {selectedTransaction.phoneNumber}
          </p>
          <p className="transaction-detail">
            <strong>Address:</strong> {selectedTransaction.address}
          </p>
          <p className="transaction-detail">
            <strong>Joining Date:</strong>  <p>{selectedTransaction?.createdAt?.split("T")[0] ? selectedTransaction?.createdAt?.split("T")[0] : "N/A"}</p>
          </p>
        </div>
      )}
    </AntdModal>
  );
};

export default UsersTransactionModal;
