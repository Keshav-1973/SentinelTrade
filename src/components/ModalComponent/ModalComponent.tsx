import React, {memo, useState} from 'react';
import {Modal, Pressable} from 'react-native';
import styles from './styles';
import ViewComponent from '@components/ViewComponent/ViewComponent';
import TextComponent from '@components/TextComponent/TextComponent';
import useToggle from '@hooks/useToggle';
import {ModalProps} from './utils';

const ModalCopmonent = (props: ModalProps) => {
  const {initialValue, children} = props;
  const [modalVisible, setModalVisible] = useState(initialValue);

  return (
    <ViewComponent style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <ViewComponent style={styles.centeredView}>
          <ViewComponent style={styles.modalView}>{children}</ViewComponent>
        </ViewComponent>
      </Modal>
    </ViewComponent>
  );
};
export default memo(ModalCopmonent);
