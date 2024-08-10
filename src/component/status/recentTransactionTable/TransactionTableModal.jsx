import React, { useState } from 'react';
import { Modal as AntdModal, Button } from "antd";

const TransactionTableModal = ({ isModalVisible, setIsModalVisible, setSelectedTransaction, selectedTransaction }) => {
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
            title="Transaction Details"
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={[
                <Button key="download" onClick={handleDownload}>
                    Download
                </Button>,
                <Button key="print" onClick={handlePrint}>
                    Print
                </Button>,
            ]}
            className="bg-[#E8EBF0] custom-modal"
        >
            {selectedTransaction && (
                <div id="print-section">
                    <p className="transaction-detail">
                        <strong>Transaction ID:</strong> {selectedTransaction.taxId}
                    </p>
                    <p className="transaction-detail">
                        <strong>User Name:</strong> {selectedTransaction.name}
                    </p>
                    <p className="transaction-detail">
                        <strong>Subscription Package:</strong> {selectedTransaction.subPackage}
                    </p>
                    <p className="transaction-detail">
                        <strong>Amount:</strong> {selectedTransaction.amount}
                    </p>
                    <p className="transaction-detail">
                        <strong>Date:</strong> {selectedTransaction.date}
                    </p>
                </div>
            )}
        </AntdModal>
    );
};

export default TransactionTableModal;
