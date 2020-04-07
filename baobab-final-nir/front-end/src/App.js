import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ApartmentsDetails from './components/ApartmentsDetails';
import NoMoreApartments from './components/NoMoreApartments';
import data from './data.json';
import LikedApartments from './components/LikedApartments';

const App = () => {
  const [apartments, setApartments] = useState(data);
  const [likedApartments, setLikedApartments] = useState([]);
  const [dislikedApartments, setDislikedApartments] = useState([]);
  const activeUser = 0;

  const removedApartmentFromDataSrc = (apartmentsSource, apartmentId) =>
    apartmentsSource.filter(apartment => apartment.id !== apartmentId);

  const modifyChoices = (apartmentId, choice) => {
    const newapartments = [...apartments];
    const newLikedApartments = [...likedApartments];
    const newDislikedApartments = [...dislikedApartments];

    switch (choice) {
      case 'ADD_TO_LIKED_APARTMENTS':
        if (!apartments[activeUser].likedApartments.includes(apartmentId)) {
          newapartments[activeUser].likedApartments.push(apartmentId);
          newLikedApartments.push(data[apartmentId]);

          setLikedApartments(newLikedApartments);
          setApartments(removedApartmentFromDataSrc(apartments, apartmentId));
        }
        break;
      case 'ADD_TO_DISLIKED_APARTMENTS':
        if (!apartments[activeUser].dislikedApartments.includes(apartmentId)) {
          newapartments[activeUser].dislikedApartments.push(apartmentId);
          newDislikedApartments.push(data[apartmentId]);

          setDislikedApartments(newLikedApartments);
          setApartments(removedApartmentFromDataSrc(apartments, apartmentId));
        }
        break;
      default:
        return apartments;
    }
  };

  return (
    <div className="app">
      <Header />
      {apartments[1] ? (
        <ApartmentsDetails
          key={apartments[1].id}
          apartment={apartments[1]}
          modifyChoices={modifyChoices}
          likedApartments={LikedApartments}
        />
      ) : (
        <NoMoreApartments
          activeUserImage={apartments[activeUser].image}
          likedApartments={likedApartments}
        />
      )}
    </div>
  );
};

export default App;