import React, { useState } from 'react';
import { registerResponsible, findResponsibleByDocument } from '../api/script';

function ResponsibleForm() {
    const [responsibleData, setResponsibleData] = useState({
        responsibleName: '',
        responsibleEmail: '',
        responsiblePhone: '',
        responsibleAddress: '',
        responsibleDocument: '',
        typeDocument: '',
    });

    const [searchDocument, setSearchDocument] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [responseMessage, setResponseMessage] = useState('');

    const [token] = useState(
        'eyJ1c2VybmFtZSI6ImxpYnJhcnlkaXJlY3RvciIsImlkIjoiMSIsInJvbGUiOiJhZG1pbiIsImFsZyI6IkhTMjU2In0.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.hEb17Q5iBOA7b9eXQq5TsKVKCVzD1muk5mwp2gCyNSE'
    );

    const handleChange = (e) => {
        const { id, value } = e.target;
        setResponsibleData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSearchChange = (e) => {
        setSearchDocument(e.target.value);
    };

    const handleRegisterResponsible = async () => {
        try {
            const result = await registerResponsible(
                responsibleData.responsibleDocument,
                responsibleData.typeDocument,
                responsibleData.responsibleName,
                responsibleData.responsiblePhone,
                responsibleData.responsibleEmail,
                responsibleData.responsibleAddress
            );
            setResponseMessage(result.message);
        } catch (error) {
            setResponseMessage('An error occurred while registering the responsible.');
        }
    };

    const handleSearchResponsible = async () => {
        if (!searchDocument.trim()) {
            setResponseMessage('Please enter a valid document number.');
            return;
        }

        try {
            const result = await findResponsibleByDocument(searchDocument, token);
            setSearchResult(result);
            setResponseMessage('Responsible found successfully.');
        } catch (error) {
            setSearchResult(null);
            setResponseMessage('An error occurred while searching for the responsible.');
        }
    };

    return (
        <div>
            <h2>Register Responsible</h2>
            <form>
                <label htmlFor="responsibleName">Name:</label>
                <input type="text" id="responsibleName" value={responsibleData.responsibleName} onChange={handleChange} required /><br />

                <label htmlFor="responsibleEmail">Email:</label>
                <input type="email" id="responsibleEmail" value={responsibleData.responsibleEmail} onChange={handleChange} required /><br />

                <label htmlFor="responsiblePhone">Phone Number:</label>
                <input type="text" id="responsiblePhone" value={responsibleData.responsiblePhone} onChange={handleChange} required /><br />

                <label htmlFor="responsibleAddress">Address:</label>
                <input type="text" id="responsibleAddress" value={responsibleData.responsibleAddress} onChange={handleChange} required /><br />

                <label htmlFor="responsibleDocument">Document:</label>
                <input type="text" id="responsibleDocument" value={responsibleData.responsibleDocument} onChange={handleChange} required /><br />

                <label htmlFor="typeDocument">Type of Document:</label>
                <input type="text" id="typeDocument" value={responsibleData.typeDocument} onChange={handleChange} required /><br />

                <button type="button" onClick={handleRegisterResponsible}>Register Responsible</button>
            </form>

            <h2>Search Responsible</h2>
            <form>
                <label htmlFor="searchDocument">Document:</label>
                <input type="text" id="searchDocument" value={searchDocument} onChange={handleSearchChange} required /><br />
                <button type="button" onClick={handleSearchResponsible}>Search Responsible</button>
            </form>

            {searchResult && (
                <div>
                    <h3>Responsible Details:</h3>
                    <p><strong>Name:</strong> {searchResult.name}</p>
                    <p><strong>Email:</strong> {searchResult.email}</p>
                    <p><strong>Phone:</strong> {searchResult.phoneNumber}</p>
                    <p><strong>Address:</strong> {searchResult.address}</p>
                </div>
            )}

            <div>{responseMessage}</div>
        </div>
    );
}

export default ResponsibleForm;
