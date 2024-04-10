import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

//TO BE USED IN REDUX PERSIST
export const reduxPersistStorage = {
  setItem: (
    key: string,
    value: boolean | string | number | Uint8Array,
  ): Promise<boolean> => {
    storage.set(key, value);
    return Promise.resolve(true);
  },

  getItem: (key: string): Promise<string | undefined> => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key: string): Promise<void> => {
    storage.delete(key);
    return Promise.resolve();
  },
};

//HELPER FUNCTIONS TO BE USED THROUGHOUT APP
export const StorageMMKV = {
  setUserPreferences: (
    key: string,
    value: boolean | string | number | Uint8Array,
  ) => {
    try {
      storage.set(`${key}`, `${value}`);
    } catch (error) {
      console.error('Error setting user preferences:', error);
    }
  },

  getUserPreferences: (key: string) => {
    try {
      return storage.getString(key);
    } catch (error) {
      console.error('Error getting user preferences:', error);
      return null; // Or handle the error according to your application's logic
    }
  },

  removeItem: (key: string) => {
    try {
      storage.delete(key);
    } catch (error) {
      console.error('Error removing item:', error);
    }
  },

  clearAll: () => {
    try {
      storage.clearAll();
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  },

  //   setLoggedInByBiometric: (val) => {
  //     try {
  //       if (val) {
  //         storage.set(`${BIOMETRICS_LOGGED_IN}`, `${val}`);
  //       } else {
  //         storage.delete(BIOMETRICS_LOGGED_IN);
  //       }
  //     } catch (error) {
  //       console.error('Error setting logged in by biometric:', error);
  //     }
  //   },

  //   addRemoveDeviceToken: (val) => {
  //     try {
  //       if (val) {
  //         storage.set(`${ACCESS_TOKEN}`, `${val}`);
  //       } else {
  //         storage.delete(ACCESS_TOKEN);
  //       }
  //     } catch (error) {
  //       console.error('Error adding/removing device token:', error);
  //     }
  //   },
};
