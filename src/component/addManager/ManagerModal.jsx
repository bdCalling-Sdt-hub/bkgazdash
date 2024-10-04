import React, { useState } from 'react';
import { Modal as AntdModal, Button } from "antd";
import './manager.css';
import baseUrl from '../../redux/api/baseUrl';
import jsPDF from 'jspdf';

const TransactionTableModal = ({ isModalVisible, setIsModalVisible, setSelectedTransaction, selectedTransaction }) => {
    const handleDownload = (record) => {
        const doc = new jsPDF();
        const padding = 20;
    
        // Add Title
        doc.setFontSize(22);
        doc.setTextColor(40);
        doc.text("Manager Details", 105, padding, null, null, "center");
        doc.setDrawColor(0, 0, 0);
        doc.line(padding, padding + 5, 210 - padding, padding + 5);
    
        // Define the content data
        const content = [
            { label: "Manager Name", value: selectedTransaction?.fullName || "N/A" },
            
            { label: "phoneNumber ", value: selectedTransaction?.phoneNumber || "N/A" },
            { label: "Add Date", value: selectedTransaction?.createdAt ? selectedTransaction?.createdAt.split("T")[0] : "N/A" },
            { label: "Address", value: selectedTransaction?.address || "N/A" },
             
        ];
    
        // Add each line to the PDF
        doc.setFontSize(16);
        doc.setTextColor(0);
        content.forEach((item, index) => {
            doc.setFont("helvetica", "normal");
            doc.text(`${item.label}:`, padding, padding + 15 + index * 10);
            doc.setFont("helvetica", "bold");
            doc.text(`${item.value}`, padding + 50, padding + 15 + index * 10);
        });
    
        // Add a closing message
        doc.setFontSize(12);
        doc.text("Thank you for your order!", 105, 280, null, null, "center");
    
        // Save the PDF
        doc.save(`${' Manager Details' || 'manager'}.pdf`);
    };
 
    

    // const handlePrint = () => {
    //     if (selectedTransaction) {
    //         const printContent = document.getElementById("print-section").innerHTML;
    //         const originalContent = document.body.innerHTML;
    //         document.body.innerHTML = printContent;
    //         window.print();
    //         document.body.innerHTML = originalContent;
    //     }
    // };

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
                {/* <Button 
                    style={{
                        backgroundColor: '#193664', 
                        color: 'white', 
                        borderRadius: '15px', 
                        width: "200px",
                        height: "44px"
                    }}
                    key="print" onClick={handlePrint}>
                    Print
                </Button>, */}
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
