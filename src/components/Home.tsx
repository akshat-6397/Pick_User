import React, { useState } from 'react';
import "./Home.scss";
import Chip from './Chip';
import Modal from './Modal';
import data from "./data.json";
type DataType = {
    id: number,
    image: string, 
    name: string,
    email: string,
}

const Home = () => {
    const [modalData, setModalData] = useState<DataType[]>(data);
    const [chipData, setChipData] = useState<DataType[]>([]);
    const [lastUpdatedModalData, setLastUpdatedModalData] = useState<DataType[]>(data);
    const handleCrossClick = (item: any) => {
        setChipData(chipData?.filter((ele) => ele?.id !== item?.id));
        setModalData([...modalData, item]);
        setLastUpdatedModalData([...lastUpdatedModalData, item]);
    };
    const handleModalItemClick = (item:any) => {
        setModalData(modalData.filter((ele) => ele?.id !== item?.id));
        setChipData([...chipData, item]);
        setLastUpdatedModalData(lastUpdatedModalData?.filter((ele) => ele?.id !== item?.id));
    };
    const handleChange = (e: any) => {
        if(e.target.value.length === 0){
            setModalData(lastUpdatedModalData);
        }else{
            const filteredData = lastUpdatedModalData?.filter((item) => item?.name?.toLowerCase()?.includes(e.target.value?.toLowerCase()));
            setModalData(filteredData);
        }
    }
    return <div className='root'>
        <div className='heading'>Pick Users</div>
        <div className='container'>
            <Chip chipData={chipData} handleCrossClick={handleCrossClick}/>
            <div className='input'><input type="text" onChange={(e) => handleChange(e)} placeholder={`${chipData.length === 0? 'Type User form below': ''}`}/></div>
        </div>
     <Modal modalData={modalData} handleModalItemClick={handleModalItemClick}/>
    </div>
};

export default Home;