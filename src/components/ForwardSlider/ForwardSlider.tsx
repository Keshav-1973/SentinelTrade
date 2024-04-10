import React, {useCallback, useState} from 'react';
import CustomButton from '@components/CustomButton';
import {BtnTypes} from '@components/CustomButton/types';
import {useWindowDimensions} from 'react-native';
import Onbooard1 from '@assets/svgs/Onboard1.svg';
import Onbooard2 from '@assets/svgs/Onboard2.svg';
import ViewComponent from '@components/ViewComponent/ViewComponent';
import TextComponent from '@components/TextComponent/TextComponent';
import LinkText from '@components/LinkText/LinkText';
import {SemanticColors, Spacings, TextVariants} from '@themes/Scales';
import {Props, SlideArray, Slides} from './types';
import styles from './styles';

const slides: Array<SlideArray> = [
  {
    id: '1',
    title: 'Welcome',
    description: 'This is the first slide',
    image: <Onbooard1 />,
  },
  {
    id: '2',
    title: 'Getting Started',
    description: 'This is the second slide',
    image: <Onbooard2 />,
  },
  {
    id: '3',
    title: 'Ready to Go',
    description: 'This is the third slide',
    image: <Onbooard1 />,
  },
  {
    id: '4',
    title: 'Ready to hshjgd',
    description: 'This is the fourth slide',
    image: <Onbooard2 />,
  },
];

const Slide = ({image, id}: Slides) => {
  const {height, width} = useWindowDimensions();
  return (
    <ViewComponent style={styles.slide} key={id}>
      <ViewComponent backgroundColor={SemanticColors.MAIN_FOREGROUND}>
        {React.cloneElement(image, {width: width, height: height * 0.5})}
      </ViewComponent>
    </ViewComponent>
  );
};

const ForwardSlider = ({onDone, onSkip}: Props) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = useCallback(() => {
    if (currentPage < slides.length - 1) {
      setCurrentPage(prev => prev + 1);
    } else {
      onDone?.();
    }
  }, [currentPage, onDone]);

  return (
    <ViewComponent
      style={styles.container}
      backgroundColor={SemanticColors.MAIN_FOREGROUND}>
      <ViewComponent style={styles.linkText}>
        <LinkText text={'Skip'} onPress={onSkip} />
      </ViewComponent>

      <Slide id={slides[currentPage].id} image={slides[currentPage].image} />

      <ViewComponent
        style={styles.bottomCard}
        backgroundColor={SemanticColors.MAIN_BACKGROUND}>
        <ViewComponent>
          <ViewComponent style={styles.pagination} paddingVertical={Spacings.L}>
            {slides.map((item, index) => (
              <ViewComponent
                marginHorizontal={Spacings.XS}
                backgroundColor={
                  index === currentPage
                    ? SemanticColors.PRIMARY_BUTTON
                    : SemanticColors.MAIN_FOREGROUND
                }
                key={item.id}
                style={[styles.dot]}
              />
            ))}
          </ViewComponent>
          <ViewComponent>
            <TextComponent
              style={styles.title}
              marginBottom={Spacings.L}
              variant={TextVariants.BannerText}>
              {slides[currentPage].title}
            </TextComponent>
            <TextComponent
              style={styles.description}
              variant={TextVariants.BannerDescription}>
              {slides[currentPage].description}
            </TextComponent>
          </ViewComponent>
        </ViewComponent>
        <ViewComponent marginBottom={Spacings.L}>
          <CustomButton
            onPress={handleNext}
            title={'Next'}
            btnType={BtnTypes.PRIMARY}
            customStyles={styles.button}
          />
        </ViewComponent>
      </ViewComponent>
    </ViewComponent>
  );
};

export default ForwardSlider;
