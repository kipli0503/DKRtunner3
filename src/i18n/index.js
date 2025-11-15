import React, {createContext, useContext, useState} from 'react';
import en from './en.json';
import id from './id.json';
const I18nContext = createContext();
export function I18nProvider({children}){
  const [locale,setLocale] = useState('id');
  const dict = locale === 'id' ? id : en;
  return <I18nContext.Provider value={{t:(k)=>dict[k]||k, setLocale, locale}}>{children}</I18nContext.Provider>
}
export function useI18n(){ return useContext(I18nContext); }
