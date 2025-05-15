import React, { useState } from 'react';
import { ConfigProvider } from './context/ConfigContext';
import Configurator from './components/Configurator';
import Preview from './components/Preview';
import TemplateGenerator from './components/TemplateGenerator';
import { Laptop, Smartphone, Tablet } from 'lucide-react';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [previewDevice, setPreviewDevice] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  return (
    <ConfigProvider>
      <div className="min-h-screen bg-light">
        <header className="bg-primary text-white py-3">
          <div className="container">
            <h1 className="h3 mb-0">Website Configuration System</h1>
          </div>
        </header>
        
        <div className="container-fluid py-4">
          <div className="row">
            {/* Configurator Panel */}
            <div className="col-lg-5">
              <div className="card shadow-sm mb-4">
                <div className="card-body p-0">
                  <Configurator />
                </div>
              </div>
              
              <div className="card shadow-sm">
                <div className="card-body">
                  <TemplateGenerator />
                </div>
              </div>
            </div>
            
            {/* Preview Panel */}
            <div className="col-lg-7">
              <div className="card shadow-sm mb-4">
                <div className="card-header bg-white d-flex justify-content-between align-items-center">
                  <h4 className="mb-0">Preview</h4>
                  <div className="btn-group">
                    <button 
                      className={`btn btn-outline-primary ${previewDevice === 'mobile' ? 'active' : ''}`}
                      onClick={() => setPreviewDevice('mobile')}
                      title="Mobile view"
                    >
                      <Smartphone size={18} />
                    </button>
                    <button 
                      className={`btn btn-outline-primary ${previewDevice === 'tablet' ? 'active' : ''}`}
                      onClick={() => setPreviewDevice('tablet')}
                      title="Tablet view"
                    >
                      <Tablet size={18} />
                    </button>
                    <button 
                      className={`btn btn-outline-primary ${previewDevice === 'desktop' ? 'active' : ''}`}
                      onClick={() => setPreviewDevice('desktop')}
                      title="Desktop view"
                    >
                      <Laptop size={18} />
                    </button>
                  </div>
                </div>
                <div className="card-body p-0" style={{ height: '700px', overflow: 'auto' }}>
                  <Preview deviceWidth={previewDevice} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;