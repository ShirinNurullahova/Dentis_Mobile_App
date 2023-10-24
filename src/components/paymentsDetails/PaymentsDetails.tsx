import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';

const PaymentsDetails = ({ data }: { data: any }) => {
  const [showMoreLimit, setShowMoreLimit] = useState(3);

  const toggleShowMore = () => {
    setShowMoreLimit((value) => value + 3);
  };

  return (
    <View>
      {data.map((el: any) => {
        return (
          <View key={el.title}>
            <View style={styles.addTitle}>
              <Text style={styles.add}>{el.title}</Text>
              <Text style={styles.more}>{el.buttonText}</Text>
            </View>
            {el.children.slice(0, showMoreLimit).map((e: any, index: number) => {
              return (
                <View key={index} style={styles.paymentEl}>
                  <Text style={styles.dateTime}>{e.date}</Text>
                  <View style={[styles.amountButton, el?.type === 'history' && styles.addition]}>
                    <Text
                      style={[
                        styles.amountButtonText,
                        el?.type === 'history' && styles.additionText,
                      ]}
                    >
                      {e.amount}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        );
      })}
      <TouchableOpacity onPress={toggleShowMore}>
        <View style={styles.moreButton}>
          <Text style={styles.moreButtonText}>Daha çox göstər</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addTitle: {
    display: 'flex',
    marginTop: 30,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateTime: {
    color: globalStyles.colors.black,
    fontSize: globalStyles.fontStyle.mediumTextFontSize,
    fontFamily: globalStyles.fontStyle.primary,
  },
  addition: {
    backgroundColor: '#F3EEFF',
  },
  additionText: {
    color: '#8A54E1',
  },
  amountButton: {
    backgroundColor: '#F2F7FB',
    borderRadius: 4,
    width: 90,
    paddingHorizontal: 12,
    height: 36,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  amountButtonText: {
    color: '#3676CB',
    fontSize: globalStyles.fontStyle.mediumTextFontSize,
    fontFamily: globalStyles.fontStyle.primary,
  },
  paymentEl: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomWidth: 2,
    paddingBottom: 10,
    borderBottomColor: globalStyles.colors.borderBottomColor,
  },
  add: {
    fontFamily: globalStyles.fontStyle.primary,
    fontWeight: globalStyles.fontStyle.primaryWeight,
    color: globalStyles.colors.black,
    fontSize: globalStyles.fontStyle.mediumFontSize,
  },
  more: {
    fontFamily: globalStyles.fontStyle.primary,
    fontWeight: globalStyles.fontStyle.primaryWeight,
    color: globalStyles.colors.green,
    fontSize: globalStyles.fontStyle.mediumTextFontSize,
  },
  moreButton: {
    marginBottom: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreButtonText: {
    color: globalStyles.colors.black,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.mediumTextFontSize,
  },
});

export default PaymentsDetails;
