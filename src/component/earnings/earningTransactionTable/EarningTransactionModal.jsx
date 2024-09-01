import React, { useState } from 'react';
import { Modal as AntdModal, Button } from "antd";
import './EarningTransaction.css';

const TransactionTableModal = ({ isModalVisible, setIsModalVisible, setSelectedTransaction, selectedTransaction }) => {
    const handleDownload = () => {
        if (selectedTransaction) {
            const element = document.createElement("a");
            const file = new Blob(
                [JSON.stringify(selectedTransaction, null, 2)],
                { type: "text/plain" }
            );
            element.href = URL.createObjectURL(file);
            element.download = `transaction_${selectedTransaction.trId}.txt`;
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
            title="Transaction Details"
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={
                <div style={{display:"flex", justifyContent: 'center', gap: "10px", padding: "20px" }}>
                  <Button
                   className="download-button"
                  style={{
                     backgroundColor: 'transparent', 
                     color: '#193664', 
                     borderRadius: '15px', 
                     width: "200px",
                     height: "44px",
                     fontWeight: "bold",
                     border: "2px solid #193664",
                     
                     
                 }}
                  key="download" onClick={handleDownload}>
                     Download
                 </Button>,
                 <Button 
                  style={{
                     backgroundColor: '#193664', 
                     color: 'white', 
                     borderRadius: '15px', 
                     width: "200px",
                     height: "44px"
                    
                 }}
                 key="print" onClick={handlePrint}>
                     Print
                 </Button>,
                </div>
             }
             className="bg-[#E8EBF0] custom-modal rounded-lg"
        >
            {selectedTransaction && (
                <div className='' id="print-section">
                    <p className="transaction-detail">
                        <strong>Transaction ID:</strong> {selectedTransaction?.trId || "N/A"}
                    </p>
                    <p className="transaction-detail">
                        <strong>Date:</strong> {selectedTransaction?.date || "N/A"}
                    </p>
                    <p className="transaction-detail">
                        <strong>User name:</strong> {selectedTransaction?.userName || "N/A"}
                    </p>
                    <p className="transaction-detail">
                        <strong>A/C number:</strong> {selectedTransaction?.acNo || "N/A"}
                    </p>
                    <p className="transaction-detail">
                        <strong>A/C holder name:</strong> {selectedTransaction?.acName || "N/A"}
                    </p>
                    <p className="transaction-detail">
                        <strong>Transaction amount:</strong> {selectedTransaction?.date || "N/A"}
                    </p>
                </div>
            )}
        </AntdModal>
    );
};

export default TransactionTableModal;
