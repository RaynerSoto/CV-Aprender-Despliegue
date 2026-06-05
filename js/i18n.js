class I18n {
  constructor() {
    this.currentLang = localStorage.getItem('lang') || 'es';
    this.listeners = [];
  }

  get lang() {
    return this.currentLang;
  }

  setLang(lang) {
    if (!translations[lang]) return;
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
    this.notify();
  }

  t(path) {
    const keys = path.split('.');
    let value = translations[this.currentLang];
    for (const key of keys) {
      if (value == null) {
        value = translations['en'];
        for (const k of keys) {
          if (value == null) return path;
          value = value[k];
        }
        return value ?? path;
      }
      value = value[key];
    }
    return value ?? path;
  }

  tRaw(lang, path) {
    const keys = path.split('.');
    let value = translations[lang];
    for (const key of keys) {
      if (value == null) return path;
      value = value[key];
    }
    return value ?? path;
  }

  onChange(fn) {
    this.listeners.push(fn);
  }

  notify() {
    this.listeners.forEach(fn => fn(this.currentLang));
  }
}

const i18n = new I18n();
