import React from 'react';
import { Modal as AntdModal, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const EarningTransactionModal = ({ isModalVisible, setIsModalVisible, setSelectedTransaction, selectedTransaction }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    if (selectedTransaction) {
      console.log(`Editing user ${selectedTransaction.userName}.`);
      setIsModalVisible(false);
      setSelectedTransaction(null);
    }
  };

  const handleAddMenu = () => {
    if (selectedTransaction) {
      console.log(`Adding menu for user ${selectedTransaction.userName}`);
      setIsModalVisible(false);
      setSelectedTransaction(null);
      navigate('/addMenu'); // Use navigate to go to the add menu page
    }
  };

  const handleDelete = () => {
    if (selectedTransaction) {
      console.log(`Deleting user ${selectedTransaction.userName}`);
      setIsModalVisible(false);
      setSelectedTransaction(null);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedTransaction(null);
  };

  return (
    <AntdModal
      title="Restaurant Details"
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <Button className='bg-[#193664] text-white hover:bg-white hover:text-[#193664] hover:border-[#193664]' key="edit" type="danger" onClick={handleEdit}>
            Edit
          </Button>
          <Button className='bg-white text-[#193664] hover:bg-[#193664] hover:text-white border-[#193664]'  key="addMenu" type="danger" onClick={handleAddMenu}>
            Add Menu
          </Button>
          <Button className='bg-[#193664] text-white hover:bg-white hover:text-[#193664] hover:border-[#193664]' key="delete" type="danger" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      }
      className="bg-[#FFF6E6] text-center custom-modal"
    >
      {selectedTransaction && (
        <div id="print-section">
          <p className="transaction-detail">
            <strong>Restaurant Name:</strong> {selectedTransaction.restaurantName}
          </p>
          <p className="transaction-detail">
            <strong>User Name:</strong> {selectedTransaction.email}
          </p>
          <p className="transaction-detail">
            <strong>Subscription Package:</strong> {selectedTransaction.phoneNumber}
          </p>
          <p className="transaction-detail">
            <strong>Address:</strong> {selectedTransaction.address}
          </p>
          {/* <p className="transaction-detail">
            <strong>Date:</strong> {selectedTransaction.date}
          </p> */}
        </div>
      )}
    </AntdModal>
  );
};

export default EarningTransactionModal;
