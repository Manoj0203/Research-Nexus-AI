import { StyleSheet, Text, View,  } from 'react-native';
import React from 'react';

import AppBarPage from '../Utils/AppBarPage';
import DropPDF from '../Utils/DropPDF';

const UploadPaper = () => {
  return (
    <>
        <AppBarPage title={'Upload PDF'} />

        <DropPDF />
    </>
  )
}

export default UploadPaper

const styles = StyleSheet.create({})