import React, { useState } from 'react';
import { Modal as AntdModal, Button } from "antd";
import './manager.css';
import baseUrl from '../../redux/api/baseUrl';
import jsPDF from 'jspdf';

const TransactionTableModal = ({ isModalVisible, setIsModalVisible, setSelectedTransaction, selectedTransaction }) => {
    // const handleDownload = () => {
    //     if (selectedTransaction) {
    //         const element = document.createElement("a");
    //         const file = new Blob(
    //             [JSON.stringify(selectedTransaction, null, 2)],
    //             { type: "text/plain" }
    //         );
    //         element.href = URL.createObjectURL(file);
    //         element.download = `transaction_${selectedTransaction.taxId}.txt`;
    //         document.body.appendChild(element);
    //         element.click();
    //     }
    // };
    const handleDownload = () => {
        if (selectedTransaction) {
            const doc = new jsPDF();
            
            // Add content to the PDF
            doc.text("Transaction Details", 10, 10);
            doc.text(`Name: ${selectedTransaction?.fullName}`, 10, 20);
            doc.text(`PhoneNumber: ${selectedTransaction?.phoneNumber}`, 10, 30);
            doc.text(`Address: ${selectedTransaction?.address || " n/a"}`, 10, 40);
            
            doc.text(`Date: ${selectedTransaction?.createdAt?.split("T")[0] ? selectedTransaction?.createdAt?.split("T")[0] : "N/A"}`, 10, 60);
            
    
            // Save the generated PDF
            doc.save(`transaction_${selectedTransaction.taxId}.pdf`);
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

    console.log(selectedTransaction);
    

    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedTransaction(null);
    };

    return (
        <AntdModal
            
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={
               <div style={{ display: "flex", justifyContent: 'center', gap: "10px", padding: "16px" }}>
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
            className="custom-modal rounded-lg"
        >
            
            {selectedTransaction && (
                <div className='transaction-details' id="print-section">
                    <div className='my-8 text-center'> 
                    <img className='h-24 w-24 rounded-full mx-auto ' src={baseUrl + selectedTransaction?.image} alt="" />
                    <h1>Manager Details</h1>
                    </div>
                    <p className="transaction-detail">
                        <strong>Date:</strong> {selectedTransaction?.createdAt?.split("T")[0] ? selectedTransaction?.createdAt?.split("T")[0] : "N/A"}
                    </p>
                    <p className="transaction-detail">
                        <strong>User name:</strong> {selectedTransaction?.fullName}
                    </p>
                    
                    <p className="transaction-detail">
                        <strong> PhonNumber :</strong> {selectedTransaction?.phoneNumber}
                    </p>
                    <p className="transaction-detail">
                        <strong>Address:</strong> {selectedTransaction?.address || " n/a"}
                    </p>
                </div>
            )}
        </AntdModal>
    );
};

export default TransactionTableModal;
