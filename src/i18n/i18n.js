import React, { createContext, useContext, useState } from 'react';
import en from './en.json';
import id from './id.json';

const LocaleContext = createContext();

export function I18nManagerProvider({children}){
  const [locale, setLocale] = useState('id');
  const dict = locale === 'id' ? id : en;

  return (
    <LocaleContext.Provider value={{t:(k)=>dict[k]||k, setLocale, locale}}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useI18n(){
  return useContext(LocaleContext);
}
