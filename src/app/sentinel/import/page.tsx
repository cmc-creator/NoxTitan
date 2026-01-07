'use client';

import { useState } from 'react';
import { Upload, FileText, Link2, CheckCircle, AlertCircle } from 'lucide-react';

export default function SentinelImportPage() {
  const [importType, setImportType] = useState<'tally' | 'googleforms' | 'csv'>('tally');
  const [tallyFormUrl, setTallyFormUrl] = useState('');
  const [googleFormId, setGoogleFormId] = useState('');
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [importing, setImporting] = useState(false);
  const [result, setResult] = useState<any>(null);

  async function handleTallyImport() {
    setImporting(true);
    try {
      const response = await fetch('/api/visitors/import/tally', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formUrl: tallyFormUrl }),
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data);
      } else {
        alert('Import failed');
      }
    } catch (error) {
      console.error('Import failed:', error);
      alert('Import failed');
    } finally {
      setImporting(false);
    }
  }

  async function handleGoogleFormsImport() {
    setImporting(true);
    try {
      const response = await fetch('/api/visitors/import/googleforms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formId: googleFormId }),
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data);
      } else {
        alert('Import failed');
      }
    } catch (error) {
      console.error('Import failed:', error);
      alert('Import failed');
    } finally {
      setImporting(false);
    }
  }

  async function handleCSVImport() {
    if (!csvFile) return;

    setImporting(true);
    const formData = new FormData();
    formData.append('file', csvFile);

    try {
      const response = await fetch('/api/visitors/import/csv', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data);
      } else {
        alert('Import failed');
      }
    } catch (error) {
      console.error('Import failed:', error);
      alert('Import failed');
    } finally {
      setImporting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
          <Upload className="w-10 h-10 text-purple-400" />
          Import Visitor Data
        </h1>
        <p className="text-slate-400 mb-8">Import from Tally, Google Forms, or CSV files</p>

        {/* Import Type Selection */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 mb-6">
          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => setImportType('tally')}
              className={`p-6 rounded-xl border-2 transition-all ${
                importType === 'tally'
                  ? 'border-purple-500 bg-purple-500/20'
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              <Link2 className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-bold mb-1">Tally Forms</h3>
              <p className="text-sm text-slate-400">Import from Tally.so</p>
            </button>

            <button
              onClick={() => setImportType('googleforms')}
              className={`p-6 rounded-xl border-2 transition-all ${
                importType === 'googleforms'
                  ? 'border-blue-500 bg-blue-500/20'
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              <FileText className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-bold mb-1">Google Forms</h3>
              <p className="text-sm text-slate-400">Import from Forms</p>
            </button>

            <button
              onClick={() => setImportType('csv')}
              className={`p-6 rounded-xl border-2 transition-all ${
                importType === 'csv'
                  ? 'border-green-500 bg-green-500/20'
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              <Upload className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-bold mb-1">CSV Upload</h3>
              <p className="text-sm text-slate-400">Upload CSV file</p>
            </button>
          </div>
        </div>

        {/* Tally Import */}
        {importType === 'tally' && (
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Import from Tally</h2>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Tally Form URL or Webhook URL
              </label>
              <input
                type="text"
                value={tallyFormUrl}
                onChange={(e) => setTallyFormUrl(e.target.value)}
                placeholder="https://tally.so/r/your-form-id"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
              />
            </div>
            <button
              onClick={handleTallyImport}
              disabled={!tallyFormUrl || importing}
              className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {importing ? 'Importing...' : 'Import from Tally'}
            </button>
          </div>
        )}

        {/* Google Forms Import */}
        {importType === 'googleforms' && (
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Import from Google Forms</h2>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Google Form ID or Spreadsheet ID
              </label>
              <input
                type="text"
                value={googleFormId}
                onChange={(e) => setGoogleFormId(e.target.value)}
                placeholder="1a2b3c4d5e6f7g8h9i0j"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              onClick={handleGoogleFormsImport}
              disabled={!googleFormId || importing}
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {importing ? 'Importing...' : 'Import from Google Forms'}
            </button>
          </div>
        )}

        {/* CSV Upload */}
        {importType === 'csv' && (
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Upload CSV File</h2>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                CSV File (firstName, lastName, email, phone, company, purpose, checkInTime)
              </label>
              <input
                type="file"
                accept=".csv"
                onChange={(e) => setCsvFile(e.target.files?.[0] || null)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-green-500"
              />
            </div>
            <button
              onClick={handleCSVImport}
              disabled={!csvFile || importing}
              className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {importing ? 'Importing...' : 'Import CSV'}
            </button>
          </div>
        )}

        {/* Import Result */}
        {result && (
          <div className="mt-6 bg-green-500/10 border border-green-500/50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <h3 className="text-xl font-bold text-white">Import Successful!</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-3xl font-bold text-green-400">{result.imported}</div>
                <div className="text-sm text-slate-400">Records Imported</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">{result.skipped || 0}</div>
                <div className="text-sm text-slate-400">Duplicates Skipped</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400">{result.errors || 0}</div>
                <div className="text-sm text-slate-400">Errors</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
