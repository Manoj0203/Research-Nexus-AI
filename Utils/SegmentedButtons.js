import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function SegmentedButton({
  options,
  selected,
  onChange,
}) {
  return (
    <View style={styles.container}>
      {options.map((item) => (
        <TouchableOpacity
          key={item}
          activeOpacity={0.8}
          style={[
            styles.button,
            selected === item && styles.activeButton,
          ]}
          onPress={() => onChange(item)}
        >
          <Text
            style={[
              styles.text,
              selected === item && styles.activeText,
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#160043',
    borderRadius: 15,
    padding: 4,
    height: 52,
  },

  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
  },

  activeButton: {
    backgroundColor: '#5B2DD8',
  },

  text: {
    color: '#9CA3AF',
    fontSize: 15,
    fontWeight: '600',
  },

  activeText: {
    color: '#FFFFFF',
  },
});