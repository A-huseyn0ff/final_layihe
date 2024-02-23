import React, { useState } from 'react';
import './All.scss';

import useCategory from '../../hooks/useCategory';

const All = () => {
    const { category } = useCategory();
    const uniquePlaceNames = [...new Set(category.map(item => item.aboutplace.placename))];
    const [selectedPlace, setSelectedPlace] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [visibleItems, setVisibleItems] = useState(12); // Initial number of visible items
    const itemsPerPage = 6; // Number of items to show per page

    const handlePlaceChange = (event) => {
        setSelectedPlace(event.target.value);
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleSeeMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + itemsPerPage);
    };

    const filteredData = category.filter(item => {
        // Filter by place if a place is selected
        if (selectedPlace && item.aboutplace.placename !== selectedPlace) {
            return false;
        }

        // Filter by date if a date is selected
        if (selectedDate) {
            // Extract the date part from the selected date
            const selectedDateOnly = new Date(selectedDate).toISOString().split('T')[0];
            // Extract the date part from the event date
            const eventDateOnly = new Date(item.time).toISOString().split('T')[0];
            // Compare the date parts
            return selectedDateOnly === eventDateOnly;
        }

        return true;
    });

    const renderSlides = () => {
        return filteredData.slice(0, visibleItems).map((item, index) => {
            const eventDate = new Date(item.time);
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            const formattedDate = eventDate.toLocaleDateString('en-US', options);
      
            return (
                <a href={`http://localhost:5173/detail/${item._id}`} key={item._id}>
                <div key={index} className='col'>
                    <div className='img'>
                        <img src={item.bgImage} className='bg'></img>
                        <img src={item.mainJPG} alt="" className='main'/>
                    </div>
                    <div className='info'>
                        <span>{formattedDate} • {item.aboutplace.placename}</span>
                    </div>
                </div>
                </a>
                 
            );
        });
    };

    return (
        <section className='all'>
            <div className='container'>
                <h2>Bütün tədbirlər</h2>
                <div className='filtersort'>
                    <select value={selectedPlace} onChange={handlePlaceChange} className='filter'>
                        <option value="">Filter by Place</option>
                        {uniquePlaceNames.map((placeName, index) => (
                            <option key={index} value={placeName}>{placeName}</option>
                        ))}
                    </select>
                    <input type="date" value={selectedDate} onChange={handleDateChange} className='filter'/>
                </div>
                <div className='row'>
                    {renderSlides()}
                </div>
                {visibleItems < filteredData.length && (
                    <div className='pagination'>
                        <span onClick={handleSeeMore}>See More</span>
                    </div>
                )}
            </div>
        </section>
    );
}

export default All;

