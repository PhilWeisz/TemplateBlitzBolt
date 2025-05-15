import React from 'react';
import { useConfig } from '../../../context/ConfigContext';
import DropdownSelect from '../../controls/DropdownSelect';

const LanguageModule: React.FC = () => {
  const { config, updateConfig } = useConfig();
  const { language } = config;

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'French' },
    { value: 'es', label: 'Spanish' },
    { value: 'de', label: 'German' },
    { value: 'it', label: 'Italian' },
    { value: 'pt', label: 'Portuguese' },
    { value: 'ja', label: 'Japanese' },
    { value: 'zh', label: 'Chinese' },
    { value: 'ar', label: 'Arabic' },
    { value: 'he', label: 'Hebrew' }
  ];

  const directionOptions = [
    { value: 'ltr', label: 'Left to Right (LTR)' },
    { value: 'rtl', label: 'Right to Left (RTL)' }
  ];

  const handleToggleFocusOutline = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateConfig('language', { showFocusOutline: e.target.checked });
  };

  const handleToggleSkipLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateConfig('language', { skipToContentLink: e.target.checked });
  };

  const handleToggleReduceMotion = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateConfig('language', { reduceMotion: e.target.checked });
  };

  return (
    <div className="module-content">
      <h4 className="mb-3">Language & Accessibility</h4>
      
      <DropdownSelect
        label="Base Language"
        value={language.baseLanguage}
        options={languageOptions}
        onChange={(value) => updateConfig('language', { baseLanguage: value })}
      />
      
      <DropdownSelect
        label="Text Direction"
        value={language.direction}
        options={directionOptions}
        onChange={(value) => updateConfig('language', { direction: value as any })}
      />
      
      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="focusOutline"
          checked={language.showFocusOutline}
          onChange={handleToggleFocusOutline}
        />
        <label className="form-check-label" htmlFor="focusOutline">
          Show Focus Outline
        </label>
      </div>
      
      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="skipToContent"
          checked={language.skipToContentLink}
          onChange={handleToggleSkipLink}
        />
        <label className="form-check-label" htmlFor="skipToContent">
          Include "Skip to Content" Link
        </label>
      </div>
      
      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="reduceMotion"
          checked={language.reduceMotion}
          onChange={handleToggleReduceMotion}
        />
        <label className="form-check-label" htmlFor="reduceMotion">
          Support Reduced Motion
        </label>
      </div>
      
      <div className="mt-4">
        <h5 className="mb-3">Language & Accessibility Preview</h5>
        <div 
          className="p-3 border rounded" 
          style={{ 
            direction: language.direction,
            padding: '1rem',
          }}
          tabIndex={0}
        >
          <div className="mb-2">
            {language.skipToContentLink && (
              <a 
                href="#content" 
                className="visually-hidden-focusable d-inline-block mb-2 p-2 bg-primary text-white rounded-sm"
                style={{ 
                  textDecoration: 'none',
                  outline: language.showFocusOutline ? undefined : 'none',
                }}
              >
                Skip to content
              </a>
            )}
          </div>
          <div style={{ fontWeight: 'bold' }}>
            {language.baseLanguage === 'en' && 'Sample text in English'}
            {language.baseLanguage === 'fr' && 'Exemple de texte en français'}
            {language.baseLanguage === 'es' && 'Texto de ejemplo en español'}
            {language.baseLanguage === 'de' && 'Beispieltext auf Deutsch'}
            {language.baseLanguage === 'it' && 'Testo di esempio in italiano'}
            {language.baseLanguage === 'pt' && 'Texto de exemplo em português'}
            {language.baseLanguage === 'ja' && 'サンプルテキスト日本語で'}
            {language.baseLanguage === 'zh' && '中文示例文本'}
            {language.baseLanguage === 'ar' && 'نص عينة باللغة العربية'}
            {language.baseLanguage === 'he' && 'טקסט לדוגמה בעברית'}
          </div>
          <p>
            <span>
              {language.baseLanguage === 'en' && 'This text demonstrates text direction and language settings.'}
              {language.baseLanguage === 'fr' && 'Ce texte démontre les paramètres de direction du texte et de langue.'}
              {language.baseLanguage === 'es' && 'Este texto demuestra la dirección del texto y la configuración del idioma.'}
              {language.baseLanguage === 'de' && 'Dieser Text demonstriert Textrichtung und Spracheinstellungen.'}
              {language.baseLanguage === 'it' && 'Questo testo dimostra la direzione del testo e le impostazioni della lingua.'}
              {language.baseLanguage === 'pt' && 'Este texto demonstra a direção do texto e as configurações de idioma.'}
              {language.baseLanguage === 'ja' && 'このテキストはテキストの方向と言語設定を示しています。'}
              {language.baseLanguage === 'zh' && '本文演示了文本方向和语言设置。'}
              {language.baseLanguage === 'ar' && 'يوضح هذا النص اتجاه النص وإعدادات اللغة.'}
              {language.baseLanguage === 'he' && 'טקסט זה מדגים כיוון טקסט והגדרות שפה.'}
            </span>
          </p>
          <button 
            className="btn btn-primary"
            style={{ 
              outline: language.showFocusOutline ? undefined : 'none',
            }}
          >
            Focus Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageModule;