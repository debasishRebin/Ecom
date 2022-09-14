import React, {useState, useEffect, createContext} from 'react';
export const HomeContext = createContext();

const HomeContextProvider = props => {
  const [selectedCarouselIndex, setSelectedCarouselIndex] = useState(0);
  const [isBannerSelected, setIsBannerSelected] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <HomeContext.Provider
      value={{
        selectedCarouselIndex,
        setSelectedCarouselIndex,
        isBannerSelected,
        setIsBannerSelected,
        modalVisible,
        setModalVisible,
      }}>
      {props.children}
    </HomeContext.Provider>
  );
};
export default HomeContextProvider;
